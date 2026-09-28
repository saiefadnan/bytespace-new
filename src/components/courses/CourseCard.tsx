import React, { useState } from 'react';
import type { Course } from '../../types';
import { Badge } from '../common/Badge';

export interface CourseCardProps {
  course: Course;
  onSelect?: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onSelect }) => {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <article
      onClick={() => onSelect?.(course)}
      className="course-card-hover group bg-white border border-[#E5E6E8] rounded-2xl overflow-hidden flex flex-col cursor-pointer"
    >
      {/* Thumbnail with Badge & Bookmark */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#F5F5F6]">
        <img
          src={course.thumbnail}
          alt={course.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Level Badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="white" size="sm" className="font-semibold shadow">
            {course.level}
          </Badge>
        </div>

        {/* Bookmark Action */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setBookmarked(!bookmarked);
          }}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
            bookmarked
              ? 'bg-[#CBFC01] text-[#172400]'
              : 'bg-black/30 hover:bg-black/50 text-white'
          }`}
          aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark course'}
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating and Meta */}
          <div className="flex items-center justify-between text-xs text-[#585A62] mb-2.5">
            <div className="flex items-center gap-1.5 font-semibold text-[#242528]">
              <span className="text-amber-400 text-sm">★</span>
              <span>{course.rating.toFixed(1)}</span>
              <span className="text-[#82868E] font-normal">({course.reviewCount.toLocaleString()})</span>
            </div>
            <div className="flex items-center gap-1 text-[#82868E]">
              <span>{course.duration}</span>
              <span>•</span>
              <span>{course.lessonsCount} lessons</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-base text-[#242528] group-hover:text-[#003BE2] transition-colors line-clamp-2 leading-snug mb-3">
            {course.title}
          </h3>

          {/* Instructor Info */}
          <div className="flex items-center gap-2.5 mb-4">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-7 h-7 rounded-full object-cover border border-[#E5E6E8]"
            />
            <div className="text-xs">
              <span className="font-medium text-[#242528] block">{course.instructor.name}</span>
              <span className="text-[#82868E] text-[11px] block">{course.instructor.role}</span>
            </div>
          </div>
        </div>

        {/* Card Footer: Price & Enroll Button */}
        <div className="pt-3.5 border-t border-[#F5F5F6] flex items-center justify-between mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="font-display font-extrabold text-lg text-[#242528]">
              ${course.price.toFixed(2)}
            </span>
            {course.originalPrice && (
              <span className="text-xs text-[#82868E] line-through">
                ${course.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <span className="text-xs font-bold text-[#003BE2] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Enroll Now
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
};
