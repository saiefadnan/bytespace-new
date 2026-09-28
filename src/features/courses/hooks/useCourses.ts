import { useState, useMemo } from 'react';
import { mockCourses, mockCategories } from '../../../data';
import type { Course } from '../types';

export function useCourses() {
  const [courses] = useState<Course[]>(mockCourses);
  const [categories] = useState(mockCategories);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        activeCategory === 'all' || course.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [courses, activeCategory, searchQuery]);

  return {
    courses: filteredCourses,
    allCourses: courses,
    categories,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
  };
}
