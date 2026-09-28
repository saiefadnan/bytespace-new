import type { Testimonial } from '../types';
import avatar6 from '../assets/images/avatar-6.png';
import avatar7 from '../assets/images/avatar-7.png';
import avatar8 from '../assets/images/avatar-8.png';
import avatar9 from '../assets/images/avatar-9.png';

export const mockTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sophia Patel',
    role: 'Frontend Engineer',
    company: 'Stripe',
    avatar: avatar6,
    quote: 'ByteSpace completely transformed how I learn. The hands-on project reviews gave me the exact skills and confidence to land my dream job at Stripe.',
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Liam Gallagher',
    role: 'Product Designer',
    company: 'Figma Community',
    avatar: avatar7,
    quote: 'The design systems course was unmatched in depth. From Figma variables to component auto-layout, every lesson was immediately applicable.',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'Amara Okafor',
    role: 'Data Analyst',
    company: 'Fintech Scaleup',
    avatar: avatar8,
    quote: 'The 1-on-1 mentor feedback was the turning point for me. I went from tutorial hell to building live analytics dashboards in just 8 weeks.',
    rating: 5,
  },
  {
    id: 'test-4',
    name: 'Ethan Zhao',
    role: 'Full Stack Developer',
    company: 'CloudTech',
    avatar: avatar9,
    quote: 'Clear, structured, and zero fluff. The video player and syllabus track your exact progress, making it effortless to stay consistent.',
    rating: 5,
  },
];
