import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Check, 
  Copy, 
  Github, 
  Linkedin, 
  FileText, 
  Building, 
  Globe, 
  ExternalLink, 
  Download, 
  MapPin, 
  Clock,
  ArrowUpRight,
  CheckCircle2,
  FileCheck,
  AlertCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/personal';
import { LINKS } from '../data/links';

export default function ContactView() {
  const [copiedText, setCopiedText] = useState<'email' | null>(null);

  // Form interactive states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // anti-spam hidden honeypot
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText('email');
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Inline validator
  const validateField = (name: string, value: string) => {
    let error = '';
    const trimmed = value.trim();

    if (name === 'name') {
      if (!trimmed) {
        error = 'Full name is required.';
      } else if (trimmed.length < 2) {
        error = 'Name must be at least 2 characters.';
      } else if (trimmed.length > 100) {
        error = 'Name must be under 100 characters.';
      }
    } else if (name === 'email') {
      if (!trimmed) {
        error = 'Email address is required.';
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(trimmed)) {
          error = 'Please enter a valid email address.';
        }
      }
    } else if (name === 'subject') {
      if (!trimmed) {
        error = 'Subject is required.';
      } else if (trimmed.length < 4) {
        error = 'Subject must be at least 4 characters.';
      } else if (trimmed.length > 150) {
        error = 'Subject must be under 150 characters.';
      }
    } else if (name === 'message') {
      if (!trimmed) {
        error = 'Message is required.';
      } else if (trimmed.length < 10) {
        error = 'Message must be at least 10 characters.';
      } else if (trimmed.length > 2000) {
        error = 'Message must be under 2000 characters.';
      }
    }

    setErrors(prev => ({ ...prev, [name]: error }));
    return error === '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field-level error immediately when the user starts correcting it
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. Spam Protection: Honeypot trap check
    if (formData.honeypot) {
      // Silently consume submission and display simulated success to frustrate bots
      setSuccessMessage('Thank you for reaching out. Your message has been sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      return;
    }

    // 2. Validate all fields
    const isNameValid = validateField('name', formData.name);
    const isEmailValid = validateField('email', formData.email);
    const isSubjectValid = validateField('subject', formData.subject);
    const isMessageValid = validateField('message', formData.message);

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
      setErrorMessage('Please correct the validation issues highlighted below.');
      return;
    }

    // 3. Spam Protection: Cooldown Debounce (60-second limit)
    const lastSubmission = localStorage.getItem('contact_cooldown_timestamp');
    const now = Date.now();
    if (lastSubmission) {
      const elapsed = now - parseInt(lastSubmission, 10);
      if (elapsed < 60000) {
        const remaining = Math.ceil((60000 - elapsed) / 1000);
        setErrorMessage(`Security limit: Please wait ${remaining} seconds before submitting another request.`);
        return;
      }
    }

    setIsSending(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      // 4. Lazy Load EmailJS (satisfies performance/lazy-loading requirement)
      const emailjs = await import('@emailjs/browser');

      const metaEnv = (import.meta as any).env || {};
      const serviceId = metaEnv.VITE_EMAILJS_SERVICE_ID || '';
      const templateId = metaEnv.VITE_EMAILJS_TEMPLATE_ID || '';
      const publicKey = metaEnv.VITE_EMAILJS_PUBLIC_KEY || '';

      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS configurations are missing in environment variables.');
        throw new Error('Config missing');
      }

      const templateParams = {
        from_name: formData.name.trim(),
        reply_to: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        to_name: 'Riya Shah',
      };

      await emailjs.default.send(
        serviceId,
        templateId,
        templateParams,
        {
          publicKey: publicKey
        }
      );

      // Save submission time to limit rate
      localStorage.setItem('contact_cooldown_timestamp', now.toString());

      setSuccessMessage('Thank you for reaching out. Your message has been sent successfully. I will get back to you as soon as possible.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '',
      });
      setErrors({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Transmission Failure:', error);
      setErrorMessage('We experienced a connection issue while sending your message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  // Helper to check if overall form state is invalid
  const isFormInvalid = 
    !!(errors.name || errors.email || errors.subject || errors.message) ||
    !formData.name.trim() ||
    !formData.email.trim() ||
    !formData.subject.trim() ||
    !formData.message.trim();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-16 py-4"
    >
      {/* SECTION 1: INTRODUCTION */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-brand-blue font-mono text-[9px] uppercase tracking-widest font-bold">
          <Mail className="w-3.5 h-3.5 text-brand-blue" /> RECRUITER GATEWAY
        </div>
        <h2 className="text-3xl md:text-4xl font-sans font-black uppercase text-text-primary tracking-tight">
          Let's Connect
        </h2>
        <p className="text-sm text-text-secondary font-sans font-light max-w-2xl leading-relaxed">
          I'm always open to discussing internships, research opportunities, software engineering roles, AI projects, collaborations, and innovative ideas.
        </p>
      </div>

      {/* MAIN TWO-COLUMN RECRUITER EXPERIENCE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: SECTION 2 — CONTACT METHODS & FORM */}
        <div className="lg:col-span-7 space-y-6">
          <div className="border-b border-slate-100 pb-2">
            <span className="block font-mono text-[9px] text-brand-blue uppercase font-bold tracking-widest">// Direct Channels</span>
            <h3 className="text-lg font-sans font-black text-text-primary uppercase tracking-tight">Contact Methods</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* EMAIL CARD */}
            <div className="bg-white border border-slate-200 border-l-4 border-l-brand-blue rounded-3xl p-5 hover:shadow-md transition-all duration-200 flex flex-col justify-between h-48 group shadow-sm">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="p-2 bg-brand-blue/5 border border-brand-blue/10 rounded-xl">
                    <Mail className="w-4 h-4 text-brand-blue" />
                  </div>
                  <button 
                    onClick={() => handleCopy(PERSONAL_INFO.email)}
                    className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-text-primary transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedText === 'email' ? <Check className="w-3.5 h-3.5 text-brand-green" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="font-sans font-black text-xs text-text-primary uppercase tracking-tight">Email Inquiry</h4>
                  <p className="text-[11px] text-text-secondary font-sans font-light leading-relaxed">
                    Direct line for professional placements, internship positions, and academic inquiries.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="font-mono text-[9px] text-text-secondary font-semibold truncate max-w-[140px] md:max-w-[110px] lg:max-w-[130px]">{PERSONAL_INFO.email}</span>
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-2.5 py-1 bg-brand-blue/5 hover:bg-brand-blue text-brand-blue hover:text-white rounded-lg font-mono text-[8px] font-bold uppercase tracking-wider transition-all duration-150 flex items-center gap-1 cursor-pointer"
                >
                  Open <ArrowUpRight className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            {/* LINKEDIN CARD */}
            <div className="bg-white border border-slate-200 border-l-4 border-l-brand-green rounded-3xl p-5 hover:shadow-md transition-all duration-200 flex flex-col justify-between h-48 group shadow-sm">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="p-2 bg-brand-green/5 border border-brand-green/10 rounded-xl">
                    <Linkedin className="w-4 h-4 text-brand-green" />
                  </div>
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="font-sans font-black text-xs text-text-primary uppercase tracking-tight">LinkedIn Network</h4>
                  <p className="text-[11px] text-text-secondary font-sans font-light leading-relaxed">
                    Connect for professional recommendations, direct messaging, and industry network updates.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="font-mono text-[9px] text-text-secondary font-semibold">@riya-shah</span>
                <a 
                  href={PERSONAL_INFO.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-brand-green/5 hover:bg-brand-green text-brand-green hover:text-white rounded-lg font-mono text-[8px] font-bold uppercase tracking-wider transition-all duration-150 flex items-center gap-1 cursor-pointer"
                >
                  Open <ArrowUpRight className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            {/* GITHUB CARD */}
            <div className="bg-white border border-slate-200 border-l-4 border-l-brand-red rounded-3xl p-5 hover:shadow-md transition-all duration-200 flex flex-col justify-between h-48 group shadow-sm">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="p-2 bg-brand-red/5 border border-brand-red/10 rounded-xl">
                    <Github className="w-4 h-4 text-brand-red" />
                  </div>
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="font-sans font-black text-xs text-text-primary uppercase tracking-tight">Source Sandbox</h4>
                  <p className="text-[11px] text-text-secondary font-sans font-light leading-relaxed">
                    Explore my compiled code, DSA libraries, solver frameworks, and active AI deployments.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="font-mono text-[9px] text-text-secondary font-semibold">@riyas2509</span>
                <a 
                  href={PERSONAL_INFO.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-brand-red/5 hover:bg-brand-red text-brand-red hover:text-white rounded-lg font-mono text-[8px] font-bold uppercase tracking-wider transition-all duration-150 flex items-center gap-1 cursor-pointer"
                >
                  Open <ArrowUpRight className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            {/* ECHOTECH CARD */}
            <div className="bg-white border border-slate-200 border-l-4 border-l-brand-yellow rounded-3xl p-5 hover:shadow-md transition-all duration-200 flex flex-col justify-between h-48 group shadow-sm">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="p-2 bg-brand-yellow/5 border border-brand-yellow/10 rounded-xl">
                    <Building className="w-4 h-4 text-brand-yellow" />
                  </div>
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="font-sans font-black text-xs text-text-primary uppercase tracking-tight">EchoTech Ecosystem</h4>
                  <p className="text-[11px] text-text-secondary font-sans font-light leading-relaxed">
                    Visit my self-directed digital workshop, housing live demos and full-stack software products.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="font-mono text-[9px] text-text-secondary font-semibold">echotechai.in</span>
                <a 
                  href={PERSONAL_INFO.echotech}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-brand-yellow/5 hover:bg-brand-yellow text-brand-yellow hover:text-white rounded-lg font-mono text-[8px] font-bold uppercase tracking-wider transition-all duration-150 flex items-center gap-1 cursor-pointer"
                >
                  Open <ArrowUpRight className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

          </div>

          {/* PHYSICAL LOCATION SUB-CARD */}
          <div className="bg-bg-secondary border border-slate-200 p-4 rounded-2xl flex items-center justify-between shadow-xs">
            <span className="font-mono text-[8px] text-text-secondary uppercase tracking-widest font-bold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-red" /> Current Base Location
            </span>
            <span className="font-sans text-xs font-semibold text-text-primary">{PERSONAL_INFO.location}</span>
          </div>

          {/* HIGH-FIDELITY, ACCESSIBLE, SPA-SAFE CONTACT FORM */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-2">
              <span className="block font-mono text-[9px] text-brand-blue uppercase font-bold tracking-widest">// Secure Communication Gateway</span>
              <h3 className="text-lg font-sans font-black text-text-primary uppercase tracking-tight">Send a Direct Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              
              {/* HONEYPOT SPAM PROTECTION */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website-honeypot">Leave this blank</label>
                <input
                  id="website-honeypot"
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="new-password"
                />
              </div>

              {/* FULL NAME */}
              <div className="space-y-1 text-left">
                <label htmlFor="contact-name" className="block font-mono text-[9px] text-text-secondary uppercase font-bold tracking-wider">
                  Full Name <span className="text-brand-red font-semibold">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSending}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  placeholder="e.g., Sarah Jenkins"
                  className={`w-full px-4 py-2.5 bg-bg-secondary border rounded-xl font-sans text-xs text-text-primary transition-all placeholder:text-text-secondary/40 focus:outline-none focus:ring-2 ${
                    errors.name 
                      ? 'border-brand-red focus:ring-brand-red/10 focus:border-brand-red' 
                      : 'border-slate-200 focus:ring-brand-blue/10 focus:border-brand-blue'
                  }`}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="text-[10px] text-brand-red font-sans font-medium flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" /> {errors.name}
                  </p>
                )}
              </div>

              {/* EMAIL ADDRESS */}
              <div className="space-y-1 text-left">
                <label htmlFor="contact-email" className="block font-mono text-[9px] text-text-secondary uppercase font-bold tracking-wider">
                  Email Address <span className="text-brand-red font-semibold">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSending}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  placeholder="e.g., s.jenkins@company.com"
                  className={`w-full px-4 py-2.5 bg-bg-secondary border rounded-xl font-sans text-xs text-text-primary transition-all placeholder:text-text-secondary/40 focus:outline-none focus:ring-2 ${
                    errors.email 
                      ? 'border-brand-red focus:ring-brand-red/10 focus:border-brand-red' 
                      : 'border-slate-200 focus:ring-brand-blue/10 focus:border-brand-blue'
                  }`}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="text-[10px] text-brand-red font-sans font-medium flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" /> {errors.email}
                  </p>
                )}
              </div>

              {/* SUBJECT */}
              <div className="space-y-1 text-left">
                <label htmlFor="contact-subject" className="block font-mono text-[9px] text-text-secondary uppercase font-bold tracking-wider">
                  Subject <span className="text-brand-red font-semibold">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSending}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  placeholder="e.g., Software Engineer Internship Inquiry"
                  className={`w-full px-4 py-2.5 bg-bg-secondary border rounded-xl font-sans text-xs text-text-primary transition-all placeholder:text-text-secondary/40 focus:outline-none focus:ring-2 ${
                    errors.subject 
                      ? 'border-brand-red focus:ring-brand-red/10 focus:border-brand-red' 
                      : 'border-slate-200 focus:ring-brand-blue/10 focus:border-brand-blue'
                  }`}
                />
                {errors.subject && (
                  <p id="subject-error" role="alert" className="text-[10px] text-brand-red font-sans font-medium flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" /> {errors.subject}
                  </p>
                )}
              </div>

              {/* MESSAGE TEXTAREA */}
              <div className="space-y-1 text-left">
                <div className="flex justify-between items-center">
                  <label htmlFor="contact-message" className="block font-mono text-[9px] text-text-secondary uppercase font-bold tracking-wider">
                    Message <span className="text-brand-red font-semibold">*</span>
                  </label>
                  <span className="font-mono text-[8px] text-text-secondary tracking-tight">
                    {formData.message.length}/2000 chars
                  </span>
                </div>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSending}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  placeholder="Write details on opportunities, research placements, or collaborations..."
                  className={`w-full px-4 py-2.5 bg-bg-secondary border rounded-xl font-sans text-xs text-text-primary transition-all placeholder:text-text-secondary/40 focus:outline-none focus:ring-2 resize-none ${
                    errors.message 
                      ? 'border-brand-red focus:ring-brand-red/10 focus:border-brand-red' 
                      : 'border-slate-200 focus:ring-brand-blue/10 focus:border-brand-blue'
                  }`}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="text-[10px] text-brand-red font-sans font-medium flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" /> {errors.message}
                  </p>
                )}
              </div>

              {/* FEEDBACK STATUS ALERTS */}
              {successMessage && (
                <div role="status" className="p-4 bg-brand-green/5 border border-brand-green/20 text-brand-green rounded-2xl text-xs font-sans flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-brand-green" />
                  <div>
                    <p className="font-bold uppercase tracking-wide text-[10px] text-brand-green">Transmission Succeeded</p>
                    <p className="font-light mt-0.5 text-text-primary">{successMessage}</p>
                  </div>
                </div>
              )}

              {errorMessage && (
                <div role="status" className="p-4 bg-brand-red/5 border border-brand-red/20 text-brand-red rounded-2xl text-xs font-sans flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-brand-red" />
                  <div>
                    <p className="font-bold uppercase tracking-wide text-[10px] text-brand-red">Transmission Blocked</p>
                    <p className="font-light mt-0.5 text-text-primary">{errorMessage}</p>
                  </div>
                </div>
              )}

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSending || isFormInvalid}
                className="w-full px-5 py-3 bg-brand-blue hover:bg-brand-blue/90 disabled:bg-slate-100 disabled:text-text-secondary/40 text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed shadow-sm"
              >
                {isSending ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-text-secondary/30 border-t-brand-blue rounded-full animate-spin shrink-0" />
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

        {/* RIGHT COLUMN: PROFESSIONAL RESUME EXPERIENCE CARD */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* PROFESSIONAL RESUME EXPERIENCE CARD (SECTIONS 1-5) */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-5">
            {/* SECTION 1: Resume Title & Subtitle */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div className="space-y-1 text-left">
                <span className="block font-mono text-[8px] text-brand-blue uppercase font-bold tracking-widest">// Credentials & Focus</span>
                <h4 className="font-sans font-black text-sm text-text-primary uppercase tracking-tight">Professional Resume</h4>
                <p className="text-[11px] text-text-secondary font-sans font-light leading-relaxed">
                  A concise summary of my academic background, technical projects, research experience, and professional milestones.
                </p>
              </div>
              <div className="p-2 bg-brand-blue/5 border border-brand-blue/10 rounded-xl shrink-0">
                <FileText className="w-5 h-5 text-brand-blue" />
              </div>
            </div>

            {/* SECTION 2: Resume Snapshot */}
            <div className="space-y-2 text-left">
              <span className="block font-mono text-[8px] text-text-secondary uppercase font-bold tracking-wider">Resume Snapshot</span>
              <div className="grid grid-cols-1 gap-2">
                {[
                  'AI & ML Undergraduate',
                  'Industry Research Intern',
                  'Google for Startups × Antler Immersion',
                  'Top 10 Finalist – Scaler LaunchPad',
                  'ATS-Friendly PDF'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-text-primary font-sans font-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 3: Resume Actions */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              {/* View Resume Button */}
              <a
                href={LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2.5 bg-white border border-slate-200 hover:border-brand-blue text-text-primary hover:bg-slate-50 font-mono text-[9px] font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs focus:ring-2 focus:ring-brand-blue/20 outline-none"
              >
                <Globe className="w-3.5 h-3.5 text-brand-blue" /> View Resume
              </a>

              {/* Download Resume Button */}
              <a
                href={LINKS.resume}
                download="Riya_Resume.pdf"
                className="px-3 py-2.5 bg-brand-blue hover:bg-brand-blue/90 text-white font-mono text-[9px] font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm focus:ring-2 focus:ring-brand-blue/20 outline-none"
              >
                <Download className="w-3.5 h-3.5" /> Download PDF
              </a>
            </div>

            {/* SECTION 4: Resume Metadata */}
            <div className="bg-bg-secondary border border-slate-100 rounded-2xl p-4 space-y-2 text-left">
              <span className="block font-mono text-[8px] text-text-secondary uppercase font-bold tracking-wider">Resume Metadata</span>
              <div className="grid grid-cols-2 gap-3 text-xs font-sans">
                <div>
                  <span className="block text-[8px] font-mono text-text-secondary uppercase">Format</span>
                  <span className="font-bold text-text-primary">PDF</span>
                </div>
                <div>
                  <span className="block text-[8px] font-mono text-text-secondary uppercase">Version</span>
                  <span className="font-bold text-text-primary">Latest</span>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-200/50">
                <span className="block text-[8px] font-mono text-text-secondary uppercase">Purpose</span>
                <span className="text-xs text-text-primary font-light">Internships, Research, Software Engineering, AI/ML Roles</span>
              </div>
            </div>

            {/* SECTION 5: Professional Note */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-[10px] text-text-secondary font-sans font-light leading-relaxed text-left flex gap-2">
              <FileCheck className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
              <span>
                <strong>Note:</strong> The resume is updated regularly to reflect current projects, experience, and technical growth.
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* NEW SECTION: RECRUITER ACTION CENTER */}
      <div className="border-t border-slate-200/60 pt-10 space-y-8">
        
        {/* SECTION 1: Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-left">
          <div className="space-y-1.5">
            <span className="block font-mono text-[9px] text-brand-blue uppercase font-bold tracking-widest">// Evaluation Hub</span>
            <h3 className="text-xl font-sans font-black text-text-primary uppercase tracking-tight">Recruiter Quick Actions</h3>
            <p className="text-xs text-text-secondary font-sans font-light">
              Everything you need to evaluate my profile in one place.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[9px] font-mono text-text-secondary shrink-0 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full">
            <span>NATIVE PORTFOLIO EXPORT:</span>
            <button 
              onClick={() => window.print()}
              className="hover:underline text-brand-blue font-bold uppercase cursor-pointer focus:outline-none"
              aria-label="Print resume view directly"
            >
              Print PDF Copy
            </button>
          </div>
        </div>

        {/* SECTION 2: Six Action Cards/Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          
          {/* Action 1: View Resume */}
          <a
            href={LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-5 bg-white border border-slate-200 hover:border-brand-blue rounded-3xl text-center group transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
            aria-label="View Resume (Opens in a new tab)"
          >
            <div className="p-3 bg-brand-blue/5 border border-brand-blue/10 rounded-2xl mb-3 group-hover:scale-105 transition-transform duration-150">
              <FileText className="w-5 h-5 text-brand-blue" />
            </div>
            <span className="font-sans font-black text-xs text-text-primary uppercase tracking-tight">View Resume</span>
            <span className="font-mono text-[8px] text-text-secondary uppercase mt-1.5 flex items-center gap-0.5">
              Open PDF <ExternalLink className="w-2 h-2" />
            </span>
          </a>

          {/* Action 2: Download Resume */}
          <a
            href={LINKS.resume}
            download="Riya_Resume.pdf"
            className="flex flex-col items-center justify-center p-5 bg-white border border-slate-200 hover:border-brand-green rounded-3xl text-center group transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
            aria-label="Download Resume PDF"
          >
            <div className="p-3 bg-brand-green/5 border border-brand-green/10 rounded-2xl mb-3 group-hover:scale-105 transition-transform duration-150">
              <Download className="w-5 h-5 text-brand-green" />
            </div>
            <span className="font-sans font-black text-xs text-text-primary uppercase tracking-tight">Download</span>
            <span className="font-mono text-[8px] text-text-secondary uppercase mt-1.5">
              Riya_Resume.pdf
            </span>
          </a>

          {/* Action 3: View LinkedIn */}
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-5 bg-white border border-slate-200 hover:border-brand-blue rounded-3xl text-center group transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
            aria-label="View LinkedIn Profile"
          >
            <div className="p-3 bg-brand-blue/5 border border-brand-blue/10 rounded-2xl mb-3 group-hover:scale-105 transition-transform duration-150">
              <Linkedin className="w-5 h-5 text-brand-blue" />
            </div>
            <span className="font-sans font-black text-xs text-text-primary uppercase tracking-tight">LinkedIn</span>
            <span className="font-mono text-[8px] text-text-secondary uppercase mt-1.5">
              Connect
            </span>
          </a>

          {/* Action 4: View GitHub */}
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-5 bg-white border border-slate-200 hover:border-brand-red rounded-3xl text-center group transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
            aria-label="View GitHub Profile"
          >
            <div className="p-3 bg-brand-red/5 border border-brand-red/10 rounded-2xl mb-3 group-hover:scale-105 transition-transform duration-150">
              <Github className="w-5 h-5 text-brand-red" />
            </div>
            <span className="font-sans font-black text-xs text-text-primary uppercase tracking-tight">GitHub</span>
            <span className="font-mono text-[8px] text-text-secondary uppercase mt-1.5">
              Repositories
            </span>
          </a>

          {/* Action 5: Visit EchoTech */}
          <a
            href={LINKS.echotech}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-5 bg-white border border-slate-200 hover:border-brand-yellow rounded-3xl text-center group transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-yellow/20 focus:border-brand-yellow"
            aria-label="Visit EchoTech Website"
          >
            <div className="p-3 bg-brand-yellow/5 border border-brand-yellow/10 rounded-2xl mb-3 group-hover:scale-105 transition-transform duration-150">
              <Building className="w-5 h-5 text-brand-yellow" />
            </div>
            <span className="font-sans font-black text-xs text-text-primary uppercase tracking-tight">EchoTech</span>
            <span className="font-mono text-[8px] text-text-secondary uppercase mt-1.5">
              echotechai.in
            </span>
          </a>

          {/* Action 6: Email Me */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex flex-col items-center justify-center p-5 bg-white border border-slate-200 hover:border-brand-blue rounded-3xl text-center group transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
            aria-label="Email Riya Shah"
          >
            <div className="p-3 bg-brand-blue/5 border border-brand-blue/10 rounded-2xl mb-3 group-hover:scale-105 transition-transform duration-150">
              <Mail className="w-5 h-5 text-brand-blue" />
            </div>
            <span className="font-sans font-black text-xs text-text-primary uppercase tracking-tight">Email Me</span>
            <span className="font-mono text-[8px] text-text-secondary uppercase mt-1.5">
              Direct Contact
            </span>
          </a>

        </div>

        {/* Bottom Sub-grid (Sections 3 & 4) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* SECTION 3: Availability Status */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <div className="space-y-0.5 text-left">
                <span className="block font-mono text-[8px] text-brand-green uppercase font-bold tracking-widest">// Current Status</span>
                <h4 className="font-sans font-black text-sm text-text-primary uppercase tracking-tight">Status &amp; Availability</h4>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-brand-green/5 border border-brand-green/20 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                <span className="font-mono text-[8px] text-brand-green font-bold uppercase">Currently Open To</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-left pt-1">
              {[
                'Internships',
                'Software Engineering Roles',
                'AI/ML Roles',
                'Research Opportunities',
                'Product Development Opportunities'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-text-primary font-sans font-light">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 4: Response Expectations */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4 flex flex-col justify-between text-left">
            <div className="border-b border-slate-100 pb-2.5">
              <span className="block font-mono text-[8px] text-brand-blue uppercase font-bold tracking-widest">// Communication Channels</span>
              <h4 className="font-sans font-black text-sm text-text-primary uppercase tracking-tight">Response Expectations</h4>
            </div>

            <div className="grid grid-cols-3 gap-3 text-xs font-sans py-1">
              <div>
                <span className="block text-[8px] font-mono text-text-secondary uppercase">Preferred</span>
                <span className="font-bold text-text-primary flex items-center gap-1 mt-1">
                  <Mail className="w-3.5 h-3.5 text-brand-blue" /> Email
                </span>
              </div>
              <div>
                <span className="block text-[8px] font-mono text-text-secondary uppercase">Typical SLA</span>
                <span className="font-bold text-text-primary flex items-center gap-1 mt-1">
                  <Clock className="w-3.5 h-3.5 text-brand-green" /> 24–48 hrs
                </span>
              </div>
              <div>
                <span className="block text-[8px] font-mono text-text-secondary uppercase">Timezone</span>
                <span className="font-bold text-text-primary flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-red" /> IST (India)
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* SECTION 5: PROFESSIONAL CLOSING */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 text-center space-y-4 shadow-sm relative overflow-hidden border-t-4 border-t-brand-blue">
        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full blur-xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-green/5 rounded-full blur-xl pointer-events-none" />
        <p className="text-xs md:text-sm text-text-secondary font-sans font-light leading-relaxed max-w-3xl mx-auto">
          Thank you for taking the time to explore my professional history, academic training, and applied research milestones. If you believe my technical competency and analytical drive align with your engineering organization, I would be delighted to discuss how I can contribute to your teams.
        </p>
        <div className="font-mono text-[9px] text-text-secondary uppercase tracking-widest font-bold">
          // Let's build meaningful technology together
        </div>
      </div>

      {/* PROFESSIONAL HIGH-FIDELITY PRINT-ONLY RESUME PDF TEMPLATE */}
      <div className="print-only-resume font-sans text-stone-950 bg-white">
        {/* Header Block Section */}
        <div className="border-b-2 border-stone-850 pb-3.5 mb-4 flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-black tracking-tight uppercase text-stone-950">{PERSONAL_INFO.name}</h1>
            <p className="text-xs text-stone-600 font-semibold tracking-wide mt-0.5">{PERSONAL_INFO.title}</p>
            <p className="text-[10px] text-stone-500 mt-0.5">{PERSONAL_INFO.subtitle}</p>
          </div>
          <div className="text-right text-[9px] text-stone-600 leading-normal font-mono">
            <div>📍 {PERSONAL_INFO.location}</div>
            <div>✉️ {PERSONAL_INFO.email}</div>
            <div>📞 {PERSONAL_INFO.phone}</div>
            <div>💻 github.com/riyas2509</div>
            <div>🔗 linkedin.com/in/riya-shah-335056290</div>
          </div>
        </div>

        {/* Core Narrative / Objective Statement */}
        <div className="mb-4">
          <h2 className="text-[11px] font-mono tracking-wider text-stone-850 uppercase font-black border-b border-stone-200 pb-0.5 mb-1.5">// PROFESSIONAL STATEMENT</h2>
          <p className="text-xs text-stone-700 leading-relaxed font-light">{PERSONAL_INFO.bio}</p>
        </div>

        {/* Education Credentials Block */}
        <div className="mb-4">
          <h2 className="text-[11px] font-mono tracking-wider text-stone-850 uppercase font-black border-b border-stone-200 pb-0.5 mb-1.5">// ACADEMIC TIMELINE</h2>
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-stone-900">B.Tech in Artificial Intelligence and Machine Learning</span>
                <span className="text-[10px] text-stone-600 block">JG University</span>
              </div>
              <span className="text-[10px] font-mono text-stone-500">2024 - Present</span>
            </div>
            <p className="text-[10px] leading-relaxed text-stone-600">
              <strong className="font-semibold text-stone-700 font-mono text-[9px]">Coursework Core:</strong> Data Structures and Algorithms (DSA), Database Management Systems (DBMS), Python Scripting, Artificial Intelligence Fundamentals, Supervised ML Networks, Applied Probability & Statistics.
            </p>
          </div>
        </div>

        {/* Experience Timeline Block */}
        <div className="mb-4">
          <h2 className="text-[11px] font-mono tracking-wider text-stone-850 uppercase font-black border-b border-stone-200 pb-0.5 mb-1.5">// INDUSTRY RESEARCH &amp; EXPERIENCE</h2>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold text-stone-900">Industry Research Intern</span>
                  <span className="text-[10px] text-stone-600 block">Ahmedabad Management Association (AMA)</span>
                </div>
                <span className="text-[10px] font-mono text-stone-500">Apr 2026 – Jun 2026</span>
              </div>
              <ul className="list-disc list-outside ml-4 mt-1.5 text-[11px] text-stone-800 space-y-1">
                <li>Conducted comprehensive AI workflows research across 8 major industries mapping workflows and technology bottlenecks.</li>
                <li>Identified practical AI intervention opportunities across different business sectors and evaluated technology adoption.</li>
                <li>Synthesized secondary market research datasets into structured briefings delivered securely to AMA leadership.</li>
                <li>Analyzed operational bottlenecks and data guidelines to support practical AI workflow modeling.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Product Engineering Projects */}
        <div className="mb-4">
          <h2 className="text-[11px] font-mono tracking-wider text-stone-850 uppercase font-black border-b border-stone-200 pb-0.5 mb-1.5">// HIGHLIGHTED TECHNICAL PROJECTS</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between border-b border-stone-100 pb-0.5 mb-1">
                <span className="text-[10px] font-bold text-stone-900">EchoNote &mdash; AI Notes Platform</span>
                <span className="text-[8px] font-mono text-stone-500">Google AI Studio</span>
              </div>
              <p className="text-[10px] text-stone-600 leading-relaxed font-light">
                Voicenotes automation converting speech to markdown briefs, summaries, sentiment records, and checklists sponsored by ASK Investment Managers.
              </p>
            </div>

            <div>
              <div className="flex justify-between border-b border-stone-100 pb-0.5 mb-1">
                <span className="text-[10px] font-bold text-stone-900">Sudoku Engine logical solver</span>
                <span className="text-[8px] font-mono text-stone-500">C & React</span>
              </div>
              <p className="text-[10px] text-stone-600 leading-relaxed font-light">
                Exact constraint satisfaction solvers and backtracking state exploration rendering and answering unique grids in under 1.5ms.
              </p>
            </div>

            <div>
              <div className="flex justify-between border-b border-stone-100 pb-0.5 mb-1">
                <span className="text-[10px] font-bold text-stone-900">OCR Handwriting CNN Classifier</span>
                <span className="text-[8px] font-mono text-stone-500">PyTorch / Python</span>
              </div>
              <p className="text-[10px] text-stone-600 leading-relaxed font-light">
                EMNIST convolutional model identifying drawn characters with graphical dashboards revealing layer activations and class vectors.
              </p>
            </div>

            <div>
              <div className="flex justify-between border-b border-stone-100 pb-0.5 mb-1">
                <span className="text-[10px] font-bold text-stone-900">Core DSA Memory Visualizer</span>
                <span className="text-[8px] font-mono text-stone-500">C++ / React</span>
              </div>
              <p className="text-[10px] text-stone-600 leading-relaxed font-light">
                Interactive simulator modeling memory allocations, pointers, stack offsets, and traversal sequences for list structures and trees.
              </p>
            </div>
          </div>
        </div>

        {/* Specialized Skills Index */}
        <div className="border-t border-stone-200 pt-3">
          <h2 className="text-[11px] font-mono tracking-wider text-stone-850 uppercase font-black border-b border-stone-200 pb-0.5 mb-2">// CORE ENGINEERING COMPETENCY MATRIX</h2>
          <div className="grid grid-cols-2 gap-4 text-[10px] text-stone-700">
            <div>
              <span className="font-bold text-stone-900 block text-[9px] uppercase tracking-wider">Programming & Databases</span>
              <p className="font-light mt-0.5">Python, C, C++, Java, SQL, DB Management Systems, Algorithmic Optimization, Backtracking</p>
            </div>
            <div>
              <span className="font-bold text-stone-900 block text-[9px] uppercase tracking-wider">AI &amp; Machine Learning</span>
              <p className="font-light mt-0.5">Generative AI, Prompt Engineering, Convolutional Networks, Scikit-Learn, Figma wireframing, User Journeys</p>
            </div>
          </div>
          
          <div className="mt-4 pt-2 border-t border-dashed border-stone-200 text-center text-[7.5px] font-mono text-stone-400">
            Google for Startups × Antler Immersion Program Member &bull; J.G. University Candidate 2026
          </div>
        </div>
      </div>

    </motion.div>
  );
}
