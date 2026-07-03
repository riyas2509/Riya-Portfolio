import React from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  CheckCircle2,
  Cpu,
  Layers,
  BookOpen,
  ArrowRight,
  FileText,
  Target,
  TrendingUp,
  Award,
  Wrench,
  Activity,
  User,
  Clock
} from 'lucide-react';

interface ExperienceStory {
  id: string;
  role: string;
  organization: string;
  duration: string;
  location: string;
  context: string;
  contributions: string[];
  deliverables: string[];
  toolsAndMethods: string[];
  accentColor: string;
  accentBg: string;
  snapshot?: {
    organization: string;
    role: string;
    duration: string;
    primaryFocus: string;
    scope: string;
  };
}

const EXPERIENCES: ExperienceStory[] = [
  {
    id: 'ama-intern',
    role: 'Industry Research Intern',
    organization: 'Ahmedabad Management Association (AMA)',
    duration: 'April 2026 – June 2026',
    location: 'Ahmedabad, Gujarat, India',
    context: 'Supported the Ahmedabad Management Association in auditing operational workflows and evaluating technology readiness across capital-intensive sectors to identify where software and process optimizations can resolve friction.',
    contributions: [
      'Conducted AI-focused industry research across eight major capital-intensive sectors.',
      'Studied value chains across multiple industries to map material, data, and energy flow nodes.',
      'Analysed business functions and workflows to pinpoint mechanical vulnerabilities and manual delays.',
      'Identified operational challenges suitable for AI adoption such as thermal controls and visual grading.',
      'Evaluated practical AI opportunities matching computer vision and predictive models to legacy systems.',
      'Prepared structured strategic reports detailing technical readiness and deployment risks.',
      'Supported research synthesis and presentation preparation for senior leaders and industrial advisors.'
    ],
    deliverables: [
      'Industry Research Reports',
      'AI Opportunity Analysis',
      'Business Function Mapping',
      'Value Chain Analysis',
      'Research Frameworks',
      'Presentation Material',
      'Strategic Recommendations'
    ],
    toolsAndMethods: [
      'Industry Research',
      'Secondary Research',
      'Workflow Analysis',
      'Value Chain Mapping',
      'AI Opportunity Identification',
      'Market Analysis',
      'Strategic Documentation'
    ],
    accentColor: 'border-l-brand-blue',
    accentBg: 'bg-blue-50/10',
    snapshot: {
      organization: 'Ahmedabad Management Association',
      role: 'Industry Research Intern',
      duration: 'April 2026 – June 2026',
      primaryFocus: 'AI Opportunity Identification',
      scope: '8 Industries'
    }
  }
];

interface SkillGroup {
  category: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
}

const SKILLS_BY_CATEGORY: SkillGroup[] = [
  {
    category: 'Research & Analysis',
    color: 'border-l-brand-blue text-brand-blue',
    icon: BookOpen,
    skills: [
      'Industry Research',
      'Market Analysis',
      'Business Function Analysis',
      'Value Chain Mapping'
    ]
  },
  {
    category: 'Problem Solving',
    color: 'border-l-brand-green text-brand-green',
    icon: Target,
    skills: [
      'Analytical Thinking',
      'Structured Problem Solving',
      'Opportunity Identification'
    ]
  },
  {
    category: 'Communication',
    color: 'border-l-brand-yellow text-brand-yellow',
    icon: FileText,
    skills: [
      'Technical Documentation',
      'Report Writing',
      'Presentation Preparation'
    ]
  },
  {
    category: 'Professional',
    color: 'border-l-brand-red text-brand-red',
    icon: Award,
    skills: [
      'Critical Thinking',
      'Research Synthesis',
      'Stakeholder-Oriented Communication'
    ]
  }
];

