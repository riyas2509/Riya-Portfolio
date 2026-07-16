import React from 'react';
import { motion } from 'motion/react';
import { 
  Compass, 
  MapPin, 
  Target, 
  Command, 
  Activity, 
  Award, 
  ChevronRight,
  ShieldCheck,
  BookOpen,
  Briefcase,
  Code
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/personal';
import { EDUCATION } from '../data/education';

interface AboutViewProps {
  onNavigate: (view: string) => void;
}

export default function AboutView({ onNavigate }: AboutViewProps) {
  return (
    <div className="space-y-12 py-4">
      {/* HEADER STATEMENT */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 text-brand-blue font-secondary text-xs font-medium uppercase tracking-[0.05em]">
          <Target className="w-3.5 h-3.5" /> PERSONAL MANIFESTO
        </div>
        <h2 className="text-[28px] sm:text-[32px] font-display font-semibold tracking-[-0.01em] uppercase text-text-primary leading-[36px] sm:leading-[40px]">
          AI &amp; ML Undergraduate &bull; Product Builder &bull; Research Intern
        </h2>
        <p className="text-[14px] font-secondary text-text-secondary uppercase tracking-[0.05em] font-medium max-w-xl">
          BIOGRAPHY &bull; JOURNEY PATHWAY &bull; WORKING METHODOLOGY &bull; CORE PRINCIPLES
        </p>
      </div>

      {/* TWO COLUMN GRID PROFILE LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Story, What I'm Building, How I Work & Looking Ahead */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Objective Statement Panel */}
          <div className="bg-bg-secondary border border-brand-blue/20 rounded-2xl p-6 space-y-4 shadow-xs">
            <span className="block font-secondary text-xs text-brand-blue uppercase tracking-[0.05em] font-medium">
              [ Core Thesis ]
            </span>
            <p className="font-sans text-[18px] sm:text-[20px] text-text-primary font-medium italic leading-[26px] sm:leading-[30px]">
              "Artificial Intelligence is a powerful tool when combined with practical software development and rigorous analysis. My goal is to build useful applications, analyze real-world workflows, and continuously learn to solve practical problems."
            </p>
            <div className="border-t border-slate-200/80 pt-4 flex items-center gap-2 text-xs font-secondary text-text-secondary font-medium">
              <MapPin className="w-3.5 h-3.5 text-brand-blue" /> Based in {PERSONAL_INFO.location}
            </div>
          </div>

          {/* Section 1: Who I Am */}
          <div className="space-y-4 text-text-secondary font-sans text-[15px] sm:text-[16px] font-normal leading-[24px] sm:leading-[28px]">
            <h3 className="text-text-primary text-[18px] font-sans font-semibold uppercase tracking-tight border-b border-slate-200 pb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" /> Who I Am
            </h3>
            <p>
              I am a B.Tech Artificial Intelligence and Machine Learning student focused on solving practical, real-world problems. I believe that artificial intelligence delivers its true value when integrated into well-designed software that addresses clear operational challenges.
            </p>
            <p>
              Before writing a single line of code, I enjoy thoroughly researching industry domains to understand how workflows operate and where technology can genuinely optimize productivity. My passion lies in turning conceptual ideas into working software while continuously learning through hands-on development and technical experimentation.
            </p>
          </div>

          {/* Section: What I'm Building */}
          <div className="space-y-4 text-text-secondary font-sans text-[15px] sm:text-[16px] font-normal leading-[24px] sm:leading-[28px]">
            <h3 className="text-text-primary text-[18px] font-sans font-semibold uppercase tracking-tight border-b border-slate-200 pb-1.5 flex items-center gap-2">
              <Code className="w-4 h-4 text-brand-green" /> What I'm Building
            </h3>
            <p>
              I am currently building practical, AI-powered software and continuously improving them through learning and experimentation. 
            </p>
            <p>
              To host and showcase these tools, I established <span className="text-text-primary font-semibold border-b border-brand-green/30 pb-0.5">EchoTech</span> &mdash; my personal platform for building, experimenting with, and showcasing AI products. It currently serves as the home for projects such as <span className="font-semibold text-text-primary">EchoNote</span> (intelligent voice summaries), <span className="font-semibold text-text-primary">EchoOS</span> (a console-inspired interface), and future high-utility applications.
            </p>
          </div>

          {/* Section 3: How I Work */}
          <div className="space-y-4">
            <h3 className="text-text-primary text-[18px] font-sans font-semibold uppercase tracking-tight border-b border-slate-200 pb-1.5 flex items-center gap-2">
              <Compass className="w-4 h-4 text-brand-blue" /> How I Work
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {[
                { step: '01', title: 'Understand', desc: 'Identify real-world friction and outline precise goals.' },
                { step: '02', title: 'Research', desc: 'Map out workflows, bottlenecks, and user requirements.' },
                { step: '03', title: 'Design', desc: 'Select the right tech stack and draft clean, logical architectures.' },
                { step: '04', title: 'Build', desc: 'Develop a functional, lightweight prototype to test core assumptions.' },
                { step: '05', title: 'Iterate', desc: 'Refine the codebase, optimize performance, and adapt to feedback.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-bg-secondary border border-slate-200 p-4 rounded-xl space-y-2 flex flex-col justify-between">
                  <span className="block font-secondary text-xs text-brand-blue font-medium">{item.step}</span>
                  <div className="space-y-1">
                    <h4 className="font-sans font-semibold text-sm text-text-primary uppercase tracking-tight">{item.title}</h4>
                    <p className="font-sans text-xs text-text-secondary leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Looking Ahead */}
          <div className="space-y-4 text-text-secondary font-sans text-[14px] leading-[22px]">
            <h3 className="text-text-primary text-[18px] font-sans font-semibold uppercase tracking-tight border-b border-slate-200 pb-1.5 flex items-center gap-2">
              <Activity className="w-4 h-4 text-brand-red" /> Looking Ahead
            </h3>
            <p className="font-sans text-text-secondary">
              My immediate and long-term technical aspirations remain grounded in tangible value:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-xs text-text-secondary">
              <li><strong className="text-text-primary font-sans uppercase font-semibold">Continue building AI products:</strong> Expanding my platform to test novel model integration ideas and utility apps.</li>
              <li><strong className="text-text-primary font-sans uppercase font-semibold">Explore larger software systems:</strong> Understanding distributed architectures, state handling, and deployment scaling.</li>
              <li><strong className="text-text-primary font-sans uppercase font-semibold">Deepen knowledge of machine learning:</strong> Studying model fine-tuning, retrieval techniques, and structured outputs.</li>
              <li><strong className="text-text-primary font-sans uppercase font-semibold">Work on meaningful real-world problems:</strong> Collaborating on software that directly improves operational workflows.</li>
              <li><strong className="text-text-primary font-sans uppercase font-semibold">Contribute to impactful technology:</strong> Writing maintainable, well-documented open-source code for the developer community.</li>
            </ul>
          </div>

        </div>

        {/* Right Column: Visual Portrait + Currently Exploring + My Interests */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Avatar frame */}
          <div className="relative mx-auto max-w-[320px] aspect-square rounded-3xl overflow-hidden border border-slate-200 group bg-bg-secondary p-1 bg-gradient-to-tr from-brand-blue via-brand-green to-brand-yellow shadow-sm">
            <div className="rounded-3xl overflow-hidden w-full h-full relative bg-white">
              <img 
                src="/images/profile.png" 
                alt={PERSONAL_INFO.name} 
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover relative z-0 transition-all duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const exists = parent.querySelector('.photo-fallback');
                    if (!exists) {
                      const fallback = document.createElement('div');
                      fallback.className = "photo-fallback w-full h-full bg-slate-50 flex flex-col items-center justify-center border-0 font-sans font-semibold text-2xl text-brand-blue uppercase tracking-tight";
                      fallback.innerHTML = '<span>R.S.</span><span class="text-brand-green text-xs font-secondary font-medium tracking-[0.05em] mt-1">PRODUCT BUILDER</span>';
                      parent.appendChild(fallback);
                    }
                  }
                }}
              />
            </div>
          </div>

          {/* Section 2: Currently Exploring */}
          <div className="space-y-4">
            <h3 className="text-text-primary text-[18px] font-sans font-semibold uppercase tracking-tight border-b border-slate-200 pb-1.5 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-brand-blue" /> Currently Exploring
            </h3>
            <p className="font-sans text-[14px] text-text-secondary leading-[22px]">
              These represent areas I am actively studying and exploring, working towards deeper understanding:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { area: 'Generative AI', color: 'border-brand-blue/30 text-brand-blue' },
                { area: 'Flutter', color: 'border-brand-green/30 text-brand-green' },
                { area: 'System Design', color: 'border-brand-yellow/30 text-brand-yellow' },
                { area: 'Machine Learning', color: 'border-brand-red/30 text-brand-red' },
                { area: 'Product Thinking', color: 'border-brand-blue/30 text-brand-blue' },
                { area: 'Software Engineering', color: 'border-slate-300 text-text-primary' }
              ].map((focus, idx) => (
                <span 
                  key={idx} 
                  className={`px-3 py-1.5 bg-bg-secondary border rounded-lg text-xs font-secondary font-medium shadow-xs ${focus.color}`}
                >
                  {focus.area}
                </span>
              ))}
            </div>
          </div>

          {/* Section 3: My Interests */}
          <div className="space-y-4">
            <h3 className="text-text-primary text-[18px] font-sans font-semibold uppercase tracking-tight border-b border-slate-200 pb-1.5 flex items-center gap-2">
              <Target className="w-4 h-4 text-brand-yellow" /> My Interests
            </h3>
            <p className="font-sans text-[14px] text-text-secondary leading-[22px]">
              I enjoy addressing specific technical challenges and building software that addresses real-world bottlenecks:
            </p>
            
            <div className="grid grid-cols-1 gap-3">
              {[
                {
                  title: 'AI-powered productivity',
                  desc: 'Designing systems that automate cognitive overhead and simplify daily routines.'
                },
                {
                  title: 'Human-centered software',
                  desc: 'Crafting intuitive user flows that respect human attention and reduce friction.'
                },
                {
                  title: 'Industry workflow optimization',
                  desc: 'Dissecting complex sector value chains to introduce practical, high-value tech interventions.'
                },
                {
                  title: 'Decision-support systems',
                  desc: 'Building clear visual dashboards and telemetry aids that help users make informed choices.'
                },
                {
                  title: 'Educational technology',
                  desc: 'Creating interactive sandbox environments and visualizations that simplify abstract concepts.'
                }
              ].map((interest, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-4 rounded-xl space-y-1 shadow-xs hover:shadow-md transition-all">
                  <div className="font-sans text-[14px] font-semibold text-text-primary uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full" /> {interest.title}
                  </div>
                  <p className="font-sans text-xs text-text-secondary leading-normal pl-3.5">
                    {interest.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Journey Flow */}
      <div className="border border-slate-200 bg-bg-secondary p-8 rounded-3xl relative overflow-hidden shadow-xs">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl pointer-events-none" />
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="block font-secondary text-xs text-brand-blue font-medium uppercase tracking-[0.05em]">
              // EVOLUTION &amp; GROWTH
            </span>
            <h3 className="text-[20px] font-sans font-semibold text-text-primary uppercase tracking-tight">My Journey</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {[
              {
                step: 'Phase 1',
                title: 'Started Programming',
                desc: 'Began by exploring software fundamentals, syntax foundations, and structural programming patterns.'
              },
              {
                step: 'Phase 2',
                title: 'Interest in AI &amp; ML',
                desc: 'Specialized in Artificial Intelligence and Machine Learning B.Tech coursework to study algorithmic concepts.'
              },
              {
                step: 'Phase 3',
                title: 'Built Software Projects',
                desc: 'Created functional utilities (like RailQ and EchoNote) to apply statistical algorithms to interactive tools.'
              },
              {
                step: 'Phase 4',
                title: 'Industry Workflows Research',
                desc: 'Conducted detailed workflow research and prepared strategic briefs mapping tech opportunities across 8 major sectors.'
              },
              {
                step: 'Phase 5',
                title: 'Google &amp; Antler Immersion',
                desc: 'Selected to join intense startup program classes, learning product iteration pathways and deployment strategies.'
              },
              {
                step: 'Phase 6',
                title: 'Building EchoTech Ecosystem',
                desc: 'Developing high-utility tools, exploring open ecosystems, and continuously learning from live implementation feedback.'
              }
            ].map((journey, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 p-5 rounded-2xl relative shadow-xs flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-secondary font-medium text-brand-blue bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-md uppercase tracking-[0.05em]">
                      {journey.step}
                    </span>
                    <span className="text-xs font-secondary text-text-secondary">0{idx + 1}</span>
                  </div>
                  <h4 className="font-sans font-semibold text-[16px] text-text-primary uppercase tracking-tight" dangerouslySetInnerHTML={{ __html: journey.title }} />
                  <p className="font-sans text-[14px] text-text-secondary leading-[22px]">
                    {journey.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ACADEMIC FOUNDATIONS CARD BLOCK */}
      <div className="bg-bg-secondary border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-xs border-t-2 border-t-brand-blue">
        <div className="flex justify-between items-center border-b border-slate-200 pb-4">
          <div className="space-y-1">
            <span className="block font-secondary text-xs text-brand-blue font-medium uppercase tracking-[0.05em]">JG UNIVERSITY SPECIALIZATION</span>
            <h3 className="text-lg font-bold text-text-primary uppercase tracking-tight">Academic Credentials</h3>
          </div>
          <span className="text-xs font-secondary bg-white border border-slate-200 text-text-secondary px-2.5 py-1 rounded shadow-sm font-medium">2024 - Present</span>
        </div>

        {EDUCATION.map((edu, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-slate-200 last:border-b-0 last:pb-0">
            <div className="md:col-span-5 space-y-2">
              <h4 className="font-sans font-semibold text-[18px] text-text-primary uppercase tracking-tight leading-snug">{edu.degree}</h4>
              <p className="font-sans text-[14px] text-text-secondary">{edu.university}</p>
            </div>
            
            <div className="md:col-span-7 space-y-3">
              <span className="block font-secondary text-xs text-text-secondary uppercase tracking-[0.05em] font-medium">
                Core ML &amp; CS Coursework mapped:
              </span>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course) => (
                  <span 
                    key={course}
                    className="px-2.5 py-1 bg-white border border-slate-200 text-xs font-secondary text-text-secondary rounded-lg hover:border-brand-blue/40 hover:text-brand-blue transition-colors cursor-default shadow-xs font-medium"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SECTION 4: HOW THIS PORTFOLIO IS ORGANIZED */}
      <div className="space-y-4">
        <div className="space-y-1">
          <span className="block font-secondary text-xs text-brand-blue font-medium uppercase tracking-[0.05em]">
            // ARCHITECTURE &amp; NAVIGATION
          </span>
          <h3 className="text-xl font-sans font-black text-text-primary uppercase tracking-tight">How This Portfolio Is Organized</h3>
          <p className="font-sans text-[14px] text-text-secondary">
            Each section represents a different pillar of my work and learning. Explore them intentionally:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            {
              title: 'Projects',
              desc: 'Practical software and prototypes.',
              icon: <Code className="w-4 h-4 text-brand-violet" />,
              action: 'View Projects',
              view: 'projects',
              colorClass: 'text-brand-violet hover:text-brand-violet/80',
              borderHoverClass: 'hover:border-brand-violet/35'
            },
            {
              title: 'Research',
              desc: 'Industry research and AI opportunity analysis.',
              icon: <Compass className="w-4 h-4 text-brand-lavender" />,
              action: 'Explore Research',
              view: 'research',
              colorClass: 'text-brand-lavender hover:text-brand-lavender/80',
              borderHoverClass: 'hover:border-brand-lavender/35'
            },
            {
              title: 'Experience',
              desc: 'Professional learning and internship work.',
              icon: <Briefcase className="w-4 h-4 text-brand-coral" />,
              action: 'View Experience',
              view: 'experience',
              colorClass: 'text-brand-coral hover:text-brand-coral/80',
              borderHoverClass: 'hover:border-brand-coral/35'
            },
            {
              title: 'Achievements',
              desc: 'External recognition and certifications.',
              icon: <Award className="w-4 h-4 text-brand-yellow" />,
              action: 'View Recognition',
              view: 'achievements',
              colorClass: 'text-brand-yellow hover:text-brand-yellow/80',
              borderHoverClass: 'hover:border-brand-yellow/35'
            },
            {
              title: 'Contact',
              desc: 'Ways to connect and reach out.',
              icon: <Activity className="w-4 h-4 text-brand-blue" />,
              action: 'Contact Me',
              view: 'contact',
              colorClass: 'text-brand-blue hover:text-brand-blue/80',
              borderHoverClass: 'hover:border-brand-blue/35'
            }
          ].map((sec, idx) => (
            <div key={idx} className={`bg-bg-card border border-slate-200/50 p-5 rounded-xl flex flex-col justify-between shadow-xs transition-all ${sec.borderHoverClass}`}>
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-text-primary font-sans text-sm font-semibold uppercase">
                  {sec.icon} {sec.title}
                </div>
                <p className="font-sans text-xs text-text-secondary leading-normal">
                  {sec.desc}
                </p>
              </div>
              <button
                onClick={() => onNavigate(sec.view)}
                className={`${sec.colorClass} font-sans text-[14px] font-semibold tracking-normal uppercase flex items-center gap-1.5 pt-4 self-start cursor-pointer`}
              >
                {sec.action} <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Section 6 & 7: Premium Transition & CTA */}
      <div className="bg-bg-secondary border border-slate-200 p-8 rounded-3xl relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6 shadow-xs border-l-4 border-l-brand-blue">
        <div className="absolute top-0 right-0 w-44 h-44 bg-brand-blue/5 rounded-full blur-[60px] pointer-events-none" />
        <div className="space-y-1 text-center md:text-left">
          <h4 className="font-sans font-semibold text-sm uppercase text-text-primary tracking-tight">
            The best way to understand how I learn is through the projects I've built.
          </h4>
          <p className="font-secondary text-xs text-text-secondary uppercase tracking-[0.05em] font-medium">
            Browse through functional applications, sandboxes, and code repositories
          </p>
        </div>
        <button 
          onClick={() => onNavigate('projects')} 
          className="px-6 py-3 bg-white hover:bg-slate-50 border border-slate-200 hover:border-brand-blue text-text-primary font-sans text-[15px] font-semibold tracking-normal uppercase rounded-xl transition-all duration-200 cursor-pointer shadow-xs whitespace-nowrap"
        >
          Explore Projects
        </button>
      </div>
    </div>
  );
}
