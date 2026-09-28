import React, { useState } from 'react';
import heroStudent from '../../../assets/images/hero-student.png';
import doodleSpring from '../../../assets/images/doodle-spring-1.png';
import doodleShape1 from '../../../assets/images/doodle-shape-1.png';
import doodleShape2 from '../../../assets/images/doodle-shape-2.png';
import avatar3 from '../../../assets/images/avatar-3.png';
import avatar4 from '../../../assets/images/avatar-4.png';
import avatar5 from '../../../assets/images/avatar-5.png';
import avatar6 from '../../../assets/images/avatar-6.png';
import avatar7 from '../../../assets/images/avatar-7.png';

export interface HeroSectionProps {
  onSearch?: (query: string) => void;
  onExploreClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch?.(searchQuery.trim());
    }
  };

  return (
    <section className="relative bg-[#003BE2] text-white pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Decorative Doodles from Figma */}
      <img
        src={doodleSpring}
        alt=""
        aria-hidden="true"
        className="absolute top-24 left-6 sm:left-16 w-20 sm:w-28 opacity-90 select-none pointer-events-none animate-pulse duration-1000"
      />
      <img
        src={doodleShape1}
        alt=""
        aria-hidden="true"
        className="absolute top-20 right-8 sm:right-20 w-24 sm:w-32 opacity-85 select-none pointer-events-none"
      />
      <img
        src={doodleShape2}
        alt=""
        aria-hidden="true"
        className="absolute bottom-10 -left-10 w-32 sm:w-44 opacity-40 select-none pointer-events-none"
      />

      {/* Main Container */}
      <div className="bytespace-container relative z-10 flex flex-col items-center text-center">
        {/* Main Headline */}
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[4rem] tracking-tight leading-[1.12] max-w-4xl mx-auto">
          Get Access to Hundreds <br />
          <span className="text-[#D4FB20]">Courses Available</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-white/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar - Exact Figma Dimensions (White rounded pill with #D4FB20 button) */}
        <form
          onSubmit={handleSearchSubmit}
          className="mt-8 w-full max-w-xl bg-white p-1.5 pl-6 rounded-full shadow-2xl flex items-center gap-3 border border-white/20"
        >
          <svg
            className="w-5 h-5 text-[#82868E] flex-shrink-0"
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
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Course, topic, creator"
            className="w-full bg-transparent text-[#242528] placeholder-[#82868E] text-sm md:text-base focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#D4FB20] text-[#172400] hover:bg-[#CBFC01] transition-all px-7 py-3 rounded-full font-bold text-sm shadow-md cursor-pointer flex-shrink-0 active:scale-95"
          >
            Search
          </button>
        </form>

        {/* Hero Visual Display with Cutout & Floating Figma Cards */}
        <div className="relative mt-12 sm:mt-16 w-full max-w-3xl flex justify-center items-end">
          {/* Circular / Arch Gradient Backdrop */}
          <div className="relative w-[340px] sm:w-[460px] md:w-[520px] h-[340px] sm:h-[430px] rounded-t-[200px] rounded-b-3xl bg-gradient-to-b from-[#2157FF] to-[#002FB6] border border-white/10 shadow-2xl flex items-end justify-center overflow-visible">
            {/* Student Cutout */}
            <img
              src={heroStudent}
              alt="ByteSpace Student"
              className="relative z-10 w-full max-h-[480px] object-contain drop-shadow-2xl select-none"
            />

            {/* Floating Card 1 (Top-Left): UI/UX Design Category Tag */}
            <div className="absolute top-10 -left-6 sm:-left-16 z-20 bg-white/95 backdrop-blur-md text-[#242528] px-4 py-3 rounded-2xl shadow-xl border border-white/60 flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#F0F2F6] flex items-center justify-center text-lg">
                🎨
              </div>
              <div>
                <div className="text-xs font-extrabold text-[#242528]">UI/UX Design</div>
                <div className="text-[11px] text-[#82868E]">200 Courses • 1000+ Students</div>
              </div>
            </div>

            {/* Floating Card 2 (Top-Right): Learning Progress 55% */}
            <div className="absolute top-20 -right-6 sm:-right-14 z-20 bg-white/95 backdrop-blur-md text-[#242528] px-5 py-3.5 rounded-2xl shadow-xl border border-white/60 text-left w-52">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-bold text-[#242528]">Learning Progress</span>
                <span className="font-extrabold text-[#003BE2]">55%</span>
              </div>
              <div className="w-full h-2 bg-[#F0F2F6] rounded-full overflow-hidden">
                <div className="h-full bg-[#D4FB20] rounded-full w-[55%]" />
              </div>
            </div>

            {/* Floating Card 3 (Bottom-Left): Happy Students with Avatars */}
            <div className="absolute -bottom-4 -left-4 sm:-left-12 z-20 bg-white/95 backdrop-blur-md text-[#242528] px-4 py-3 rounded-2xl shadow-xl border border-white/60 text-left flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#242528]">Happy Students</span>
                <span className="text-xs text-amber-500 font-extrabold">★ 4.5 <span className="text-[#82868E] font-normal">(240)</span></span>
              </div>
              <div className="flex items-center -space-x-2">
                <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src={avatar3} alt="" />
                <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src={avatar4} alt="" />
                <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src={avatar5} alt="" />
                <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src={avatar6} alt="" />
                <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src={avatar7} alt="" />
                <div className="w-8 h-8 rounded-full ring-2 ring-white bg-[#D4FB20] text-[#172400] text-[10px] font-extrabold flex items-center justify-center">
                  +2K
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
