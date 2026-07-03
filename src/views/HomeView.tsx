import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ChevronRight, 
  Terminal, 
  Cpu, 
  Activity, 
  Layers, 
  Compass, 
  TrendingUp, 
  Award 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/personal';

interface HomeViewProps {
  onNavigate: (page: string) => void;
  onNavigateToSandbox?: (sandboxId: string) => void;
}

export default function HomeView({ onNavigate, onNavigateToSandbox }: HomeViewProps) {
  return (
    <div className="space-y-16 py-4">
      {/* 1. HERO ARCHITECTURE SECTION */}
      <section className="relative min-h-[70vh] flex flex-col justify-center rounded-3xl border border-slate-200 bg-bg-secondary p-8 md:p-12 overflow-hidden shadow-xl">
        {/* Subtle Scanline Overlay */}
        <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-[0.02]" />
        
        {/* Tech grid texture backing */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
        
        {/* Radial ambient glow focused on the her image container */}
        <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none animate-pulse" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl w-full">
          
          {/* Hero text container */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Telemetry pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-[9px] font-mono tracking-wider font-bold text-text-primary shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-brand-blue font-black">DEVELOPER_ACTIVE</span>
              <span className="text-slate-300">//</span>
              <span>GOOGLE FOR STARTUPS &amp; ANTLER IMMERSION PROGRAM 2026</span>
            </div>

            {/* Primary Statement */}
            <div className="space-y-3">
              <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-brand-blue font-bold">
                AI &amp; ML Undergraduate &bull; Product Builder &bull; Industry Research Intern
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight uppercase leading-[0.95] text-text-primary">
                Building<br />
                <span className="text-brand-blue italic font-serif lowercase">software and AI</span><br />
                with practical impact.
              </h1>
            </div>

            <p className="text-text-secondary font-sans text-base md:text-lg font-light leading-relaxed max-w-xl">
              I enjoy building AI-powered products, exploring practical applications of artificial intelligence, and conducting industry research to understand real-world problems. Under <strong>EchoTech</strong>, my personal project ecosystem, I develop applications like <strong>EchoNote</strong> and <strong>RailQ</strong> to turn ideas into working software while continuously learning through hands-on development and experimentation.
            </p>

            {/* Metrics Dashboard Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
              <div className="space-y-1">
                <span className="block text-[9px] font-mono text-text-secondary uppercase tracking-widest">Industry Research</span>
                <span className="block text-2xl font-mono font-bold text-text-primary tracking-tight border-l-2 border-brand-blue pl-2">8 Sectors</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[9px] font-mono text-text-secondary uppercase tracking-widest">Workflow Studies</span>
                <span className="block text-2xl font-mono font-bold text-text-primary tracking-tight border-l-2 border-brand-green pl-2">45+ Use-Cases</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[9px] font-mono text-text-secondary uppercase tracking-widest">Active Sandboxes</span>
                <span className="block text-2xl font-mono font-bold text-brand-blue tracking-tight border-l-2 border-brand-yellow pl-2">6 Projects</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[9px] font-mono text-text-secondary uppercase tracking-widest">Immersion Program</span>
                <span className="block text-2xl font-mono font-bold text-text-primary tracking-tight border-l-2 border-brand-red pl-2">Antler '26</span>
              </div>
            </div>

            {/* Action Hub */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3.5 bg-brand-blue hover:bg-brand-blue/90 text-white font-mono text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-[0_4px_25px_rgba(66,133,244,0.3)] hover:shadow-none"
              >
                View Projects <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('research')}
                className="px-6 py-3.5 bg-white text-text-primary border border-slate-200 hover:border-brand-blue font-mono text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-200 hover:bg-slate-50 flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Layers className="w-4 h-4 text-brand-blue" /> Explore Research
              </button>
            </div>
          </div>

          {/* Hero Profile Photo Container */}
          <div className="lg:col-span-5 flex justify-center py-6">
            <div className="relative group">
              {/* Ambient background aura */}
              <div className="absolute inset-x-0 -top-4 bottom-4 bg-gradient-to-tr from-brand-blue/30 via-brand-green/20 to-brand-yellow/10 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Modern Double Border Headshot Frame */}
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-brand-blue via-brand-green to-brand-yellow shadow-lg transition-transform duration-300 group-hover:scale-105">
                <div className="rounded-full bg-white p-1">
                  <img
                    src="/images/profile.png"
                    alt="Riya Shah"
                    referrerPolicy="no-referrer"
                    loading="eager"
                    className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover transition-all duration-300 shadow-inner"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const exists = parent.querySelector('.photo-fallback');
                        if (!exists) {
                          const fallback = document.createElement('div');
                          fallback.className = "photo-fallback w-48 h-48 md:w-60 md:h-60 rounded-full bg-slate-50 flex flex-col items-center justify-center border border-slate-100 font-sans font-black text-2xl md:text-3xl text-brand-blue uppercase tracking-tight";
                          fallback.innerHTML = '<span class="text-3xl md:text-4xl text-brand-blue">R.S.</span><span class="text-brand-green text-[9px] font-mono font-bold tracking-widest mt-1">PRODUCT BUILDER</span>';
                          parent.appendChild(fallback);
                        }
                      }
                    }}
                  />
                </div>
              </div>
              
              {/* Tech tag overlay */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3.5 py-1.5 bg-white border border-brand-blue/20 rounded-full text-[8px] font-mono text-brand-blue font-bold tracking-widest shadow-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                <span>GFS_PROGRAM_2026</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SHORT INTRODUCTION, STRATEGIC ORIENTATION & CURRENT FOCUS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-slate-200 bg-bg-secondary p-8 rounded-3xl relative shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
        <div className="absolute top-1/2 left-0 w-24 h-24 bg-brand-blue/5 rounded-full blur-2xl pointer-events-none" />
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 text-[10px] font-mono text-brand-blue uppercase tracking-widest font-bold">
            <Activity className="w-4 h-4 text-brand-blue" /> Objective &amp; Focus
          </div>
          <h2 className="text-3xl font-sans font-black tracking-tight uppercase text-text-primary leading-none">
            Bridging Tech <br className="hidden sm:block"/>&amp; Practical Value
          </h2>
          <p className="text-xs font-mono text-text-secondary uppercase tracking-widest leading-relaxed">
            RESEARCH &amp; DEVELOPMENT // EXPLORING PRACTICAL AI APPLICATIONS
          </p>
        </div>
        <div className="lg:col-span-7 font-sans text-sm text-text-secondary space-y-4 font-light leading-relaxed">
          <p>
            I believe that Artificial Intelligence isn't just about importing generic models, but about <span className="text-text-primary font-medium border-b border-brand-blue/30 pb-0.5">designing practical applications tailored</span> to specific real-world problems.
          </p>
          <p>
            My goal is to build useful technology, continue learning, and contribute to meaningful AI-driven solutions. As a student developer and researcher, I focus on practical analysis &mdash; from studying workflow bottlenecks to building hands-on interactive prototypes and applications.
          </p>
          
          <div className="pt-2 space-y-2">
            <span className="block text-[9px] font-mono text-brand-blue uppercase tracking-widest font-bold">// CURRENT LEARNING &amp; FOCUS AREAS</span>
            <div className="flex flex-wrap gap-2">
              {['AI Product Development', 'Machine Learning', 'Generative AI', 'Industry Research', 'Flutter', 'System Design'].map((focus) => (
                <span key={focus} className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-[10px] font-mono text-text-primary font-medium shadow-xs">
                  {focus}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-6 pt-2">
            <button 
              onClick={() => onNavigate('about')} 
              className="text-brand-blue text-xs font-mono tracking-widest uppercase hover:underline flex items-center gap-1.5 cursor-pointer font-bold"
            >
              Continue to Personal Story <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS PREVIEW */}
      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <span className="block font-mono text-[9px] uppercase tracking-widest text-brand-blue font-bold">
              // CRAFT &amp; CODE
            </span>
            <h3 className="text-2xl font-sans font-black uppercase text-text-primary tracking-tight">Featured Projects</h3>
          </div>
          <button 
            onClick={() => onNavigate('projects')}
            className="text-brand-blue font-mono text-xs hover:underline uppercase font-bold flex items-center gap-1 cursor-pointer"
          >
            All Projects <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* EchoNote */}
          <div className="bg-white border border-slate-200 hover:border-brand-blue/40 p-6 rounded-2xl space-y-4 group transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-brand-blue uppercase font-bold tracking-wider">AI/ML Product</span>
                <span className="p-1.5 bg-slate-50 border border-slate-100 text-brand-blue rounded-lg shadow-inner">
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-sm text-text-primary group-hover:text-brand-blue transition-colors uppercase tracking-tight">
                  EchoNote
                </h4>
                <p className="text-[10px] text-text-secondary font-mono">PRIMARY TECH: GEMINI API</p>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                Voice notes automation converting speech into structured summaries and action lists.
              </p>
            </div>
            <button 
              onClick={() => onNavigate('projects')}
              className="text-text-secondary group-hover:text-brand-blue text-[9px] font-mono tracking-wider uppercase flex items-center gap-1 pt-4 self-start cursor-pointer font-bold transition-colors"
            >
              View Project <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* AI Industry Workflows Research */}
          <div className="bg-white border border-slate-200 hover:border-brand-green/40 p-6 rounded-2xl space-y-4 group transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-brand-green uppercase font-bold tracking-wider">Research Build</span>
                <span className="p-1.5 bg-slate-50 border border-slate-100 text-brand-green rounded-lg shadow-inner">
                  <Layers className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-sm text-text-primary group-hover:text-brand-green transition-colors uppercase tracking-tight">
                  Workflows Research
                </h4>
                <p className="text-[10px] text-text-secondary font-mono">PRIMARY TECH: OPPORTUNITY MAPPING</p>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                Extensive opportunity mapping &amp; operational audit dashboards built for AMA.
              </p>
            </div>
            <button 
              onClick={() => onNavigate('projects')}
              className="text-text-secondary group-hover:text-brand-green text-[9px] font-mono tracking-wider uppercase flex items-center gap-1 pt-4 self-start cursor-pointer font-bold transition-colors"
            >
              View Project <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* RailQ */}
          <div className="bg-white border border-slate-200 hover:border-brand-yellow/40 p-6 rounded-2xl space-y-4 group transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-brand-yellow uppercase font-bold tracking-wider">Product Design</span>
                <span className="p-1.5 bg-slate-50 border border-slate-100 text-brand-yellow rounded-lg shadow-inner">
                  <Compass className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-sm text-text-primary group-hover:text-brand-yellow transition-colors uppercase tracking-tight">
                  RailQ
                </h4>
                <p className="text-[10px] text-text-secondary font-mono">PRIMARY TECH: PRODUCT THINKING</p>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                Conceptual service and interactive blueprint streamlining coach navigation.
              </p>
            </div>
            <button 
              onClick={() => onNavigate('projects')}
              className="text-text-secondary group-hover:text-brand-yellow text-[9px] font-mono tracking-wider uppercase flex items-center gap-1 pt-4 self-start cursor-pointer font-bold transition-colors"
            >
              View Project <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* Core DSA Visualizer */}
          <div className="bg-white border border-slate-200 hover:border-brand-red/40 p-6 rounded-2xl space-y-4 group transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-brand-red uppercase font-bold tracking-wider">Core CS</span>
                <span className="p-1.5 bg-slate-50 border border-slate-100 text-brand-red rounded-lg shadow-inner">
                  <Terminal className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-sm text-text-primary group-hover:text-brand-red transition-colors uppercase tracking-tight">
                  DSA Visualizer
                </h4>
                <p className="text-[10px] text-text-secondary font-mono">PRIMARY TECH: REACT / C++</p>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                Console-inspired interactive sandbox mapping logical memory layout and pointers.
              </p>
            </div>
            <button 
              onClick={() => onNavigate('projects')}
              className="text-text-secondary group-hover:text-brand-red text-[9px] font-mono tracking-wider uppercase flex items-center gap-1 pt-4 self-start cursor-pointer font-bold transition-colors"
            >
              View Project <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. RESEARCH HIGHLIGHTS */}
      <section className="border border-slate-200 bg-bg-secondary p-8 rounded-3xl relative shadow-[0_2px_12px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-brand-green/5 rounded-full blur-2xl pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-mono text-brand-green uppercase tracking-widest font-bold">
              <Layers className="w-4 h-4 text-brand-green" /> Value Chain Audits
            </div>
            <h3 className="text-2xl font-sans font-black tracking-tight uppercase text-text-primary leading-none">
              Sector Workflows <br />&amp; Opportunity Analysis
            </h3>
            <p className="text-xs font-mono text-text-secondary uppercase tracking-widest leading-relaxed">
              8 SECTORS AUDITED &bull; BOTTLENECK ROI MAPPING &bull; AMA FELLOWSHIP RESEARCH
            </p>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <p className="text-sm text-text-secondary font-light leading-relaxed">
              Extensive industry workflows research conducting structured opportunity assessments and technology mapping. By dissecting traditional value chains, this study identifies concrete, high-impact AI interventions tailored to enterprise operational bottlenecks.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="space-y-1">
                <span className="block text-[9px] font-mono text-text-secondary uppercase tracking-widest">Industry Audits</span>
                <span className="block text-xs text-text-primary font-medium">8 major global industries</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[9px] font-mono text-text-secondary uppercase tracking-widest">Analysis Focus</span>
                <span className="block text-xs text-text-primary font-medium">Value chain &amp; workflow mapping</span>
              </div>
            </div>
            <div className="pt-2">
              <button 
                onClick={() => onNavigate('research')} 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 hover:border-brand-green text-text-primary font-mono text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-200 cursor-pointer shadow-xs"
              >
                Explore Research <ChevronRight className="w-4 h-4 text-brand-green" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ACHIEVEMENTS SNAPSHOT */}
      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <span className="block font-mono text-[9px] uppercase tracking-widest text-brand-green font-bold">
              // RECOGNITION &amp; STANDARDS
            </span>
            <h3 className="text-2xl font-sans font-black uppercase text-text-primary tracking-tight">Achievements Snapshot</h3>
          </div>
          <button 
            onClick={() => onNavigate('achievements')}
            className="text-brand-green font-mono text-xs hover:underline uppercase font-bold flex items-center gap-1 cursor-pointer"
          >
            All Achievements <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* GFS × Antler */}
          <div className="bg-white border border-slate-200 hover:border-brand-blue/40 p-6 rounded-2xl space-y-3 group transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-brand-blue uppercase font-bold tracking-wider">Venture Immersion</span>
                <span className="p-1.5 bg-slate-50 border border-slate-100 text-brand-blue rounded-lg shadow-inner">
                  <Award className="w-3.5 h-3.5" />
                </span>
              </div>
              <h4 className="font-sans font-bold text-sm text-text-primary group-hover:text-brand-blue transition-colors uppercase tracking-tight">
                Google for Startups × Antler
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                Selected for the 2026 cohort. Participated in intensive technical and business strategy workshops under direct mentorship.
              </p>
            </div>
          </div>

          {/* Top 10 National Finalist */}
          <div className="bg-white border border-slate-200 hover:border-brand-green/40 p-6 rounded-2xl space-y-3 group transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-brand-green uppercase font-bold tracking-wider">Venture Pitching</span>
                <span className="p-1.5 bg-slate-50 border border-slate-100 text-brand-green rounded-lg shadow-inner">
                  <TrendingUp className="w-3.5 h-3.5" />
                </span>
              </div>
              <h4 className="font-sans font-bold text-sm text-text-primary group-hover:text-brand-green transition-colors uppercase tracking-tight">
                Top 10 National Finalist
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                Selected as a National Top 10 Finalist in product pitching, competing against over a hundred student venture entries.
              </p>
            </div>
          </div>

          {/* IELTS Band 7 */}
          <div className="bg-white border border-slate-200 hover:border-brand-yellow/40 p-6 rounded-2xl space-y-3 group transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-brand-yellow uppercase font-bold tracking-wider">Professional Standards</span>
                <span className="p-1.5 bg-slate-50 border border-slate-100 text-brand-yellow rounded-lg shadow-inner">
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
              </div>
              <h4 className="font-sans font-bold text-sm text-text-primary group-hover:text-brand-yellow transition-colors uppercase tracking-tight">
                IELTS Band 7
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                Demonstrated advanced English proficiency and professional communication skills, scoring an overall Band 7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TACTICAL CTA PROMPT BANNER */}
      <section className="bg-bg-secondary border border-slate-200 p-8 rounded-3xl relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
        <div className="absolute top-0 right-0 w-44 h-44 bg-brand-blue/5 rounded-full blur-[60px] pointer-events-none" />
        <div className="space-y-1 text-center md:text-left">
          <span className="block font-mono text-[9px] text-brand-blue font-bold uppercase tracking-wider">COLLABORATION GATEWAY</span>
          <h4 className="text-xl font-bold uppercase text-text-primary font-sans tracking-tight">Interested in collaborating or examining live modules?</h4>
          <p className="text-xs text-text-secondary font-light font-sans">
            Connect directly to discuss projects, research, or internship opportunities.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-5 py-3 border border-slate-200 hover:border-brand-blue text-text-primary hover:text-brand-blue font-mono text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all duration-200 shrink-0 cursor-pointer bg-white shadow-sm hover:shadow-none"
        >
          Get In Touch
        </button>
      </section>
    </div>
  );
}
