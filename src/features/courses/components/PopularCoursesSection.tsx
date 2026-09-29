import React from 'react';
import type { Course, Category } from '../types';
import { CourseCard } from './CourseCard';

export interface PopularCoursesSectionProps {
  courses: Course[];
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (categorySlug: string) => void;
  onSelectCourse?: (course: Course) => void;
}

export const PopularCoursesSection: React.FC<PopularCoursesSectionProps> = ({
  courses,
  categories,
  activeCategory,
  onSelectCategory,
  onSelectCourse,
}) => {
  const filteredCourses = activeCategory === 'all'
    ? courses
    : courses.filter((c) => c.category === activeCategory);

  const displayedCourses = filteredCourses.slice(0, 6);

  const categoryList = categories.some((c) => c.slug === 'all')
    ? categories
    : [{ id: 'all', name: 'All Courses', slug: 'all', count: courses.length }, ...categories];

  return (
    <section id="courses" className="bg-white pt-20 sm:pt-28 pb-12 sm:pb-16">
      <div className="bytespace-container">
        {/* Section Header matching Figma */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-[#242528] tracking-tight leading-[1.2] mb-4">
            Discover Your Passion, <br className="hidden sm:inline" />
            <span className="text-[#003BE2]">Build Your Skills</span>
          </h2>
          <p className="text-[#585A62] text-sm sm:text-base leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Filter Tabs (Figma Lime Active Pill) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categoryList.map((category) => {
            const isActive = activeCategory === category.slug;
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.slug)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#D4FB20] text-[#172400] shadow-md shadow-[#D4FB20]/30 scale-105'
                    : 'bg-[#F5F5F6] text-[#585A62] hover:bg-[#E5E6E8] hover:text-[#242528]'
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Courses Grid: 3 columns x 2 rows (372px cards with 40px gutter matching Figma) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] justify-items-center">
          {displayedCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onSelect={onSelectCourse}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
