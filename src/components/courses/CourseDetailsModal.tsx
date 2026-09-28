import React from 'react';
import type { Course } from '../../types';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

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
            ✕
          </button>

          <div className="flex items-center gap-2 mb-3">
            <Badge variant="lime" size="sm">
              {course.level}
            </Badge>
            <span className="text-xs text-white/80">
              {course.duration} • {course.lessonsCount} Total Lessons
            </span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl leading-snug mb-3">
            {course.title}
          </h2>

          <div className="flex items-center gap-3 text-xs text-white/90">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-7 h-7 rounded-full object-cover border border-white/40"
            />
            <span>Taught by <strong className="text-white">{course.instructor.name}</strong></span>
            <span>•</span>
            <span className="flex items-center gap-1 font-bold text-[#CBFC01]">
              ★ {course.rating.toFixed(1)} ({course.reviewCount.toLocaleString()} reviews)
            </span>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Video Preview Mockup */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#242528] shadow-inner flex items-center justify-center group">
            <img
              src={course.thumbnail}
              alt="Video Preview"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-6">
              <span className="inline-block bg-[#CBFC01] text-[#172400] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider self-start">
                Preview Lesson 1
              </span>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#003BE2] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <p className="text-white/80 text-xs">Click to watch high-definition sample lesson (14:20)</p>
            </div>
          </div>

          {/* Course Overview */}
          <div>
            <h3 className="font-display font-bold text-lg text-[#242528] mb-2">
              Course Overview
            </h3>
            <p className="text-sm text-[#585A62] leading-relaxed">
              {course.description} Designed for high retention and real portfolio construction. Follow structured step-by-step milestones, build practical components, and submit code for review.
            </p>
          </div>

          {/* Curriculum Modules */}
          <div>
            <h3 className="font-display font-bold text-lg text-[#242528] mb-4">
              Curriculum & Syllabus
            </h3>
            <div className="space-y-3">
              {(course.modules || [
                {
                  id: 'm-default',
                  title: 'Core Fundamentals & Environment Setup',
                  lessons: [
                    { id: 'l1', title: 'Architecture Overview & Design Philosophy', duration: '12:30', isCompleted: true },
                    { id: 'l2', title: 'Live Project Setup & Tooling Configuration', duration: '18:45', isCompleted: true },
                    { id: 'l3', title: 'Building the Primary Feature Set', duration: '24:10' },
                    { id: 'l4', title: 'Testing, Deployment & Production Polish', duration: '30:00' },
                  ],
                },
              ]).map((mod) => (
                <div key={mod.id} className="border border-[#E5E6E8] rounded-2xl overflow-hidden">
                  <div className="bg-[#F5F5F6] px-4 py-3 font-bold text-sm text-[#242528] flex justify-between items-center">
                    <span>{mod.title}</span>
                    <span className="text-xs font-normal text-[#82868E]">{mod.lessons.length} Lessons</span>
                  </div>
                  <div className="divide-y divide-[#F5F5F6]">
                    {mod.lessons.map((lesson) => (
                      <div key={lesson.id} className="px-4 py-3 text-xs flex items-center justify-between text-[#4B4C53] hover:bg-[#FAFAFA]">
                        <div className="flex items-center gap-2.5">
                          <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                            lesson.isCompleted ? 'bg-[#003BE2] text-white' : 'border border-[#CED0D3] text-transparent'
                          }`}>
                            ✓
                          </span>
                          <span>{lesson.title}</span>
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

        {/* Modal Footer Bar */}
        <div className="bg-[#F5F5F6] px-6 sm:px-8 py-4 border-t border-[#E5E6E8] flex items-center justify-between">
          <div>
            <span className="text-xs text-[#82868E] block">Tuition Price</span>
            <div className="flex items-baseline gap-2">
              <span className="font-display font-extrabold text-2xl text-[#242528]">
                ${course.price.toFixed(2)}
              </span>
              {course.originalPrice && (
                <span className="text-xs text-[#82868E] line-through">
                  ${course.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline-dark" size="md" onClick={onClose}>
              Close
            </Button>
            <Button
              variant="lime"
              size="md"
              onClick={() => onEnroll?.(course)}
              className="px-6 shadow-md"
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
