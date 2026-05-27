export interface Leader {
  id: string;
  name: string;
  title: string;
  experienceYears: number;
  bio: string;
  avatarUrl?: string;
  certifications: string[];
  keyStrengths: string[];
  achievements: string[];
  linkedInUrl: string;
}

export interface CompetencyItem {
  title: string;
  description: string;
  badge: string;
}

export interface CompetencyCategory {
  id: string;
  title: string;
  iconName: string; // Used to dynamic render Lucide icons
  description: string;
  items: CompetencyItem[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  overview: string;
  problem: string;
  solution: string;
  impactMetrics: { value: string; label: string }[];
  techStack: string[];
  timeline: string;
}

export interface Milestone {
  date: string;
  title: string;
  description: string;
  badge?: string;
}

export interface InquiryConfig {
  serviceType: string;
  teamSize: string;
  timelineMonths: number;
  useAI: boolean;
  notes: string;
}
