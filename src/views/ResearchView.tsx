import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Layers, 
  CheckCircle2, 
  TrendingUp, 
  FileText,
  AlertTriangle,
  Lightbulb,
  Search,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  Clock,
  Briefcase,
  Zap,
  Target,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import IndustryResearchDemo from '../components/IndustryResearchDemo';
import { CASES_DATA, IndustryCase } from '../data/research';

export default function ResearchView({ onNavigate }: { onNavigate?: (viewId: string) => void }) {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const activeCase = CASES_DATA[selectedIdx];

  // Map industry name to visual icons or color schemes for variety & visual premium design
  const getBrandColors = (index: number) => {
    const schemes = [
      { border: 'hover:border-brand-blue border-l-brand-blue', text: 'text-brand-blue', bg: 'bg-brand-blue/10' },
      { border: 'hover:border-brand-violet border-l-brand-violet', text: 'text-brand-violet', bg: 'bg-brand-violet/10' },
      { border: 'hover:border-brand-lavender border-l-brand-lavender', text: 'text-brand-lavender', bg: 'bg-brand-lavender/10' },
      { border: 'hover:border-brand-coral border-l-brand-coral', text: 'text-brand-coral', bg: 'bg-brand-coral/10' },
      { border: 'hover:border-brand-green border-l-brand-green', text: 'text-brand-green', bg: 'bg-brand-green/10' },
      { border: 'hover:border-brand-yellow border-l-brand-yellow', text: 'text-brand-yellow', bg: 'bg-brand-yellow/10' },
      { border: 'hover:border-brand-amber border-l-brand-amber', text: 'text-brand-amber', bg: 'bg-brand-amber/10' }
    ];
    return schemes[index % schemes.length];
  };

  return (
    <div className="space-y-16 py-4">
      {/* HEADER SECTION */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-brand-blue font-secondary text-xs font-medium uppercase tracking-[0.05em]">
          <Compass className="w-3.5 h-3.5 text-brand-blue" /> AI WORKFLOWS RESEARCH LAB
        </div>
        <h2 className="text-[28px] sm:text-[36px] font-display font-semibold tracking-[-0.01em] uppercase text-text-primary leading-[34px] sm:leading-[42px]">
          Sector Value Chains &amp; AI Interventions
        </h2>
        <p className="text-xs font-secondary text-text-secondary uppercase tracking-[0.05em] font-medium leading-relaxed">
          AMBASSADOR STUDIES &bull; AHMEDABAD MANAGEMENT ASSOCIATION (AMA) INTEL REPORTS &bull; SYSTEMATIC SECTORAL AUDITS
        </p>
      </div>

      {/* SECTION 1 & 2: PHILOSOPHY & WHY THIS RESEARCH */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Research Philosophy */}
        <div className="bg-bg-secondary border border-slate-200 rounded-3xl p-6 md:p-8 space-y-4 shadow-xs">
          <div className="inline-flex items-center gap-1.5 text-brand-blue font-secondary text-xs font-medium uppercase tracking-[0.05em]">
            <Compass className="w-3.5 h-3.5" /> FOUNDATIONAL FOCUS
          </div>
          <h3 className="text-[20px] font-sans font-semibold uppercase text-text-primary tracking-tight">
            Research Philosophy
          </h3>
          <p className="font-sans text-[14px] text-text-secondary leading-[22px]">
            My approach is grounded in the belief that AI solutions can only be effective if we thoroughly understand the industries they are meant to serve. Rather than proposing generic algorithm applications, I focus on analyzing real-world workflows, core business processes, operational bottlenecks, and detailed value chains before proposing technical implementations.
          </p>
          <p className="font-sans text-[14px] text-text-secondary leading-[22px]">
            By analyzing where friction actually occurs in day-to-day operations, we can design practical, reliable software systems that target genuine issues, ensuring that technology serves a clear operational purpose.
          </p>
        </div>

        {/* Why This Research */}
        <div className="bg-bg-secondary border border-slate-200 rounded-3xl p-6 md:p-8 space-y-4 shadow-xs border-t-4 border-t-brand-green">
          <div className="inline-flex items-center gap-1.5 text-brand-green font-secondary text-xs font-medium uppercase tracking-[0.05em]">
            <FileText className="w-3.5 h-3.5" /> PROFESSIONAL CONTEXT
          </div>
          <h3 className="text-[20px] font-sans font-semibold uppercase text-text-primary tracking-tight">
            Why This Research?
          </h3>
          <p className="font-sans text-[14px] text-text-secondary leading-[22px]">
            This research was conducted during an Industry Research Internship at the <strong>Ahmedabad Management Association (AMA)</strong>. The primary objective was to perform structured operational audits to evaluate the feasibility of AI adoption across capital-intensive fields.
          </p>
          <p className="font-sans text-[14px] text-text-secondary leading-[22px]">
            This opportunity served as a structured learning experience with real-world business exposure. By looking beyond abstract academic concepts, I was able to examine how supply chains, chemical distillation towers, and heavy transport terminals actually operate in a professional context.
          </p>
        </div>
      </div>

      {/* SECTION 4 & 5: DASHBOARD & PRINCIPLES */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Research Dashboard */}
        <div className="lg:col-span-5 bg-bg-card border border-slate-200/50 p-6 md:p-8 rounded-3xl flex flex-col justify-between space-y-6 shadow-xs">
          <div className="space-y-1">
            <span className="block font-secondary text-xs text-brand-blue uppercase font-medium tracking-[0.05em]">// METRIC OVERVIEW</span>
            <h4 className="text-[18px] font-sans font-semibold uppercase text-text-primary tracking-tight">Research Dashboard</h4>
            <p className="text-xs text-text-secondary font-sans leading-relaxed">Verified parameters from the AMA research term.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-bg-secondary border border-slate-100 p-4 rounded-2xl text-center space-y-1">
              <span className="block font-sans text-3xl font-extrabold text-brand-blue">8</span>
              <span className="block font-secondary text-[11px] text-text-secondary uppercase tracking-[0.05em] font-semibold">Industries Researched</span>
            </div>
            <div className="bg-bg-secondary border border-slate-100 p-4 rounded-2xl text-center space-y-1 flex flex-col justify-center items-center">
              <span className="block font-sans text-[20px] font-extrabold text-brand-green leading-[36px]">AMA</span>
              <span className="block font-secondary text-[11px] text-text-secondary uppercase tracking-[0.05em] font-semibold">Internship Context</span>
            </div>
            <div className="bg-bg-secondary border border-slate-100 p-4 rounded-2xl text-center space-y-1">
              <span className="block font-sans text-3xl font-extrabold text-brand-yellow">8</span>
              <span className="block font-secondary text-[11px] text-text-secondary uppercase tracking-[0.05em] font-semibold">Value Chains Analysed</span>
            </div>
            <div className="bg-bg-secondary border border-slate-100 p-4 rounded-2xl text-center space-y-1">
              <span className="block font-sans text-3xl font-extrabold text-brand-red">8</span>
              <span className="block font-secondary text-[11px] text-text-secondary uppercase tracking-[0.05em] font-semibold">Strategic Reports</span>
            </div>
          </div>
        </div>

        {/* Research Principles */}
        <div className="lg:col-span-7 bg-bg-card border border-slate-200/50 p-6 md:p-8 rounded-3xl space-y-6 shadow-xs">
          <div className="space-y-1">
            <span className="block font-secondary text-xs text-brand-green uppercase font-medium tracking-[0.05em]">// OPERATIONAL GUIDELINES</span>
            <h4 className="text-[18px] font-sans font-semibold uppercase text-text-primary tracking-tight">Research Principles</h4>
            <p className="text-xs text-text-secondary font-sans leading-relaxed">Fundamental guidelines directing my analytical workflow.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5 border-l-2 border-brand-blue/30 pl-3">
              <h5 className="font-sans font-semibold text-sm text-text-primary uppercase tracking-tight">Understand Before Recommending</h5>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                Map the detailed steps of an industry workflow and supply chain before proposing any AI interventions.
              </p>
            </div>
            <div className="space-y-1.5 border-l-2 border-brand-green/30 pl-3">
              <h5 className="font-sans font-semibold text-sm text-text-primary uppercase tracking-tight">Research Before Automating</h5>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                Analyze operational details and failure logs to find the exact mechanical bottlenecks first.
              </p>
            </div>
            <div className="space-y-1.5 border-l-2 border-brand-yellow/30 pl-3">
              <h5 className="font-sans font-semibold text-sm text-text-primary uppercase tracking-tight">Focus on Practical AI Adoption</h5>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                Prioritize low-risk, high-impact features over trendy but unreliable integrations.
              </p>
            </div>
            <div className="space-y-1.5 border-l-2 border-brand-red/30 pl-3">
              <h5 className="font-sans font-semibold text-sm text-text-primary uppercase tracking-tight">Value Before Technology</h5>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                Ensure every technical recommendation directly maps to real business metrics and efficiency gains.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: RESEARCH FRAMEWORK */}
      <section className="space-y-8 pt-4 border-t border-slate-200" id="research-framework-section">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 text-brand-blue font-secondary text-xs font-medium uppercase tracking-[0.05em]">
            <Compass className="w-3.5 h-3.5 text-brand-blue" /> Systematic Process
          </span>
          <h3 className="text-2xl font-sans font-semibold uppercase text-text-primary tracking-tight">
            Research Framework
          </h3>
          <p className="font-sans text-[14px] text-text-secondary max-w-4xl leading-[22px]">
            A structured approach I followed during the internship to analyse industries, identify operational challenges, and evaluate practical AI opportunities. Rather than presenting this as a proprietary methodology, this process represents a standard framework used to audit and evaluate technology readiness.
          </p>
        </div>

        {/* Visual Workflow: Stepper & Multi-column Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Numbered Stepper Buttons */}
          <div className="lg:col-span-5 space-y-2 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
            {[
              { num: '01', title: 'Industry Understanding', short: 'Gaining domain knowledge of sector-specific protocols and regulations.' },
              { num: '02', title: 'Market & Industry Overview', short: 'Analyzing market size, key players, and competitive forces.' },
              { num: '03', title: 'Value Chain Analysis', short: 'Mapping materials, data, and step-by-step processing paths.' },
              { num: '04', title: 'Business Function Analysis', short: 'Deconstructing the business into functional units and operations.' },
              { num: '05', title: 'Operational Pain Point ID', short: 'Pinpointing bottlenecks, high-risk manual tasks, and latency.' },
              { num: '06', title: 'Current Technology Assessment', short: 'Evaluating existing legacy instrumentation, telemetry, and hardware.' },
              { num: '07', title: 'AI Opportunity Analysis', short: 'Spotting high-impact areas for vision, prediction, or LLM agents.' },
              { num: '08', title: 'Implementation Considerations', short: 'Assessing deployment safety, compute parameters, and risks.' },
              { num: '09', title: 'Strategic Recommendations', short: 'Synthesizing roadmap timelines with commercial ROI estimates.' }
            ].map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-start gap-4 cursor-pointer ${
                  activeStep === idx
                    ? 'bg-white border-brand-blue ring-1 ring-brand-blue/20 shadow-xs'
                    : 'bg-bg-secondary/50 border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-md border shrink-0 ${
                  activeStep === idx
                    ? 'bg-brand-blue/10 border-brand-blue/20 text-brand-blue'
                    : 'bg-slate-100 border-slate-200 text-text-secondary'
                }`}>
                  {step.num}
                </span>
                <div className="space-y-1">
                  <h4 className="font-sans font-semibold text-xs text-text-primary uppercase tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-[10px] text-text-secondary line-clamp-1 font-sans">
                    {step.short}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: High Fidelity Details Viewer */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-xs relative"
              >
                {/* Decorative node number index background watermark */}
                <div className="absolute right-6 top-4 font-mono text-5xl font-black text-slate-100/60 pointer-events-none select-none">
                  0{activeStep + 1}
                </div>

                <div className="space-y-2 border-b border-slate-100 pb-4">
                  <span className="font-secondary text-[11px] text-brand-blue uppercase font-semibold tracking-[0.05em]">// STEP DETAILS</span>
                  <h4 className="text-[18px] font-sans font-semibold uppercase text-text-primary tracking-tight">
                    {[
                      'Industry Understanding',
                      'Market & Industry Overview',
                      'Value Chain Analysis',
                      'Business Function Analysis',
                      'Operational Pain Point Identification',
                      'Current Technology Assessment',
                      'AI Opportunity Analysis',
                      'Implementation Considerations',
                      'Strategic Recommendations'
                    ][activeStep]}
                  </h4>
                  <p className="font-sans text-[14px] text-text-secondary leading-[22px]">
                    {[
                      'Establishing deep domain literacy to navigate industrial terminology and sector-specific operational rules.',
                      'Reviewing macroeconomic factors, industrial sizing metrics, and baseline compliance laws defining the landscape.',
                      'Deconstructing physical material handoffs and telemetry logs from intake feed gates through final refining dispatch.',
                      'Isolating distinct business silos such as supply dispatch, mechanical furnace systems, and quality assay loops.',
                      'Detecting critical mechanical vulnerabilities, manual processing friction points, and temperature adjustment latencies.',
                      'Auditing the legacy data stack, checking PLC connectivity, sensor calibration drift, and bandwidth parameters.',
                      'Formulating precise algorithmic intervention pathways to replace high-error manual sorting or reactive adjustments.',
                      'Evaluating operational hazards, model alignment guardrails, local compute options, and safety interlocks.',
                      'Packaging actionable, phased implementation roadmap briefs supported by estimated yield metrics.'
                    ][activeStep]}
                  </p>
                </div>

                {/* Purpose & Expected Output Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-2 p-4 bg-slate-50 border border-slate-150 rounded-2xl">
                    <span className="font-secondary text-[11px] text-brand-blue uppercase font-semibold tracking-[0.05em] block flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5" /> Stage Purpose
                    </span>
                    <p className="text-xs text-text-primary leading-relaxed font-sans font-semibold">
                      {[
                        'To align research objectives with the unique standard operating procedures and technical lexicons of the industry.',
                        'To contextualize physical operations within broad market realities and regional compliance regulations.',
                        'To isolate every mechanical conversion, thermal process step, and data handoff in the operational pipeline.',
                        'To identify the primary cost-driving activities and clarify organizational responsibility boundaries.',
                        'To identify high-frequency failure logs, manual grading error-rates, and physical energy wastes.',
                        'To measure telemetry availability and assess the existing operational tech stack capability to hold and process data.',
                        'To align custom AI capabilities (computer vision, anomaly classification, LLMs) with verified business problems.',
                        'To preemptively mitigate physical safety hazards, computing constraints, and model drift during deployment.',
                        'To deliver a comprehensive investment decision matrix with clear milestones to corporate decision makers.'
                      ][activeStep]}
                    </p>
                  </div>

                  <div className="space-y-2 p-4 bg-emerald-50/20 border border-emerald-100 rounded-2xl">
                    <span className="font-secondary text-[11px] text-brand-green uppercase font-semibold tracking-[0.05em] block flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" /> Expected Output
                    </span>
                    <p className="text-xs text-text-secondary leading-relaxed font-sans">
                      {[
                        'Standardized sector briefing paper with domain terms glossary.',
                        'Industrial positioning report and regulatory compliance summary.',
                        'Granular business process flow and detailed Value Chain Analysis map.',
                        'Functional organization chart and inter-department operational map.',
                        'Prioritized operational bottleneck registry with severity weightings.',
                        'Telemetry infrastructure report and data flow diagnostic chart.',
                        'Formulated AI Opportunity Analysis specs and model capability assessments.',
                        'Deployment hazard plan and system safety interlock architecture.',
                        'Structured business proposal, process prompts, and phased roadmap.'
                      ][activeStep]}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Sub-framework learnings (What This Framework Helped Me Understand) */}
        <div className="space-y-4 pt-4">
          <div className="space-y-1">
            <span className="block font-secondary text-xs text-brand-green uppercase font-medium tracking-[0.05em]">// CRITICAL ANALYTICAL LEARNINGS</span>
            <h4 className="text-[18px] font-sans font-semibold text-text-primary uppercase tracking-tight">What This Framework Helped Me Understand</h4>
            <p className="text-xs text-text-secondary font-sans">
              Following this structured process allowed me to systematically diagnose the operational health of capital-intensive industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Business Workflows',
                desc: 'Identified precise process step transformations (e.g., solvent extraction reaction times) rather than looking at operations from a high level.',
                color: 'border-l-brand-blue'
              },
              {
                title: 'Operational Bottlenecks',
                desc: 'Localized specific high-delay steps, such as thermal lag controls and manual gemstone inclusions inspection, where physical throughput was choked.',
                color: 'border-l-brand-green'
              },
              {
                title: 'Digital Maturity',
                desc: 'Gained an objective view of legacy sensor infrastructure, finding that manual telemetry logs often introduce information delays.',
                color: 'border-l-brand-yellow'
              },
              {
                title: 'AI Readiness',
                desc: 'Assessed whether local industrial plants could support low-latency model inference or if they needed cloud-hosted asynchronous logic.',
                color: 'border-l-brand-red'
              },
              {
                title: 'Implementation Barriers',
                desc: 'Analyzed strict real-world hazards, such as reactor chemical thermal spikes, and the high cost of high-frequency sensory arrays.',
                color: 'border-l-brand-blue'
              },
              {
                title: 'Technology Opportunities',
                desc: 'Mapped exact programmatic solutions—like acoustic wave analyzers for impeller pumps or spatiotemporal solar grid routing—to legacy pipelines.',
                color: 'border-l-brand-green'
              }
            ].map((item, idx) => (
              <div key={idx} className={`bg-white border border-slate-200 rounded-3xl p-5 space-y-2 border-l-4 ${item.color} shadow-xs`}>
                <h4 className="font-sans font-bold text-xs text-text-primary uppercase tracking-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] text-text-secondary leading-relaxed font-sans font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: TRANSITION TO EXPLORER */}
      <div className="bg-bg-secondary border border-slate-200 p-6 md:p-8 rounded-3xl relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6 shadow-xs border-l-4 border-l-brand-blue">
        <div className="absolute top-0 right-0 w-44 h-44 bg-brand-blue/5 rounded-full blur-[60px] pointer-events-none" />
        <div className="space-y-1 text-center md:text-left">
          <h4 className="font-sans font-semibold text-[16px] uppercase text-text-primary tracking-tight">
            Apply Research Framework in Action
          </h4>
          <p className="font-sans text-xs text-text-secondary">
            The following industries illustrate how this diagnostic framework was applied across different business domains.
          </p>
        </div>
        <a 
          href="#industry-explorer-section" 
          className="px-5 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 hover:border-brand-blue text-text-primary font-secondary text-xs font-semibold uppercase tracking-[0.05em] rounded-xl transition-all duration-200 shadow-xs whitespace-nowrap"
        >
          Explore Industries Below ↓
        </a>
      </div>

      {/* CORE INTEGRATION: LIVE INTERACTIVE OPPORTUNITY MAPPING BUBBLE CHART */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="block font-secondary text-xs text-brand-blue uppercase font-medium tracking-[0.05em]">
            // INTERACTIVE ANALYTICS SUITE
          </span>
          <h3 className="text-2xl font-sans font-semibold uppercase text-text-primary tracking-tight">
            Comprehensive Industry Diagnostics Matrix
          </h3>
          <p className="font-sans text-xs text-text-secondary leading-relaxed">
            Discover processed datasets detailing exact workflow steps, structural risks, system prompt templates, and strategic commercial impact estimations across all 8 sector models.
          </p>
        </div>

        {/* Bubble chart view direct integration */}
        <div className="border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <IndustryResearchDemo />
        </div>
      </section>

      {/* SECTION 1 - 9: THE INDUSTRY EXPLORER MAIN SECTION */}
      <section id="industry-explorer-section" className="space-y-8 pt-6">
        {/* Title and Short Introduction */}
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 text-brand-green font-secondary text-xs font-medium uppercase tracking-[0.05em]">
            <Layers className="w-4 h-4 text-brand-green" /> Structured Case Intelligence
          </span>
          <h3 className="text-2xl font-sans font-semibold uppercase text-text-primary tracking-tight">
            Industry Explorer
          </h3>
          <p className="font-sans text-[14px] text-text-secondary max-w-4xl leading-[22px]">
            During my internship at Ahmedabad Management Association (AMA), I analyzed multiple industries to understand their value chains, operational challenges, AI adoption opportunities, and technology readiness.
          </p>
        </div>

        {/* Interactive Industry Explorer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CASES_DATA.map((item, idx) => {
            const colors = getBrandColors(idx);
            const isActive = selectedIdx === idx;
            
            return (
              <div 
                key={idx} 
                onClick={() => {
                  setSelectedIdx(idx);
                  setIsExpanded(true);
                }}
                className={`bg-white border rounded-3xl p-5 flex flex-col justify-between space-y-4 cursor-pointer transition-all duration-300 relative group shadow-sm hover:shadow-md border-l-4 ${colors.border} ${
                  isActive ? 'ring-2 ring-brand-blue/30 border-slate-300' : 'border-slate-200'
                }`}
              >
                <div className="space-y-3">
                  {/* Industry Name */}
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="text-text-primary text-[15px] font-sans font-semibold uppercase tracking-tight leading-snug group-hover:text-brand-blue transition-colors">
                      {item.sector}
                    </h4>
                    {isActive && (
                      <span className="px-1.5 py-0.5 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[9px] font-secondary rounded font-bold uppercase tracking-[0.05em] shrink-0">
                        ACTIVE
                      </span>
                    )}
                  </div>

                  {/* Visual Tags */}
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-1.5 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-secondary font-medium rounded uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* One-line Description */}
                  <p className="font-sans text-xs text-text-secondary leading-normal line-clamp-2">
                    {item.description}
                  </p>

                  {/* Writing Style: Industry -> Challenge -> Research Focus -> AI Opportunities -> Key Learning */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs leading-relaxed">
                    <div>
                      <span className="text-[10px] font-secondary text-brand-red uppercase font-semibold block tracking-[0.05em]">
                        Challenge
                      </span>
                      <p className="text-text-primary font-sans font-normal line-clamp-1">
                        {item.challenge}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-secondary text-brand-blue uppercase font-semibold block tracking-[0.05em]">
                        Research Focus
                      </span>
                      <p className="text-text-primary font-sans font-normal line-clamp-1">
                        {item.researchFocus}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-secondary text-brand-green uppercase font-semibold block tracking-[0.05em]">
                        AI Opportunity Analysis
                      </span>
                      <div className="flex flex-wrap gap-1 mt-0.5">
                        {item.aiOpportunities.slice(0, 2).map((opp, oIdx) => (
                          <span 
                            key={oIdx} 
                            className="px-1.5 py-0.5 bg-brand-green/10 text-brand-green text-[10px] font-secondary rounded font-semibold uppercase tracking-wider"
                          >
                            {opp}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-secondary text-brand-yellow uppercase font-semibold block tracking-[0.05em]">
                        Key Learning
                      </span>
                      <p className="text-text-secondary font-sans font-normal line-clamp-1">
                        {item.keyLearning}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Explore Trigger Button */}
                <div className="pt-2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIdx(idx);
                      setIsExpanded(true);
                      const element = document.getElementById('research-preview-anchor');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`w-full py-2 px-3 rounded-xl font-secondary text-[11px] font-semibold uppercase tracking-[0.05em] flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-brand-blue text-white shadow-xs' 
                        : 'bg-slate-50 border border-slate-200 text-text-primary hover:bg-slate-100'
                    }`}
                  >
                    <span>Explore Research</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* SECTION 4: RESEARCH PREVIEW PANEL (PROFESSIONAL CASE STUDY VIEWER) */}
        <div id="research-preview-anchor" className="pt-4 scroll-mt-24">
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm relative overflow-hidden"
            >
              {/* Decorative accent top boundary bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-blue" />
              <div className="absolute top-4 right-6 text-right hidden sm:block">
                <span className="block text-[8px] font-mono text-text-secondary uppercase tracking-widest">INTERNSHIP SERIES</span>
                <span className="text-[10px] font-mono text-brand-blue font-bold">AMA_CASE_0{selectedIdx + 1}</span>
              </div>

              {/* Header Title with Subtopic */}
              <div className="border-b border-slate-100 pb-5 space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2 py-0.5 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[8px] font-mono rounded font-bold uppercase tracking-wider">
                    {activeCase.complexityIndex} Complexity Case
                  </span>
                  <span className="px-2 py-0.5 bg-brand-green/10 border border-brand-green/20 text-brand-green text-[8px] font-mono rounded font-bold uppercase tracking-wider">
                    ROI Rating: {activeCase.impactScore}%
                  </span>
                </div>
                <h4 className="text-xl md:text-2xl font-sans font-black uppercase text-text-primary tracking-tight">
                  {activeCase.sector}
                </h4>
                <p className="text-xs font-mono text-brand-blue uppercase tracking-wider font-bold">
                  {activeCase.subtopic}
                </p>
              </div>

              {/* Toggle to Expand / Collapse Case Study Details */}
              <div className="flex items-center justify-between bg-slate-50/50 border border-slate-200/80 rounded-2xl p-4">
                <div className="space-y-0.5 pr-4">
                  <span className="text-[9px] font-mono text-brand-blue uppercase font-bold tracking-widest block">CASE STUDY FORMAT</span>
                  <p className="text-xs text-text-primary font-medium">
                    {isExpanded 
                      ? 'Displaying full 7-step structured story (The Problem → Research → Findings → AI Options → Outcome)' 
                      : 'Displaying high-level executive summary'
                    }
                  </p>
                </div>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 hover:border-brand-blue text-text-primary font-mono text-[9px] font-bold uppercase tracking-widest rounded-xl transition-all duration-200 shadow-xs flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                >
                  <span>{isExpanded ? 'Collapse View' : 'Explore Research'}</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Main Content Layout */}
              {!isExpanded ? (
                /* COMPACT SUMMARY VIEW */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Left Column: Brief details */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <span className="text-[9px] font-mono text-brand-blue uppercase font-bold tracking-widest block flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" /> Industry Overview
                      </span>
                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light font-sans">
                        {activeCase.description}
                      </p>
                    </div>

                    <div className="space-y-3 bg-slate-50 border border-slate-200 rounded-2xl p-4 md:p-5">
                      <span className="text-[9px] font-mono text-brand-red uppercase font-bold tracking-widest block flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-brand-red" /> Core Challenge &amp; Bottleneck
                      </span>
                      <p className="text-xs text-text-primary leading-relaxed font-normal font-sans">
                        <strong className="text-brand-red">Primary Friction:</strong> {activeCase.challenge}
                      </p>
                      <div className="space-y-1.5 pt-2 border-t border-slate-200 mt-2">
                        <span className="block text-[8px] font-mono text-text-secondary uppercase font-bold tracking-widest">
                          Adoption Hazards:
                        </span>
                        <ul className="list-disc pl-4 space-y-1 text-[11px] text-text-secondary font-light font-sans">
                          {activeCase.adoptionHazards.slice(0, 2).map((hazard, hIdx) => (
                            <li key={hIdx}>{hazard}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[9px] font-mono text-brand-yellow uppercase font-bold tracking-widest block flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow" /> Strategic ROI Impact
                      </span>
                      <div className="bg-amber-50/20 border border-amber-200/50 rounded-2xl p-4 text-xs space-y-1">
                        <p className="text-text-secondary leading-relaxed font-light font-sans">
                          <strong className="text-text-primary font-bold uppercase">Technical Insight:</strong> {activeCase.keyLearning}
                        </p>
                        <p className="text-text-secondary leading-relaxed font-light font-sans">
                          <strong className="text-brand-green uppercase font-bold">Strategic Value:</strong> {activeCase.strategicROI}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Workflow chain preview */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="space-y-2">
                      <span className="text-[9px] font-mono text-brand-green uppercase font-bold tracking-widest block flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" /> Operational Value Chain
                      </span>
                      <p className="text-[11px] text-text-secondary font-sans font-light">
                        Step-by-step diagnostic sequence of the physical operations.
                      </p>
                      
                      <div className="space-y-2 pt-2">
                        {activeCase.workflowChain.slice(0, 4).map((node, wIdx) => (
                          <div key={wIdx} className="flex items-center gap-3">
                            <span className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 text-text-secondary text-[9px] font-mono font-bold flex items-center justify-center shrink-0">
                              0{wIdx + 1}
                            </span>
                            <div className="bg-bg-secondary border border-slate-200/60 px-3 py-1.5 rounded-xl w-full text-[11px] font-sans font-medium text-text-primary">
                              {node}
                            </div>
                          </div>
                        ))}
                        {activeCase.workflowChain.length > 4 && (
                          <div className="text-[9px] font-mono text-text-secondary text-center">
                            + {activeCase.workflowChain.length - 4} more stages inside expanded details
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3 bg-blue-50/20 border border-brand-blue/20 rounded-2xl p-4 md:p-5">
                      <span className="text-[9px] font-mono text-brand-blue uppercase font-bold tracking-widest block flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5 text-brand-yellow" /> AI Interventions
                      </span>
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap gap-1">
                          {activeCase.aiOpportunities.map((opp, oIdx) => (
                            <span key={oIdx} className="px-1.5 py-0.5 bg-brand-blue/10 text-brand-blue text-[8px] font-mono rounded font-bold">
                              {opp}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-text-secondary leading-relaxed font-light font-sans">
                          {activeCase.innovationSpotlight}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              ) : (
                /* EXPANDED FULL 7-STEP CASE STUDY STORY VIEW */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Left Column: Visual Story Workflow Flowchart (The Problem -> Research -> Findings -> AI Opportunities -> Outcome) */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-brand-blue uppercase font-bold tracking-widest block flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-brand-blue" /> Story Flowchart
                      </span>
                      <p className="text-[10px] text-text-secondary font-light font-sans">
                        Dynamic diagnostic progression mapped from research parameters:
                      </p>
                    </div>

                    <div className="space-y-4 relative pl-6 border-l-2 border-dashed border-slate-200 py-2">
                      {[
                        { stage: 'The Problem', value: activeCase.challenge, icon: AlertTriangle, color: 'text-brand-red border-brand-red/20 bg-brand-red/5' },
                        { stage: 'The Research', value: activeCase.researchFocus, icon: Search, color: 'text-brand-blue border-brand-blue/20 bg-brand-blue/5' },
                        { stage: 'The Findings', value: activeCase.keyFindings[0], icon: CheckCircle2, color: 'text-brand-yellow border-brand-yellow/20 bg-brand-yellow/5' },
                        { stage: 'The AI Opportunities', value: activeCase.aiOpportunities.join(', '), icon: Lightbulb, color: 'text-brand-green border-brand-green/20 bg-brand-green/5' },
                        { stage: 'The Outcome', value: activeCase.strategicROI, icon: Target, color: 'text-brand-blue border-brand-blue/20 bg-brand-blue/5' },
                      ].map((node, nIdx) => (
                        <div key={nIdx} className="relative group">
                          {/* Node Bullet Icon */}
                          <span className={`absolute -left-[37px] top-1.5 w-6 h-6 rounded-full border flex items-center justify-center shrink-0 z-10 bg-white ${node.color}`}>
                            <node.icon className="w-3.5 h-3.5" />
                          </span>
                          <div className="space-y-1 bg-slate-50 border border-slate-200/60 p-4 rounded-2xl shadow-xs hover:border-slate-300 transition-colors">
                            <span className="font-mono text-[8px] text-text-secondary uppercase font-bold tracking-widest block">{node.stage}</span>
                            <p className="text-[11px] text-text-primary leading-relaxed font-sans font-medium">{node.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Telemetry Workflow Steps inside Expansion */}
                    <div className="space-y-3 bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
                      <span className="text-[9px] font-mono text-brand-green uppercase font-bold tracking-widest block flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-brand-green" /> Complete Workflow Chain
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeCase.workflowChain.map((node, wIdx) => (
                          <div key={wIdx} className="inline-flex items-center gap-1 bg-white border border-slate-200 px-2.5 py-1 rounded-lg text-[10px] font-sans text-text-primary font-medium">
                            <span className="font-mono text-[9px] text-text-secondary">0{wIdx + 1}</span>
                            <span>{node}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: 7-Step Case Study Story Details */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    {/* 1. Industry Overview */}
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono text-brand-blue uppercase font-bold tracking-widest block">// 1. Industry Overview</span>
                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light font-sans border-l-2 border-brand-blue pl-3">
                        {activeCase.overviewText}
                      </p>
                    </div>

                    {/* 2. Research Objective */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <span className="text-[9px] font-mono text-brand-blue uppercase font-bold tracking-widest block">// 2. Research Objective</span>
                      <p className="text-xs text-text-primary leading-relaxed font-medium font-sans pl-3">
                        {activeCase.researchObjective}
                      </p>
                    </div>

                    {/* 3. Research Approach */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <span className="text-[9px] font-mono text-brand-blue uppercase font-bold tracking-widest block">// 3. Research Approach</span>
                      <p className="text-xs text-text-secondary leading-relaxed font-light font-sans pl-3 bg-slate-50 p-3 border border-slate-150 rounded-xl">
                        {activeCase.approachSummary}
                      </p>
                    </div>

                    {/* 4. Key Findings */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <span className="text-[9px] font-mono text-brand-blue uppercase font-bold tracking-widest block">// 4. Key Findings</span>
                      <div className="space-y-2 pl-3">
                        {activeCase.keyFindings.map((finding, fIdx) => (
                          <div key={fIdx} className="flex gap-2 items-start text-xs text-text-secondary font-light font-sans">
                            <span className="text-brand-yellow font-bold shrink-0">▪</span>
                            <p className="leading-relaxed">{finding}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 5. AI Opportunity Analysis */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <span className="text-[9px] font-mono text-brand-blue uppercase font-bold tracking-widest block">// 5. AI Opportunity Analysis</span>
                      <div className="space-y-2 pl-3">
                        {activeCase.detailedOpportunities.map((opp, oIdx) => (
                          <div key={oIdx} className="flex gap-2 items-start text-xs text-text-secondary font-light font-sans">
                            <span className="text-brand-green font-bold shrink-0">✓</span>
                            <p className="leading-relaxed font-medium text-text-primary">
                              {opp}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 6. Recommendations */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <span className="text-[9px] font-mono text-brand-blue uppercase font-bold tracking-widest block">// 6. Recommendations</span>
                      <div className="space-y-1.5 pl-3">
                        {activeCase.recommendations.map((rec, rIdx) => (
                          <div key={rIdx} className="flex gap-2 items-start text-xs text-text-secondary font-light font-sans">
                            <span className="text-brand-blue font-bold shrink-0">✦</span>
                            <p className="leading-relaxed">{rec}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 7. Key Learning: What I Learned */}
                    <div className="space-y-2 pt-3 border-t-2 border-dashed border-slate-200 bg-brand-blue/5 p-4 rounded-2xl">
                      <span className="text-[9px] font-mono text-brand-blue uppercase font-bold tracking-widest block flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" /> 7. Key Learning: What I Learned
                      </span>
                      <p className="text-xs text-text-primary leading-relaxed font-medium font-sans">
                        {activeCase.whatILearned}
                      </p>
                    </div>

                    {/* AI Studio Testbed Prompt */}
                    {activeCase.promptExample && (
                      <div className="space-y-1.5 pt-2 border-t border-slate-100">
                        <span className="block text-[8px] font-mono text-text-secondary uppercase font-bold tracking-widest flex items-center gap-1">
                          <Search className="w-3 h-3 text-brand-blue" /> AI Studio Testbed Prompt:
                        </span>
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-150 font-mono text-[9px] text-brand-blue leading-relaxed overflow-x-auto whitespace-pre-wrap max-h-36 overflow-y-auto font-light">
                          {activeCase.promptExample}
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              )}

              {/* Bottom Custom Navigation bar with Prev Industry and Next Industry */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* Previous Industry Button */}
                <button
                  onClick={() => {
                    const prevIdx = (selectedIdx - 1 + CASES_DATA.length) % CASES_DATA.length;
                    setSelectedIdx(prevIdx);
                    // keep expansion state consistent or reset as appropriate
                    const element = document.getElementById('research-preview-anchor');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full sm:w-auto px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-text-primary hover:border-brand-blue font-secondary text-[11px] font-semibold uppercase tracking-[0.05em] rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous Industry ←</span>
                </button>

                <span className="text-xs font-secondary text-text-secondary uppercase tracking-[0.05em] font-medium">
                  Audited Sector {selectedIdx + 1} of {CASES_DATA.length}
                </span>

                {/* Next Industry Button */}
                <button
                  onClick={() => {
                    const nextIdx = (selectedIdx + 1) % CASES_DATA.length;
                    setSelectedIdx(nextIdx);
                    const element = document.getElementById('research-preview-anchor');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full sm:w-auto px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-text-primary hover:border-brand-blue font-secondary text-[11px] font-semibold uppercase tracking-[0.05em] rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <span>Next Industry →</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* SECTION 1 - CROSS-INDUSTRY INSIGHTS */}
      <section className="space-y-8 pt-8 border-t border-slate-200">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 text-brand-blue font-secondary text-xs font-medium uppercase tracking-[0.05em]">
            <TrendingUp className="w-3.5 h-3.5 text-brand-blue" /> Cross-Sector Meta Analysis
          </span>
          <h3 className="text-2xl font-sans font-semibold uppercase text-text-primary tracking-tight">
            Cross-Industry Insights
          </h3>
          <p className="font-sans text-[14px] text-text-secondary max-w-4xl leading-[22px]">
            Although each industry operates differently, several common AI adoption patterns emerged during the research.
            By auditing multiple sectors, we identified overarching structural constraints, technology integration bottlenecks, and standard operational workflows that define high-yield AI adoption paths.
          </p>
        </div>

        {/* SECTION 2 & 3 - COMMON CHALLENGES & AI OPPORTUNITIES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Common Challenges */}
          <div className="bg-bg-secondary border border-slate-200 p-6 md:p-8 rounded-3xl space-y-6">
            <div className="space-y-1">
              <span className="block font-secondary text-xs text-brand-red uppercase font-medium tracking-[0.05em]">// RECURRING STRUCTURAL BOTTLENECK PATTERNS</span>
              <h4 className="text-[16px] font-sans font-semibold uppercase text-text-primary tracking-tight">Common Business Challenges</h4>
              <p className="font-sans text-xs text-text-secondary">Recurring operational issues found across multiple capital-intensive industries.</p>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Manual Workflows', desc: 'Over-reliance on human operators for repetitive, high-precision inspections (e.g., gems grading, ore sorting), limiting scaling consistency.' },
                { title: 'Fragmented Data & Paper Processes', desc: 'Critical field reports and subcontractor communications locked in local notebooks or separate legacy databases with slow synchronization lag.' },
                { title: 'Limited Digital Integration & Telemetry', desc: 'Inconsistent instrumentation environments with high electrical or environmental noise levels, rendering real-time system feedback difficult.' },
                { title: 'Decision Delays & Operational Lag', desc: 'Slow analysis loops in process controls (e.g., solvent extraction reaction times or grid overload prediction grids) triggering reactive mitigation.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start border-l-2 border-brand-red/20 pl-4">
                  <div className="space-y-1">
                    <h5 className="font-sans font-semibold text-xs text-text-primary uppercase tracking-tight">{item.title}</h5>
                    <p className="font-sans text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common AI Opportunity Analysis */}
          <div className="bg-bg-secondary border border-slate-200 p-6 md:p-8 rounded-3xl space-y-6">
            <div className="space-y-1">
              <span className="block font-secondary text-xs text-brand-green uppercase font-medium tracking-[0.05em]">// DESIGNED TECHNOLOGY INTERVENTIONS</span>
              <h4 className="text-[16px] font-sans font-semibold uppercase text-text-primary tracking-tight">Common AI Opportunity Analysis</h4>
              <p className="font-sans text-xs text-text-secondary">Systematic technical patterns capable of resolving workflow bottlenecks.</p>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Computer Vision & Quality Inspection', desc: 'Automating high-frequency visual sorting grids (such as gemstone inclusions or conveyor ore classification) using high-resolution spectral cameras.' },
                { title: 'Predictive Analytics & Maintenance', desc: 'Acoustic wave or temperature kinetics telemetry analysis to capture rotational equipment failure (e.g. pumps impeller fatigue) before physical damage occurs.' },
                { title: 'Demand & Weather Forecasting', desc: 'Integrating regional spatiotemporal grid predictors (e.g., cloud cover and solar generation decays) to dynamically route loads with high accuracy.' },
                { title: 'Decision Support & Workflow Automation', desc: 'Deploying robust system prompt orchestrations in Google AI Studio to aid operators with rapid material dispatch scheduling or reactor feed control parameters.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start border-l-2 border-brand-green/20 pl-4">
                  <div className="space-y-1">
                    <h5 className="font-sans font-semibold text-xs text-text-primary uppercase tracking-tight">{item.title}</h5>
                    <p className="font-sans text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - AI OPPORTUNITY MATRIX */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="block font-secondary text-xs text-brand-blue uppercase font-medium tracking-[0.05em]">// QUALITATIVE SECTOR BENCHMARKS</span>
          <h3 className="text-2xl font-sans font-semibold text-text-primary uppercase tracking-tight">AI Opportunity Matrix</h3>
          <p className="font-sans text-xs text-text-secondary">
            A comparative lookup of primary challenges, intervention scopes, and implementation complexity metrics mapped across all audited domains.
          </p>
        </div>

        {/* Responsive Matrix */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-bg-secondary border-b border-slate-200 font-secondary text-xs uppercase text-text-secondary font-semibold tracking-[0.05em]">
                  <th className="py-4 px-6">Industry</th>
                  <th className="py-4 px-4">Primary Challenge</th>
                  <th className="py-4 px-4">AI Opportunity Analysis</th>
                  <th className="py-4 px-4">Expected Business Value</th>
                  <th className="py-4 px-6 text-center">Implementation Complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-text-secondary">
                {[
                  { ind: 'Gems & Jewellery', challenge: 'Synthetic origin detection', opp: 'Spectrometric computer vision', value: 'Very High', comp: 'High' },
                  { ind: 'Edible Oils & Solvents', challenge: 'Free fatty acid thermal lag', opp: 'Predictive distillation kinetics', value: 'High', comp: 'Medium' },
                  { ind: 'Power & Renewable Energy', challenge: 'Solar surge overloads', opp: 'Spatiotemporal grid dispatch', value: 'Very High', comp: 'High' },
                  { ind: 'Oil & Gas', challenge: 'Pumping impeller fatigue', opp: 'Acoustic anomaly spotting', value: 'Very High', comp: 'High' },
                  { ind: 'Minerals & Mining', challenge: 'High belt ore sorting loss', opp: 'Hyperspectral vision classification', value: 'High', comp: 'High' },
                  { ind: 'Ceramics & Sanitaryware', challenge: 'Thermal ceramic micro-cracks', opp: 'Kiln heat profile optimization', value: 'Medium', comp: 'Medium' },
                  { ind: 'Infrastructure & Real Estate', challenge: 'Subcontractor schedule delay', opp: 'Dynamic logistics scheduler', value: 'High', comp: 'High' },
                  { ind: 'Agro-chemicals & Fertilizers', challenge: 'Exothermic hotspot control', opp: 'Chemical reactor feed kinetics', value: 'High', comp: 'Medium' }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-sans font-semibold text-text-primary uppercase tracking-tight text-[13px]">{row.ind}</td>
                    <td className="py-4 px-4 font-sans text-xs text-text-secondary">{row.challenge}</td>
                    <td className="py-4 px-4">
                      <span className="font-secondary text-[11px] font-medium uppercase text-brand-blue bg-blue-50/50 border border-blue-100 px-2 py-0.5 rounded tracking-wider">
                        {row.opp}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-secondary font-semibold uppercase tracking-wider ${
                        row.value === 'Very High' ? 'bg-emerald-50 text-brand-green border border-emerald-100' : 'bg-blue-50 text-brand-blue border border-blue-100'
                      }`}>
                        {row.value}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-secondary font-semibold uppercase tracking-wider ${
                        row.comp === 'High' ? 'bg-red-50 text-brand-red border border-red-100' : 'bg-amber-50 text-brand-yellow border border-amber-100'
                      }`}>
                        {row.comp}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5 - INDUSTRY COMPARISON */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="block font-secondary text-xs text-brand-green uppercase font-medium tracking-[0.05em]">// INTERACTIVE BENCHMARKING GRID</span>
          <h3 className="text-2xl font-sans font-semibold text-text-primary uppercase tracking-tight">Side-by-Side Sector Comparison</h3>
          <p className="font-sans text-xs text-text-secondary">
            Compare two distinct industrial ecosystems side by side to evaluate operational priorities and technical profiles.
          </p>
        </div>

        <CompareSelector cases={CASES_DATA} />
      </section>



      {/* SECTION: KEY LEARNINGS & REFLECTION (PHASE 4.7) */}
      <section className="space-y-10 pt-10 border-t border-slate-200">
        
        {/* SECTION 1 — TITLE */}
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 text-brand-blue font-secondary text-xs font-medium uppercase tracking-[0.05em]">
            <Zap className="w-3.5 h-3.5 text-brand-blue" /> CORE REFLECTIONS
          </span>
          <h3 className="text-2xl font-sans font-semibold uppercase text-text-primary tracking-tight">
            Key Learnings
          </h3>
          <p className="font-sans text-[14px] text-text-secondary max-w-4xl leading-[22px]">
            How this research experience influenced the way I approach AI, software development, and problem solving.
          </p>
        </div>

        {/* SECTION 2 — WHAT I LEARNED (6 CONCISE LEARNING CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Business Objectives First",
              desc: "Understanding the underlying business problem is infinitely more critical than choosing the algorithm. Technical execution must serve a concrete, verified operational deficiency.",
              icon: Briefcase,
              color: "border-l-brand-blue bg-blue-50/5",
              textColor: "text-brand-blue"
            },
            {
              title: "Sector-Specific Adaptation",
              desc: "Different industries require completely custom AI adoption paths. Heavy operations require resilient edge-based loops, while commercial systems scale on flexible cloud services.",
              icon: Layers,
              color: "border-l-brand-green bg-emerald-50/5",
              textColor: "text-brand-green"
            },
            {
              title: "Process & Data Readiness",
              desc: "Successful AI deployment hinges on data quality and process readiness. Clean pipelines and human-in-the-loop workflows must be established to handle standard operational noise.",
              icon: CheckCircle2,
              color: "border-l-brand-yellow bg-amber-50/5",
              textColor: "text-brand-yellow"
            },
            {
              title: "Assumption Mitigation",
              desc: "In-depth pre-development research reduces critical design assumptions. Validating data telemetry inputs early prevents costly architecture overhauls during software execution.",
              icon: Search,
              color: "border-l-brand-red bg-red-50/5",
              textColor: "text-brand-red"
            },
            {
              title: "Workflow Integration",
              desc: "Technology must support and optimize existing workflows before attempting to replace them. Software should operate as an intuitive driver of operational efficiency.",
              icon: Compass,
              color: "border-l-brand-blue bg-blue-50/5",
              textColor: "text-brand-blue"
            },
            {
              title: "Cross-Sector Synthesis",
              desc: "Analyzing multiple sectors uncovers common operational patterns. Cross-industry insights improve general problem-solving by exposing standard solutions to complex bottlenecks.",
              icon: TrendingUp,
              color: "border-l-brand-green bg-emerald-50/5",
              textColor: "text-brand-green"
            }
          ].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className={`bg-white border border-slate-200 rounded-3xl p-6 space-y-3 border-l-4 ${item.color} shadow-xs hover:shadow-sm transition-shadow duration-200`}
              >
                <div className="flex items-center gap-2">
                  <span className={`p-1.5 rounded-lg bg-slate-50 border border-slate-150 shrink-0 ${item.textColor}`}>
                    <IconComponent className="w-4 h-4" />
                  </span>
                  <h4 className="font-sans font-semibold text-xs text-text-primary uppercase tracking-tight">
                    {item.title}
                  </h4>
                </div>
                <p className="font-sans text-xs text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* SECTION 3 — HOW THIS CHANGED MY APPROACH */}
        <div className="bg-bg-secondary border border-slate-200 p-6 md:p-8 rounded-3xl space-y-6 shadow-xs">
          <div className="space-y-1">
            <span className="block font-secondary text-xs text-brand-blue uppercase font-medium tracking-[0.05em]">// ARCHITECTURAL MINDSET SHIFT</span>
            <h4 className="text-[16px] font-sans font-semibold uppercase text-text-primary tracking-tight">How This Changed My Approach</h4>
            <p className="font-sans text-xs text-text-secondary">
              My AMA research internship fundamentally shifted how I conceptualize, design, and build software systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-2">
            {[
              {
                step: "01",
                label: "Research Before Code",
                desc: "I now dedicate significant focus to diagnostic scoping, verifying data constraints before writing any code."
              },
              {
                step: "02",
                label: "Identify Real Users",
                desc: "I map the exact operator constraints to align interface density with high-pressure decision points."
              },
              {
                step: "03",
                label: "Study Current Workflows",
                desc: "Instead of speculative automation, I align tech solutions with active, standard manual processes."
              },
              {
                step: "04",
                label: "Prototype & Stress-Test",
                desc: "I build responsive, lightweight sandboxes to test architectural bounds before planning production scale."
              }
            ].map((node, nIdx) => (
              <div key={nIdx} className="space-y-1.5">
                <span className="text-[10px] font-secondary font-semibold text-brand-blue uppercase tracking-[0.05em] block">Stage {node.step}</span>
                <h5 className="font-sans font-semibold text-xs text-text-primary uppercase tracking-tight">{node.label}</h5>
                <p className="font-sans text-xs text-text-secondary leading-relaxed">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4 — CONNECTION TO MY PROJECTS */}
        <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-3xl relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6 shadow-xs border-l-4 border-l-brand-blue">
          <div className="absolute top-0 right-0 w-44 h-44 bg-brand-blue/5 rounded-full blur-[60px] pointer-events-none" />
          <div className="space-y-1.5 text-center md:text-left max-w-2xl">
            <h4 className="font-sans font-semibold text-[16px] uppercase text-text-primary tracking-tight">
              Bridging Research with Execution →
            </h4>
            <p className="font-sans text-xs text-text-secondary leading-relaxed">
              These industry lessons learned at AMA directly dictate my engineering decisions. Explore my software projects to see how rigorous pre-development analysis is translated into practical, production-ready full-stack applications.
            </p>
          </div>
          <button 
            onClick={() => {
              if (onNavigate) {
                onNavigate('projects');
              } else {
                alert("Navigating to Projects Section...");
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 bg-brand-blue hover:bg-blue-600 text-white font-secondary text-[11px] font-semibold uppercase tracking-[0.05em] rounded-xl transition-all duration-200 shadow-xs whitespace-nowrap cursor-pointer flex items-center gap-1.5"
          >
            <span>Explore My Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* SECTION 5 — FINAL MESSAGE */}
        <div className="pt-4 text-center">
          <p className="font-sans text-xs text-text-secondary leading-relaxed max-w-3xl mx-auto italic">
            "This research journey solidified my core philosophy: robust technology does not exist in a vacuum; it succeeds only when built on a precise understanding of human workflows, physical processes, and real-world operational constraints."
          </p>
        </div>

      </section>
    </div>
  );
}

// Side-by-Side Comparator Widget Component
function CompareSelector({ cases }: { cases: IndustryCase[] }) {
  const [indexA, setIndexA] = useState<number>(0);
  const [indexB, setIndexB] = useState<number>(2);

  const caseA = cases[indexA];
  const caseB = cases[indexB];

  // Helper to map technology readiness explicitly
  const getTechReadiness = (sector: string) => {
    if (sector.includes('Power') || sector.includes('Energy')) return 'High';
    if (sector.includes('Oils') || sector.includes('Gas') || sector.includes('Fertilizers') || sector.includes('Agro')) return 'Medium';
    return 'Low';
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-bg-secondary p-4 rounded-2xl border border-slate-200">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-[11px] font-secondary uppercase text-text-secondary font-semibold shrink-0 tracking-[0.05em]">Compare Sector A:</span>
          <select 
            value={indexA} 
            onChange={(e) => setIndexA(Number(e.target.value))}
            className="w-full sm:w-auto px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-text-primary font-sans focus:outline-none focus:ring-1 focus:ring-brand-blue"
          >
            {cases.map((c, idx) => (
              <option key={idx} value={idx}>{c.sector}</option>
            ))}
          </select>
        </div>

        <span className="text-[11px] font-secondary text-text-secondary uppercase font-semibold hidden sm:block tracking-[0.05em]">vs</span>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-[11px] font-secondary uppercase text-text-secondary font-semibold shrink-0 tracking-[0.05em]">Compare Sector B:</span>
          <select 
            value={indexB} 
            onChange={(e) => setIndexB(Number(e.target.value))}
            className="w-full sm:w-auto px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-text-primary font-sans focus:outline-none focus:ring-1 focus:ring-brand-blue"
          >
            {cases.map((c, idx) => (
              <option key={idx} value={idx}>{c.sector}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sector A Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs">
          <div className="flex justify-between items-start border-b border-slate-100 pb-3">
            <div>
              <span className="text-[10px] font-secondary text-brand-blue uppercase font-semibold block tracking-[0.05em]">Sector A</span>
              <h4 className="text-[15px] font-sans font-semibold uppercase text-text-primary tracking-tight">{caseA.sector}</h4>
            </div>
            <span className="px-1.5 py-0.5 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-secondary rounded font-bold uppercase tracking-[0.05em]">
              {caseA.complexityIndex} Complexity
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <span className="text-[10px] font-secondary text-text-secondary uppercase block tracking-[0.05em] font-medium">Primary AI Use Cases</span>
              <p className="text-text-primary font-sans font-medium">{caseA.subtopic}</p>
            </div>

            <div>
              <span className="text-[10px] font-secondary text-text-secondary uppercase block tracking-[0.05em] font-medium">Operational Priorities</span>
              <p className="text-text-primary font-sans leading-relaxed text-xs">{caseA.researchFocus}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-100">
              <div>
                <span className="text-[10px] font-secondary text-text-secondary uppercase block font-semibold tracking-[0.05em]">Business Complexity</span>
                <span className="font-sans font-semibold text-text-primary text-xs">{caseA.complexityIndex}</span>
              </div>
              <div>
                <span className="text-[10px] font-secondary text-text-secondary uppercase block font-semibold tracking-[0.05em]">Technology Readiness</span>
                <span className="font-sans font-semibold text-brand-blue text-xs">{getTechReadiness(caseA.sector)}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <span className="text-[10px] font-secondary text-text-secondary uppercase block font-semibold tracking-[0.05em]">Primary Challenge</span>
              <p className="text-text-secondary font-sans italic text-xs">"{caseA.challenge}"</p>
            </div>
          </div>
        </div>

        {/* Sector B Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs">
          <div className="flex justify-between items-start border-b border-slate-100 pb-3">
            <div>
              <span className="text-[10px] font-secondary text-brand-green uppercase font-semibold block tracking-[0.05em]">Sector B</span>
              <h4 className="text-[15px] font-sans font-semibold uppercase text-text-primary tracking-tight">{caseB.sector}</h4>
            </div>
            <span className="px-1.5 py-0.5 bg-brand-green/10 border border-brand-green/20 text-brand-green text-[10px] font-secondary rounded font-bold uppercase tracking-[0.05em]">
              {caseB.complexityIndex} Complexity
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <span className="text-[10px] font-secondary text-text-secondary uppercase block tracking-[0.05em] font-medium">Primary AI Use Cases</span>
              <p className="text-text-primary font-sans font-medium">{caseB.subtopic}</p>
            </div>

            <div>
              <span className="text-[10px] font-secondary text-text-secondary uppercase block tracking-[0.05em] font-medium">Operational Priorities</span>
              <p className="text-text-primary font-sans leading-relaxed text-xs">{caseB.researchFocus}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-100">
              <div>
                <span className="text-[10px] font-secondary text-text-secondary uppercase block font-semibold tracking-[0.05em]">Business Complexity</span>
                <span className="font-sans font-semibold text-text-primary text-xs">{caseB.complexityIndex}</span>
              </div>
              <div>
                <span className="text-[10px] font-secondary text-text-secondary uppercase block font-semibold tracking-[0.05em]">Technology Readiness</span>
                <span className="font-sans font-semibold text-brand-green text-xs">{getTechReadiness(caseB.sector)}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <span className="text-[10px] font-secondary text-text-secondary uppercase block font-semibold tracking-[0.05em]">Primary Challenge</span>
              <p className="text-text-secondary font-sans italic text-xs">"{caseB.challenge}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
