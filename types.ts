import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  linkText: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  year: string;
}

export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  value: string;
  link: string;
  action: string;
}
