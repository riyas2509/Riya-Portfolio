import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, AlertTriangle, Lightbulb, Compass, Search, Target, ShieldCheck, ChevronRight } from 'lucide-react';
import * as d3 from 'd3';

import { CASES_DATA, IndustryCase } from '../data/research';

interface BubbleNode extends d3.SimulationNodeDatum {
  id: number;
  label: string;
  sector: string;
  impactScore: number;
  radius: number;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

const getShortLabel = (sector: string): string => {
  if (sector.includes('Gems')) return 'Gems & Jewel';
  if (sector.includes('Edible')) return 'Solvent Oils';
  if (sector.includes('Power')) return 'Power Energy';
  if (sector.includes('Oil')) return 'Oil & Gas';
  if (sector.includes('Minerals')) return 'Mining Ores';
  if (sector.includes('Ceramics')) return 'Ceramics';
  if (sector.includes('Infrastructure')) return 'Infra-Estates';
  if (sector.includes('Agro')) return 'AgroChem';
  return sector;
};

export default function IndustryResearchDemo() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const activeCase = CASES_DATA[selectedIdx];

  const svgRef = useRef<SVGSVGElement>(null);
  const simulationRef = useRef<d3.Simulation<BubbleNode, undefined> | null>(null);
  const nodesRef = useRef<BubbleNode[]>([]);

  // Initialize nodes only once to avoid visual resets
  if (nodesRef.current.length === 0) {
    nodesRef.current = CASES_DATA.map((c, idx) => {
      const radius = 42 + (c.impactScore - 82) * 1.2; // Radii styled beautifully
      return {
        id: idx,
        label: getShortLabel(c.sector),
        sector: c.sector,
        impactScore: c.impactScore,
        radius,
        x: 170 + (Math.random() - 0.5) * 80,
        y: 150 + (Math.random() - 0.5) * 80
      };
    });
  }

  // D3 force simulation setup
  useEffect(() => {
    if (!svgRef.current) return;

    const width = 340;
    const height = 300;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // clear contents before repaint

    // High fidelity center glow filter
    const defs = svg.append('defs');
    const filter = defs.append('filter')
      .attr('id', 'glow-highlight')
      .attr('x', '-30%')
      .attr('y', '-30%')
      .attr('width', '160%')
      .attr('height', '160%');
    
    filter.append('feGaussianBlur')
      .attr('stdDeviation', '4')
      .attr('result', 'blur');
    filter.append('feComposite')
      .attr('in', 'SourceGraphic')
      .attr('in2', 'blur')
      .attr('operator', 'over');

    const nodes = nodesRef.current;

    const simulation = d3.forceSimulation<BubbleNode>(nodes)
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('charge', d3.forceManyBody().strength(-120))
      .force('collide', d3.forceCollide<BubbleNode>().radius(d => d.radius + 6).iterations(3))
      .force('bounds', () => {
        nodes.forEach(node => {
          const padding = node.radius + 6;
          if (node.x !== undefined) {
            node.x = Math.max(padding, Math.min(width - padding, node.x));
          }
          if (node.y !== undefined) {
            node.y = Math.max(padding, Math.min(height - padding, node.y));
          }
        });
      });

    simulationRef.current = simulation;

    // Define drag behaviors
    const dragBehavior = d3.drag<SVGGElement, BubbleNode>()
      .on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.2).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on('drag', (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });

    const nodeG = svg.append('g')
      .selectAll('g')
      .data(nodes)
      .enter()
      .append('g')
      .attr('class', 'bubble-element')
      .style('cursor', 'grab')
      .call(dragBehavior as any)
      .on('click', (event, d: any) => {
        setSelectedIdx(d.id);
      });

    // Outer Circle for bubble using Google accents style
    nodeG.append('circle')
      .attr('r', (d: any) => d.radius)
      .attr('stroke', (d: any) => d.id === selectedIdx ? '#4285F4' : '#E5E7EB')
      .attr('stroke-width', (d: any) => d.id === selectedIdx ? '2.5' : '1')
      .attr('fill', (d: any) => d.id === selectedIdx ? 'rgba(66, 133, 244, 0.05)' : '#FFFFFF')
      .style('filter', (d: any) => d.id === selectedIdx ? 'url(#glow-highlight)' : 'none')
      .style('transition', 'fill 0.3s, stroke 0.3s, stroke-width 0.3s');

    // Title label inside bubble
    nodeG.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '-0.15em')
      .style('font-family', 'var(--font-mono)')
      .style('font-size', '8.5px')
      .style('font-weight', (d: any) => d.id === selectedIdx ? '700' : '500')
      .style('fill', (d: any) => d.id === selectedIdx ? '#4285F4' : '#111827')
      .style('pointer-events', 'none')
      .text((d: any) => d.label);

