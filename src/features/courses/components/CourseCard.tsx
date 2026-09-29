import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Course } from '../types';
import studentAvatar1 from '../../../assets/images/student-avatar-1.png';
import studentAvatar2 from '../../../assets/images/student-avatar-2.png';
import studentAvatar3 from '../../../assets/images/student-avatar-3.png';
import studentAvatar4 from '../../../assets/images/student-avatar-4.png';

export interface CourseCardProps {
  course: Course;
  onSelect?: (course: Course) => void;
  onClick?: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onSelect, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(course);
    } else if (onSelect) {
      onSelect(course);
    } else {
      navigate(`/course/${course.id}`);
    }
  };

  return (
    <article
      onClick={handleClick}
      className="course-card-hover group bg-white border border-[#CED0D3] rounded-[24px] p-4 flex flex-col justify-between cursor-pointer w-full max-w-[372px] h-[383px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-200 select-none"
    >
      {/* Thumbnail: exact w=341px, h=195px, rx=12px from Figma */}
      <div className="relative w-full h-[195px] rounded-[12px] overflow-hidden bg-[#F5F5F6] flex-shrink-0">
        <img
          src={course.thumbnail}
          alt={course.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* 3 Floating Badges along bottom of thumbnail matching Figma */}
        <div className="absolute bottom-3 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 bg-[#F6F6F6]/60 backdrop-blur-[8px] rounded-full text-[11px] font-medium text-[#4F4F4F]">
            {course.lessonsCount ? `${course.lessonsCount} Lessons` : '17 Lessons'}
          </span>
          <span className="px-2.5 py-1 bg-[#F6F6F6]/60 backdrop-blur-[8px] rounded-full text-[11px] font-medium text-[#4F4F4F]">
            {course.duration || '2 hours 16 mins'}
          </span>
          <span className="px-2.5 py-1 bg-[#F6F6F6]/60 backdrop-blur-[8px] rounded-full text-[11px] font-medium text-[#4F4F4F]">
            {course.commentsCount ? `${course.commentsCount} Comments` : '59 Comments'}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="pt-3.5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Rating Row */}
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-bold text-[18px] text-[#1A1A1A] leading-tight line-clamp-1 group-hover:text-[#003BE2] transition-colors">
              {course.title}
            </h3>
            <div className="flex items-center gap-1 flex-shrink-0 text-[15px] font-bold text-[#4F4F4F]">
              <span>{course.rating.toFixed(1)}</span>
              <svg className="w-3.5 h-3.5 fill-[#CED0D3]" viewBox="0 0 16 16">
                <path d="M8 0.5l2.4 4.8 5.3 0.8-3.8 3.7 0.9 5.3L8 12.6l-4.8 2.5 0.9-5.3-3.8-3.7 5.3-0.8L8 0.5z" />
              </svg>
            </div>
          </div>

          {/* Instructor Byline */}
          <div className="mt-1">
            <span className="text-xs text-[#4F4F4F]">by </span>
            <span className="text-xs font-semibold text-[#003BE2] hover:underline">
              {course.instructor.name}
            </span>
          </div>
        </div>

        {/* Level Badge and Overlapping Student Avatars */}
        <div className="flex items-center justify-between mt-2.5">
          {/* Level Pill */}
          <div className="h-8 px-3.5 rounded-full bg-[#F5F5F6] flex items-center gap-1.5 text-xs font-medium text-[#4B4C53]">
            <svg className="w-3.5 h-3.5 fill-current text-[#4B4C53]" viewBox="0 0 16 16">
              <path d="M2 13h2V8H2v5zm5 0h2V5H7v8zm5 0h2V2h-2v11z" />
            </svg>
            <span>{course.level}</span>
          </div>

          {/* Overlapping Student Avatars + Lime 26+ Pill */}
          <div className="flex items-center -space-x-2">
            <img src={studentAvatar1} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            <img src={studentAvatar2} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            <img src={studentAvatar3} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            <img src={studentAvatar4} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            <div className="w-8 h-8 rounded-full bg-[#D4FB20] text-[#242528] font-bold text-[11px] flex items-center justify-center border-2 border-white">
              26+
            </div>
          </div>
        </div>

        {/* Price Row: $25/lifetime */}
        <div className="mt-2.5 flex items-baseline">
          <span className="text-[22px] font-extrabold text-[#003BE2] leading-none">
            ${Math.round(course.price)}
          </span>
          <span className="text-xs text-[#4F4F4F] font-normal ml-0.5">
            /lifetime
          </span>
        </div>
      </div>
    </article>
  );
};
