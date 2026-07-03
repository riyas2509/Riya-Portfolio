import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowDown, ArrowUp, Shuffle, ShieldCheck } from 'lucide-react';

export default function DsaVisualizerDemo() {
  const [structure, setStructure] = useState<'stack' | 'queue'>('stack');
  const [items, setItems] = useState<number[]>([42, 17, 88]);
  const [inputValue, setInputValue] = useState<string>('');
  const [log, setLog] = useState<string>('Visualizer initiated. Stack pointer established.');

  const handlePush = () => {
    const val = parseInt(inputValue, 10);
    if (isNaN(val)) return;
    if (items.length >= 6) {
      setLog('Buffer overflow alert: Max size limit of 6 nodes reached to maintain monitor layout.');
      return;
    }

    if (structure === 'stack') {
      setItems([...items, val]);
      setLog(`PUSH ${val} onto core program stack. SP shifted (0x00${Math.floor(Math.random()*900) + 100}).`);
    } else {
      setItems([...items, val]);
      setLog(`ENQUEUE ${val} into queue buffer. Tail pointer advanced.`);
    }
    setInputValue('');
  };

  const handlePop = () => {
    if (items.length === 0) {
      setLog('Buffer underflow alert: Stack/Queue contains zero active nodes.');
      return;
    }

    const removed = structure === 'stack' ? items[items.length - 1] : items[0];
    
    if (structure === 'stack') {
      const updated = items.slice(0, -1);
      setItems(updated);
      setLog(`POP ${removed} off the stack. Stack Pointer retrograded.`);
    } else {
      const updated = items.slice(1);
      setItems(updated);
      setLog(`DEQUEUE ${removed} from front buffer. Head pointer shifted.`);
    }
  };

  const loadRandom = () => {
    setItems(Array.from({ length: 4 }, () => Math.floor(Math.random() * 90) + 10));
    setLog('Randomized memory segments initialized.');
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden" id="dsa-demo">
      <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Memory diagram */}
        <div className="flex-1 flex flex-col items-center justify-center bg-slate-950 p-6 border border-slate-850 rounded-2xl relative min-h-[300px]">
          <div className="absolute top-3 left-4 font-mono text-[10px] text-slate-500 flex items-center gap-1.5 uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" /> Virtual Memory Addressing
          </div>

          <div className="w-full flex justify-center items-center h-full mt-4">
            <AnimatePresence mode="popLayout">
              {structure === 'stack' ? (
                // Stack Layout: elements stack vertically, top on top
                <div className="flex flex-col-reverse justify-center space-y-reverse space-y-2 w-full max-w-[200px]">
                  {items.map((it, idx) => {
                    const isTop = idx === items.length - 1;
                    return (
                      <motion.div
                        key={`${idx}-${it}`}
                        layoutId={`node-${idx}-${it}`}
                        initial={{ opacity: 0, scale: 0.8, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className={`border rounded-xl p-3 text-center transition-all ${
                          isTop
                            ? 'bg-teal-500/15 border-teal-500 text-teal-300 shadow-lg shadow-teal-500/10'
                            : 'bg-slate-900 border-slate-800 text-slate-300'
                        }`}
                      >
                        <span className="font-mono text-[10px] block text-slate-500">
                          Address: [0x00F{idx * 4}] {isTop && '(TOS)'}
                        </span>
                        <span className="font-display font-bold text-base block">{it}</span>
                      </motion.div>
                    );
                  })}
                  {items.length === 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} className="text-center text-xs font-mono text-slate-500 py-10">
                      NULL ADDRESS PIN
                    </motion.div>
                  )}
                </div>
              ) : (
                // Queue Layout: elements horizontal, front to back
                <div className="flex flex-row justify-center items-center gap-2 flex-wrap w-full">
                  {items.map((it, idx) => {
                    const isFront = idx === 0;
                    const isTail = idx === items.length - 1;
                    return (
                      <motion.div
                        key={`${idx}-${it}`}
                        layoutId={`node-${idx}-${it}`}
                        initial={{ opacity: 0, scale: 0.8, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: -20 }}
                        className={`border rounded-xl p-3 text-center min-w-[70px] ${
                          isFront
                            ? 'bg-indigo-500/15 border-indigo-500 text-indigo-300 shadow-lg shadow-indigo-500/10'
                            : isTail
                            ? 'bg-teal-500/15 border-teal-500/50 text-teal-300'
                            : 'bg-slate-900 border-slate-800 text-slate-300'
                        }`}
                      >
                        <span className="font-mono text-[8px] block text-slate-500">
                          {isFront && 'FRONT'} {isTail && 'TAIL'} {!isFront && !isTail && 'MID'}
                        </span>
                        <span className="font-display font-bold text-sm block">{it}</span>
                        <span className="block text-[8px] font-mono text-slate-600 mt-1">Ptr: 0x21{idx*2}</span>
                      </motion.div>
                    );
                  })}
                  {items.length === 0 && (
                    <div className="text-center text-xs font-mono text-slate-500 py-10">
                      TEMP BUFFER FREE
                    </div>
                  )}
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Console / Controllers */}
        <div className="flex-1 flex flex-col justify-between space-y-6">
          <div>
            <span className="inline-block px-3 py-1 bg-teal-500/10 text-teal-300 border border-teal-500/20 text-xs font-mono rounded-full uppercase tracking-widest mb-2">
              Memory Visualizer
            </span>
            <h3 className="text-2xl font-display font-semibold text-white tracking-tight">Pointer Sandbox</h3>
            <p className="text-slate-400 text-sm mt-1">
              Test primitive C++ stack and queue operations. View how memory offsets alter pointer addresses, mimicking terminal debug output.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs mb-2">
            <span className="text-slate-500">Type:</span>
            <button
              onClick={() => {
                setStructure('stack');
                setLog('Switched program mapping to STACK structure. Pointer points to top element Address.');
              }}
              className={`px-3 py-1 rounded-md border transition-all ${
                structure === 'stack'
                  ? 'bg-teal-500/20 border-teal-500/35 text-teal-300'
                  : 'bg-slate-850 border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              LIFO Stack
            </button>
            <button
              onClick={() => {
                setStructure('queue');
                setLog('Switched program mapping to QUEUE. Advanced using Head and Tail linked indices.');
              }}
              className={`px-3 py-1 rounded-md border transition-all ${
                structure === 'queue'
                  ? 'bg-teal-500/20 border-teal-500/35 text-teal-300'
                  : 'bg-slate-850 border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              FIFO Queue
            </button>
          </div>

          {/* Value setters */}
          <div className="space-y-3">
            <div className="flex gap-2">
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Integer node (e.g., 42)"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handlePush();
                }}
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-500"
              />
              <button
                onClick={handlePush}
                className="px-4 py-2 bg-teal-500 text-slate-950 hover:bg-teal-400 rounded-xl text-xs font-mono font-bold leading-none cursor-pointer flex items-center gap-1"
              >
                <ArrowUp className="w-3.5 h-3.5" /> Push / Enqueue
              </button>
            </div>
            
            <div className="flex gap-2 text-xs">
              <button
                onClick={handlePop}
                disabled={items.length === 0}
                className="flex-1 px-4 py-2 bg-slate-800 hover:bg-slate-750 disabled:opacity-50 text-slate-300 rounded-xl font-mono text-[10px] leading-none cursor-pointer flex items-center justify-center gap-1 border border-slate-700"
              >
                <ArrowDown className="w-3.5 h-3.5" /> Pop / Dequeue
              </button>
              <button
                onClick={loadRandom}
                className="p-2 bg-slate-800 hover:bg-slate-750 text-slate-300 rounded-xl font-mono text-[10px]"
                title="Random allocation"
              >
                <Shuffle className="w-4 h-4 text-indigo-400" />
              </button>
            </div>
          </div>

          {/* Simulated Debug Logging Terminal */}
          <div className="bg-slate-950 border border-slate-850 rounded-2xl p-4 font-mono text-[11px] text-slate-300 min-h-[90px] flex flex-col justify-between">
            <div>
              <span className="block text-emerald-400 font-bold mb-1 uppercase tracking-wider">&gt;&gt; Terminal Shell:</span>
              <p className="text-slate-400">{log}</p>
            </div>
            <div className="flex justify-between text-[9px] text-slate-600 border-t border-slate-900 mt-2 pt-1">
              <span>BUF_SIZE: {items.length}/6</span>
              <span>HEAP: 0x01FAC880</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
