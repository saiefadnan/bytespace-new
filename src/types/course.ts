export interface Instructor {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isCompleted?: boolean;
  isPreview?: boolean;
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: Lesson[];
}

export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';

export interface Course {
  id: string;
  title: string;
  slug: string;
  category: string;
  level: CourseLevel;
  thumbnail: string;
  rating: number;
  reviewCount: number;
  duration: string;
  lessonsCount: number;
  commentsCount?: number;
  enrolledStudentsCount?: number;
  instructor: Instructor;
  price: number;
  originalPrice?: number;
  isPopular?: boolean;
  description: string;
  modules?: CourseModule[];
}
