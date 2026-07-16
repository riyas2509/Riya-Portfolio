import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  FileText,
  ChevronRight
} from 'lucide-react';

import { PERSONAL_INFO, PORTFOLIO_METADATA } from './data/personal';
import { LINKS } from './data/links';

// Route-level lazy loading for production-grade bundle optimization
const HomeView = lazy(() => import('./views/HomeView'));
const AboutView = lazy(() => import('./views/AboutView'));
const ExperienceView = lazy(() => import('./views/ExperienceView'));
const ProjectsView = lazy(() => import('./views/ProjectsView'));
const ResearchView = lazy(() => import('./views/ResearchView'));
const AchievementsView = lazy(() => import('./views/AchievementsView'));
const ContactView = lazy(() => import('./views/ContactView'));

// Lightweight Google-inspired loading spinner to prevent layout shifts
function ViewLoadingFallback() {
  return (
    <div className="w-full min-h-[50vh] flex flex-col items-center justify-center space-y-4 py-12" id="suspense-loading-view">
      <div className="flex gap-2 justify-center items-center">
        <span className="w-3 h-3 rounded-full bg-brand-blue animate-bounce [animation-delay:-0.3s]" />
        <span className="w-3 h-3 rounded-full bg-brand-green animate-bounce [animation-delay:-0.15s]" />
        <span className="w-3 h-3 rounded-full bg-brand-yellow animate-bounce" />
        <span className="w-3 h-3 rounded-full bg-brand-red animate-bounce [animation-delay:0.15s]" />
      </div>
      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-text-secondary font-bold animate-pulse">
        Initializing view...
      </span>
    </div>
  );
}

