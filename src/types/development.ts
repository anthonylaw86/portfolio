export type ProjectType = 'web' | 'mobile' | 'desktop' | 'api' | 'database';

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'mobile';

export interface Technology {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
  description: string;
  iconUrl?: string;
  documentationUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  description: string;
  technologies: string[];
  features: string[];
  status: 'completed' | 'in-progress' | 'planned';
  startDate: string;
  endDate?: string;
  repository?: string;
  demo?: string;
  screenshots: string[];
  challenges?: string[];
  solutions?: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience: number;
  projects: string[]; // Array of project IDs
  certifications?: string[];
}

export interface DevelopmentContent {
  projects: Project[];
  skills: Skill[];
  technologies: Technology[];
  stats: {
    totalProjects: number;
    totalTechnologies: number;
    averageProjectDuration: number;
    recentProjects: Project[];
  };
} 