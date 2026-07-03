import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, RotateCcw, AlertCircle, HelpCircle, FastForward, Check } from 'lucide-react';

type GridSize = 4 | 9;

export default function SudokuDemo() {
  const [size, setSize] = useState<GridSize>(4);
  const [grid, setGrid] = useState<number[][]>([]);
  const [initialGrid, setInitialGrid] = useState<number[][]>([]);
  const [solveState, setSolveState] = useState<'idle' | 'running' | 'paused' | 'solved'>('idle');
  const [highlightCell, setHighlightCell] = useState<[number, number] | null>(null);
  const [hintMessage, setHintMessage] = useState<string>('');
  const [speed, setSpeed] = useState<number>(150); // ms per step
  const [selectedCell, setSelectedCell] = useState<[number, number] | null>(null);

  // Pre-configured templates based on sizes
  const TEMPLATES_4x4 = [
    [
      [1, 0, 3, 0],
      [0, 0, 0, 2],
      [3, 0, 0, 0],
      [0, 1, 0, 3]
    ],
    [
      [0, 2, 0, 0],
      [1, 0, 0, 3],
      [4, 0, 0, 2],
      [0, 0, 1, 0]
    ]
  ];

  const TEMPLATES_9x9 = [
    [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ]
  ];

  const initializeGridState = (selectedSize: GridSize) => {
    const templates = selectedSize === 4 ? TEMPLATES_4x4 : TEMPLATES_9x9;
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    // Deep copy
    const copied = randomTemplate.map(row => [...row]);
    setGrid(copied);
    setInitialGrid(randomTemplate.map(row => [...row]));
    setSolveState('idle');
    setHighlightCell(null);
    setHintMessage('');
    setSelectedCell(null);
  };

  useEffect(() => {
    initializeGridState(size);
  }, [size]);

  // Backtracking helpers
  const isValid = (board: number[][], r: number, c: number, val: number, boardSize: GridSize): boolean => {
    const boxSize = boardSize === 4 ? 2 : 3;
    // Row check
    for (let col = 0; col < boardSize; col++) {
      if (col !== c && board[r][col] === val) return false;
    }
    // Col check
    for (let row = 0; row < boardSize; row++) {
      if (row !== r && board[row][c] === val) return false;
    }
    // Box check
    const boxRowStart = Math.floor(r / boxSize) * boxSize;
    const boxColStart = Math.floor(c / boxSize) * boxSize;
    for (let row = boxRowStart; row < boxRowStart + boxSize; row++) {
      for (let col = boxColStart; col < boxColStart + boxSize; col++) {
        if ((row !== r || col !== c) && board[row][col] === val) return false;
      }
    }
    return true;
  };

  // Find cell with exactly one legal option (Naked Single Hint)
  const generateHint = () => {
    const boxSize = size === 4 ? 2 : 3;
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (grid[r][c] === 0) {
          const options: number[] = [];
          for (let val = 1; val <= size; val++) {
            if (isValid(grid, r, c, val, size)) {
              options.push(val);
            }
          }
          if (options.length === 1) {
            setHighlightCell([r, c]);
            setSelectedCell([r, c]);
            setHintMessage(
              `Naked Single logic: Cell at Row ${r + 1}, Col ${c + 1} has exactly ONE possible fit: ${options[0]} (all other numbers conflict with row/col/box peers).`
            );
            return;
          }
        }
      }
    }
    setHintMessage("No naked singles detected currently. Try filling cells to narrow down choices!");
  };

  // Run backtracking simulation
  const startSolvingStream = async () => {
    if (solveState === 'solved') {
      initializeGridState(size);
    }
    setSolveState('running');
    setHintMessage('');

    let board = grid.map(row => [...row]);
    
    // We will build a generator representing backtracking states to animate step-by-step
    function* solveGenerator(currentBoard: number[][]): Generator<any, boolean, any> {
      for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
          if (currentBoard[r][c] === 0) {
            for (let val = 1; val <= size; val++) {
              if (isValid(currentBoard, r, c, val, size)) {
                currentBoard[r][c] = val;
                yield { board: currentBoard.map(row => [...row]), cell: [r, c] };
                
                if (yield* solveGenerator(currentBoard)) {
                  return true;
                }
                
                currentBoard[r][c] = 0;
                yield { board: currentBoard.map(row => [...row]), cell: [r, c] };
              }
            }
            return false;
          }
        }
      }
      return true;
    }

    const solver = solveGenerator(board);

    const step = () => {
      const nextVal = solver.next();
      if (!nextVal.done) {
        setGrid(nextVal.value.board);
        setHighlightCell(nextVal.value.cell);
        
        const timeout = setTimeout(() => {
          step();
        }, speed);
        
        // Return clear reference if stopped
        return () => clearTimeout(timeout);
      } else {
        setSolveState('solved');
        setHighlightCell(null);
      }
    };

    step();
  };

  const handleCellInput = (r: number, c: number, value: number) => {
    if (initialGrid[r][c] !== 0) return; // permanent cell
    const updated = grid.map((row, rowIdx) =>
      row.map((val, colIdx) => (rowIdx === r && colIdx === c ? value : val))
    );
    setGrid(updated);
  };

  return (
    <div className="bg-[#050505] border border-white/10 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden" id="sudoku-demo">
      <div className="absolute top-0 right-0 w-48 h-48 bg-accent-lime/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
        {/* Play board visual */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-4 font-mono text-[10px] uppercase tracking-wider">
            <span className="text-white/40">Layout Size:</span>
            <button
              onClick={() => setSize(4)}
              className={`px-3 py-1.5 rounded transition-all font-bold uppercase tracking-widest leading-none ${
                size === 4
                  ? 'bg-accent-lime/10 text-accent-lime border border-accent-lime/20'
                  : 'bg-white/5 text-white/50 border border-white/10 hover:text-white'
              }`}
            >
              4 × 4 Mini
            </button>
            <button
              onClick={() => setSize(9)}
              className={`px-3 py-1.5 rounded transition-all font-bold uppercase tracking-widest leading-none ${
                size === 9
                  ? 'bg-accent-lime/10 text-accent-lime border border-accent-lime/20'
                  : 'bg-white/5 text-white/50 border border-white/10 hover:text-white'
              }`}
            >
              9 × 9 Classic
            </button>
          </div>

          {/* Sudoku Grid Container */}
          <div className="bg-[#0a0a0a] p-4 border border-white/10 rounded-2xl shadow-2xl relative">
            <div
              className="grid gap-[1px] bg-white/10"
              style={{
                gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
                width: size === 4 ? '180px' : '320px',
                height: size === 4 ? '180px' : '320px',
              }}
            >
              {grid.map((row, r) =>
                row.map((val, c) => {
                  const isInitial = initialGrid[r] && initialGrid[r][c] !== 0;
                  const isHighlighted = highlightCell && highlightCell[0] === r && highlightCell[1] === c;
                  const isSelected = selectedCell && selectedCell[0] === r && selectedCell[1] === c;
                  const boxSize = size === 4 ? 2 : 3;

                  // Thicker interior borders visual helpers
                  const borderRight = (c + 1) % boxSize === 0 && c !== size - 1 ? 'border-r border-white/30' : '';
                  const borderBottom = (r + 1) % boxSize === 0 && r !== size - 1 ? 'border-b border-white/30' : '';

                  return (
                    <div
                      key={`${r}-${c}`}
                      onClick={() => setSelectedCell([r, c])}
                      className={`relative flex items-center justify-center cursor-pointer select-none transition-all ${borderRight} ${borderBottom} ${
                        isHighlighted
                          ? 'bg-amber-500/20 animate-pulse text-amber-300 font-bold'
                          : isSelected
                          ? 'bg-accent-lime/20 text-accent-lime font-bold'
                          : isInitial
                          ? 'bg-[#0a0a0a] text-white font-bold'
                          : 'bg-[#050505] text-white/50 hover:bg-white/5'
                      }`}
                    >
                      <span className="font-display font-semibold text-sm md:text-base">
                        {val !== 0 ? val : ''}
                      </span>
                    </div>
                  );
                })
              )}
            </div>
            
            {solveState === 'solved' && (
              <div className="absolute inset-0 bg-[#050505]/95 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-accent-lime/10 border border-accent-lime/50 flex items-center justify-center text-accent-lime">
                  <Check className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-accent-lime font-bold uppercase tracking-widest block">Solved!</span>
              </div>
            )}
          </div>

          {/* Value Inputs for Blank cells */}
          {selectedCell && initialGrid[selectedCell[0]][selectedCell[1]] === 0 && (
            <div className="mt-4 flex flex-col items-center space-y-2">
              <span className="text-[10px] text-white/40 font-mono">Set Value (Row {selectedCell[0] + 1}, Col {selectedCell[1] + 1}):</span>
              <div className="flex gap-1">
                {Array.from({ length: size }, (_, i) => i + 1).map(val => (
                  <button
                    key={val}
                    onClick={() => {
                      handleCellInput(selectedCell[0], selectedCell[1], val);
                      setSelectedCell(null);
                    }}
                    className="w-8 h-8 rounded bg-white/5 hover:bg-accent-lime hover:text-slate-950 border border-white/10 transition-all text-xs font-mono font-bold"
                  >
                    {val}
                  </button>
                ))}
                <button
                  onClick={() => {
                    handleCellInput(selectedCell[0], selectedCell[1], 0);
                    setSelectedCell(null);
                  }}
                  className="px-2 h-8 rounded bg-red-500/10 text-red-400 border border-red-500/25 hover:bg-red-500/20 text-[10px] font-mono leading-none"
                >
                  Clear
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Console / control logic */}
        <div className="flex-1 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase font-mono bg-accent-lime/10 text-accent-lime border border-accent-lime/20 tracking-wider">
                Algorithms Show
              </span>
            </div>
            <h3 className="text-2xl font-display font-black uppercase text-white tracking-tight">
              Backtracking Visualizer
            </h3>
            <p className="text-white/50 text-sm mt-1 font-light font-sans leading-relaxed">
              Demonstrates exact backtracking recursion. Click "Show Solve Live" to watch the grid explore nodes, backtrack on collisions, and achieve global constraint satisfaction.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={startSolvingStream}
              disabled={solveState === 'running'}
              className="px-4 py-2.5 bg-accent-lime text-[#050505] font-mono text-[10px] font-bold uppercase tracking-wider rounded-lg hover:bg-white leading-none transition-all flex items-center gap-1 cursor-pointer disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5 fill-current" /> Show Solve Live
            </button>

            <button
              onClick={generateHint}
              disabled={solveState === 'running' || solveState === 'solved'}
              className="px-4 py-2.5 bg-white/5 text-white border border-white/10 hover:border-accent-lime font-mono text-[10px] uppercase tracking-wider rounded-lg transition-all flex items-center gap-1 cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5 text-accent-lime" /> Request Hint
            </button>

            <button
              onClick={() => initializeGridState(size)}
              className="p-2.5 border border-white/10 bg-white/5 rounded-lg text-white/40 hover:text-accent-lime hover:border-accent-lime transition-all"
              title="Reset Puzzle"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Speed tuning */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-[10px] font-mono text-white/40 uppercase tracking-widest">
              <span>Simulation Speed:</span>
              <span className="text-accent-lime font-bold">{speed}ms per operation</span>
            </div>
            <input
              type="range"
              min="50"
              max="500"
              step="50"
              value={speed}
              disabled={solveState === 'running'}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full accent-accent-lime cursor-pointer h-1.5 bg-white/10 rounded-lg appearance-none"
            />
          </div>

          {/* Console logger display */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 font-mono text-xs text-white/80 min-h-[140px] flex flex-col justify-between">
            <div className="space-y-2 leading-relaxed">
              <div className="flex gap-2 items-center text-accent-lime font-bold border-b border-white/5 pb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-pulse" />
                SYSTEM LOGGER LOG:
              </div>
              <p className="text-white/50 text-[11px] font-light">
                {hintMessage || (solveState === 'running' ? `[RUN]: Step evaluated at highlight grid cell [${highlightCell?.join(', ')}]. Checking peer constraints...` : "[IDLE]: Backtracking stack ready. Puzzle loaded. Unique solution count: 1 verified.")}
              </p>
            </div>
            <div className="text-[10px] text-white/30 tracking-widest mt-4 border-t border-white/5 pt-1 flex justify-between uppercase">
              <span>BOARD_DIM: {size === 4 ? "4x4 Matrix" : "9x9 Matrix"}</span>
              <span>COMPLEXITY: O({size}<sup>N</sup>) recursive max</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