export default function ExperienceView({ 
  onNavigateToProjects,
  onNavigate 
}: { 
  onNavigateToProjects: () => void;
  onNavigate?: (view: string) => void;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-16 py-4"
    >
      
      {/* SECTION 1 — EXPERIENCE INTRODUCTION */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-brand-blue font-mono text-[9px] uppercase tracking-widest font-bold">
          <Briefcase className="w-3.5 h-3.5 text-brand-blue" /> Professional Overview
        </div>
        <h2 className="text-3xl md:text-4xl font-sans font-black uppercase text-text-primary tracking-tight">
          Professional Experience
        </h2>
        <p className="text-sm text-text-secondary font-sans font-light max-w-2xl leading-relaxed">
          A narrative of the technical audits, industry research, and structural problem-solving frameworks that shape my development approach.
        </p>
      </div>

      {/* SECTION 9 — FINAL EXPERIENCE SUMMARY PANEL */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 border border-slate-200 bg-bg-secondary p-6 rounded-3xl shadow-xs">
        <div className="space-y-1">
          <span className="block text-[8px] font-mono text-text-secondary uppercase tracking-widest font-bold">Professional Experience</span>
          <span className="block text-xs md:text-sm font-sans font-black text-brand-blue uppercase tracking-tight">1 Internship</span>
        </div>
        <div className="space-y-1">
          <span className="block text-[8px] font-mono text-text-secondary uppercase tracking-widest font-bold">Primary Domain</span>
          <span className="block text-xs md:text-sm font-sans font-black text-brand-green uppercase tracking-tight">Industry Research</span>
        </div>
        <div className="space-y-1">
          <span className="block text-[8px] font-mono text-text-secondary uppercase tracking-widest font-bold">Focus</span>
          <span className="block text-xs md:text-sm font-sans font-black text-brand-yellow uppercase tracking-tight">AI Opportunity Analysis</span>
        </div>
        <div className="space-y-1">
          <span className="block text-[8px] font-mono text-text-secondary uppercase tracking-widest font-bold">Research Scope</span>
          <span className="block text-xs md:text-sm font-sans font-black text-brand-red uppercase tracking-tight">8 Industries</span>
        </div>
        <div className="space-y-1 col-span-2 md:col-span-1">
          <span className="block text-[8px] font-mono text-text-secondary uppercase tracking-widest font-bold">Duration</span>
          <span className="block text-xs md:text-sm font-sans font-black text-text-primary uppercase tracking-tight leading-tight">April 2026 – June 2026</span>
        </div>
      </div>

      {/* TIMELINE SECTION CONTAINER */}
      <div className="space-y-12">
        <div className="space-y-1">
          <span className="block font-mono text-[9px] text-brand-blue uppercase font-bold tracking-widest">// REVERSE CHRONOLOGICAL TIMELINE</span>
          <h3 className="text-xl font-sans font-black text-text-primary uppercase tracking-tight">Timeline &amp; Career Evolution</h3>
          <p className="text-xs text-text-secondary font-sans font-light max-w-2xl">
            A comprehensive overview of where I worked, what my roles were, what I contributed, and what I delivered.
          </p>
        </div>

        {/* Vertical Timeline line and items */}
        <div className="relative pl-6 md:pl-8 border-l border-slate-200 space-y-16 ml-2 md:ml-4">
          
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group space-y-6">
              
              {/* Timeline dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-slate-300 group-hover:border-brand-blue transition-colors flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-brand-blue transition-colors" />
              </div>

              {/* CARD CONTAINER */}
              <div className="space-y-6">
                
                {/* Header info (Org, Role, Time, Loc) */}
                <div className="bg-bg-secondary border border-slate-200/80 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-slate-300 transition-all shadow-xs relative overflow-hidden">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2 py-0.5 bg-white border border-slate-200 text-text-secondary text-[8px] font-mono rounded font-bold uppercase tracking-wider">
                        Primary Experience
                      </span>
                      <span className="text-[10px] font-mono text-text-secondary flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-text-secondary" /> {exp.duration}
                      </span>
                    </div>

                    <div className="space-y-0.5">
                      <h4 className="text-lg md:text-xl font-sans font-black uppercase text-text-primary tracking-tight leading-snug">
                        {exp.role}
                      </h4>
                      <p className="font-mono text-xs text-brand-blue font-bold uppercase tracking-wider">
                        {exp.organization}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-text-secondary font-mono text-[10px] uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-slate-200 shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-text-secondary" /> {exp.location}
                  </div>
                </div>

                {/* TWO-COLUMN LAYOUT: Content and Sidebar Snapshot */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Detailed Experience breakdown */}
                  <div className={`lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 space-y-8 border-l-4 ${exp.accentColor} shadow-sm h-full`}>
                    
                    {/* Context Statement */}
                    <div className="space-y-2">
                      <span className="text-[8px] font-mono text-text-secondary uppercase tracking-widest font-bold block">
                        // 01. Context &amp; Purpose
                      </span>
                      <p className="text-xs md:text-sm text-text-primary leading-relaxed font-sans font-normal italic pl-4 border-l border-slate-200">
                        "{exp.context}"
                      </p>
                    </div>

                    {/* Section 1: My Contributions */}
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <span className="text-[9px] font-mono text-brand-blue uppercase tracking-widest font-bold block flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-brand-blue" /> My Contributions
                      </span>
                      <div className="space-y-3">
                        {exp.contributions.map((contrib, cIdx) => (
                          <div key={cIdx} className="flex gap-2.5 items-start text-xs text-text-secondary font-light font-sans leading-relaxed">
                            <span className="text-[9px] font-mono text-brand-blue font-bold shrink-0 mt-0.5">&bull;</span>
                            <p>{contrib}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Section 2: Key Deliverables & Tools/Methods in Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                      
                      {/* Key Deliverables */}
                      <div className="space-y-4">
                        <span className="text-[9px] font-mono text-text-secondary uppercase tracking-widest font-bold block flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-text-secondary" /> Key Deliverables
                        </span>
                        <div className="grid grid-cols-1 gap-2">
                          {exp.deliverables.map((deliv, dIdx) => (
                            <div key={dIdx} className="bg-bg-secondary border border-slate-200 p-2.5 rounded-xl flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                              <span className="text-xs text-text-primary font-medium font-sans leading-tight">{deliv}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Section 3: Tools & Methods Used */}
                      <div className="space-y-4">
                        <span className="text-[9px] font-mono text-brand-green uppercase tracking-widest font-bold block flex items-center gap-1.5">
                          <Wrench className="w-3.5 h-3.5 text-brand-green" /> Tools &amp; Methods Used
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.toolsAndMethods.map((tool, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="px-2.5 py-1 bg-emerald-50/30 border border-emerald-100/50 text-brand-green text-[10px] font-sans font-medium rounded-lg"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Right Column: Experience Snapshot Panel */}
                  <div className="lg:col-span-4 space-y-6 h-full">
                    {exp.snapshot && (
                      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
                        
                        <div className="space-y-1.5 pb-3 border-b border-slate-100">
                          <span className="text-[8px] font-mono text-brand-blue uppercase tracking-widest font-bold block flex items-center gap-1">
                            <Activity className="w-3.5 h-3.5 text-brand-blue" /> Quick Profile
                          </span>
                          <h4 className="text-sm font-sans font-black text-text-primary uppercase tracking-tight">
                            Experience Snapshot
                          </h4>
                        </div>

                        <div className="space-y-4">
                          {[
                            { label: 'Organization', val: exp.snapshot.organization, icon: Briefcase },
                            { label: 'Role', val: exp.snapshot.role, icon: User },
                            { label: 'Duration', val: exp.snapshot.duration, icon: Clock },
                            { label: 'Primary Focus', val: exp.snapshot.primaryFocus, icon: Target },
                            { label: 'Research Scope', val: exp.snapshot.scope, icon: Layers }
                          ].map((item, sIdx) => {
                            const Icon = item.icon;
                            return (
                              <div key={sIdx} className="space-y-1">
                                <span className="text-[8px] font-mono text-text-secondary uppercase tracking-wider font-semibold block flex items-center gap-1">
                                  <Icon className="w-3 h-3 text-slate-400" /> {item.label}
                                </span>
                                <p className="text-xs text-text-primary font-semibold font-sans leading-tight">
                                  {item.val}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* SECTION 1 — SKILLS APPLIED */}
      <section className="space-y-8 pt-8 border-t border-slate-200">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 text-brand-green font-mono text-[9px] uppercase tracking-widest font-bold">
            <Award className="w-3.5 h-3.5 text-brand-green" /> Applied Competencies
          </span>
          <h3 className="text-2xl font-sans font-black uppercase text-text-primary tracking-tight">
            Skills Applied
          </h3>
          <p className="text-sm text-text-secondary font-sans font-light max-w-2xl leading-relaxed">
            The professional methodologies and strategic processes successfully utilized to drive data audits and structure diagnostic research files.
          </p>
        </div>

        {/* Grouped Skills Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS_BY_CATEGORY.map((group, idx) => {
            const IconComp = group.icon;
            return (
              <div 
                key={idx} 
                className={`bg-white border border-slate-200 rounded-3xl p-6 space-y-4 border-l-4 ${group.color} shadow-xs hover:shadow-sm transition-all`}
              >
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <h4 className="font-sans font-black text-xs uppercase text-text-primary tracking-tight">
                    {group.category}
                  </h4>
                  <IconComp className="w-4 h-4 shrink-0" />
                </div>
                <ul className="space-y-2">
                  {group.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2 text-xs text-text-secondary font-light font-sans leading-tight">
                      <span className="text-[9px] font-mono text-slate-400 font-bold shrink-0 mt-0.5">&bull;</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2 — PROFESSIONAL GROWTH */}
      <section className="space-y-8 pt-8 border-t border-slate-200">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 text-brand-blue font-mono text-[9px] uppercase tracking-widest font-bold">
            <TrendingUp className="w-3.5 h-3.5 text-brand-blue" /> Growth Analysis
          </span>
          <h3 className="text-2xl font-sans font-black uppercase text-text-primary tracking-tight">
            Professional Growth
          </h3>
          <p className="text-sm text-text-secondary font-sans font-light max-w-2xl leading-relaxed">
            How the industrial research and operational audits sharpened my core analytical, strategic, and professional capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            {
              title: 'Understand Problems First',
              desc: 'Deeply diagnostic approach: studying underlying operational bottlenecks and process mechanics before outlining technical solutions.'
            },
            {
              title: 'Structured Methodologies',
              desc: 'Applying comprehensive secondary research frameworks and formal synthesis models to structure fragmented industry workflows.'
            },
            {
              title: 'Socio-Technical Analysis',
              desc: 'Evaluating sector capacity through dual lenses: analyzing both business profitability metrics and software integration feasibility.'
            },
            {
              title: 'Executive Communication',
              desc: 'Drafting clear research briefs, formal reports, and summary decks that translate highly technical findings into business insights.'
            },
            {
              title: 'Self-Directed Execution',
              desc: 'Structuring schedules, coordinating complex sources, and driving multiple research files forward with extreme discipline.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-bg-secondary/40 border border-slate-200 rounded-2xl p-5 space-y-2 hover:bg-white hover:border-slate-300 transition-all shadow-xs flex flex-col justify-between">
              <div className="space-y-2">
                <span className="block font-mono text-[9px] text-brand-blue font-bold">0{idx + 1}</span>
                <h4 className="font-sans font-bold text-xs uppercase text-text-primary tracking-tight leading-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] text-text-secondary leading-relaxed font-sans font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — HOW THIS INFLUENCES MY PROJECTS */}
      <section className="space-y-8 pt-8 border-t border-slate-200">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 text-brand-yellow font-mono text-[9px] uppercase tracking-widest font-bold">
            <Cpu className="w-3.5 h-3.5 text-brand-yellow" /> Strategic Influence
          </span>
          <h3 className="text-2xl font-sans font-black uppercase text-text-primary tracking-tight">
            Applying These Lessons
          </h3>
          <p className="text-sm text-text-secondary font-sans font-light max-w-2xl leading-relaxed">
            The structured discipline developed during my research now directly shapes how I build software and AI projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: 'Research Before Code',
              desc: 'Conducting exhaustive domain checks and exploring existing architecture standards before starting any implementation.'
            },
            {
              title: 'User-First Frameworks',
              desc: 'Building a deep understanding of operational environments and end-user friction before defining feature roadmaps.'
            },
            {
              title: 'Problem-First Thinking',
              desc: 'Prioritizing clear problem definitions and business alignment over technical complexity or trendy paradigms.'
            },
            {
              title: 'Iterative Refinement',
              desc: 'Embracing systematic feed-forward loops, benchmark validation, and incremental feedback to test and expand system features.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200 border-t-4 border-t-brand-yellow rounded-3xl p-6 space-y-2.5 hover:shadow-xs hover:border-slate-300 transition-all shadow-sm">
              <h4 className="font-sans font-bold text-xs uppercase text-text-primary tracking-tight">
                {item.title}
              </h4>
              <p className="text-[11px] text-text-secondary leading-relaxed font-sans font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — TRANSITION */}
      <div className="bg-bg-secondary border border-slate-200 p-6 md:p-8 rounded-3xl relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6 shadow-xs border-l-4 border-l-brand-blue">
        <div className="absolute top-0 right-0 w-44 h-44 bg-brand-blue/5 rounded-full blur-[60px] pointer-events-none" />
        <div className="space-y-1 text-center md:text-left">
          <span className="text-[8px] font-mono text-brand-blue uppercase tracking-widest font-bold block">CONNECTION TO RESEARCH</span>
          <h4 className="text-base font-sans font-black text-text-primary uppercase tracking-tight">
            Explore the Structured Research Briefs
          </h4>
          <p className="text-[11px] font-sans text-text-secondary font-light max-w-xl">
            My Ahmedabad Management Association internship resulted in rigorous diagnostic studies across eight major industrial sectors. Access the complete reports and value chain mapping in the dedicated Research workspace.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
          {onNavigate && (
            <button
              onClick={() => onNavigate('research')}
              className="px-5 py-2.5 bg-brand-blue text-white rounded-full text-[10px] uppercase tracking-wider font-bold hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
            >
              Explore Research <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            onClick={onNavigateToProjects}
            className="px-5 py-2.5 bg-white border border-slate-200 hover:border-brand-blue text-text-primary hover:text-brand-blue rounded-full text-[10px] uppercase tracking-wider font-bold transition-all duration-200 flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
          >
            Explore Projects <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
