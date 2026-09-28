import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { CourseCard } from '../../features/courses';
import { mockCourses } from '../../data';
import type { Course } from '../../types';

export const CourseDetailsPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [activeTab, setActiveTab] = useState<'about' | 'syllabus' | 'instructor' | 'reviews'>('about');
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const [enrolled, setEnrolled] = useState(false);
  const [enrollToast, setEnrollToast] = useState(false);

  // Look up course by id or slug, or fallback to first course
  const course: Course =
    mockCourses.find((c) => c.id === id || c.slug === id) || mockCourses[0];

  // Related courses in the same category
  const relatedCourses = mockCourses
    .filter((c) => c.id !== course.id)
    .slice(0, 3);

  const handleEnroll = () => {
    setEnrolled(true);
    setEnrollToast(true);
    setTimeout(() => {
      setEnrollToast(false);
    }, 4500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#242528] selection:bg-[#CBFC01] selection:text-[#172400]">
      {/* Toast Notification */}
      {enrollToast && (
        <div className="fixed top-20 right-6 z-50 bg-[#FDFFE4] border-2 border-[#CBFC01] text-[#243300] px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-4 duration-300">
          <span className="w-7 h-7 rounded-full bg-[#CBFC01] text-[#172400] flex items-center justify-center font-extrabold text-sm">
            ✓
          </span>
          <span className="text-sm font-bold">
            Successfully enrolled in "{course.title}"! Welcome aboard.
          </span>
        </div>
      )}

      {/* Global Navbar */}
      <Navbar isTransparent={false} />

      {/* Hero Header on Royal Blue Canvas (Figma Course Details) */}
      <header className="bg-[#003BE2] pt-32 pb-16 px-6 relative overflow-hidden text-white">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-gradient-to-b from-[#2872FF]/40 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="bytespace-container relative z-10 max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-xs font-semibold text-white/70">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/search" className="hover:text-white transition-colors">Courses</Link>
            <span>/</span>
            <span className="text-[#CBFC01] truncate max-w-xs">{course.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Title & Metadata */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="lime" size="sm">
                  {course.category.toUpperCase()}
                </Badge>
                <span className="text-xs font-semibold bg-white/10 px-3 py-1 rounded-full text-white/90">
                  {course.level} Level
                </span>
                {course.isPopular && (
                  <span className="text-xs font-bold bg-[#CBFC01] text-[#172400] px-2.5 py-0.5 rounded-full">
                    Bestseller
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-2xl">
                {course.description}
              </p>

              {/* Stats Bar */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-white/90">
                <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                  <span>★ {course.rating}</span>
                  <span className="text-white/70 font-normal">
                    ({course.reviewCount.toLocaleString()} ratings)
                  </span>
                </div>
                <div>{course.duration} total duration</div>
                <div>{course.lessonsCount} lessons</div>
                <div className="text-white/70">Updated October 2026</div>
              </div>

              {/* Instructor snippet */}
              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-[#CBFC01]"
                />
                <div>
                  <span className="text-xs text-white/70">Created by</span>
                  <Link
                    to="/creator"
                    className="block font-bold text-white hover:text-[#CBFC01] transition-colors text-sm"
                  >
                    {course.instructor.name} — <span className="font-normal text-white/70">{course.instructor.role}</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Video Player Preview Mockup */}
            <div className="lg:col-span-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 aspect-video group bg-black/40 flex items-center justify-center">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                <button
                  type="button"
                  onClick={() => setIsPlayingPreview(!isPlayingPreview)}
                  className="absolute w-16 h-16 rounded-full bg-[#CBFC01] text-[#172400] flex items-center justify-center font-black text-xl shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                  aria-label="Play video preview"
                >
                  ▶
                </button>

                <div className="absolute bottom-3 left-3 right-3 text-center bg-black/60 backdrop-blur-sm py-1.5 px-3 rounded-lg text-xs font-semibold text-white">
                  Preview Course Overview
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area: 2-Column Desktop Grid */}
      <main className="flex-1 py-12 px-6">
        <div className="bytespace-container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Tabs, Curriculum, Reviews */}
            <div className="lg:col-span-8 space-y-10">
              {/* Tab Navigation */}
              <div className="flex items-center gap-6 border-b border-[#E5E6E8] pb-4">
                {[
                  { key: 'about', label: 'About Course' },
                  { key: 'syllabus', label: `Curriculum (${course.lessonsCount})` },
                  { key: 'instructor', label: 'Instructor' },
                  { key: 'reviews', label: `Reviews (${course.reviewCount})` },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as any)}
                    className={`pb-2 text-sm font-bold transition-colors cursor-pointer ${
                      activeTab === tab.key
                        ? 'text-[#003BE2] border-b-2 border-[#003BE2]'
                        : 'text-[#82868E] hover:text-[#242528]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab 1: About */}
              {activeTab === 'about' && (
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-extrabold text-[#242528]">
                      What you will learn in this masterclass
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                      {[
                        'Master industry-grade Figma token architectures',
                        'Conduct thorough empathy and quantitative user testing',
                        'Build responsive web layouts matching modern web standards',
                        'Translate raw user insights into wireframes & interactive prototypes',
                        'Publish verified design systems that engineering teams love',
                        'Prepare a portfolio case study ready for tech job interviews',
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-[#CBFC01] text-[#172400] flex items-center justify-center font-extrabold text-xs flex-shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span className="text-xs sm:text-sm text-[#4B4C53] font-medium leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-[#E5E6E8]">
                    <h3 className="text-lg font-bold text-[#242528]">Requirements</h3>
                    <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-[#585A62]">
                      <li>A free Figma account and modern web browser</li>
                      <li>Basic familiarity with digital interfaces (no prior coding required)</li>
                      <li>Passion for building polished user experiences</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Tab 2: Curriculum & Syllabus */}
              {activeTab === 'syllabus' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-extrabold text-[#242528]">Course Modules</h3>
                    <span className="text-xs text-[#82868E]">
                      {course.modules?.length || 2} modules • {course.lessonsCount} lessons • {course.duration}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {course.modules?.map((mod, modIdx) => (
                      <div
                        key={mod.id}
                        className="border border-[#E5E6E8] rounded-2xl p-5 bg-[#FAFAFA]"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-bold text-sm text-[#242528]">
                            Module {modIdx + 1}: {mod.title}
                          </h4>
                          <span className="text-xs font-semibold text-[#82868E]">
                            {mod.lessons.length} lessons
                          </span>
                        </div>

                        <div className="space-y-2">
                          {mod.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className="flex items-center justify-between text-xs py-2.5 px-3.5 bg-white rounded-xl border border-[#F0F0F2]"
                            >
                              <div className="flex items-center gap-3">
                                <span className="w-5 h-5 rounded-full bg-[#E7F6FF] text-[#003BE2] flex items-center justify-center font-bold text-[10px]">
                                  ▶
                                </span>
                                <span className="font-medium text-[#242528]">
                                  {lesson.title}
                                </span>
                                {lesson.isPreview && (
                                  <span className="bg-[#CBFC01]/40 text-[#172400] text-[10px] font-extrabold px-1.5 py-0.5 rounded">
                                    Preview
                                  </span>
                                )}
                              </div>
                              <span className="text-[#82868E] font-medium">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: Instructor */}
              {activeTab === 'instructor' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-5">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      className="w-18 h-18 rounded-2xl object-cover ring-2 ring-[#CBFC01]"
                    />
                    <div>
                      <h4 className="text-xl font-extrabold text-[#242528]">
                        {course.instructor.name}
                      </h4>
                      <p className="text-sm text-[#003BE2] font-semibold">
                        {course.instructor.role}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-[#82868E] mt-1">
                        <span>★ 4.95 Rating</span>
                        <span>•</span>
                        <span>18,400+ Students</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-[#585A62] leading-relaxed">
                    Senior design practitioner with over 10 years of experience shipping enterprise interfaces and leading design systems teams. Dedicated to practical, production-ready curriculum.
                  </p>

                  <Link to="/creator">
                    <Button variant="outline-dark" size="sm" className="font-bold text-xs mt-2">
                      View Full Profile & All Courses →
                    </Button>
                  </Link>
                </div>
              )}

              {/* Tab 4: Reviews */}
              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-6 p-6 rounded-2xl bg-[#FAFAFA] border border-[#E5E6E8]">
                    <div className="text-4xl font-extrabold text-[#003BE2]">
                      {course.rating}
                    </div>
                    <div>
                      <div className="flex text-amber-400 text-sm">★★★★★</div>
                      <p className="text-xs text-[#82868E] mt-0.5">
                        Course rating from {course.reviewCount.toLocaleString()} verified student reviews
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        name: 'Jessica Tan',
                        date: '3 weeks ago',
                        comment: 'This course bridged the entire gap for me between basic Figma wireframes and senior-level component systems. 10/10 recommendation.',
                      },
                      {
                        name: 'Marcus Vance',
                        date: '1 month ago',
                        comment: 'The instructor explained information architecture in a way that finally clicked. Worth every penny.',
                      },
                    ].map((rev, i) => (
                      <div key={i} className="p-5 rounded-2xl border border-[#E5E6E8] space-y-2">
                        <div className="flex items-center justify-between">
                          <h5 className="text-sm font-bold text-[#242528]">{rev.name}</h5>
                          <span className="text-xs text-[#82868E]">{rev.date}</span>
                        </div>
                        <div className="text-amber-400 text-xs">★★★★★</div>
                        <p className="text-xs sm:text-sm text-[#585A62] leading-relaxed">{rev.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Courses */}
              <div className="pt-12 border-t border-[#E5E6E8] space-y-6">
                <h3 className="text-2xl font-extrabold text-[#242528]">
                  Learners Also Enrolled In
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedCourses.map((rel) => (
                    <CourseCard key={rel.id} course={rel} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Enrollment Sidebar */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E6E8] shadow-2xl shadow-black/10 space-y-6">
                {/* Pricing */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-[#003BE2]">
                      ${course.price}
                    </span>
                    {course.originalPrice && (
                      <span className="text-base text-[#82868E] line-through">
                        ${course.originalPrice}
                      </span>
                    )}
                    <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full ml-1">
                      45% OFF
                    </span>
                  </div>
                  <p className="text-xs text-[#82868E] mt-1">
                    Special pricing ends in 2 days!
                  </p>
                </div>

                {/* Enrollment Button */}
                <Button
                  variant="lime"
                  size="lg"
                  fullWidth
                  disabled={enrolled}
                  onClick={handleEnroll}
                  className="py-4 font-bold shadow-lg shadow-[#CBFC01]/30 text-sm cursor-pointer"
                >
                  {enrolled ? '✓ Enrolled in Course' : 'Enroll Now'}
                </Button>

                <p className="text-center text-xs text-[#82868E]">
                  🔒 30-Day Money-Back Guarantee
                </p>

                {/* Includes Checklist */}
                <div className="space-y-3 pt-4 border-t border-[#F5F5F6]">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#4B4C53]">
                    This masterclass includes:
                  </h4>
                  {[
                    `${course.duration} on-demand video lessons`,
                    'Downloadable source code & Figma kits',
                    'Direct mentor review on your assignments',
                    'Full lifetime access on desktop & mobile',
                    'Official certificate of completion',
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-[#585A62]">
                      <span className="text-[#003BE2] font-bold">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};