export default function App() {
  const [activeView, setActiveView] = useState<string>('home');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Force Light Theme (Consistent single visual choice as recommended)
  useEffect(() => {
    localStorage.setItem('theme', 'light');
    document.documentElement.classList.remove('dark');
  }, []);

  // Monitor active view shifts and scroll heights to reset views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
    setMobileMenuOpen(false);
  }, [activeView]);

  // Dynamic Title and SEO Meta Description management
  useEffect(() => {
    let title = 'Riya Shah | AI & ML Undergraduate & Product Builder';
    let description = 'Riya Shah is an AI/ML Undergraduate & Product Builder. Discover technical projects and interactive developer sandboxes.';

    switch (activeView) {
      case 'home':
        title = 'Riya Shah | AI & ML Undergraduate & Product Builder';
        description = "Explore Riya Shah's personal portfolio. Undergraduate student working on software, AI, and interactive sandboxes.";
        break;
      case 'about':
        title = 'About Riya Shah | Academic Profile & Core Path';
        description = "Read about Riya Shah's educational background in AI/ML, her coursework, and her industry research path.";
        break;
      case 'experience':
        title = 'Professional Experience & Tenure | Riya Shah';
        description = "Review Riya Shah's research internship at Ahmedabad Management Association (AMA), and product building projects.";
        break;
      case 'projects':
        title = 'Interactive Developer Sandbox & Projects | Riya Shah';
        description = 'Test and execute real browser-based projects like EchoNote, convolutional Sudoku solvers, and predictive pipelines.';
        break;
      case 'skills':
        title = 'Engineering Capabilities & Heatmaps | Riya Shah';
        description = 'Interact with live proficiency bar charts, skills vectors, and detailed descriptions of programming and GenAI techniques.';
        break;
      case 'research':
        title = 'Strategic Briefings, Audits & Studies | Riya Shah';
        description = 'Explore deep technical research documents, industry studies, and analytical papers.';
        break;
      case 'achievements':
        title = 'Venture Benchmarks & Certifications | Riya Shah';
        description = 'View IELTS Band 7.0, Google × Antler Capital, SST Startup LaunchPad, and elite programming badges.';
        break;
      case 'contact':
        title = "Let's Connect / Print Resume | Riya Shah";
        description = 'Send a message directly via a secure form transmission or inspect the high-fidelity professional print-only resume.';
        break;
    }

    document.title = title;

    const setMeta = (query: string, attrName: string, attrVal: string, content: string) => {
      let el = document.querySelector(query);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="twitter:title"]', 'property', 'twitter:title', title);
    setMeta('meta[property="twitter:description"]', 'property', 'twitter:description', description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://riya.echotechai.in/${activeView === 'home' ? '' : `?view=${activeView}`}`);
  }, [activeView]);

  // Monitor scroll progress for the top indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Research', id: 'research' },
    { label: 'Experience', id: 'experience' },
    { label: 'Recognition & Milestones', id: 'achievements' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen text-text-primary bg-bg-primary selection:bg-brand-blue/20 selection:text-text-primary font-sans antialiased relative flex flex-col justify-between">
      
      {/* Decorative ambient visual background (Premium Anthropic/DeepMind Theme) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/[0.03] rounded-full blur-[140px] -mr-80 -mt-80" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-green/[0.02] rounded-full blur-[120px] -ml-40 -mb-40" />
      </div>

      {/* STICKY TOP NAVIGATION */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-4 py-4 transition-all shadow-sm" id="main-header">
        {/* Scroll Progress Bar */}
        <div 
          className="absolute top-0 left-0 h-[2.5px] bg-brand-blue transition-all duration-75 shadow-[0_0_8px_rgba(66,133,244,0.6)] z-50" 
          style={{ width: `${scrollProgress}%` }} 
          id="scroll-progress-bar"
        />
        
        <div className="max-w-[1536px] xl:max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 flex justify-between items-center">
          {/* Brand Mark */}
          <button 
            onClick={() => setActiveView('home')} 
            className="flex flex-col text-left group cursor-pointer focus:outline-none"
          >
            <span className="font-secondary text-[9px] uppercase tracking-[0.35em] text-text-secondary font-medium group-hover:text-brand-blue transition-colors">
              AI &amp; ML STUDENT // RIYA SHAH
            </span>
            <span className="font-sans font-extrabold text-xl tracking-tight uppercase text-text-primary group-hover:text-brand-blue transition-colors leading-none mt-1">
              Riya Shah.
            </span>
          </button>
          
          {/* Desktop Navigation (Unified 7 Pages as requested) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 text-[14px] xl:text-[15px] font-medium tracking-normal">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveView(link.id)}
                className={`transition-all hover:text-brand-blue relative py-1.5 cursor-pointer leading-none ${
                  activeView === link.id 
                    ? 'text-brand-blue font-semibold' 
                    : 'text-text-secondary'
                }`}
              >
                {link.label}
                {activeView === link.id && (
                  <motion.span 
                    layoutId="activeNavIndicator" 
                    className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-blue" 
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Action Call Ports */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveView('contact')}
              className="px-4 py-2 border border-slate-200 hover:border-brand-blue rounded-full text-[14px] font-medium tracking-normal text-text-primary hover:text-brand-blue transition-all duration-200 cursor-pointer bg-bg-secondary hover:bg-brand-blue/5 font-sans"
            >
              Let's Connect
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-text-secondary hover:text-text-primary rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-200"
              aria-label="Toggle navigation drawer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN RESPONSIVE NAV DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[69px] bottom-0 z-40 bg-bg-primary border-t border-slate-200 p-6 flex flex-col space-y-6 overflow-y-auto shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              <span className="font-secondary text-xs font-medium uppercase tracking-[0.05em] text-text-secondary">SYSTEM NAVIGATION CHANNELS</span>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setActiveView(link.id)}
                  className={`w-full text-left py-3.5 px-4 rounded-xl font-sans text-[15px] font-semibold tracking-normal transition-all flex items-center justify-between ${
                    activeView === link.id
                      ? 'bg-brand-blue/10 text-brand-blue font-bold border border-brand-blue/20'
                      : 'text-text-secondary hover:bg-slate-50 border border-transparent'
                  }`}
                  style={{ minHeight: '44px' }}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-200 space-y-4">
              <span className="block font-secondary text-xs font-medium uppercase tracking-[0.05em] text-text-secondary">SECURE SOCIAL CONNECT</span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-slate-50 border border-slate-200 text-center font-sans text-[15px] font-medium tracking-normal text-text-secondary rounded-lg flex items-center justify-center gap-1.5 hover:bg-slate-100 transition-colors"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-slate-50 border border-slate-200 text-center font-sans text-[15px] font-medium tracking-normal text-text-secondary rounded-lg flex items-center justify-center gap-1.5 hover:bg-slate-100 transition-colors"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN LAYOUT CANVAS CONTAINER */}
      <main className="max-w-[1536px] xl:max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 py-8 flex-grow w-full relative z-30">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="w-full"
          >
            <Suspense fallback={<ViewLoadingFallback />}>
              {activeView === 'home' && (
                <HomeView 
                  onNavigate={setActiveView} 
                />
              )}
              {activeView === 'about' && (
                <AboutView onNavigate={setActiveView} />
              )}
              {activeView === 'experience' && (
                <ExperienceView 
                  onNavigateToProjects={() => setActiveView('projects')} 
                  onNavigate={(view) => setActiveView(view)}
                />
              )}
              {activeView === 'projects' && (
                <ProjectsView />
              )}
              {activeView === 'research' && <ResearchView onNavigate={setActiveView} />}
              {activeView === 'achievements' && <AchievementsView onNavigate={setActiveView} />}
              {activeView === 'contact' && <ContactView />}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* PROFESSIONAL UNIFORM FOOTER */}
      <footer className="border-t border-slate-200 bg-bg-secondary py-11 px-6 mt-16 relative z-20">
        <div className="max-w-[1536px] xl:max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 space-y-8">
          
          {/* Main Footer Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Tagline details branding column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex flex-col">
                <span className="font-secondary text-[9px] uppercase tracking-[0.25em] text-brand-blue font-semibold">AI & ML Undergrad &bull; Product Builder</span>
                <span className="font-sans font-black text-2xl tracking-tighter uppercase text-text-primary mt-1">Riya Shah.</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed font-secondary max-w-sm font-normal">
                Exploring artificial intelligence, machine learning, and product development through practical projects and academic research.
              </p>
            </div>

            {/* Quick page link lists */}
            <div className="md:col-span-4 space-y-3">
              <span className="block font-secondary text-[11px] uppercase tracking-[0.15em] text-brand-blue font-bold">Quick Links</span>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[13px] font-secondary text-text-secondary">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => setActiveView(link.id)}
                    className="text-text-secondary hover:text-brand-blue text-left transition-colors cursor-pointer block py-0.5 font-medium"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Channel coordinates downloads */}
            <div className="md:col-span-3 space-y-4 text-left">
              <span className="block font-secondary text-[11px] uppercase tracking-[0.15em] text-brand-blue font-bold">Connect</span>
              <div className="text-[13px] space-y-2.5 font-secondary">
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  className="flex items-center gap-2 text-text-secondary hover:text-brand-blue transition-colors truncate font-medium"
                >
                  <Mail className="w-4 h-4 shrink-0 text-text-secondary/60" /> Email
                </a>
                <a 
                  href={PERSONAL_INFO.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-text-secondary hover:text-brand-blue transition-colors truncate font-medium"
                >
                  <Github className="w-4 h-4 shrink-0 text-text-secondary/60" /> GitHub
                </a>
                <a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-text-secondary hover:text-brand-blue transition-colors truncate font-medium"
                >
                  <Linkedin className="w-4 h-4 shrink-0 text-text-secondary/60" /> LinkedIn
                </a>
                <a 
                  href={PERSONAL_INFO.echotech} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-text-secondary hover:text-brand-blue transition-colors truncate font-medium"
                >
                  <ExternalLink className="w-4 h-4 shrink-0 text-text-secondary/60" /> EchoTech
                </a>
                
                {/* PDF Resume download button */}
                <a
                  href={LINKS.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Riya_Resume.pdf"
                  className="w-full py-2.5 px-3 border border-slate-200 hover:border-brand-blue text-center font-secondary text-xs font-semibold rounded-lg text-text-primary hover:text-brand-blue transition-all flex items-center justify-center gap-1.5 cursor-pointer bg-bg-card hover:bg-bg-secondary shadow-sm mt-2"
                >
                  <FileText className="w-4 h-4" /> Download CV / Resume
                </a>
              </div>
            </div>

          </div>

          {/* Social connections & Copyright row */}
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-secondary text-text-secondary">
            <p>© 2026 Riya Shah &bull; Academic & Developer Portfolio</p>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center font-medium">
              <span>Version {PORTFOLIO_METADATA.version}</span>
              <span className="hidden md:inline">&bull;</span>
              <span>Last Updated {PORTFOLIO_METADATA.lastUpdated}</span>
            </div>
            <p>Built with React, TypeScript & Tailwind CSS</p>
          </div>

        </div>
      </footer>
    </div>
  );
}
