import React from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  CheckCircle2, 
  Compass, 
  MessageSquare, 
  Code, 
  Layout, 
  Clock, 
  Briefcase, 
  ChevronRight,
  TrendingUp,
  Lightbulb,
  BookOpen,
  Cloud,
  Activity,
  Target
} from 'lucide-react';

export default function AchievementsView({ 
  onNavigate 
}: { 
  onNavigate?: (view: string) => void;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-16 py-4"
    >
      {/* HEADER SECTION — CONCISE INTRODUCTION */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-brand-blue font-mono text-[9px] uppercase tracking-widest font-bold">
          <Award className="w-3.5 h-3.5 text-brand-blue" /> RECOGNITION &amp; STANDARDS
        </div>
        <h2 className="text-3xl md:text-4xl font-sans font-black uppercase text-text-primary tracking-tight">
          Recognition &amp; Milestones
        </h2>
        <p className="text-sm text-text-secondary font-sans font-light max-w-2xl leading-relaxed">
          A structured summary of academic achievements, professional milestones, and technical learning that shape my continuous development.
        </p>
      </div>

      {/* SECTION 9 — CONCISE SUMMARY PANEL */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 border border-slate-200 bg-bg-secondary p-6 rounded-3xl shadow-xs">
        <div className="space-y-1">
          <span className="block text-[8px] font-mono text-text-secondary uppercase tracking-widest font-bold">Featured Programs</span>
          <span className="block text-xs md:text-sm font-sans font-black text-brand-blue uppercase tracking-tight">2 Programs</span>
        </div>
        <div className="space-y-1">
          <span className="block text-[8px] font-mono text-text-secondary uppercase tracking-widest font-bold">Professional Experience</span>
          <span className="block text-xs md:text-sm font-sans font-black text-brand-green uppercase tracking-tight">1 Internship</span>
        </div>
        <div className="space-y-1">
          <span className="block text-[8px] font-mono text-text-secondary uppercase tracking-widest font-bold">Certifications</span>
          <span className="block text-xs md:text-sm font-sans font-black text-brand-yellow uppercase tracking-tight">2 Credentials</span>
        </div>
        <div className="space-y-1">
          <span className="block text-[8px] font-mono text-text-secondary uppercase tracking-widest font-bold">Technical Learning</span>
          <span className="block text-xs md:text-sm font-sans font-black text-brand-red uppercase tracking-tight">HackerRank</span>
        </div>
        <div className="space-y-1 col-span-2 md:col-span-1">
          <span className="block text-[8px] font-mono text-text-secondary uppercase tracking-widest font-bold">Future Focus</span>
          <span className="block text-xs md:text-sm font-sans font-black text-text-primary uppercase tracking-tight leading-tight">Continuous Learning</span>
        </div>
      </div>

      {/* SECTION 1 — FEATURED RECOGNITIONS */}
      <div className="space-y-8">
        <div className="border-b border-slate-100 pb-3">
          <span className="block font-mono text-[9px] text-brand-blue uppercase font-bold tracking-widest">
            // Section 01
          </span>
          <h3 className="text-xl font-sans font-black text-text-primary uppercase tracking-tight">
            Featured Recognitions
          </h3>
          <p className="text-xs text-text-secondary font-sans font-light max-w-2xl">
            Selected product trials and immersion tracks judged by systems architects, founders, and industry advisors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* GOOGLE FOR STARTUPS x ANTLER */}
          <div className="bg-white border border-slate-200 border-l-4 border-l-brand-blue rounded-3xl p-6 md:p-8 hover:shadow-md transition-all duration-200 flex flex-col justify-between group shadow-sm">
            <div className="space-y-6">
              {/* Card Header */}
              <div className="flex justify-between items-start gap-2 pb-2 border-b border-slate-100">
                <span className="px-2 py-0.5 bg-brand-blue/5 border border-brand-blue/20 text-brand-blue text-[8px] font-mono rounded font-bold uppercase tracking-wider">
                  Google for Startups &amp; Antler India
                </span>
                <span className="text-[9px] font-mono text-text-secondary shrink-0 flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" /> June 2026 (First Two Weeks)
                </span>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <h4 className="font-sans font-black text-base md:text-lg text-text-primary group-hover:text-brand-blue transition-colors uppercase tracking-tight leading-snug">
                  Google for Startups &times; Antler Immersion Program
                </h4>
                <p className="text-xs text-text-secondary font-sans font-light leading-relaxed">
                  Participated in an immersive startup program focused on product thinking, AI innovation, and founder development. Collaborated with builders and mentors to study business viability, user friction, and modular architecture.
                </p>
              </div>

              {/* What I Gained */}
              <div className="space-y-2 bg-bg-secondary border border-slate-200/60 p-5 rounded-2xl">
                <span className="block font-mono text-[8px] text-brand-blue uppercase tracking-widest font-bold">
                  // Program Scope
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-primary font-sans font-light">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                    <span>Founder Journey Case Studies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                    <span>Product-Market Alignment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                    <span>User Friction Discovery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                    <span>Modular Solution Curation</span>
                  </li>
                </ul>
              </div>

              {/* How It Influenced My Work */}
              <div className="space-y-2.5 border-t border-slate-100 pt-4">
                <span className="block font-mono text-[8px] text-brand-green uppercase tracking-widest font-bold">
                  // How It Influenced My Work
                </span>
                <ul className="space-y-1.5 text-xs text-text-secondary font-sans font-light">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                    <span><strong className="font-semibold text-text-primary">Strengthened product thinking:</strong> Shifted focus from purely writing code to solving validated user bottlenecks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                    <span><strong className="font-semibold text-text-primary">Encouraged iterative development:</strong> Designed projects around small, rapid deployments based on immediate feedback loops.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[8px] font-mono text-text-secondary uppercase">
              <span className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-brand-blue" /> RECONISTRY_ID // STARTUP_IMMERSION
              </span>
              <span className="font-bold flex items-center gap-1 text-brand-green">
                VERIFIED <CheckCircle2 className="w-3 h-3 text-brand-green" />
              </span>
            </div>
          </div>

          {/* SCALER LAUNCHPAD VENTURE PITCH */}
          <div className="bg-white border border-slate-200 border-l-4 border-l-brand-green rounded-3xl p-6 md:p-8 hover:shadow-md transition-all duration-200 flex flex-col justify-between group shadow-sm">
            <div className="space-y-6">
              {/* Card Header */}
              <div className="flex justify-between items-start gap-2 pb-2 border-b border-slate-100">
                <span className="px-2 py-0.5 bg-brand-green/5 border border-brand-green/20 text-brand-green text-[8px] font-mono rounded font-bold uppercase tracking-wider">
                  Scaler School of Technology
                </span>
                <span className="text-[9px] font-mono text-text-secondary shrink-0 flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" /> May 2026
                </span>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <h4 className="font-sans font-black text-base md:text-lg text-text-primary group-hover:text-brand-green transition-colors uppercase tracking-tight leading-snug">
                  Top 10 Finalist &bull; Scaler LaunchPad Venture Pitch
                </h4>
                <p className="text-xs text-text-secondary font-sans font-light leading-relaxed">
                  Shortlisted to present an AI product concept live before a panel of technical advisors and software industry investors at Scaler HQ, earning a placement in the Top 10.
                </p>
              </div>

              {/* What I Gained */}
              <div className="space-y-2 bg-bg-secondary border border-slate-200/60 p-5 rounded-2xl">
                <span className="block font-mono text-[8px] text-brand-green uppercase tracking-widest font-bold">
                  // Pitching Scope
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-primary font-sans font-light">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                    <span>Live Technical Presentation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                    <span>Advisor Panel Evaluation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                    <span>System Architecture Review</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                    <span>Scaler HQ Demo Sessions</span>
                  </li>
                </ul>
              </div>

              {/* How It Influenced My Work */}
              <div className="space-y-2.5 border-t border-slate-100 pt-4">
                <span className="block font-mono text-[8px] text-brand-green uppercase tracking-widest font-bold">
                  // How It Influenced My Work
                </span>
                <ul className="space-y-1.5 text-xs text-text-secondary font-sans font-light">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                    <span><strong className="font-semibold text-text-primary">Defended Architecture:</strong> Handled questions regarding database complexity, server endpoints, and potential API latencies.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                    <span><strong className="font-semibold text-text-primary">Structured Delivery:</strong> Refined technical explanations into clear logic that resonates with both developers and stakeholders.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[8px] font-mono text-text-secondary uppercase">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-brand-green" /> RECONISTRY_ID // VENTURE_PITCH
              </span>
              <span className="font-bold flex items-center gap-1 text-brand-green">
                VERIFIED <CheckCircle2 className="w-3 h-3 text-brand-green" />
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 2 — PROFESSIONAL MILESTONES */}
      <div className="space-y-8 pt-8 border-t border-slate-100">
        <div className="border-b border-slate-100 pb-3">
          <span className="block font-mono text-[9px] text-brand-blue uppercase font-bold tracking-widest">
            // Section 02
          </span>
          <h3 className="text-xl font-sans font-black text-text-primary uppercase tracking-tight">
            Professional Milestones
          </h3>
          <p className="text-xs text-text-secondary font-sans font-light max-w-2xl">
            Practical engagements, research timelines, and corporate diagnostic work completed in formal environments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* AMA RESEARCH INTERNSHIP */}
          <div className="bg-white border border-slate-200 border-l-4 border-l-brand-yellow rounded-3xl p-6 md:p-8 hover:shadow-md transition-all duration-200 flex flex-col justify-between group shadow-sm">
            <div className="space-y-6">
              {/* Card Header */}
              <div className="flex justify-between items-start gap-2 pb-2 border-b border-slate-100">
                <span className="px-2 py-0.5 bg-brand-yellow/5 border border-brand-yellow/20 text-brand-yellow text-[8px] font-mono rounded font-bold uppercase tracking-wider">
                  Ahmedabad Management Association (AMA)
                </span>
                <span className="text-[9px] font-mono text-text-secondary shrink-0 flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" /> April 2026 – June 2026
                </span>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <h4 className="font-sans font-black text-base md:text-lg text-text-primary group-hover:text-brand-yellow transition-colors uppercase tracking-tight leading-snug">
                  Industry Research Internship
                </h4>
                <p className="text-xs text-text-secondary font-sans font-light leading-relaxed">
                  Conducted systematic technological readiness audits and mapped operational value chains across eight key capital-intensive sectors during a formal academic internship.
                </p>
              </div>

              {/* What I Gained */}
              <div className="space-y-2 bg-bg-secondary border border-slate-200/60 p-5 rounded-2xl">
                <span className="block font-mono text-[8px] text-brand-yellow uppercase tracking-widest font-bold">
                  // Core Engagement Scope
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-primary font-sans font-light">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                    <span>8 Capital-Intensive Sectors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                    <span>Technological Readiness Audits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                    <span>Mapping Value-Chain Friction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                    <span>Formal Research Syntheses</span>
                  </li>
                </ul>
              </div>

              {/* How It Influenced My Work */}
              <div className="space-y-2.5 border-t border-slate-100 pt-4">
                <span className="block font-mono text-[8px] text-brand-green uppercase tracking-widest font-bold">
                  // How It Influenced My Work
                </span>
                <ul className="space-y-1.5 text-xs text-text-secondary font-sans font-light">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                    <span><strong className="font-semibold text-text-primary">Diagnostic-First Approach:</strong> Established a rigorous diagnostic methodology to understand root friction before choosing software solutions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                    <span><strong className="font-semibold text-text-primary">Value-Chain Mapping:</strong> Learned to visually outline operational steps to map precise systems and database connections.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[8px] font-mono text-text-secondary uppercase">
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-brand-yellow" /> RECONISTRY_ID // AMA_MILESTONE
              </span>
              <span className="font-bold flex items-center gap-1 text-brand-green">
                VERIFIED <CheckCircle2 className="w-3 h-3 text-brand-green" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3 — CERTIFICATIONS */}
      <div className="space-y-8 pt-8 border-t border-slate-100">
        <div className="border-b border-slate-100 pb-3">
          <span className="block font-mono text-[9px] text-brand-blue uppercase font-bold tracking-widest">
            // Section 03
          </span>
          <h3 className="text-xl font-sans font-black text-text-primary uppercase tracking-tight">
            Certifications
          </h3>
          <p className="text-xs text-text-secondary font-sans font-light max-w-2xl">
            Standardized credentials and academic benchmarks validating professional communication, presentation curation, and technical writing foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* IELTS */}
          <div className="bg-white border border-slate-200 border-l-4 border-l-brand-red rounded-3xl p-6 hover:shadow-md transition-all duration-200 flex flex-col justify-between group shadow-sm">
            <div className="space-y-4">
              <div className="flex justify-between items-start gap-2 pb-2 border-b border-slate-100">
                <span className="px-2 py-0.5 bg-bg-secondary border border-slate-200 text-text-secondary text-[8px] font-mono rounded font-bold uppercase tracking-wider">
                  IDP Education
                </span>
                <span className="text-[9px] font-mono text-text-secondary shrink-0 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" /> January 2026
                </span>
              </div>
              
              <div className="space-y-1">
                <h4 className="font-sans font-black text-sm md:text-base text-text-primary group-hover:text-brand-blue transition-colors uppercase tracking-tight leading-snug">
                  IELTS Academic — Band 7.0
                </h4>
              </div>

              <div className="space-y-3 bg-bg-secondary border border-slate-200/60 p-4 rounded-2xl text-xs">
                <div>
                  <span className="block font-mono text-[7.5px] text-brand-red uppercase tracking-wider font-bold">// Purpose</span>
                  <p className="text-text-primary font-sans font-light leading-relaxed mt-0.5">
                    Demonstrates English proficiency for academic, technical, and professional communication.
                  </p>
                </div>
                <div className="border-t border-slate-200/55 pt-2">
                  <span className="block font-mono text-[7.5px] text-brand-green uppercase tracking-wider font-bold">// Current Relevance</span>
                  <p className="text-text-secondary font-sans font-medium italic leading-relaxed mt-0.5">
                    Supports collaboration, documentation, presentations, and global opportunities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[8px] font-mono text-text-secondary uppercase">
              <span className="flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-brand-red" /> RECONISTRY_ID // IELTS_C1
              </span>
              <span className="font-bold text-brand-green">APPROVED</span>
            </div>
          </div>

          {/* CANVA */}
          <div className="bg-white border border-slate-200 border-l-4 border-l-brand-blue rounded-3xl p-6 hover:shadow-md transition-all duration-200 flex flex-col justify-between group shadow-sm">
            <div className="space-y-4">
              <div className="flex justify-between items-start gap-2 pb-2 border-b border-slate-100">
                <span className="px-2 py-0.5 bg-bg-secondary border border-slate-200 text-text-secondary text-[8px] font-mono rounded font-bold uppercase tracking-wider">
                  Canva Academy
                </span>
                <span className="text-[9px] font-mono text-text-secondary shrink-0 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" /> March 2026
                </span>
              </div>
              
              <div className="space-y-1">
                <h4 className="font-sans font-black text-sm md:text-base text-text-primary group-hover:text-brand-blue transition-colors uppercase tracking-tight leading-snug">
                  Canva Visual Suite Certification
                </h4>
              </div>

              <div className="space-y-3 bg-bg-secondary border border-slate-200/60 p-4 rounded-2xl text-xs">
                <div>
                  <span className="block font-mono text-[7.5px] text-brand-blue uppercase tracking-wider font-bold">// Purpose</span>
                  <p className="text-text-primary font-sans font-light leading-relaxed mt-0.5">
                    Demonstrates understanding of visual communication and presentation design.
                  </p>
                </div>
                <div className="border-t border-slate-200/55 pt-2">
                  <span className="block font-mono text-[7.5px] text-brand-green uppercase tracking-wider font-bold">// Current Relevance</span>
                  <p className="text-text-secondary font-sans font-medium italic leading-relaxed mt-0.5">
                    Supports UI/UX presentations, product storytelling, and research communication.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[8px] font-mono text-text-secondary uppercase">
              <span className="flex items-center gap-1.5">
                <Layout className="w-4 h-4 text-brand-blue" /> RECONISTRY_ID // CANVA_VISUAL
              </span>
              <span className="font-bold text-brand-green">APPROVED</span>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 4 — TECHNICAL LEARNING */}
      <div className="space-y-8 pt-8 border-t border-slate-100">
        <div className="border-b border-slate-100 pb-3">
          <span className="block font-mono text-[9px] text-brand-blue uppercase font-bold tracking-widest">
            // Section 04
          </span>
          <h3 className="text-xl font-sans font-black text-text-primary uppercase tracking-tight">
            Technical Learning
          </h3>
          <p className="text-xs text-text-secondary font-sans font-light max-w-2xl">
            Algorithmic practice and structured language syntax solved under compilation bounds.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* HACKERRANK PRACTICE PLATFORM */}
          <div className="bg-white border border-slate-200 border-l-4 border-l-brand-green rounded-3xl p-6 md:p-8 hover:shadow-md transition-all duration-200 flex flex-col justify-between group shadow-sm">
            <div className="space-y-6">
              <div className="flex justify-between items-start gap-2 pb-2 border-b border-slate-100">
                <span className="px-2 py-0.5 bg-bg-secondary border border-slate-200 text-text-secondary text-[8px] font-mono rounded font-bold uppercase tracking-wider">
                  HackerRank Platform
                </span>
                <span className="text-[9px] font-mono text-text-secondary shrink-0 flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" /> Active Technical Practice
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="font-sans font-black text-base md:text-lg text-text-primary group-hover:text-brand-green transition-colors uppercase tracking-tight leading-snug">
                  HackerRank Practice Platform
                </h4>
                <p className="text-xs text-text-secondary font-sans font-light leading-relaxed">
                  Utilized as a continuous, independent practice system to run algorithmic scripts, study memory usage, and verify optimal execution models under rigorous testing inputs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="space-y-1.5 p-4 bg-bg-secondary border border-slate-200/60 rounded-2xl">
                  <span className="block font-mono text-[8px] text-brand-green uppercase tracking-widest font-bold">// Problem Solving</span>
                  <p className="text-xs text-text-secondary leading-relaxed font-sans font-light">
                    Focused on fundamental math logic, array manipulations, recursive strategies, and spatial search routines to build clean complexity habits.
                  </p>
                </div>
                <div className="space-y-1.5 p-4 bg-bg-secondary border border-slate-200/60 rounded-2xl">
                  <span className="block font-mono text-[8px] text-brand-blue uppercase tracking-widest font-bold">// Programming Practice</span>
                  <p className="text-xs text-text-secondary leading-relaxed font-sans font-light">
                    Applying structural data types, class hierarchies, pointers, and memory allocations across modular compilation tests.
                  </p>
                </div>
                <div className="space-y-1.5 p-4 bg-bg-secondary border border-slate-200/60 rounded-2xl">
                  <span className="block font-mono text-[8px] text-brand-yellow uppercase tracking-widest font-bold">// Language Proficiency</span>
                  <p className="text-xs text-text-secondary leading-relaxed font-sans font-light">
                    Active debugging and syntax practice across C++, Python, Java, and C to expand multi-paradigm agility.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[8px] font-mono text-text-secondary uppercase">
              <span className="flex items-center gap-1.5">
                <Code className="w-4 h-4 text-brand-green" /> RECONISTRY_ID // HACKERRANK_PRACTICE
              </span>
              <span className="font-bold flex items-center gap-1 text-brand-green">
                ACTIVE <CheckCircle2 className="w-3 h-3 text-brand-green" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5 — FUTURE GOALS */}
      <div className="space-y-8 pt-8 border-t border-slate-100">
        <div className="border-b border-slate-100 pb-3">
          <span className="block font-mono text-[9px] text-brand-blue uppercase font-bold tracking-widest">
            // Section 05
          </span>
          <h3 className="text-xl font-sans font-black text-text-primary uppercase tracking-tight">
            Looking Ahead
          </h3>
          <p className="text-xs text-text-secondary font-sans font-light max-w-2xl">
            Targeted professional benchmarks and planned learning roadmaps established to systematically expand my engineering capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          
          {/* GOAL 1 — ADVANCED AI PROJECTS */}
          <div className="border border-dashed border-slate-300 bg-slate-50/50 rounded-3xl p-5 flex flex-col justify-between hover:border-slate-400 transition-colors">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="p-2 bg-white border border-slate-200 rounded-xl">
                  <Target className="w-4 h-4 text-slate-400" />
                </div>
                <span className="text-[7.5px] font-mono px-2 py-0.5 bg-slate-200/70 text-slate-500 rounded font-bold">
                  PLANNED
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-black text-xs text-slate-700 uppercase tracking-tight">
                  Advanced AI Projects
                </h4>
                <p className="text-[11px] text-slate-500 font-sans font-light leading-relaxed">
                  Designing production-ready AI systems utilizing advanced prompt chaining and modular agentic memory.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-200/50 text-[7px] font-mono text-slate-400 uppercase">
              FUTURE ASPIRATION // AGENTIC
            </div>
          </div>

          {/* GOAL 2 — CLOUD CERTIFICATIONS */}
          <div className="border border-dashed border-slate-300 bg-slate-50/50 rounded-3xl p-5 flex flex-col justify-between hover:border-slate-400 transition-colors">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="p-2 bg-white border border-slate-200 rounded-xl">
                  <Cloud className="w-4 h-4 text-slate-400" />
                </div>
                <span className="text-[7.5px] font-mono px-2 py-0.5 bg-slate-200/70 text-slate-500 rounded font-bold">
                  PLANNED
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-black text-xs text-slate-700 uppercase tracking-tight">
                  Cloud Certifications
                </h4>
                <p className="text-[11px] text-slate-500 font-sans font-light leading-relaxed">
                  Working toward AWS Developer and Azure fundamentals to build scalable server setups.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-200/50 text-[7px] font-mono text-slate-400 uppercase">
              FUTURE ASPIRATION // AWS_AZURE
            </div>
          </div>

          {/* GOAL 3 — OPEN SOURCE CONTRIBUTIONS */}
          <div className="border border-dashed border-slate-300 bg-slate-50/50 rounded-3xl p-5 flex flex-col justify-between hover:border-slate-400 transition-colors">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="p-2 bg-white border border-slate-200 rounded-xl">
                  <Code className="w-4 h-4 text-slate-400" />
                </div>
                <span className="text-[7.5px] font-mono px-2 py-0.5 bg-slate-200/70 text-slate-500 rounded font-bold">
                  PLANNED
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-black text-xs text-slate-700 uppercase tracking-tight">
                  Open Source
                </h4>
                <p className="text-[11px] text-slate-500 font-sans font-light leading-relaxed">
                  Contributing to developer utility libraries, documentation, and modern front-end frameworks.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-200/50 text-[7px] font-mono text-slate-400 uppercase">
              FUTURE ASPIRATION // GITHUB
            </div>
          </div>

          {/* GOAL 4 — RESEARCH PUBLICATIONS */}
          <div className="border border-dashed border-slate-300 bg-slate-50/50 rounded-3xl p-5 flex flex-col justify-between hover:border-slate-400 transition-colors">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="p-2 bg-white border border-slate-200 rounded-xl">
                  <BookOpen className="w-4 h-4 text-slate-400" />
                </div>
                <span className="text-[7.5px] font-mono px-2 py-0.5 bg-slate-200/70 text-slate-500 rounded font-bold">
                  PLANNED
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-black text-xs text-slate-700 uppercase tracking-tight">
                  Publications
                </h4>
                <p className="text-[11px] text-slate-500 font-sans font-light leading-relaxed">
                  Curation and submission of academic findings on industrial technology readiness indices.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-200/50 text-[7px] font-mono text-slate-400 uppercase">
              FUTURE ASPIRATION // ACADEMIC
            </div>
          </div>

          {/* GOAL 5 — GRADUATE STUDIES */}
          <div className="border border-dashed border-slate-300 bg-slate-50/50 rounded-3xl p-5 flex flex-col justify-between hover:border-slate-400 transition-colors">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="p-2 bg-white border border-slate-200 rounded-xl">
                  <Activity className="w-4 h-4 text-slate-400" />
                </div>
                <span className="text-[7.5px] font-mono px-2 py-0.5 bg-slate-200/70 text-slate-500 rounded font-bold">
                  PLANNED
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-black text-xs text-slate-700 uppercase tracking-tight">
                  Graduate Studies
                </h4>
                <p className="text-[11px] text-slate-500 font-sans font-light leading-relaxed">
                  Exploring advanced post-graduate computer science curricula specializing in distributed systems.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-200/50 text-[7px] font-mono text-slate-400 uppercase">
              FUTURE ASPIRATION // MSC_CS
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 4 — LEARNING PHILOSOPHY: CONTINUOUS LEARNING */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm border-l-4 border-l-brand-blue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl pointer-events-none" />
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-brand-blue font-mono text-[9px] uppercase tracking-widest font-bold">
            <BookOpen className="w-3.5 h-3.5" /> LEARNING PHILOSOPHY
          </div>
          <h4 className="text-xl font-sans font-black text-text-primary uppercase tracking-tight">
            Continuous Learning
          </h4>
        </div>
        
        <div className="space-y-4 max-w-3xl">
          <p className="text-xs text-text-secondary leading-relaxed font-light font-sans">
            While formal certifications and standardized platforms validate specific learning benchmarks, they are designed to complement—not replace—direct software execution. True engineering capacity is proven not through simple test-taking, but by shipping live code, resolving runtime exceptions, and formulating rigorous, data-driven research.
          </p>
          <p className="text-xs text-text-primary font-sans font-medium border-l-2 border-slate-200 pl-4 py-1 italic">
            "My growth as an engineer is driven by an unyielding dedication to self-directed education, building reliable, user-centered software, and bridging analytical academic theories with practical systems development."
          </p>
        </div>
        
        {onNavigate && (
          <div className="pt-2 flex flex-col sm:flex-row gap-3 border-t border-slate-100">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-brand-blue text-white rounded-full text-[10px] uppercase tracking-wider font-bold hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm cursor-pointer w-fit animate-pulse"
            >
              Let's Connect <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
