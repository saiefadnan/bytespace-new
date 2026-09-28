import React from 'react';
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
  const filteredCourses = activeCategory === 'all'
    ? courses
    : courses.filter((c) => c.category === activeCategory);

  return (
    <section id="courses" className="bg-[#FAFAFA] py-20 sm:py-28 border-b border-[#E5E6E8]">
      <div className="bytespace-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-[#E7F6FF] text-[#003BE2] border border-[#B0DDFF] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            Top Rated
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#242528] tracking-tight mb-3">
            Popular Courses We Offer
          </h2>
          <p className="text-[#585A62] text-sm sm:text-base leading-relaxed">
            Curated hands-on masterclasses designed to turn aspiring designers and engineers into seasoned professionals.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => onSelectCategory('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-150 cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#003BE2] text-white shadow-md shadow-[#003BE2]/20'
                : 'bg-white text-[#585A62] border border-[#CED0D3] hover:border-[#003BE2] hover:text-[#003BE2]'
            }`}
          >
            All Courses
          </button>
          {categories.map((category) => {
            const isActive = activeCategory === category.slug;
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.slug)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-[#003BE2] text-white shadow-md shadow-[#003BE2]/20'
                    : 'bg-white text-[#585A62] border border-[#CED0D3] hover:border-[#003BE2] hover:text-[#003BE2]'
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onSelect={onSelectCourse}
            />
          ))}
        </div>

        {/* Bottom CTA to view all */}
        <div className="text-center">
          <a href="/search">
            <Button
              variant="outline-dark"
              size="lg"
              className="px-8 font-bold text-xs"
            >
              Explore All Courses ({courses.length}+)
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
