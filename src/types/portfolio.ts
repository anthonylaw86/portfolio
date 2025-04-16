export type Section = 'home' | 'real-estate' | 'development' | 'personal';

export interface NavItem {
  id: string;
  label: string;
  path: string;
  section: Section;
  icon?: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  socialLinks: SocialLink[];
}

export interface PortfolioContent {
  title: string;
  subtitle: string;
  description: string;
  navItems: NavItem[];
  contactInfo: ContactInfo;
  sections: {
    [key in Section]: {
      title: string;
      description: string;
      featuredImage?: string;
    };
  };
} 