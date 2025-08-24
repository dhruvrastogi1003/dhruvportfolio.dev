import { Codepen, Component, Database, Paintbrush, FileCode, GitBranch, Github, FileText } from 'lucide-react';
import type { Icon as LucideIcon } from 'lucide-react';

export const SKILLS: { name: string; icon: LucideIcon }[] = [
  { name: 'HTML', icon: FileCode },
  { name: 'CSS', icon: Paintbrush },
  { name: 'Bootstrap', icon: Component },
  { name: 'JavaScript', icon: Codepen },
  { name: 'React.js', icon: Component },
  { name: 'Material UI', icon: Component },
  { name: 'Git', icon: GitBranch },
  { name: 'GitHub', icon: Github },
  { name: 'MS Word', icon: FileText },
  { name: 'MS Excel', icon: FileText },
];

export const PROJECTS = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product listings, cart functionality, and a secure checkout process.',
    tags: ['React.js', 'Next.js', 'Firebase', 'Tailwind CSS'],
    image: 'https://placehold.co/600x400.png',
    demo: '#',
    github: '#',
    category: 'Web App',
    'data-ai-hint': 'ecommerce platform',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills and projects, built with a focus on clean design and user experience.',
    tags: ['React.js', 'Next.js', 'Tailwind CSS'],
    image: 'https://placehold.co/600x400.png',
    demo: '#',
    github: '#',
    category: 'Website',
    'data-ai-hint': 'portfolio website',
  },
  {
    title: 'Task Management App',
    description: 'A productivity app for organizing tasks, setting deadlines, and tracking progress with an intuitive interface.',
    tags: ['React.js', 'Firebase', 'CSS'],
    image: 'https://placehold.co/600x400.png',
    demo: '#',
    github: '#',
    category: 'Web App',
    'data-ai-hint': 'task management',
  },
  {
    title: 'Blog Platform',
    description: 'A content management system for creating and publishing articles, with features for comments and social sharing.',
    tags: ['React.js', 'Next.js', 'Firebase'],
    image: 'https://placehold.co/600x400.png',
    demo: '#',
    github: '#',
    category: 'Website',
    'data-ai-hint': 'blog platform',
  },
];