    // Score indicator beneath title
    nodeG.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '1.15em')
      .style('font-family', 'var(--font-mono)')
      .style('font-size', '7.5px')
      .style('fill', (d: any) => d.id === selectedIdx ? '#34A853' : '#6B7280')
      .style('pointer-events', 'none')
      .text((d: any) => `ROI: ${d.impactScore}%`);

    simulation.on('tick', () => {
      nodeG.attr('transform', (d: any) => `translate(${d.x}, ${d.y})`);
    });

    return () => {
      simulation.stop();
    };
  }, [selectedIdx]);

  return (
    <div className="bg-white text-text-primary p-6 md:p-8 relative overflow-hidden" id="research-demo">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Industry Selection Column */}
        <div className="lg:w-5/12 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-block px-2.5 py-0.5 bg-brand-blue/10 text-brand-blue border border-brand-blue/20 text-[8px] font-mono rounded-full uppercase tracking-widest font-bold">
                Strategic Intelligence
              </span>
              <span className="text-[8px] font-mono text-text-secondary uppercase tracking-widest flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                D3.js Physics Sandbox
              </span>
            </div>
            <h3 className="text-xl font-sans font-black uppercase text-text-primary tracking-tight">AI Workflows Research Map</h3>
            <p className="text-xs text-text-secondary mt-1 font-light leading-relaxed">
              Interact with the D3 simulation nodes or use the tactical hotkeys to audit process models, value chains, and engineered integration solutions.
            </p>
          </div>

          {/* D3.js interactive canvas visualizer boundary */}
          <div className="relative border border-slate-200 rounded-3xl bg-bg-secondary p-2 overflow-hidden flex flex-col items-center shadow-inner">
            <svg
              ref={svgRef}
              width="340"
              height="300"
              className="max-w-full overflow-visible select-none"
            />
            {/* Simulation feedback tag */}
            <div className="absolute top-3 left-4 flex items-center gap-1.5 text-[8px] font-mono text-text-secondary uppercase tracking-wider">
              <span className="w-1 h-1 rounded-full bg-brand-blue animate-ping" />
              Solver: Converged
            </div>
          </div>

          {/* Supplementary Quick Accessibility Tags */}
          <div className="space-y-2">
            <span className="block text-[8px] font-mono text-text-secondary uppercase font-bold tracking-widest">// SECTOR SELECTION HOTKEYS</span>
            <div className="grid grid-cols-2 gap-1.5">
              {CASES_DATA.map((c, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedIdx(idx)}
                  className={`text-left px-2 py-1.5 rounded-lg border text-[9px] font-mono transition-all truncate leading-none capitalize cursor-pointer font-bold ${
                    selectedIdx === idx
                      ? 'bg-brand-blue/10 border-brand-blue text-brand-blue'
                      : 'bg-white border-slate-200 text-text-secondary hover:border-brand-blue hover:text-brand-blue shadow-sm'
                  }`}
                >
                  &middot; {getShortLabel(c.sector)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Audit Details Panel - McKinsey / BCG Format */}
        <div className="lg:w-7/12 flex flex-col justify-between bg-bg-secondary border border-slate-200 rounded-3xl p-5 md:p-6 min-h-[480px]">
          <div className="space-y-6">
            
            {/* Header subtopic */}
            <div className="flex justify-between items-start border-b border-slate-200 pb-3 gap-4">
              <div>
                <h4 className="font-sans font-extrabold uppercase text-base text-text-primary tracking-tight leading-tight">{activeCase.sector}</h4>
                <p className="text-[10px] text-brand-blue font-mono uppercase tracking-widest font-bold mt-1.5">{activeCase.subtopic}</p>
              </div>
              <div className="text-right shrink-0">
                <span className="block text-[8px] font-mono text-text-secondary uppercase tracking-wider">Strategic Priority</span>
                <span className="text-sm font-mono font-black text-brand-blue">ROI: {activeCase.impactScore}%</span>
              </div>
            </div>

            {/* Workflow Map */}
            <div>
              <span className="block text-[8px] font-mono text-text-secondary font-bold uppercase mb-2 flex items-center gap-1.5 tracking-wider">
                <Compass className="w-3.5 h-3.5 text-brand-blue" /> Value-Chain Topology Mapping
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                {activeCase.workflowChain.map((node, i) => (
                  <div key={i} className="relative">
                    <div className="bg-white border border-slate-200 p-2.5 rounded-xl text-center flex flex-col justify-center min-h-[56px] shadow-xs">
                      <span className="block text-[8px] font-mono text-brand-blue leading-none mb-1 font-bold">0{i+1}</span>
                      <span className="text-[9px] text-text-primary font-medium leading-tight line-clamp-2" title={node}>{node}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Intervention Spot */}
            <div className="bg-white border border-brand-blue/20 rounded-2xl p-4 space-y-1 shadow-sm">
              <span className="text-[9px] font-mono text-brand-blue font-bold uppercase flex items-center gap-1.5 tracking-wider">
                <Lightbulb className="w-3.5 h-3.5 text-brand-yellow" /> AI Opportunity Intervention
              </span>
              <p className="text-xs text-text-primary leading-relaxed font-sans font-light mt-1">
                {activeCase.innovationSpotlight}
              </p>
            </div>

            {/* Prompt template sandbox */}
            {activeCase.promptExample && (
              <div className="space-y-1.5">
                <span className="block text-[8px] font-mono text-text-secondary font-bold uppercase flex items-center gap-1.5 tracking-wider">
                  <Search className="w-3.5 h-3.5 text-brand-blue" /> Google AI Studio Pipeline Testbed
                </span>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 font-mono text-[9px] text-brand-blue leading-relaxed overflow-x-auto whitespace-pre-wrap font-light shadow-inner">
                  {activeCase.promptExample}
                </div>
              </div>
            )}

            {/* Key Challenges / Hazards */}
            {activeCase.adoptionHazards && (
              <div className="space-y-2 bg-white border border-brand-red/20 rounded-2xl p-4 shadow-sm">
                <span className="text-[9px] font-mono text-brand-red font-bold uppercase flex items-center gap-1.5 tracking-wider">
                  <AlertTriangle className="w-3.5 h-3.5" /> High-Risk Barriers & Adoption Constraints
                </span>
                <ul className="list-disc pl-4 space-y-1 text-xs text-text-secondary font-light font-sans leading-relaxed">
                  {activeCase.adoptionHazards.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Strategic ROI bottom */}
          {activeCase.strategicROI && (
            <div className="pt-4 mt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-xs">
              <span className="text-[8px] font-mono text-text-secondary uppercase tracking-widest flex items-center gap-1.5 font-bold">
                <TrendingUp className="w-3.5 h-3.5 text-brand-green" /> Deployment Return on Investment:
              </span>
              <span className="font-sans text-[11px] font-bold text-brand-green sm:text-right max-w-sm">
                {activeCase.strategicROI}
              </span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
