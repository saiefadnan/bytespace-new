import React, { useState } from 'react';
import { Button } from '../common/Button';
import heroStudent from '../../assets/images/hero-student.png';
import doodleSpring from '../../assets/images/doodle-spring-1.png';
import avatar3 from '../../assets/images/avatar-3.png';
import avatar4 from '../../assets/images/avatar-4.png';
import avatar5 from '../../assets/images/avatar-5.png';

export interface HeroSectionProps {
  onSearch?: (query: string) => void;
  onExploreClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearch,
  onExploreClick,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch?.(searchQuery.trim());
    }
  };

  return (
    <section className="relative bg-[#003BE2] text-white pt-36 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Decorative Lights */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#2554FF]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#CBFC01]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="bytespace-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Search */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#D4FB20] text-[#172400] px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#172400] animate-pulse" />
              Over 10,000+ In-Demand Courses
            </div>

            {/* Main Title */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.12]">
              Get access to thousands <br />
              <span className="text-[#CBFC01] relative inline-block">
                Courses Available
                {/* Subtle curved underline vector */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#CBFC01]/40"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 9.5C65 2.5 190 -1.5 298 9.5"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/85 text-base sm:text-lg max-w-xl font-sans leading-relaxed">
              Master world-class design systems, scalable software engineering, and modern data architecture from industry leaders. Practical, self-paced, and career-defining.
            </p>

            {/* Search Input Bar */}
            <form
              onSubmit={handleSearchSubmit}
              className="bg-white rounded-full p-1.5 sm:p-2 flex items-center shadow-2xl max-w-lg border border-white/20"
            >
              <div className="pl-3.5 sm:pl-4 text-[#82868E]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="What do you want to learn today?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent px-3 py-2 text-sm text-[#242528] placeholder-[#82868E] focus:outline-none"
              />
              <Button variant="lime" size="sm" type="submit" className="shrink-0 text-xs px-5 py-2.5">
                Search
              </Button>
            </form>

            {/* Action Buttons & Trust Stats */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="lime"
                size="md"
                onClick={onExploreClick}
                className="px-6 py-3 font-bold"
              >
                Explore All Courses
              </Button>
              <a
                href="#courses"
                className="inline-flex items-center gap-2.5 text-white/90 hover:text-white font-semibold text-sm px-5 py-3 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all"
              >
                <div className="w-7 h-7 rounded-full bg-[#CBFC01] text-[#172400] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span>Watch Preview</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual & Doodles */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Outer Glow & Lime Organic Backdrop */}
            <div className="relative w-full max-w-[440px] sm:max-w-[480px]">
              {/* Organic Lime Background Pill */}
              <div className="absolute inset-0 bg-[#D4FB20] rounded-[40px] rotate-3 scale-95 opacity-90 blur-sm -z-10" />
              <div className="absolute inset-0 bg-[#072BB0] rounded-[40px] -rotate-2 -z-20" />

              {/* 3D Spring Doodle Top Left */}
              <img
                src={doodleSpring}
                alt="3D Doodle"
                className="absolute -top-8 -left-8 w-20 h-20 sm:w-24 sm:h-24 object-contain animate-bounce drop-shadow-xl z-20 pointer-events-none"
                style={{ animationDuration: '3.5s' }}
              />

              {/* Main Student Cutout */}
              <div className="relative z-10 overflow-hidden rounded-[36px] bg-gradient-to-b from-[#2554FF]/20 to-[#003BE2]">
                <img
                  src={heroStudent}
                  alt="Student learning at ByteSpace"
                  className="w-full h-auto object-cover transform translate-y-2 drop-shadow-2xl"
                />
              </div>

              {/* Floating Badge 1: 10k+ Courses */}
              <div className="absolute -left-6 bottom-16 z-30 bg-white text-[#242528] rounded-2xl p-3 shadow-2xl border border-[#E5E6E8] flex items-center gap-3 animate-pulse" style={{ animationDuration: '4s' }}>
                <div className="w-10 h-10 rounded-xl bg-[#FDFFE4] border border-[#FAFFC5] flex items-center justify-center text-[#8CB400]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <div className="font-display font-extrabold text-sm text-[#242528]">10k+ Courses</div>
                  <div className="text-[11px] text-[#82868E]">Updated Weekly</div>
                </div>
              </div>

              {/* Floating Badge 2: Student Avatars & Rating */}
              <div className="absolute -right-6 top-14 z-30 bg-white text-[#242528] rounded-2xl p-3 shadow-2xl border border-[#E5E6E8] flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img src={avatar3} alt="Student" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                  <img src={avatar4} alt="Student" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                  <img src={avatar5} alt="Student" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-1 font-bold text-xs text-[#242528]">
                    <span className="text-amber-400">★</span> 4.9 (12k+)
                  </div>
                  <div className="text-[11px] text-[#82868E]">Active Learners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
