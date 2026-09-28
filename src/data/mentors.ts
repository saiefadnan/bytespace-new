import type { Mentor } from '../types';
import instructor1 from '../assets/images/instructor-1.png';
import instructor2 from '../assets/images/instructor-2.png';
import instructorMarcus from '../assets/images/instructor-marcus.png';
import avatar10 from '../assets/images/avatar-10.png';

export const mockMentors: Mentor[] = [
  {
    id: 'm-1',
    name: 'Kenji Takahashi',
    role: 'Principal UX Architect',
    specialty: 'Design Systems & Heuristic Evaluation',
    avatar: instructor1,
    rating: 4.95,
    studentsCount: '18,400+',
  },
  {
    id: 'm-2',
    name: 'Alexandre Dubois',
    role: 'Staff Brand & Visual Designer',
    specialty: 'Iconography & Design Principles',
    avatar: instructor2,
    rating: 4.88,
    studentsCount: '12,900+',
  },
  {
    id: 'm-3',
    name: 'Marcus Holloway',
    role: 'Senior Data Infrastructure Lead',
    specialty: 'Python, Big Data & Real-time Pipelines',
    avatar: instructorMarcus,
    rating: 4.98,
    studentsCount: '24,100+',
  },
  {
    id: 'm-4',
    name: 'Sarah Connor',
    role: 'VP of Engineering',
    specialty: 'Distributed Systems & Cloud Architecture',
    avatar: avatar10,
    rating: 4.92,
    studentsCount: '15,600+',
  },
];
