import { mockCourses, mockCategories } from '../../../data';
import { mockFetch } from '../../../services';
import type { Course, Category } from '../types';

export const courseService = {
  async getAllCourses(): Promise<Course[]> {
    return mockFetch<Course[]>(mockCourses);
  },

  async getCategories(): Promise<Category[]> {
    return mockFetch<Category[]>(mockCategories);
  },

  async getCourseById(id: string): Promise<Course | undefined> {
    const course = mockCourses.find((c) => c.id === id);
    return mockFetch<Course | undefined>(course);
  },
};
