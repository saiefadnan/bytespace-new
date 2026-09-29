import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Course, Category } from '../types';
import { CourseCard } from './CourseCard';
import { Button } from '../../../components/common/Button';

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
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 6;

  const filteredCourses = activeCategory === 'all'
    ? courses
    : courses.filter((c) => c.category === activeCategory);

  const totalPages = Math.ceil(filteredCourses.length / pageSize) || 1;
  const displayedCourses = filteredCourses.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const categoryList = categories.some((c) => c.slug === 'all')
    ? categories
    : [{ id: 'all', name: 'All Courses', slug: 'all', count: courses.length }, ...categories];

  return (
    <section id="courses" className="bg-white py-20 sm:py-28 border-b border-[#E5E6E8]">
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
                onClick={() => {
                  onSelectCategory(category.slug);
                  setCurrentPage(0);
                }}
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

        {/* Courses Grid: 3 columns x 2 rows (372px cards with 40px gutter) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] justify-items-center mb-12">
          {displayedCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onSelect={onSelectCourse}
            />
          ))}
        </div>

        {/* Pagination & Explore All CTA matching Figma's 60px circular arrows */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[#F5F5F6]">
          {/* Results count indicator */}
          <div className="text-xs text-[#82868E] font-medium">
            Showing <span className="font-bold text-[#242528]">{displayedCourses.length}</span> of {filteredCourses.length} courses
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrevPage}
              className="w-12 h-12 rounded-full bg-[#F5F5F6] hover:bg-[#E5E6E8] text-[#242528] flex items-center justify-center font-bold text-lg transition-colors cursor-pointer"
              aria-label="Previous courses"
            >
              ←
            </button>
            <button
              onClick={handleNextPage}
              className="w-12 h-12 rounded-full bg-[#D4FB20] hover:bg-[#CBFC01] text-[#172400] flex items-center justify-center font-bold text-lg shadow-md transition-colors cursor-pointer"
              aria-label="Next courses"
            >
              →
            </button>
          </div>

          {/* View All Button */}
          <Link to="/search">
            <Button
              variant="outline-dark"
              size="md"
              className="px-6 font-bold text-xs"
            >
              Explore All Courses ({courses.length}+) →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
