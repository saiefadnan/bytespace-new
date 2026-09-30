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

const baseCourses: Course[] = [
  {
    id: 'course-1',
    title: 'Learn Figma from Basic',
    slug: 'learn-figma-from-basic',
    category: 'design',
    level: 'Beginner',
    thumbnail: courseWireframing,
    rating: 4.5,
    reviewCount: 1420,
    duration: '2 hours 16 mins',
    lessonsCount: 17,
    commentsCount: 59,
    instructor: {
      id: 'inst-1',
      name: 'purepearl studio',
      role: 'Principal Product Designer',
      avatar: instructor1,
    },
    price: 25,
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
    title: 'Build Digital Asset',
    slug: 'build-digital-asset',
    category: 'design',
    level: 'Beginner',
    thumbnail: courseIcons,
    rating: 4.5,
    reviewCount: 980,
    duration: '2 hours 16 mins',
    lessonsCount: 17,
    commentsCount: 59,
    instructor: {
      id: 'inst-2',
      name: 'purepearl studio',
      role: 'Senior Iconographer & Brand Artist',
      avatar: instructor2,
    },
    price: 25,
    originalPrice: 69.99,
    isPopular: true,
    description: 'Craft pixel-perfect iconography, 24px grid systems, optical balance, and SVG exports.',
  },
  {
    id: 'course-3',
    title: 'the Power of Big Data',
    slug: 'the-power-of-big-data',
    category: 'data',
    level: 'Beginner',
    thumbnail: courseAnalytics,
    rating: 4.6,
    reviewCount: 2150,
    duration: '2 hours 16 mins',
    lessonsCount: 17,
    commentsCount: 59,
    instructor: {
      id: 'inst-3',
      name: 'purepearl studio',
      role: 'Staff Data Engineer',
      avatar: instructorMarcus,
    },
    price: 25,
    originalPrice: 99.99,
    isPopular: true,
    description: 'Learn real-time dashboard analytics, cohort analysis, Python pandas, and visualization pipelines.',
  },
  {
    id: 'course-4',
    title: 'Balancing Productivity and Life',
    slug: 'balancing-productivity-and-life',
    category: 'dev',
    level: 'Beginner',
    thumbnail: courseProductivity,
    rating: 4.6,
    reviewCount: 840,
    duration: '2 hours 16 mins',
    lessonsCount: 17,
    commentsCount: 59,
    instructor: {
      id: 'inst-4',
      name: 'purepearl studio',
      role: 'Lead Systems Architect',
      avatar: avatar3,
    },
    price: 25,
    originalPrice: 59.99,
    isPopular: false,
    description: '10x your velocity with modern productivity workflows, focus automation, and deep work systems.',
  },
  {
    id: 'course-5',
    title: 'Mastering Money Management',
    slug: 'mastering-money-management',
    category: 'data',
    level: 'Beginner',
    thumbnail: courseFinance,
    rating: 4.8,
    reviewCount: 1120,
    duration: '2 hours 16 mins',
    lessonsCount: 17,
    commentsCount: 59,
    instructor: {
      id: 'inst-5',
      name: 'purepearl studio',
      role: 'Quant & Algorithmic Trader',
      avatar: avatar4,
    },
    price: 25,
    originalPrice: 79.99,
    isPopular: false,
    description: 'Build financial freedom through systematic money allocation, risk mitigation, and investment intelligence.',
  },
  {
    id: 'course-6',
    title: 'From Idea to Startup Success',
    slug: 'from-idea-to-startup-success',
    category: 'management',
    level: 'Beginner',
    thumbnail: courseTeamSprint,
    rating: 4.8,
    reviewCount: 1670,
    duration: '2 hours 16 mins',
    lessonsCount: 17,
    commentsCount: 59,
    instructor: {
      id: 'inst-6',
      name: 'purepearl studio',
      role: 'Director of Product at TechCorp',
      avatar: avatar5,
    },
    price: 25,
    originalPrice: 84.99,
    isPopular: true,
    description: 'Learn modern lean startup methods, rapid customer validation, cross-functional sprints, and pitch deck execution.',
  },
];

// Exactly 18 courses matching the 6 rows x 3 columns Figma Search Page layout
export const mockCourses: Course[] = [
  ...baseCourses,
  ...baseCourses.map((c, index) => ({
    ...c,
    id: `course-${index + 7}`,
    slug: `${c.slug}-${index + 7}`,
  })),
  ...baseCourses.map((c, index) => ({
    ...c,
    id: `course-${index + 13}`,
    slug: `${c.slug}-${index + 13}`,
  })),
];
