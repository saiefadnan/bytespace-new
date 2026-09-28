import type { Course } from '../types';
import courseWireframing from '../assets/images/course-wireframing.jpg';
import courseIcons from '../assets/images/course-icons.jpg';
import courseAnalytics from '../assets/images/course-analytics.jpg';
import courseProductivity from '../assets/images/course-productivity.jpg';
import courseFinance from '../assets/images/course-finance.jpg';
import courseTeamSprint from '../assets/images/course-team-sprint.jpg';
import instructor1 from '../assets/images/instructor-1.png';
import instructor2 from '../assets/images/instructor-2.png';
import instructorMarcus from '../assets/images/instructor-marcus.png';
import avatar3 from '../assets/images/avatar-3.png';
import avatar4 from '../assets/images/avatar-4.png';
import avatar5 from '../assets/images/avatar-5.png';

export const mockCourses: Course[] = [
  {
    id: 'course-1',
    title: 'Complete UI/UX Design & User Research Bootcamp',
    slug: 'ui-ux-design-user-research',
    category: 'design',
    level: 'Beginner',
    thumbnail: courseWireframing,
    rating: 4.9,
    reviewCount: 1420,
    duration: '28h 30m',
    lessonsCount: 42,
    instructor: {
      id: 'inst-1',
      name: 'Kenji Takahashi',
      role: 'Principal Product Designer',
      avatar: instructor1,
    },
    price: 49.99,
    originalPrice: 89.99,
    isPopular: true,
    description: 'Master Figma, user research, wireframing, and interactive design systems from scratch.',
    modules: [
      {
        id: 'mod-1',
        title: 'Introduction to UX Thinking & Research',
        lessons: [
          { id: 'les-1', title: 'Understanding User Mental Models', duration: '14:20', isCompleted: true, isPreview: true },
          { id: 'les-2', title: 'Conducting Empathy Interviews', duration: '22:15', isCompleted: true },
          { id: 'les-3', title: 'Mapping Information Architecture', duration: '18:40' },
        ],
      },
      {
        id: 'mod-2',
        title: 'Figma Mastery & Component Systems',
        lessons: [
          { id: 'les-4', title: 'Auto Layout and Responsive Frames', duration: '25:10' },
          { id: 'les-5', title: 'Design Tokens and Variables in Figma', duration: '31:45' },
        ],
      },
    ],
  },
  {
    id: 'course-2',
    title: 'Modern Icon Design & Vector Illustration Systems',
    slug: 'modern-icon-design-vector-systems',
    category: 'design',
    level: 'Intermediate',
    thumbnail: courseIcons,
    rating: 4.8,
    reviewCount: 980,
    duration: '18h 15m',
    lessonsCount: 32,
    instructor: {
      id: 'inst-2',
      name: 'Alexandre Dubois',
      role: 'Senior Iconographer & Brand Artist',
      avatar: instructor2,
    },
    price: 39.99,
    originalPrice: 69.99,
    isPopular: true,
    description: 'Craft pixel-perfect iconography, 24px grid systems, optical balance, and SVG exports.',
  },
  {
    id: 'course-3',
    title: 'Data Analytics & Performance Metrics with Python',
    slug: 'data-analytics-performance-metrics-python',
    category: 'data',
    level: 'Advanced',
    thumbnail: courseAnalytics,
    rating: 4.9,
    reviewCount: 2150,
    duration: '34h 00m',
    lessonsCount: 54,
    instructor: {
      id: 'inst-3',
      name: 'Marcus Holloway',
      role: 'Staff Data Engineer',
      avatar: instructorMarcus,
    },
    price: 59.99,
    originalPrice: 99.99,
    isPopular: true,
    description: 'Learn real-time dashboard analytics, cohort analysis, Python pandas, and visualization pipelines.',
  },
  {
    id: 'course-4',
    title: 'Developer Productivity: Vim, Shell & Clean Architecture',
    slug: 'developer-productivity-clean-architecture',
    category: 'dev',
    level: 'All Levels',
    thumbnail: courseProductivity,
    rating: 4.7,
    reviewCount: 840,
    duration: '15h 45m',
    lessonsCount: 26,
    instructor: {
      id: 'inst-4',
      name: 'Elena Rostova',
      role: 'Lead Systems Architect',
      avatar: avatar3,
    },
    price: 34.99,
    originalPrice: 59.99,
    isPopular: false,
    description: '10x your coding velocity with terminal shortcuts, automation scripting, and clean domain design.',
  },
  {
    id: 'course-5',
    title: 'Financial Modeling & Stock Market Charting Algorithms',
    slug: 'financial-modeling-charting-algorithms',
    category: 'data',
    level: 'Intermediate',
    thumbnail: courseFinance,
    rating: 4.8,
    reviewCount: 1120,
    duration: '22h 10m',
    lessonsCount: 36,
    instructor: {
      id: 'inst-5',
      name: 'Devon Vance',
      role: 'Quant & Algorithmic Trader',
      avatar: avatar4,
    },
    price: 44.99,
    originalPrice: 79.99,
    isPopular: false,
    description: 'Build predictive algorithms, moving averages, technical charts, and financial data models.',
  },
  {
    id: 'course-6',
    title: 'Agile Team Sprints & High-Velocity Product Management',
    slug: 'agile-team-sprints-product-management',
    category: 'management',
    level: 'Beginner',
    thumbnail: courseTeamSprint,
    rating: 4.9,
    reviewCount: 1670,
    duration: '20h 30m',
    lessonsCount: 30,
    instructor: {
      id: 'inst-6',
      name: 'Maya Lin',
      role: 'Director of Product at TechCorp',
      avatar: avatar5,
    },
    price: 49.99,
    originalPrice: 84.99,
    isPopular: true,
    description: 'Learn scrum ceremonies, roadmap prioritization, user stories, and cross-functional alignment.',
  },
];
