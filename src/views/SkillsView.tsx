import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Code, 
  Cpu, 
  Terminal, 
  Sparkles, 
  Sliders, 
  Binary, 
  BarChart2, 
  Grid,
  Info,
  CheckCircle2
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, CartesianGrid } from 'recharts';

import { SKILLS_DATA, SkillData } from '../data/skills';

const CATEGORIES = [
  { id: 'Programming', label: 'Programming', color: 'var(--brand-blue)', icon: Terminal },
  { id: 'AI & ML Systems', label: 'AI & Machine Learning', color: 'var(--brand-green)', icon: Cpu },
  { id: 'CS Foundations', label: 'CS Foundations', color: 'var(--brand-yellow)', icon: Binary },
  { id: 'Tools & Platforms', label: 'Tools & Orch', color: 'var(--brand-blue)', icon: Sparkles },
  { id: 'Product & Design', label: 'Product & Design', color: 'var(--brand-blue)', icon: Sliders }
];

export default function SkillsView() {
  const [activeCategory, setActiveCategory] = useState<string>('Programming');
  const [hoveredSkill, setHoveredSkill] = useState<SkillData | null>(null);
  const [viewType, setViewType] = useState<'chart' | 'heatmap'>('chart');

  // Filter skills based on chosen category
  const filteredSkills = SKILLS_DATA.filter(skill => skill.category === activeCategory)
    .sort((a, b) => b.proficiency - a.proficiency);

  const getHeatmapColorClass = (proficiency: number, catId: string) => {
    // Return custom heat gradient weights
    if (proficiency >= 93) {
      if (catId === 'AI & ML Systems') return 'bg-emerald-500 text-white shadow-md shadow-emerald-500/10 border-transparent';
      if (catId === 'CS Foundations') return 'bg-amber-500 text-white shadow-md shadow-amber-500/10 border-transparent';
      return 'bg-blue-500 text-white shadow-md shadow-blue-500/10 border-transparent';
    } else if (proficiency >= 87) {
      if (catId === 'AI & ML Systems') return 'bg-emerald-400 text-white border-transparent';
      if (catId === 'CS Foundations') return 'bg-amber-400 text-white border-transparent';
      return 'bg-blue-400 text-white border-transparent';
    } else if (proficiency >= 82) {
      if (catId === 'AI & ML Systems') return 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300 border-emerald-200/40';
      if (catId === 'CS Foundations') return 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300 border-amber-200/40';
      return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border-blue-200/40';
    } else {
      if (catId === 'AI & ML Systems') return 'bg-slate-100 dark:bg-slate-800 text-slate-500 border-slate-200/50';
      if (catId === 'CS Foundations') return 'bg-slate-100 dark:bg-slate-800 text-slate-500 border-slate-200/50';
      return 'bg-slate-100 dark:bg-slate-800 text-slate-500 border-slate-200/50';
    }
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-xl shadow-xl max-w-[240px] text-left space-y-1">
          <span className="block font-secondary text-xs text-text-secondary uppercase tracking-[0.05em] font-medium leading-none">PROFICIENCY METRIC</span>
          <div className="flex justify-between items-baseline gap-4 border-b border-slate-100 dark:border-slate-700 pb-1 mb-1.5">
            <span className="font-sans font-semibold text-sm text-text-primary uppercase tracking-tight">{data.name}</span>
            <span className="font-secondary font-medium text-xs text-brand-blue">{data.proficiency}%</span>
          </div>
          <p className="text-[14px] text-text-secondary leading-[22px] font-sans font-normal">
            {data.description}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-12 py-4">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-brand-blue font-secondary text-xs font-medium uppercase tracking-[0.05em]">
            <Code className="w-3.5 h-3.5" /> COMPETENCY CORE INDEX
          </div>
          <h2 className="text-[28px] sm:text-[32px] font-display font-semibold tracking-[-0.01em] uppercase text-text-primary leading-[36px] sm:leading-[40px]">
            Engineering Capabilities
          </h2>
          <p className="text-[14px] font-secondary text-text-secondary uppercase tracking-[0.05em] font-medium">
            INTERACTIVE HEATMAPS &bull; RECHARTS ANALYZERS &bull; SYSTEM DIAGRAMS
          </p>
        </div>

        {/* Chart vs Heatmap toggle switch */}
        <div className="flex items-center bg-bg-secondary border border-slate-200 p-1 rounded-xl shadow-sm text-xs font-sans">
          <button
            onClick={() => setViewType('chart')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 cursor-pointer transition-all ${
              viewType === 'chart' 
                ? 'bg-white shadow-sm text-brand-blue font-semibold' 
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <BarChart2 className="w-4 h-4" /> Bar Chart Analyzer
          </button>
          <button
            onClick={() => setViewType('heatmap')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 cursor-pointer transition-all ${
              viewType === 'heatmap' 
                ? 'bg-white shadow-sm text-brand-blue font-semibold' 
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Grid className="w-4 h-4" /> Visual Heatmap
          </button>
        </div>
      </div>

      {/* CORE WORKSPACE WINDOW */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Category Controller Selection Grid */}
        <div className="lg:col-span-4 space-y-4">
          <span className="block font-secondary text-xs text-text-secondary uppercase tracking-[0.05em] font-medium">// FILTER SECTOR PARAMETER</span>
          <div className="flex flex-col gap-2">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full text-left py-3.5 px-4 rounded-2xl font-sans text-[15px] font-medium tracking-normal transition-all flex items-center justify-between border ${
                    activeCategory === cat.id
                      ? 'bg-white border-brand-blue text-brand-blue font-semibold shadow-sm translate-x-1 border-l-4 border-l-brand-blue'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-text-secondary hover:text-text-primary hover:border-slate-300'
                  }`}
                  style={{ minHeight: '44px' }}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${activeCategory === cat.id ? 'text-brand-blue' : 'text-slate-400'}`} />
                    {cat.label}
                  </span>
                  <span className="text-xs font-secondary opacity-50">
                    {SKILLS_DATA.filter(s => s.category === cat.id).length} units
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive detail card showing context info */}
          <div className="bg-bg-secondary border border-slate-200 rounded-3xl p-5 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-secondary text-text-primary font-medium uppercase pb-2 border-b border-slate-200">
              <Info className="w-4 h-4 text-brand-blue" /> Focused Competency Node
            </div>
            
            {hoveredSkill || filteredSkills[0] ? (
              <div className="space-y-2 text-left">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-sans font-semibold text-[20px] text-text-primary uppercase tracking-tight">
                    {hoveredSkill?.name || filteredSkills[0].name}
                  </h4>
                  <span className="font-secondary font-medium text-sm text-brand-blue">
                    {hoveredSkill?.proficiency || filteredSkills[0].proficiency}% Proficient
                  </span>
                </div>
                <p className="text-[14px] text-text-secondary leading-[22px] font-sans font-normal">
                  {hoveredSkill?.description || filteredSkills[0].description}
                </p>
                <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-bg-secondary border border-slate-200 text-xs font-secondary text-brand-green uppercase rounded-md shadow-xs font-medium">
                  <CheckCircle2 className="w-3 h-3" /> System Validated Node
                </div>
              </div>
            ) : (
              <p className="text-[14px] text-text-secondary leading-[22px] font-sans font-normal">
                Hover or select a skill token on the right to examine exact pipeline descriptions and validation indicators.
              </p>
            )}
          </div>
        </div>

        {/* Right Side: Recharts Analyzer Panel or Heatmap Grid */}
        <div className="lg:col-span-8 bg-bg-card border border-slate-200 p-6 md:p-8 rounded-3xl shadow-sm min-h-[460px] flex flex-col justify-between">
          
          {viewType === 'chart' ? (
            <div className="space-y-6 flex-grow flex flex-col justify-between h-full">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <div className="space-y-0.5 text-left">
                  <span className="block font-secondary text-xs text-brand-blue uppercase font-medium tracking-[0.05em]">// RECHARTS MULTI-VECTOR ANALYZER</span>
                  <h3 className="font-sans font-semibold text-[18px] text-text-primary uppercase tracking-tight">
                    {activeCategory} Proficiency Vector
                  </h3>
                </div>
                <span className="px-2 py-0.5 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-secondary rounded uppercase font-medium tracking-[0.05em]">
                  SCALE %
                </span>
              </div>

              {/* Responsive chart frame */}
              <div className="w-full h-[320px] relative mt-2 text-xs flex-grow font-secondary">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={filteredSkills}
                    layout="vertical"
                    margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" horizontal={false} />
                    <XAxis 
                      type="number" 
                      domain={[0, 100]} 
                      stroke="var(--text-secondary)" 
                      fontSize={10} 
                      tickLine={false} 
                      axisLine={false}
                    />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      stroke="var(--text-primary)" 
                      fontSize={11} 
                      tickLine={false}
                      axisLine={false}
                      width={100}
                      tickFormatter={(value) => value.toUpperCase()}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--border-subtle)' }} />
                    <Bar 
                      dataKey="proficiency" 
                      radius={[0, 8, 8, 0]} 
                      barSize={14}
                    >
                      {filteredSkills.map((entry, index) => {
                        // Apply dynamic shades matching theme
                        return (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={
                              activeCategory === 'Programming' ? 'var(--brand-blue)' :
                              activeCategory === 'AI & ML Systems' ? 'var(--brand-green)' :
                              activeCategory === 'CS Foundations' ? 'var(--brand-yellow)' :
                              'var(--brand-blue)'
                            }
                            onMouseEnter={() => setHoveredSkill(entry)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            className="transition-all duration-300 opacity-90 hover:opacity-100 cursor-pointer"
                          />
                        );
                      })}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="text-xs text-text-secondary text-left font-secondary uppercase bg-slate-50 dark:bg-slate-800/40 p-3 rounded-2xl flex items-center justify-between pointer-events-none select-none">
                <span>⚡ Tip: Hover over the actual bars to fetch context statements.</span>
                <span>Sorted descending</span>
              </div>
            </div>
          ) : (
            <div className="space-y-6 flex-grow flex flex-col justify-between">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <div className="space-y-0.5 text-left">
                  <span className="block font-secondary text-xs text-brand-green uppercase font-medium tracking-[0.05em]">// ALL-COMPETENCY GRADIENT HEATMAP</span>
                  <h3 className="font-sans font-semibold text-[18px] text-text-primary uppercase tracking-tight">
                    Multi-Dimensional Skills Map
                  </h3>
                </div>
                <span className="text-xs font-secondary text-text-secondary leading-none">
                  25 TOTAL ACTIVE NODES
                </span>
              </div>

              {/* Interactive Heatmap Matrix Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 my-2 flex-grow overflow-y-auto max-h-[340px] pr-2 scrollbar-thin">
                {SKILLS_DATA.map((skill) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onClick={() => {
                      setActiveCategory(skill.category);
                      setHoveredSkill(skill);
                    }}
                    className={`p-3 border rounded-2xl cursor-pointer text-left transition-all duration-200 flex flex-col justify-between h-20 ${getHeatmapColorClass(skill.proficiency, skill.category)}`}
                  >
                    <div className="flex justify-between items-start gap-1">
                      <span className="font-sans font-semibold text-sm leading-tight tracking-tight uppercase truncate">
                        {skill.name}
                      </span>
                      <span className="font-secondary text-xs font-medium shrink-0 opacity-80 bg-black/5 dark:bg-white/5 py-0.5 px-1 rounded-sm leading-none">
                        {skill.proficiency}%
                      </span>
                    </div>

                    <span className="block font-secondary text-[11px] uppercase tracking-[0.05em] opacity-70 leading-none">
                      {skill.category}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-xs text-text-secondary text-left font-secondary uppercase bg-slate-50 dark:bg-slate-800/40 p-3 rounded-2xl flex items-center justify-between select-none">
                <span className="truncate">🔥 Grid weight reflects localized scale proficiency levels.</span>
                <span className="shrink-0 font-bold text-brand-blue">Click cell to focus</span>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* CORE SPECIFICATIONS WORKSPACE BAR */}
      <div className="bg-bg-secondary border border-slate-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-md border-t-2 border-t-brand-green">
        <h3 className="font-sans font-semibold text-[20px] text-text-primary uppercase tracking-tight">
          Theoretical &amp; Analytical Standards
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2 text-left">
            <span className="block font-secondary text-xs text-text-secondary uppercase tracking-[0.05em] font-medium">Standard 01</span>
            <h4 className="font-sans text-[16px] font-semibold text-text-primary uppercase tracking-tight">Systems Flow Auditing</h4>
            <p className="font-sans text-[14px] text-text-secondary font-normal leading-[22px]">
              Conducting logical audits on corporate files using custom prompts and isolated context files, bypassing manual layout bottlenecks.
            </p>
          </div>

          <div className="space-y-2 text-left">
            <span className="block font-secondary text-xs text-text-secondary uppercase tracking-[0.05em] font-medium">Standard 02</span>
            <h4 className="font-sans text-[16px] font-semibold text-text-primary uppercase tracking-tight">EMNIST Optimization</h4>
            <p className="font-sans text-[14px] text-text-secondary font-normal leading-[22px]">
              Normalizing written inputs using spatial warping matrices as feed-forwards for convolutional node classification structures.
            </p>
          </div>

          <div className="space-y-2 text-left">
            <span className="block font-secondary text-xs text-text-secondary uppercase tracking-[0.05em] font-medium">Standard 03</span>
            <h4 className="font-sans text-[16px] font-semibold text-text-primary uppercase tracking-tight">Constraint Parsing</h4>
            <p className="font-sans text-[14px] text-text-secondary font-normal leading-[22px]">
              Deploying exact constraint satisfaction mechanics to track state parameters without causing infinite recursive overhead.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
