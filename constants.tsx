import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MessageCircle,
  Code
} from 'lucide-react';
import { Project, SocialLink, EducationItem, ContactInfo } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61574428318151', icon: Facebook },
  { platform: 'Instagram', url: 'https://www.instagram.com/musilmuham', icon: Instagram },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-bin-naveed-236409252', icon: Linkedin },
  { platform: 'GitHub', url: 'https://github.com/muhammadbinnaveed01-oss', icon: Github },
];

export const EDUCATION_DATA: EducationItem[] = [
  { id: '1', title: 'Graduation (BSCS)', institution: 'Rise Group Of Colleges, Lahore', year: 'Ongoing' },
  { id: '2', title: 'Full Stack Web Development', institution: 'EVS Training Institute Lahore', year: 'Ongoing' },
  { id: '3', title: 'Intermediate', institution: 'Fazzia Inter College PAF Base Minhas', year: '2022-2024' },
  { id: '4', title: 'Matriculation', institution: 'Fazzia Inter College PAF Base Minhas', year: '2019-2022' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'Premium Responsive Platform',
    description: 'A sophisticated multi-page website showcasing advanced responsive design principles, seamless user interactions, and premium visual aesthetics.',
    tags: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    imageUrl: 'https://picsum.photos/id/1/800/600',
    link: 'https://muhammadbinnaveed01-oss.github.io/bootstrap5project2/#quote',
    linkText: 'Explore Project'
  },
  {
    id: '2',
    title: 'Luxury E-Commerce Experience',
    description: 'An elegant shopping interface designed for premium brands, featuring intuitive navigation, product showcases, and seamless user journeys.',
    tags: ['HTML5', 'CSS3', 'Bootstrap'],
    imageUrl: 'https://picsum.photos/id/20/800/600',
    link: 'https://muhammadbinnaveed01-oss.github.io/assignmentbootstrap3/',
    linkText: 'Explore Project'
  },
  {
    id: '3',
    title: 'Executive Portfolio',
    description: 'A bespoke digital portfolio showcasing professional work with sophisticated design elements, smooth animations, and premium user experience.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    imageUrl: 'https://picsum.photos/id/3/800/600',
    link: '#',
    linkText: 'Explore Project'
  }
];

export const CONTACT_DATA: ContactInfo[] = [
  {
    icon: MessageCircle,
    title: 'Direct Message',
    value: '+92 321 5081609',
    link: 'https://wa.me/923215081609',
    action: 'Connect'
  },
  {
    icon: Mail,
    title: 'Executive Email',
    value: 'muhammadbinnaveed01@gmail.com',
    link: 'mailto:muhammadbinnaveed01@gmail.com',
    action: 'Send Proposal'
  },
  {
    icon: Linkedin,
    title: 'Professional Network',
    value: 'Connect for collaborations',
    link: 'https://www.linkedin.com/in/muhammad-bin-naveed-236409252',
    action: 'Connect'
  },
  {
    icon: Github,
    title: 'Code Repository',
    value: 'Explore technical work',
    link: 'https://github.com/muhammadbinnaveed01-oss',
    action: 'View Work'
  }
];
