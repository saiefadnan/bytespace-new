import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Course } from '../types';

export interface CourseCardProps {
  course: Course;
  onSelect?: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onSelect }) => {
  const navigate = useNavigate();
  const [bookmarked, setBookmarked] = useState(false);

  const handleClick = () => {
    if (onSelect) {
      onSelect(course);
    } else {
      navigate(`/course/${course.id}`);
    }
  };

  return (
    <article
      onClick={handleClick}
      className="course-card-hover group bg-white border border-[#CED0D3] rounded-[24px] p-4 flex flex-col justify-between cursor-pointer w-full max-w-[372px] min-h-[383px] shadow-sm hover:shadow-md transition-all duration-200"
    >
      {/* Thumbnail: exact w=341px, h=195px, rx=12px from Figma */}
      <div className="relative w-full h-[195px] rounded-[12px] overflow-hidden bg-[#F5F5F6] flex-shrink-0">
        <img
          src={course.thumbnail}
          alt={course.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {course.isPopular && (
          <div className="absolute top-3 left-3">
            <span className="text-[11px] font-bold bg-[#E7F6FF] text-[#003BE2] rounded-full px-3 py-1">
              Popular
            </span>
          </div>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setBookmarked(!bookmarked);
          }}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-150 ${
            bookmarked
              ? 'bg-[#CBFC01] text-[#172400]'
              : 'bg-black/30 hover:bg-black/50 text-white'
          }`}
          aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark course'}
        >
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 24 24"
            stroke="none"
          >
            <path d="M5 4a2 2 0 012-2h10a2 2 0 012 2v18l-7-3.5L5 22V4z" />
          </svg>
        </button>
      </div>

      {/* Card Content */}
      <div className="pt-3 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating, Reviews, Level */}
          <div className="flex items-center justify-between text-xs text-[#82868E] mb-2">
            <div className="flex items-center gap-1.5">
              <span className="text-amber-500 font-bold flex items-center gap-0.5">
                ★ {course.rating}
              </span>
              <span>({course.reviewCount.toLocaleString()})</span>
            </div>
            <span className="uppercase tracking-wider font-semibold text-[11px] bg-[#F5F5F6] px-2 py-0.5 rounded-md text-[#585A62]">
              {course.level}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-base sm:text-lg text-[#242528] group-hover:text-[#003BE2] transition-colors duration-150 line-clamp-2 leading-snug mb-3">
            {course.title}
          </h3>

          {/* Instructor snippet */}
          <div className="flex items-center gap-2 mb-4">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-xs text-[#585A62] font-medium truncate">
              {course.instructor.name}
            </span>
          </div>
        </div>

        {/* Card Footer: Duration & Price */}
        <div className="pt-3 border-t border-[#F5F5F6] flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-[#82868E]">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            {course.originalPrice && (
              <span className="text-xs text-[#82868E] line-through">
                ${course.originalPrice}
              </span>
            )}
            <span className="font-bold text-base text-[#003BE2]">
              ${course.price}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
