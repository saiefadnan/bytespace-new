import React, { useState } from 'react';
import { Button } from '../../../components/common/Button';
import heroStudent from '../../../assets/images/hero-student.png';
import doodleSpring from '../../../assets/images/doodle-spring-1.png';
import avatar3 from '../../../assets/images/avatar-3.png';
import avatar4 from '../../../assets/images/avatar-4.png';
import avatar5 from '../../../assets/images/avatar-5.png';

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
            <button
              type="button"
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 bg-[#D4FB20] text-[#172400] px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-sm cursor-pointer hover:bg-[#CBFC01] transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#172400] animate-pulse" />
              Over 10,000+ In-Demand Courses
            </button>

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
            <p className="text-white/80 text-base sm:text-lg max-w-xl leading-relaxed">
              Unlock your true potential. Learn high-income skills directly from industry experts in design, engineering, and digital craft.
            </p>

            {/* Search Box */}
            <form
              onSubmit={handleSearchSubmit}
              className="flex flex-col sm:flex-row items-center gap-3 max-w-xl pt-2"
            >
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What skill do you want to learn today?"
                  className="w-full h-13 pl-12 pr-4 rounded-full bg-white text-[#242528] placeholder-[#82868E] text-sm shadow-xl focus:outline-none focus:ring-3 focus:ring-[#CBFC01] transition-all"
                />
                <svg
                  className="w-5 h-5 text-[#82868E] absolute left-4.5 top-1/2 -translate-y-1/2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <Button
                type="submit"
                variant="lime"
                size="lg"
                className="w-full sm:w-auto px-8 h-13 rounded-full font-bold shadow-lg shadow-black/20 flex-shrink-0 cursor-pointer"
              >
                Search
              </Button>
            </form>

            {/* Social Proof Avatars Strip */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3 overflow-hidden">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#003BE2] object-cover"
                  src={avatar3}
                  alt="Student 1"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#003BE2] object-cover"
                  src={avatar4}
                  alt="Student 2"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#003BE2] object-cover"
                  src={avatar5}
                  alt="Student 3"
                />
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-2 ring-[#003BE2] bg-[#CBFC01] text-[#172400] font-extrabold text-xs">
                  25k+
                </div>
              </div>
              <div className="text-xs text-white/90">
                <div className="font-bold flex items-center gap-1">
                  <span className="text-amber-300">★★★★★</span>
                  <span>4.9 / 5.0</span>
                </div>
                <div className="text-white/70">From 18,000+ verified students</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Cutout & Floating Widgets */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* 3D Floating Spring Doodle from Figma */}
            <img
              src={doodleSpring}
              alt=""
              aria-hidden="true"
              className="absolute -top-10 -left-6 w-24 sm:w-28 z-20 animate-bounce duration-1000 select-none pointer-events-none"
            />

            {/* Circular Gradient Backdrop */}
            <div className="relative w-[320px] sm:w-[380px] h-[360px] sm:h-[440px] flex items-end justify-center">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#1C55FF] to-[#002FB6] border border-white/10 shadow-2xl" />

              {/* Student Cutout Image */}
              <img
                src={heroStudent}
                alt="ByteSpace Student"
                className="relative z-10 w-full max-h-[460px] object-contain drop-shadow-2xl select-none"
              />

              {/* Floating Stat Card 1 (Bottom Left) */}
              <div className="absolute -bottom-5 -left-4 sm:-left-8 z-20 bg-white/95 backdrop-blur-md text-[#242528] px-4 py-3 rounded-2xl shadow-2xl border border-white/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#CBFC01] flex items-center justify-center text-[#172400] font-bold text-lg">
                  🎓
                </div>
                <div>
                  <div className="text-xs text-[#82868E] font-medium">Certified Courses</div>
                  <div className="text-sm font-extrabold text-[#242528]">100% Verified</div>
                </div>
              </div>

              {/* Floating Stat Card 2 (Top Right) */}
              <div className="absolute top-12 -right-4 sm:-right-6 z-20 bg-white/95 backdrop-blur-md text-[#242528] px-4 py-2.5 rounded-2xl shadow-2xl border border-white/40 flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <div className="text-xs font-bold text-[#242528]">Active Mentors Online</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
