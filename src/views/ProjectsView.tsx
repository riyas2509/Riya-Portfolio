import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bookmark, 
  Search, 
  Zap, 
  ChevronRight, 
  Info, 
  Terminal, 
  ArrowUpRight,
  Code
} from 'lucide-react';
import { PROJECTS } from '../data/projects';

// Import Sandbox Demo modules
import EchoNoteDemo from '../components/EchoNoteDemo';
import SudokuDemo from '../components/SudokuDemo';
import OcrCnnDemo from '../components/OcrCnnDemo';
import IndustryResearchDemo from '../components/IndustryResearchDemo';
import DsaVisualizerDemo from '../components/DsaVisualizerDemo';
import StockPredictorDemo from '../components/StockPredictorDemo';

interface ProjectsViewProps {
  initialSandboxId?: string;
}

const CATEGORIES = [
  {
    name: 'AI Products',
    description: 'Practical applications and prototypes integrating advanced AI language models into high-utility digital workflows.'
  },
  {
    name: 'Research & Innovation',
    description: 'Exploratory sector mapping, workflow diagnostic briefs, and technical feasibility studies conducted for industry organizations.'
  },
  {
    name: 'Machine Learning',
    description: 'Interactive models, statistical learning pipelines, and visualizers mapping tensor layers and time-series trends.'
  },
  {
    name: 'Software Engineering',
    description: 'Algorithms, recursive solver engines, and web utilities engineered with efficient logic and strict constraints.'
  },
  {
    name: 'UI/UX & Product Design',
    description: 'Passenger-centric prototypes, mobile interface case studies, and responsive design systems prioritizing user ergonomics.'
  }
] as const;

type CategoryName = typeof CATEGORIES[number]['name'];

