export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  approach: string;
  outcome: string;
  keyLearning: string;
  status: 'Live' | 'Prototype' | 'Research' | 'Academic Project' | 'In Progress';
  primaryCtaLabel: string;
  primaryCtaUrl: string;
  techStack: string[];
  category: 'AI Products' | 'Research & Innovation' | 'Machine Learning' | 'Software Engineering' | 'UI/UX & Product Design';
  tryItHereUrl?: string; // Standard anchor
  interactiveDemoId?: string; // If we can demo it inside
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  university: string;
  duration: string;
  coursework: string[];
}

export interface Achievement {
  id: string;
  title: string;
  event?: string;
  description: string;
  badge?: string;
}
