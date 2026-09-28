import React from 'react';
import type { Course } from '../types';
import { Button } from '../../../components/common/Button';
import { Badge } from '../../../components/common/Badge';

export interface CourseDetailsModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll?: (course: Course) => void;
}

export const CourseDetailsModal: React.FC<CourseDetailsModalProps> = ({
  course,
  onClose,
  onEnroll,
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-[#CED0D3]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#003BE2] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="lime" size="sm" pill>
              {course.category.toUpperCase()}
            </Badge>
            <span className="text-xs bg-white/10 px-2.5 py-0.5 rounded-full text-white/90">
              {course.level} Level
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight mb-2">
            {course.title}
          </h2>
          <p className="text-white/80 text-sm max-w-2xl">
            {course.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-4 pt-4 border-t border-white/15 text-xs text-white/90">
            <div className="flex items-center gap-2">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="w-7 h-7 rounded-full object-cover border border-[#CBFC01]"
              />
              <div>
                <div className="font-bold text-white">{course.instructor.name}</div>
                <div className="text-[11px] text-white/70">{course.instructor.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-1 text-amber-300 font-bold">
              ★ {course.rating} ({course.reviewCount.toLocaleString()} ratings)
            </div>

            <div>{course.duration} total length</div>
            <div>{course.lessonsCount} interactive lessons</div>
          </div>
        </div>

        {/* Modal Body / Syllabus Checklist */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="font-display font-extrabold text-lg text-[#242528] mb-3">
              Curriculum & Modules
            </h3>
            <div className="space-y-4">
              {course.modules?.map((mod, modIdx) => (
                <div
                  key={mod.id}
                  className="border border-[#E5E6E8] rounded-2xl p-4 sm:p-5 bg-[#FAFAFA]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-sm text-[#242528]">
                      Module {modIdx + 1}: {mod.title}
                    </h4>
                    <span className="text-xs text-[#82868E]">
                      {mod.lessons.length} lessons
                    </span>
                  </div>

                  <div className="space-y-2">
                    {mod.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className="flex items-center justify-between text-xs py-2 px-3 bg-white rounded-xl border border-[#F0F0F2]"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-[#E7F6FF] text-[#003BE2] flex items-center justify-center font-bold text-[10px]">
                            ▶
                          </span>
                          <span className="text-[#242528] font-medium">
                            {lesson.title}
                          </span>
                          {lesson.isPreview && (
                            <span className="bg-[#CBFC01]/30 text-[#172400] text-[10px] font-bold px-1.5 py-0.5 rounded">
                              Free Preview
                            </span>
                          )}
                        </div>
                        <span className="text-[#82868E]">{lesson.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / CTA */}
        <div className="p-5 sm:p-6 bg-white border-t border-[#E5E6E8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-[#003BE2]">
              ${course.price}
            </span>
            {course.originalPrice && (
              <span className="text-sm text-[#82868E] line-through">
                ${course.originalPrice}
              </span>
            )}
            <span className="text-xs text-green-700 font-bold ml-1">
              45% OFF Limited Time
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              variant="outline-dark"
              size="md"
              onClick={onClose}
              className="flex-1 sm:flex-initial"
            >
              Cancel
            </Button>
            <Button
              variant="lime"
              size="md"
              onClick={() => onEnroll?.(course)}
              className="flex-1 sm:flex-initial font-bold px-8 shadow-lg shadow-[#CBFC01]/30"
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
