import React from 'react';
import type { Course, Category } from '../../types';
import { CourseCard } from '../courses/CourseCard';
import { Button } from '../common/Button';

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

  return (
    <section id="courses" className="bg-[#FAFAFA] py-20 sm:py-28 border-b border-[#E5E6E8]">
      <div className="bytespace-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-[#E7F6FF] text-[#003BE2] border border-[#B0DDFF] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            Featured Curriculums
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#242528] tracking-tight mb-4">
            Explore Our Popular Courses
          </h2>
          <p className="text-[#585A62] text-base leading-relaxed">
            Gain real-world competence through hands-on exercises, downloadable resources, and mentor evaluations.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.slug;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.slug)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#003BE2] text-white shadow-md shadow-[#003BE2]/20 scale-105'
                    : 'bg-white border border-[#CED0D3] text-[#585A62] hover:border-[#242528] hover:text-[#242528]'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onSelect={onSelectCourse}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-[#CED0D3]">
            <p className="text-[#82868E] text-sm">No courses found in this category.</p>
            <Button
              variant="outline-dark"
              size="sm"
              onClick={() => onSelectCategory('all')}
              className="mt-4"
            >
              Reset Category
            </Button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Button
            variant="blue"
            size="lg"
            onClick={() => onSelectCategory('all')}
            className="px-8 py-3.5 shadow-lg shadow-[#003BE2]/25"
          >
            View All 120+ Courses
          </Button>
        </div>
      </div>
    </section>
  );
};