export default function ProjectsView({ initialSandboxId = 'echonote' }: ProjectsViewProps) {
  const [filter, setFilter] = useState<'All' | CategoryName>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSandbox, setActiveSandbox] = useState<string>(initialSandboxId);
  const sandboxRef = useRef<HTMLDivElement>(null);

  // Sync sandbox selection from outside when changed
  useEffect(() => {
    if (initialSandboxId) {
      setActiveSandbox(initialSandboxId);
    }
  }, [initialSandboxId]);

  const matchesSearch = (p: typeof PROJECTS[number], query: string) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.challenge.toLowerCase().includes(q) ||
      p.approach.toLowerCase().includes(q) ||
      p.outcome.toLowerCase().includes(q) ||
      p.keyLearning.toLowerCase().includes(q) ||
      p.techStack.some((tech) => tech.toLowerCase().includes(q))
    );
  };

  const launchSandbox = (sandboxId: string) => {
    setActiveSandbox(sandboxId);
    sandboxRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const activeCategories = CATEGORIES.filter((cat) => filter === 'All' || cat.name === filter);

  // Check if there are any projects matching search query in at least one visible category
  const hasMatches = PROJECTS.some((p) => matchesSearch(p, searchQuery) && (filter === 'All' || p.category === filter));

  return (
    <div className="space-y-16 py-4">
      {/* 1. PORTFOLIO SHOWCASE GALLERY */}
      <section className="space-y-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-brand-blue font-secondary text-xs font-medium uppercase tracking-[0.05em]">
              <Bookmark className="w-3.5 h-3.5" /> CODE &amp; CONSTRAINTS SHOWCASE
            </div>
            <h2 className="text-[28px] sm:text-[32px] font-display font-semibold tracking-[-0.01em] uppercase text-text-primary leading-[36px] sm:leading-[40px]">
              Project Showcase Matrix
            </h2>
            <p className="text-xs font-secondary text-text-secondary uppercase tracking-[0.05em] font-medium leading-relaxed">
              EXPLORING PRACTICAL AI &bull; LOW-LATENCY C/C++ ALGORITHMS &bull; ERGONOMIC FRONTENDS
            </p>
          </div>

          {/* Search + Category Filter Action Bar */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center w-full lg:w-auto">
            {/* Search inputs bar */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Query by title, tech..."
                className="w-full pl-9 pr-8 py-2 bg-bg-card border border-slate-200 rounded-xl text-xs font-secondary text-text-primary placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/15 transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-secondary hover:text-brand-blue text-text-secondary cursor-pointer"
                >
                  ×
                </button>
              )}
            </div>

            {/* Filter segments nodes */}
            <div className="flex flex-wrap gap-1 text-xs font-secondary bg-bg-secondary p-1 rounded-xl border border-slate-200 shadow-sm font-medium">
              {([
                'All',
                'AI Products',
                'Research & Innovation',
                'Machine Learning',
                'Software Engineering',
                'UI/UX & Product Design'
              ] as const).map((catName) => (
                <button
                  key={catName}
                  onClick={() => setFilter(catName)}
                  className={`px-3 py-1.5 rounded-lg transition-all font-semibold uppercase cursor-pointer select-none leading-none ${
                    filter === catName
                      ? 'bg-brand-blue text-white font-semibold shadow-sm'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {catName}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Categories and Projects Container */}
        <div className="space-y-12">
          {!hasMatches ? (
            <div className="py-16 text-center border border-dashed border-slate-200 rounded-3xl bg-bg-secondary/40">
              <Search className="w-8 h-8 text-text-secondary opacity-35 mx-auto mb-3" />
              <p className="font-secondary text-xs text-text-secondary uppercase tracking-[0.05em] font-medium">No matching projects found</p>
              <p className="font-sans text-xs text-zinc-600 mt-1">Try resetting search keywords or filters</p>
            </div>
          ) : (
            activeCategories.map((cat) => {
              const categoryProjects = PROJECTS.filter((p) => p.category === cat.name && matchesSearch(p, searchQuery));
              if (categoryProjects.length === 0) return null;

              return (
                <div key={cat.name} className="space-y-6">
                  {/* Category Section Header */}
                  <div className={`space-y-1 border-l-4 ${
                    cat.name === 'AI Products' ? 'border-brand-violet' :
                    cat.name === 'Research & Innovation' ? 'border-brand-lavender' :
                    cat.name === 'Machine Learning' ? 'border-brand-sky-blue' :
                    cat.name === 'Software Engineering' ? 'border-brand-blue' :
                    'border-brand-coral'
                  } pl-4 py-1`}>
                    <h3 className="text-[20px] font-sans font-semibold uppercase text-text-primary tracking-tight">
                      {cat.name}
                    </h3>
                    <p className="font-sans text-[14px] text-text-secondary">
                      {cat.description}
                    </p>
                  </div>

                  {/* Category Projects Grid */}
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {categoryProjects.map((p) => {
                      const isInteractive = !!p.interactiveDemoId;
                      const statusStyles = {
                        Live: 'bg-brand-green/10 text-brand-green border-brand-green/20',
                        Prototype: 'bg-brand-violet/10 text-brand-violet border-brand-violet/20',
                        Research: 'bg-brand-lavender/10 text-brand-lavender border-brand-lavender/20',
                        'Academic Project': 'bg-brand-amber/10 text-brand-amber border-brand-amber/20',
                        'In Progress': 'bg-brand-yellow/10 text-brand-yellow border-brand-yellow/20'
                      }[p.status];

                      const hoverBorderClass = {
                        'AI Products': 'hover:border-brand-violet/40',
                        'Research & Innovation': 'hover:border-brand-lavender/40',
                        'Machine Learning': 'hover:border-brand-sky-blue/40',
                        'Software Engineering': 'hover:border-brand-blue/40',
                        'UI/UX & Product Design': 'hover:border-brand-coral/40'
                      }[cat.name] || 'hover:border-brand-blue/40';

                      const textThemeClass = {
                        'AI Products': 'group-hover:text-brand-violet text-brand-violet',
                        'Research & Innovation': 'group-hover:text-brand-lavender text-brand-lavender',
                        'Machine Learning': 'group-hover:text-brand-sky-blue text-brand-sky-blue',
                        'Software Engineering': 'group-hover:text-brand-blue text-brand-blue',
                        'UI/UX & Product Design': 'group-hover:text-brand-coral text-brand-coral'
                      }[cat.name] || 'group-hover:text-brand-blue text-brand-blue';

                      return (
                        <div
                          key={p.id}
                          className={`bg-bg-card border border-slate-200/50 rounded-3xl p-6 shadow-xs hover:shadow-md ${hoverBorderClass} transition-all flex flex-col justify-between group relative overflow-hidden`}
                        >
                          <div className="space-y-5">
                            {/* Card Header */}
                            <div className="flex justify-between items-start gap-2">
                              <div className="space-y-1">
                                <h4 className={`font-sans font-semibold uppercase text-[18px] text-text-primary tracking-tight leading-none ${textThemeClass.split(' ')[0]} transition-colors flex items-center gap-1.5`}>
                                  {p.title}
                                </h4>
                                <p className={`text-xs ${textThemeClass.split(' ')[1]} font-secondary font-medium`}>
                                  {p.subtitle}
                                </p>
                              </div>
                              <span className={`px-2.5 py-0.5 border border-slate-200/50 rounded-md text-xs font-secondary font-medium uppercase tracking-[0.05em] flex items-center gap-1 whitespace-nowrap shadow-xs ${statusStyles}`}>
                                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                                {p.status}
                              </span>
                            </div>

                            {/* Brief Description */}
                            <p className="font-sans text-[14px] text-text-secondary leading-[22px] italic">
                              {p.description}
                            </p>

                            {/* Storyteller Breakdown Panel */}
                            <div className="space-y-4 bg-bg-secondary/50 p-5 rounded-2xl border border-slate-200/60 font-sans text-xs">
                              {/* Challenge */}
                              <div className="border-l-2 border-brand-coral/30 pl-3 space-y-0.5">
                                <span className="block text-xs font-secondary font-medium text-brand-coral uppercase tracking-[0.05em]">
                                  Challenge
                                </span>
                                <p className="font-sans text-text-secondary leading-relaxed">
                                  {p.challenge}
                                </p>
                              </div>

                              {/* Approach */}
                              <div className="border-l-2 border-brand-blue/30 pl-3 space-y-0.5">
                                <span className="block text-xs font-secondary font-medium text-brand-blue uppercase tracking-[0.05em]">
                                  Approach
                                </span>
                                <p className="font-sans text-text-secondary leading-relaxed">
                                  {p.approach}
                                </p>
                              </div>

                              {/* Technologies */}
                              <div className="border-l-2 border-brand-yellow/30 pl-3 space-y-1.5">
                                <span className="block text-xs font-secondary font-medium text-brand-yellow uppercase tracking-[0.05em]">
                                  Technologies
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                  {p.techStack.map((tech) => (
                                    <span
                                      key={tech}
                                      className="px-2 py-0.5 bg-white rounded text-xs font-secondary text-text-secondary border border-slate-200 uppercase shadow-xs font-medium"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Outcome */}
                              <div className="border-l-2 border-brand-green/30 pl-3 space-y-0.5">
                                <span className="block text-xs font-secondary font-medium text-brand-green uppercase tracking-[0.05em]">
                                  Outcome
                                </span>
                                <p className="font-sans text-text-secondary leading-relaxed">
                                  {p.outcome}
                                </p>
                              </div>

                              {/* Learning */}
                              <div className="border-l-2 border-slate-400/30 pl-3 space-y-0.5">
                                <span className="block text-xs font-secondary font-medium text-text-secondary uppercase tracking-[0.05em]">
                                  Learning
                                </span>
                                <p className="font-sans text-text-secondary leading-relaxed">
                                  {p.keyLearning}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Card Footer Actions */}
                          <div className="pt-4 mt-6 border-t border-slate-100 flex flex-wrap gap-2 justify-between items-center">
                            {/* Primary Target Action Link */}
                            <a
                                href={p.primaryCtaUrl}
                                target={p.primaryCtaUrl.startsWith('#') ? '_self' : '_blank'}
                                rel="noreferrer"
                                className="px-4 py-2 bg-text-primary hover:bg-black text-white font-sans text-xs font-semibold uppercase tracking-[0.05em] rounded-xl transition-all inline-flex items-center gap-1.5 shadow-sm"
                            >
                              {p.primaryCtaLabel}
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>

                            {/* Interactive Console Trigger */}
                            {isInteractive && (
                              <button
                                onClick={() => launchSandbox(p.interactiveDemoId!)}
                                className="px-3.5 py-2 bg-brand-blue hover:bg-brand-blue-hover text-white font-sans text-xs font-semibold uppercase tracking-[0.05em] rounded-xl transition-all flex items-center gap-1.5 shadow-[0_2px_10px_rgba(93,169,255,0.2)] hover:shadow-none cursor-pointer"
                              >
                                <Terminal className="w-3.5 h-3.5" /> Launch Sandbox
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* 2. DYNAMIC WORKSPACE SANDBOX PLAYPEN */}
      <section
        ref={sandboxRef}
        id="sandbox-container"
        className="bg-bg-secondary border border-slate-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-md relative overflow-hidden border-t-2 border-t-brand-blue"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue/[0.02] rounded-full blur-[100px] pointer-events-none animate-pulse" />
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 relative z-10">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-secondary text-brand-blue uppercase font-medium tracking-[0.05em]">
              <Terminal className="w-3.5 h-3.5 text-brand-blue" /> SYSTEM PLAYGROUND &bull; INTEGRATED COMPILER CORES
            </div>
            <h2 className="text-[24px] font-sans font-semibold uppercase text-text-primary tracking-tight">
              Interactive sandbox module
            </h2>
          </div>

          {/* Sandbox Toggle Panels */}
          <div className="flex flex-wrap gap-1 text-xs font-secondary bg-bg-secondary p-1 rounded-xl border border-slate-200 shadow-sm font-medium">
            {[
              { label: 'EchoNote AI', id: 'echonote' },
              { label: 'Sudoku Solver', id: 'sudoku' },
              { label: 'EMNIST OCR CNN', id: 'ocr-cnn' },
              { label: 'Strategic Matrix', id: 'research' },
              { label: 'DSA Pointers', id: 'dsa' },
              { label: 'Stock ML Pipeline', id: 'stock' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSandbox(tab.id)}
                className={`px-3 py-1.5 rounded-lg font-semibold uppercase tracking-normal transition-all cursor-pointer leading-none ${
                  activeSandbox === tab.id
                    ? 'bg-brand-blue text-white font-semibold shadow-md'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Frame wrapper */}
        <div className="border border-slate-200 rounded-2xl relative bg-bg-primary overflow-hidden min-h-[400px] shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSandbox}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeSandbox === 'echonote' && <EchoNoteDemo />}
              {activeSandbox === 'sudoku' && <SudokuDemo />}
              {activeSandbox === 'ocr-cnn' && <OcrCnnDemo />}
              {activeSandbox === 'research' && <IndustryResearchDemo />}
              {activeSandbox === 'dsa' && <DsaVisualizerDemo />}
              {activeSandbox === 'stock' && <StockPredictorDemo />}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
