import React from 'react';
import type { Course, Category } from '../types';
import { CourseCard } from './CourseCard';
import { figmaCategoryRows } from '../../../data';

export interface PopularCoursesSectionProps {
  courses: Course[];
  categories?: Category[];
  activeCategory: string;
  onSelectCategory: (categorySlug: string) => void;
  onSelectCourse?: (course: Course) => void;
}

export const PopularCoursesSection: React.FC<PopularCoursesSectionProps> = ({
  courses,
  activeCategory,
  onSelectCategory,
  onSelectCourse,
}) => {
  const filteredCourses = (activeCategory === 'featured' || activeCategory === 'all')
    ? courses
    : courses.filter((c) => {
        const cat = c.category?.toLowerCase() || '';
        const slug = activeCategory.toLowerCase();
        return cat === slug || cat.includes(slug) || slug.includes(cat);
      });

  const displayedCourses = (filteredCourses.length > 0 ? filteredCourses : courses).slice(0, 6);

  return (
    <section id="courses" className="bg-white pt-20 sm:pt-28 pb-12 sm:pb-16">
      <div className="bytespace-container">
        {/* Section Header matching Figma */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-[#040819] tracking-tight leading-[1.2] mb-4">
            Discover Your Passion, <br className="hidden sm:inline" />
            Build Your Skills
          </h2>
          <p className="text-[#82868E] text-sm sm:text-base leading-relaxed max-w-[780px] mx-auto">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Filter Tabs: 3 staggered centered rows matching Figma */}
        <div className="flex flex-col items-center gap-[21px] mb-12 sm:mb-16">
          {/* Row 1: 8 items */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {figmaCategoryRows[0].map((cat) => {
              const isActive = activeCategory === cat.slug;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.slug)}
                  className={`h-[43px] px-5 sm:px-6 rounded-full text-xs sm:text-[13px] transition-all duration-150 flex items-center justify-center cursor-pointer select-none ${
                    isActive
                      ? 'bg-[#D4FB20] text-[#172400] font-bold shadow-sm'
                      : 'bg-[#F5F5F6] text-[#585A62] hover:bg-[#EAEBED] hover:text-[#242528] font-semibold'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Row 2: 6 items */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {figmaCategoryRows[1].map((cat) => {
              const isActive = activeCategory === cat.slug;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.slug)}
                  className={`h-[43px] px-5 sm:px-6 rounded-full text-xs sm:text-[13px] transition-all duration-150 flex items-center justify-center cursor-pointer select-none ${
                    isActive
                      ? 'bg-[#D4FB20] text-[#172400] font-bold shadow-sm'
                      : 'bg-[#F5F5F6] text-[#585A62] hover:bg-[#EAEBED] hover:text-[#242528] font-semibold'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Row 3: 4 items + '+ More' link */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {figmaCategoryRows[2].map((cat) => {
              const isActive = activeCategory === cat.slug;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.slug)}
                  className={`h-[43px] px-5 sm:px-6 rounded-full text-xs sm:text-[13px] transition-all duration-150 flex items-center justify-center cursor-pointer select-none ${
                    isActive
                      ? 'bg-[#D4FB20] text-[#172400] font-bold shadow-sm'
                      : 'bg-[#F5F5F6] text-[#585A62] hover:bg-[#EAEBED] hover:text-[#242528] font-semibold'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => onSelectCategory('all')}
              className="text-[#003BE2] font-semibold text-xs sm:text-[14px] px-3 py-2 hover:underline cursor-pointer transition-colors"
            >
              + More
            </button>
          </div>
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
