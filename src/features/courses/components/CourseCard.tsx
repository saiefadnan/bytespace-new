import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Course } from '../types';
import { Badge } from '../../../components/common/Badge';

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
        {course.isPopular && (
          <div className="absolute top-3 left-3">
            <Badge variant="lime" size="sm" pill>
              Popular
            </Badge>
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
      <div className="p-5 flex-1 flex flex-col justify-between">
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
