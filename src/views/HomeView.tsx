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
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <div className="space-y-16 py-4">
      {/* 1. HERO ARCHITECTURE SECTION */}
      <section className="relative min-h-[70vh] lg:min-h-[620px] xl:min-h-[calc(100vh-170px)] flex flex-col justify-center rounded-3xl border border-slate-200 bg-bg-secondary p-8 md:p-12 shadow-xl">
        {/* Absolute backdrop wrapper to contain overflow of decorative elements without clipping the main content */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-0">
          {/* Subtle Scanline Overlay */}
          <div className="absolute inset-0 bg-scanlines opacity-[0.02]" />
          
          {/* Tech grid texture backing */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          
          {/* Soft background circle accent in the top right - matches screenshot */}
          <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-brand-blue/[0.04] rounded-full border border-brand-blue/[0.02]" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-[1440px] w-full">
          
          {/* Hero text container */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Telemetry split-style pill - matches screenshot */}
            <div className="inline-flex flex-wrap items-center p-1 bg-slate-100 border border-slate-200/50 rounded-full text-[11px] font-secondary tracking-normal font-medium text-text-primary shadow-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-blue text-white rounded-full font-bold text-[10px] tracking-wide shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                DEVELOPER_ACTIVE
              </span>
              <span className="px-3 py-1 text-text-secondary uppercase font-semibold text-[10px] tracking-wide">
                GOOGLE FOR STARTUPS &amp; ANTLER IMMERSION PROGRAM 2026
              </span>
            </div>

            {/* Primary Statement */}
            <div className="space-y-4">
              <span className="block font-secondary text-[11px] md:text-[12px] uppercase tracking-[0.05em] text-brand-blue font-bold">
                AI &amp; ML Undergraduate &bull; Product Builder &bull; Industry Research Intern
              </span>
              <h1 className="text-[44px] sm:text-[66px] font-display font-extrabold tracking-[-0.03em] uppercase leading-[44px] sm:leading-[66px] text-text-primary">
                Building<br />
                <span className="text-brand-blue italic font-serif lowercase block my-0.5">software and ai</span>
                with<br />
                practical<br />
                impact.
              </h1>
            </div>

            <p className="text-text-secondary font-display text-base md:text-[17px] font-medium leading-[26px] md:leading-[28px] max-w-xl">
              I enjoy building AI-powered products, exploring practical applications of artificial intelligence, and conducting industry research to understand real-world problems. Under <strong>EchoTech</strong>, my personal project ecosystem, I develop applications like <strong>EchoOS</strong> and <strong>EchoNote</strong> to turn ideas into working software while continuously learning through hands-on development and experimentation.
            </p>

            {/* Metrics Dashboard Row - Matches screenshot layout with no vertical divider borders */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              <div className="space-y-2">
                <span className="block text-[11px] font-secondary text-text-secondary uppercase tracking-[0.05em] leading-tight font-semibold">
                  Industry<br />Research
                </span>
                <div className="flex flex-col">
                  <span className="text-[38px] font-sans font-extrabold text-text-primary tracking-tight leading-none">8</span>
                  <span className="text-[15px] font-sans font-semibold text-text-secondary leading-tight mt-1">Sectors</span>
                </div>
              </div>
              <div className="space-y-2">
                <span className="block text-[11px] font-secondary text-text-secondary uppercase tracking-[0.05em] leading-tight font-semibold">
                  Workflow<br />Studies
                </span>
                <div className="flex flex-col">
                  <span className="text-[38px] font-sans font-bold text-text-primary tracking-tight leading-none">45+</span>
                </div>
              </div>
              <div className="space-y-2">
                <span className="block text-[11px] font-secondary text-text-secondary uppercase tracking-[0.05em] leading-tight font-semibold">
                  Software<br />Projects
                </span>
                <div className="flex flex-col">
                  <span className="text-[38px] font-sans font-extrabold text-brand-blue tracking-tight leading-none">6</span>
                  <span className="text-[15px] font-sans font-semibold text-brand-blue leading-tight mt-1">Products</span>
                </div>
              </div>
            </div>

            {/* Action Hub */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3.5 bg-brand-blue hover:bg-brand-blue/90 text-white font-sans text-[15px] font-semibold tracking-normal rounded-xl transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-[0_4px_25px_rgba(66,133,244,0.3)] hover:shadow-none"
              >
                View Projects <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('research')}
                className="px-6 py-3.5 bg-white text-text-primary border border-slate-200 hover:border-brand-blue font-sans text-[15px] font-medium tracking-normal rounded-xl transition-all duration-200 hover:bg-slate-50 flex items-center gap-2 cursor-pointer shadow-sm"
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
                    className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[350px] xl:h-[350px] rounded-full object-cover transition-all duration-300 shadow-inner"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const exists = parent.querySelector('.photo-fallback');
                        if (!exists) {
                          const fallback = document.createElement('div');
                          fallback.className = "photo-fallback w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[350px] xl:h-[350px] rounded-full bg-slate-50 flex flex-col items-center justify-center border border-slate-100 font-sans font-black text-2xl md:text-3xl text-brand-blue uppercase tracking-tight";
                          fallback.innerHTML = '<span class="text-3xl md:text-4xl text-brand-blue">R.S.</span><span class="text-brand-green text-[14px] font-secondary font-medium tracking-normal mt-1">PRODUCT BUILDER</span>';
                          parent.appendChild(fallback);
                        }
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SHORT INTRODUCTION, STRATEGIC ORIENTATION & CURRENT FOCUS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-slate-200 bg-bg-secondary p-8 rounded-3xl relative shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
        <div className="absolute top-1/2 left-0 w-24 h-24 bg-brand-blue/5 rounded-full blur-2xl pointer-events-none" />
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 text-[14px] font-secondary text-brand-blue uppercase tracking-[0.05em] font-medium">
            <Activity className="w-4 h-4 text-brand-blue" /> Objective &amp; Focus
          </div>
          <h2 className="text-[28px] sm:text-[32px] font-display font-semibold tracking-[-0.01em] uppercase text-text-primary leading-[36px] sm:leading-[40px]">
            Bridging Tech <br className="hidden sm:block"/>&amp; Practical Value
          </h2>
          <p className="text-[14px] font-secondary text-text-secondary uppercase tracking-[0.05em] font-medium">
            RESEARCH &amp; DEVELOPMENT // EXPLORING PRACTICAL AI APPLICATIONS
          </p>
        </div>
        <div className="lg:col-span-7 font-sans text-[15px] sm:text-[16px] text-text-secondary space-y-4 font-normal leading-[24px] sm:leading-[28px]">
          <p>
            I believe that Artificial Intelligence isn't just about importing generic models, but about <span className="text-text-primary font-semibold border-b border-brand-blue/30 pb-0.5">designing practical applications tailored</span> to specific real-world problems.
          </p>
          <p>
            My goal is to build useful technology, continue learning, and contribute to meaningful AI-driven solutions. As a student developer and researcher, I focus on practical analysis &mdash; from studying workflow bottlenecks to building hands-on interactive prototypes and applications.
          </p>
          
          <div className="pt-2 space-y-2">
            <span className="block text-[14px] font-secondary text-brand-blue uppercase tracking-[0.05em] font-medium">// CURRENT LEARNING &amp; FOCUS AREAS</span>
            <div className="flex flex-wrap gap-2">
              {['AI Product Development', 'Machine Learning', 'Generative AI', 'Industry Research', 'Flutter', 'System Design'].map((focus) => (
                <span key={focus} className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-[14px] font-sans text-text-primary font-medium shadow-xs">
                  {focus}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-6 pt-2">
            <button 
              onClick={() => onNavigate('about')} 
              className="text-brand-blue text-[15px] font-sans tracking-normal uppercase hover:underline flex items-center gap-1.5 cursor-pointer font-semibold"
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
            <span className="block font-secondary text-[14px] uppercase tracking-[0.05em] text-brand-blue font-medium">
              // CRAFT &amp; CODE
            </span>
            <h3 className="text-[24px] sm:text-[28px] font-sans font-semibold text-text-primary tracking-[-0.01em] leading-[32px] sm:leading-[36px] uppercase">Featured Projects</h3>
          </div>
          <button 
            onClick={() => onNavigate('projects')}
            className="text-brand-blue font-sans text-[15px] hover:underline uppercase font-semibold flex items-center gap-1 cursor-pointer"
          >
            All Projects <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* EchoNote */}
          <div className="bg-bg-card border border-slate-200/50 hover:border-brand-violet/40 p-6 rounded-2xl space-y-4 group transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-[14px] font-secondary text-brand-violet uppercase font-medium tracking-[0.05em]">AI/ML Product</span>
                <span className="p-1.5 bg-brand-violet/10 border border-brand-violet/15 text-brand-violet rounded-lg shadow-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-semibold text-[20px] text-text-primary group-hover:text-brand-violet transition-colors uppercase tracking-tight leading-tight">
                  EchoNote
                </h4>
                <p className="text-[14px] text-text-secondary font-secondary font-medium tracking-[0.05em]">PRIMARY TECH: GEMINI API</p>
              </div>
              <p className="text-[14px] text-text-secondary leading-[22px] font-normal">
                Voice notes automation converting speech into structured summaries and action lists.
              </p>
            </div>
            <button 
              onClick={() => onNavigate('projects')}
              className="text-text-secondary group-hover:text-brand-violet text-[14px] font-sans tracking-normal uppercase flex items-center gap-1 pt-4 self-start cursor-pointer font-medium transition-colors"
            >
              View Project <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* AI Industry Workflows Research */}
          <div className="bg-bg-card border border-slate-200/50 hover:border-brand-lavender/40 p-6 rounded-2xl space-y-4 group transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-[14px] font-secondary text-brand-lavender uppercase font-medium tracking-[0.05em]">Research Build</span>
                <span className="p-1.5 bg-brand-lavender/10 border border-brand-lavender/15 text-brand-lavender rounded-lg shadow-xs">
                  <Layers className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-semibold text-[20px] text-text-primary group-hover:text-brand-lavender transition-colors uppercase tracking-tight leading-tight">
                  Workflows Research
                </h4>
                <p className="text-[14px] text-text-secondary font-secondary font-medium tracking-[0.05em]">PRIMARY TECH: OPPORTUNITY MAPPING</p>
              </div>
              <p className="text-[14px] text-text-secondary leading-[22px] font-normal">
                Extensive opportunity mapping &amp; operational audit dashboards built for AMA.
              </p>
            </div>
            <button 
              onClick={() => onNavigate('projects')}
              className="text-text-secondary group-hover:text-brand-lavender text-[14px] font-sans tracking-normal uppercase flex items-center gap-1 pt-4 self-start cursor-pointer font-medium transition-colors"
            >
              View Project <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* RailQ */}
          <div className="bg-bg-card border border-slate-200/50 hover:border-brand-coral/40 p-6 rounded-2xl space-y-4 group transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-[14px] font-secondary text-brand-coral uppercase font-medium tracking-[0.05em]">Product Design</span>
                <span className="p-1.5 bg-brand-coral/10 border border-brand-coral/15 text-brand-coral rounded-lg shadow-xs">
                  <Compass className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-semibold text-[20px] text-text-primary group-hover:text-brand-coral transition-colors uppercase tracking-tight leading-tight">
                  RailQ
                </h4>
                <p className="text-[14px] text-text-secondary font-secondary font-medium tracking-[0.05em]">PRIMARY TECH: PRODUCT THINKING</p>
              </div>
              <p className="text-[14px] text-text-secondary leading-[22px] font-normal">
                Conceptual service and interactive blueprint streamlining coach navigation.
              </p>
            </div>
            <button 
              onClick={() => onNavigate('projects')}
              className="text-text-secondary group-hover:text-brand-coral text-[14px] font-sans tracking-normal uppercase flex items-center gap-1 pt-4 self-start cursor-pointer font-medium transition-colors"
            >
              View Project <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* Core DSA Visualizer */}
          <div className="bg-bg-card border border-slate-200/50 hover:border-brand-amber/40 p-6 rounded-2xl space-y-4 group transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-[14px] font-secondary text-brand-amber uppercase font-medium tracking-[0.05em]">Core CS</span>
                <span className="p-1.5 bg-brand-amber/10 border border-brand-amber/15 text-brand-amber rounded-lg shadow-xs">
                  <Terminal className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-semibold text-[20px] text-text-primary group-hover:text-brand-amber transition-colors uppercase tracking-tight leading-tight">
                  DSA Visualizer
                </h4>
                <p className="text-[14px] text-text-secondary font-secondary font-medium tracking-[0.05em]">PRIMARY TECH: REACT / C++</p>
              </div>
              <p className="text-[14px] text-text-secondary leading-[22px] font-normal">
                Console-inspired interactive visualizer mapping logical memory layout and pointers.
              </p>
            </div>
            <button 
              onClick={() => onNavigate('projects')}
              className="text-text-secondary group-hover:text-brand-amber text-[14px] font-sans tracking-normal uppercase flex items-center gap-1 pt-4 self-start cursor-pointer font-medium transition-colors"
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
            <div className="flex items-center gap-2 text-[14px] font-secondary text-brand-green uppercase tracking-[0.05em] font-medium">
              <Layers className="w-4 h-4 text-brand-green" /> Value Chain Audits
            </div>
            <h3 className="text-[24px] sm:text-[28px] font-sans font-semibold tracking-tight uppercase text-text-primary leading-none">
              Sector Workflows <br />&amp; Opportunity Analysis
            </h3>
            <p className="text-[14px] font-secondary text-text-secondary uppercase tracking-[0.05em] font-medium">
              8 SECTORS AUDITED &bull; BOTTLENECK ROI MAPPING &bull; AMA FELLOWSHIP RESEARCH
            </p>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <p className="text-[15px] sm:text-[16px] text-text-secondary font-normal leading-[24px] sm:leading-[28px]">
              Extensive industry workflows research conducting structured opportunity assessments and technology mapping. By dissecting traditional value chains, this study identifies concrete, high-impact AI interventions tailored to enterprise operational bottlenecks.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="space-y-1">
                <span className="block text-[14px] font-secondary text-text-secondary uppercase tracking-[0.05em] font-medium">Industry Audits</span>
                <span className="block text-[15px] text-text-primary font-medium font-sans">8 major global industries</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[14px] font-secondary text-text-secondary uppercase tracking-[0.05em] font-medium">Analysis Focus</span>
                <span className="block text-[15px] text-text-primary font-medium font-sans">Value chain &amp; workflow mapping</span>
              </div>
            </div>
            <div className="pt-2">
              <button 
                onClick={() => onNavigate('research')} 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 hover:border-brand-green text-text-primary font-sans text-[15px] font-semibold tracking-normal rounded-xl transition-all duration-200 cursor-pointer shadow-xs"
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
            <span className="block font-secondary text-[14px] uppercase tracking-[0.05em] text-brand-green font-medium">
              // RECOGNITION &amp; STANDARDS
            </span>
            <h3 className="text-[24px] sm:text-[28px] font-sans font-semibold text-text-primary tracking-[-0.01em] leading-[32px] sm:leading-[36px] uppercase">Achievements Snapshot</h3>
          </div>
          <button 
            onClick={() => onNavigate('achievements')}
            className="text-brand-green font-sans text-[15px] hover:underline uppercase font-semibold flex items-center gap-1 cursor-pointer"
          >
            All Achievements <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* GFS × Antler */}
          <div className="bg-bg-card border border-slate-200/50 hover:border-brand-amber/40 p-6 rounded-2xl space-y-3 group transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-[14px] font-secondary text-brand-amber uppercase font-medium tracking-[0.05em]">Venture Immersion</span>
                <span className="p-1.5 bg-brand-amber/10 border border-brand-amber/15 text-brand-amber rounded-lg shadow-xs">
                  <Award className="w-3.5 h-3.5" />
                </span>
              </div>
              <h4 className="font-sans font-semibold text-[20px] text-text-primary group-hover:text-brand-amber transition-colors uppercase tracking-tight leading-tight">
                Google for Startups × Antler
              </h4>
              <p className="text-[14px] text-text-secondary leading-[22px] font-normal">
                Selected for the 2026 cohort. Participated in intensive technical and business strategy workshops under direct mentorship.
              </p>
            </div>
          </div>

          {/* Top 10 National Finalist */}
          <div className="bg-bg-card border border-slate-200/50 hover:border-brand-green/40 p-6 rounded-2xl space-y-3 group transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-[14px] font-secondary text-brand-green uppercase font-medium tracking-[0.05em]">Venture Pitching</span>
                <span className="p-1.5 bg-brand-green/10 border border-brand-green/15 text-brand-green rounded-lg shadow-xs">
                  <TrendingUp className="w-3.5 h-3.5" />
                </span>
              </div>
              <h4 className="font-sans font-semibold text-[20px] text-text-primary group-hover:text-brand-green transition-colors uppercase tracking-tight leading-tight">
                Top 10 National Finalist
              </h4>
              <p className="text-[14px] text-text-secondary leading-[22px] font-normal">
                Selected as a National Top 10 Finalist in product pitching, competing against over a hundred student venture entries.
              </p>
            </div>
          </div>

          {/* IELTS Band 7 */}
          <div className="bg-bg-card border border-slate-200/50 hover:border-brand-yellow/40 p-6 rounded-2xl space-y-3 group transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-[14px] font-secondary text-brand-yellow uppercase font-medium tracking-[0.05em]">Professional Standards</span>
                <span className="p-1.5 bg-brand-yellow/10 border border-brand-yellow/15 text-brand-yellow rounded-lg shadow-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
              </div>
              <h4 className="font-sans font-semibold text-[20px] text-text-primary group-hover:text-brand-yellow transition-colors uppercase tracking-tight leading-tight">
                IELTS Band 7
              </h4>
              <p className="text-[14px] text-text-secondary leading-[22px] font-normal">
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
          <span className="block font-secondary text-[14px] text-brand-blue font-medium uppercase tracking-[0.05em]">COLLABORATION GATEWAY</span>
          <h4 className="text-[20px] font-semibold uppercase text-text-primary font-sans tracking-tight leading-tight">Interested in collaborating or examining live modules?</h4>
          <p className="text-[14px] text-text-secondary font-normal font-sans leading-[22px]">
            Connect directly to discuss projects, research, or internship opportunities.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-5 py-3 border border-slate-200 hover:border-brand-blue text-text-primary hover:text-brand-blue font-sans text-[15px] font-semibold tracking-normal rounded-xl transition-all duration-200 shrink-0 cursor-pointer bg-white shadow-sm hover:shadow-none"
        >
          Get In Touch
        </button>
      </section>
    </div>
  );
}
