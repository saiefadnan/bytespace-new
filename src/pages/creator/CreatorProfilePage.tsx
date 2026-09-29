import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { Button } from '../../components/common/Button';
import { CourseCard } from '../../features/courses';
import { mockMentors, mockCourses } from '../../data';

export const CreatorProfilePage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState<'courses' | 'about' | 'reviews'>('courses');
  // Find mentor by id or fallback to first mentor
  const mentor = mockMentors.find((m) => m.id === id) || mockMentors[0];

  // Get courses taught by this instructor or matching their specialty
  const mentorCourses = mockCourses.filter(
    (c) =>
      c.instructor.name.toLowerCase().includes(mentor.name.toLowerCase()) ||
      c.category === 'design'
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#242528] selection:bg-[#CBFC01] selection:text-[#172400]">


      {/* Global Navbar */}
      <Navbar isTransparent={false} />

      {/* Top Banner on Royal Blue Canvas (Figma Creator Profile) */}
      <header className="bg-[#003BE2] pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-gradient-to-b from-[#2872FF]/40 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="bytespace-container relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-xs font-semibold text-white/70">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/#mentors" className="hover:text-white transition-colors">Mentors</Link>
            <span>/</span>
            <span className="text-[#CBFC01]">{mentor.name}</span>
          </nav>

          {/* Instructor Header Grid */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12">
            {/* Avatar with Lime Highlight Ring */}
            <div className="relative flex-shrink-0">
              <img
                src={mentor.avatar}
                alt={mentor.name}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl object-cover ring-4 ring-[#CBFC01] shadow-2xl shadow-black/30 bg-[#0030B8]"
              />
              <span className="absolute -bottom-2 -right-2 bg-[#CBFC01] text-[#172400] p-2 rounded-xl shadow-md text-xs font-black" title="Verified Creator">
                ✓
              </span>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left space-y-4 text-white">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    {mentor.name}
                  </h1>
                  <span className="bg-white/15 text-[#CBFC01] text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    Top Instructor
                  </span>
                </div>
                <p className="text-white/85 text-base font-semibold">
                  {mentor.role}
                </p>
                <p className="text-white/70 text-sm max-w-2xl leading-relaxed">
                  Specialized in {mentor.specialty}. Teaching modern engineering & design architectures to over 25,000+ engineers worldwide.
                </p>
              </div>

              {/* Stats Strip */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 sm:gap-10 pt-2 border-t border-white/10">
                <div>
                  <div className="text-2xl font-extrabold text-[#CBFC01]">{mentor.studentsCount}</div>
                  <div className="text-xs text-white/70 uppercase tracking-wider font-semibold">Students</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white flex items-center gap-1 justify-center md:justify-start">
                    <span>{mentor.rating}</span>
                    <span className="text-[#CBFC01] text-lg">★</span>
                  </div>
                  <div className="text-xs text-white/70 uppercase tracking-wider font-semibold">Instructor Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white">{mentorCourses.length}</div>
                  <div className="text-xs text-white/70 uppercase tracking-wider font-semibold">Masterclasses</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <Button
                  variant={isFollowing ? 'outline-white' : 'lime'}
                  size="md"
                  onClick={() => setIsFollowing(!isFollowing)}
                  className="font-bold px-6 cursor-pointer"
                >
                  {isFollowing ? '✓ Following' : '+ Follow Instructor'}
                </Button>

                <button
                  type="button"
                  onClick={() => alert(`Message sent to ${mentor.name}! They typically reply within 24 hours.`)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20 cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs & Content */}
      <main className="flex-1 py-12 px-6">
        <div className="bytespace-container">
          {/* Navigation Tabs */}
          <div className="flex items-center gap-6 border-b border-[#E5E6E8] pb-4 mb-10">
            <button
              onClick={() => setActiveTab('courses')}
              className={`pb-2 text-sm font-bold transition-colors relative cursor-pointer ${
                activeTab === 'courses'
                  ? 'text-[#003BE2] border-b-2 border-[#003BE2]'
                  : 'text-[#82868E] hover:text-[#242528]'
              }`}
            >
              Courses Taught ({mentorCourses.length})
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-2 text-sm font-bold transition-colors relative cursor-pointer ${
                activeTab === 'about'
                  ? 'text-[#003BE2] border-b-2 border-[#003BE2]'
                  : 'text-[#82868E] hover:text-[#242528]'
              }`}
            >
              About & Experience
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-2 text-sm font-bold transition-colors relative cursor-pointer ${
                activeTab === 'reviews'
                  ? 'text-[#003BE2] border-b-2 border-[#003BE2]'
                  : 'text-[#82868E] hover:text-[#242528]'
              }`}
            >
              Student Reviews (1,420)
            </button>
          </div>

          {/* Tab 1: Courses Grid */}
          {activeTab === 'courses' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-extrabold text-[#242528]">
                  Available Masterclasses
                </h3>
                <span className="text-xs font-semibold text-[#82868E]">
                  Showing {mentorCourses.length} courses
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mentorCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: About & Experience */}
          {activeTab === 'about' && (
            <div className="max-w-3xl space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-extrabold text-[#242528]">
                  Biography & Teaching Philosophy
                </h3>
                <p className="text-sm text-[#585A62] leading-relaxed">
                  Hi, I'm {mentor.name}. Over the past decade, I've led product teams, designed enterprise design systems, and mentored thousands of junior and senior engineers transitioning into top tech companies.
                </p>
                <p className="text-sm text-[#585A62] leading-relaxed">
                  My mission on ByteSpace is simple: cut through theory and give you hands-on, industry-grade projects that will stand out immediately on your portfolio.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#E5E6E8]">
                <h3 className="text-lg font-bold text-[#242528]">
                  Experience & Track Record
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-[#F5F5F6] border border-[#E5E6E8] space-y-1.5">
                    <span className="text-xs font-bold text-[#003BE2] uppercase tracking-wider">Present</span>
                    <h4 className="font-bold text-[#242528] text-sm">Staff Designer & Mentor</h4>
                    <p className="text-xs text-[#82868E]">ByteSpace Tech Academy</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#F5F5F6] border border-[#E5E6E8] space-y-1.5">
                    <span className="text-xs font-bold text-[#585A62] uppercase tracking-wider">2020 — 2024</span>
                    <h4 className="font-bold text-[#242528] text-sm">Lead Product Architect</h4>
                    <p className="text-xs text-[#82868E]">Stripe & FinTech Systems</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Student Reviews */}
          {activeTab === 'reviews' && (
            <div className="max-w-3xl space-y-6">
              <div className="flex items-center gap-4 p-6 rounded-2xl bg-[#F5F5F6] border border-[#E5E6E8]">
                <div className="text-4xl font-extrabold text-[#003BE2]">{mentor.rating}</div>
                <div>
                  <div className="flex items-center gap-1 text-[#CBFC01]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-xs text-[#82868E] mt-0.5">Based on 1,420 student reviews across all courses</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: 'David Kim',
                    date: '2 weeks ago',
                    comment: 'Kenji is an extraordinary teacher. The design systems masterclass gave me the exact tools I needed to build Figma tokens for our entire engineering team.',
                  },
                  {
                    name: 'Elena Rostova',
                    date: '1 month ago',
                    comment: 'Clear, concise, and project-based. The assignments were challenging in the best possible way. Highly recommend!',
                  },
                ].map((review, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-[#E5E6E8] space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-[#242528]">{review.name}</h4>
                      <span className="text-xs text-[#82868E]">{review.date}</span>
                    </div>
                    <div className="flex text-amber-400 text-xs">★★★★★</div>
                    <p className="text-sm text-[#585A62] leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Explore Other Mentors Strip */}
          <div className="mt-20 pt-12 border-t border-[#E5E6E8] space-y-6">
            <h3 className="text-2xl font-extrabold text-[#242528]">
              Meet Other Industry Mentors
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockMentors
                .filter((m) => m.id !== mentor.id)
                .map((m) => (
                  <Link
                    key={m.id}
                    to={`/creator/${m.id}`}
                    className="p-5 rounded-2xl border border-[#E5E6E8] hover:border-[#003BE2] hover:shadow-lg transition-all group flex items-center gap-4 bg-white"
                  >
                    <img
                      src={m.avatar}
                      alt={m.name}
                      className="w-14 h-14 rounded-2xl object-cover ring-2 ring-[#CBFC01]"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-[#242528] group-hover:text-[#003BE2] transition-colors">
                        {m.name}
                      </h4>
                      <p className="text-xs text-[#82868E] line-clamp-1">{m.role}</p>
                      <span className="text-xs font-semibold text-[#003BE2] mt-1 inline-block">
                        View Profile →
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />


    </div>
  );
};
