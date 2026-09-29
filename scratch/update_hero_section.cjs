const fs = require('fs');

const fileContent = `import React, { useState } from 'react';
import figmaHeroStudent from '../../../assets/images/figma-hero-student.png';
import doodleZigzagLeft from '../../../assets/images/figma-hero-doodle-zigzag-left.png';
import doodleTorusLeft from '../../../assets/images/figma-hero-doodle-torus-left.png';
import doodleCylinderRight from '../../../assets/images/figma-hero-doodle-cylinder-right.png';
import doodlePyramidRight from '../../../assets/images/figma-hero-doodle-pyramid-right.png';
import doodleSpringRight from '../../../assets/images/figma-hero-doodle-spring-right.png';
import avatar3 from '../../../assets/images/avatar-3.png';
import avatar4 from '../../../assets/images/avatar-4.png';
import avatar5 from '../../../assets/images/avatar-5.png';
import avatar6 from '../../../assets/images/avatar-6.png';
import avatar7 from '../../../assets/images/avatar-7.png';
import avatar8 from '../../../assets/images/avatar-8.png';
import avatar9 from '../../../assets/images/avatar-9.png';

// CSS filter to convert 3D doodle to vibrant electric lemon (#D4FB20 / #CBFC01)
const LEMON_FILTER =
  'brightness(0) saturate(100%) invert(92%) sepia(90%) saturate(600%) hue-rotate(28deg) brightness(108%)';

// CSS filter for crisp clean pure white 3D doodles
const WHITE_DOODLE_FILTER = 'brightness(1.55) contrast(1.1) drop-shadow(0 15px 25px rgba(0,0,0,0.18))';
const LEMON_DOODLE_FILTER = \`\${LEMON_FILTER} drop-shadow(0 20px 30px rgba(0,0,0,0.18))\`;

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
    <section className="relative bg-[#003BE2] text-white pt-28 sm:pt-32 pb-0 overflow-hidden min-h-[960px] flex flex-col justify-between">
      {/* 1. Subtle 120px Background Grid Overlay from Figma */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12] z-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, #FFFFFF 1.5px, transparent 1.5px), linear-gradient(to bottom, #FFFFFF 1.5px, transparent 1.5px)',
          backgroundSize: '120px 120px',
        }}
      />

      {/* 2. Centered 1440px Floating Doodles Stage (Exact Figma Vector Coordinates) */}
      {/* Anchored to center (left-1/2 -translate-x-1/2 w-[1440px]) so doodles never drift away on wide screens */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-full pointer-events-none z-10 select-none">
        {/* Top-Left: Neon Lime Zigzag Scribble (Exact Figma: x=-121.58, y=221, w=386.79, h=386.79) */}
        <img
          src={doodleZigzagLeft}
          alt=""
          aria-hidden="true"
          style={{ filter: LEMON_DOODLE_FILTER }}
          className="absolute left-[-122px] top-[221px] w-[387px] h-[387px] object-contain pointer-events-none select-none"
        />

        {/* Mid-Left: White 3D Zigzag / Spring (Exact Figma: x=183.8, y=477, w=175.8, h=175.8) */}
        <img
          src={doodleZigzagLeft}
          alt=""
          aria-hidden="true"
          style={{ filter: WHITE_DOODLE_FILTER, transform: 'scaleX(-1)' }}
          className="absolute left-[184px] top-[477px] w-[176px] h-[176px] object-contain pointer-events-none select-none"
        />

        {/* Bottom-Left: White 3D Torus Donut (Exact Figma: x=14.4, y=681.3, w=343.7, h=343.7) */}
        <img
          src={doodleTorusLeft}
          alt=""
          aria-hidden="true"
          style={{ filter: WHITE_DOODLE_FILTER }}
          className="absolute left-[14px] top-[681px] w-[344px] h-[344px] object-contain pointer-events-none select-none"
        />

        {/* Top-Right: Neon Lime 3D Cylinder / Polygon (Exact Figma: x=1227.1, y=220.2, w=371.8, h=371.8) */}
        <img
          src={doodleCylinderRight}
          alt=""
          aria-hidden="true"
          style={{ filter: LEMON_DOODLE_FILTER }}
          className="absolute left-[1227px] top-[220px] w-[372px] h-[372px] object-contain pointer-events-none select-none"
        />

        {/* Mid-Right: White 3D Pyramid (Exact Figma: x=1104, y=463.6, w=188.9, h=188.9) */}
        <img
          src={doodlePyramidRight}
          alt=""
          aria-hidden="true"
          style={{ filter: WHITE_DOODLE_FILTER }}
          className="absolute left-[1104px] top-[464px] w-[189px] h-[189px] object-contain pointer-events-none select-none"
        />

        {/* Bottom-Right: White 3D Spring (Exact Figma: x=1123.9, y=672, w=331.5, h=331.5) */}
        <img
          src={doodleSpringRight}
          alt=""
          aria-hidden="true"
          style={{ filter: WHITE_DOODLE_FILTER }}
          className="absolute left-[1124px] top-[672px] w-[332px] h-[332px] object-contain pointer-events-none select-none"
        />
      </div>

      {/* 3. Header Text & Search Content */}
      <div className="bytespace-container relative z-20 flex flex-col items-center text-center">
        {/* Main Headline - Both Lines Pure White matching Figma */}
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[4rem] text-white tracking-tight leading-[1.12] max-w-4xl mx-auto">
          Get Access to Hundreds <br />
          Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-[#E5E6E8] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar - Exact Figma Dimensions (White rounded pill with #D4FB20 button) */}
        <form
          onSubmit={handleSearchSubmit}
          className="mt-7 w-full max-w-xl bg-white p-1 pl-6 rounded-full shadow-2xl flex items-center gap-3 border border-white/30"
        >
          <svg
            className="w-4 h-4 text-[#82868E] flex-shrink-0"
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
            className="w-full bg-transparent text-[#242528] placeholder-[#82868E] text-xs sm:text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#D4FB20] text-[#172400] hover:bg-[#CBFC01] transition-all px-7 py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md cursor-pointer flex-shrink-0 active:scale-95"
          >
            Search
          </button>
        </form>
      </div>

      {/* 4. Hero Visual Stage with Giant Lemonish Arch, Student & 3 Floating Cards */}
      <div className="relative w-full flex justify-center items-end mt-10 z-20">
        {/* The Giant Lemonish / Lime Half Circle Arch (<circle cx="719.5" cy="1156.5" r="414.5" stroke="#CBFC01" stroke-width="320"/>) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 overflow-hidden w-[1150px] h-[520px] max-w-[100vw]">
          <svg
            className="w-full h-full"
            viewBox="0 0 1150 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="575"
              cy="575"
              r="415"
              stroke="#CBFC01"
              strokeWidth="320"
              fill="none"
            />
          </svg>
        </div>

        {/* Center Student Stage */}
        <div className="relative w-full max-w-[620px] flex justify-center items-end z-20">
          {/* Authentic Student Cutout from Figma */}
          <img
            src={figmaHeroStudent}
            alt="ByteSpace Student"
            className="relative z-10 w-full max-h-[540px] object-contain drop-shadow-2xl select-none"
          />

          {/* Floating Card 1 (Top-Left of Student): UI/UX Design */}
          <div className="absolute top-16 -left-6 sm:-left-16 z-30 bg-white/95 backdrop-blur-md text-[#242528] px-5 py-3 rounded-2xl shadow-2xl border border-white/60 text-left">
            <div className="font-extrabold text-xs sm:text-sm text-[#242528] leading-tight">
              UI/UX Design
            </div>
            <div className="text-[10px] sm:text-[11px] text-[#82868E] mt-0.5">
              200 Courses • 1000+ Students
            </div>
          </div>

          {/* Floating Card 2 (Top-Right of Student): Learning Progress 55% */}
          <div className="absolute top-24 -right-4 sm:-right-14 z-30 bg-white/95 backdrop-blur-md text-[#242528] px-6 py-4 rounded-2xl shadow-2xl border border-white/60 text-left w-52 sm:w-60">
            <div className="text-[11px] sm:text-xs text-[#585A62] font-semibold">
              Learning Progress
            </div>
            <div className="text-2xl sm:text-5xl font-extrabold text-[#242528] tracking-tight my-1">
              55%
            </div>
            <div className="w-full h-2 rounded-full bg-[#F5F5F6] overflow-hidden mt-1">
              <div className="h-full bg-[#D4FB20] rounded-full w-[55%]" />
            </div>
          </div>

          {/* Floating Card 3 (Bottom-Left of Student): Happy Students with 7 Avatars & 2K+ */}
          <div className="absolute bottom-6 -left-6 sm:-left-14 z-30 bg-white/95 backdrop-blur-md text-[#242528] px-4 py-3 rounded-2xl shadow-2xl border border-white/60 text-left flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#242528]">Happy Students</span>
              <span className="text-xs text-amber-500 font-extrabold flex items-center gap-0.5">
                4.5 <span className="text-[#82868E] font-normal">(240)</span> ★
              </span>
            </div>
            <div className="flex items-center -space-x-2">
              <img className="w-7 h-7 rounded-full ring-2 ring-white object-cover" src={avatar3} alt="" />
              <img className="w-7 h-7 rounded-full ring-2 ring-white object-cover" src={avatar4} alt="" />
              <img className="w-7 h-7 rounded-full ring-2 ring-white object-cover" src={avatar5} alt="" />
              <img className="w-7 h-7 rounded-full ring-2 ring-white object-cover" src={avatar6} alt="" />
              <img className="w-7 h-7 rounded-full ring-2 ring-white object-cover" src={avatar7} alt="" />
              <img className="w-7 h-7 rounded-full ring-2 ring-white object-cover" src={avatar8} alt="" />
              <img className="w-7 h-7 rounded-full ring-2 ring-white object-cover" src={avatar9} alt="" />
              <div className="w-7 h-7 rounded-full ring-2 ring-white bg-[#D4FB20] text-[#172400] text-[9px] font-black flex items-center justify-center">
                2K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
`;

fs.writeFileSync('src/features/landing/components/HeroSection.tsx', fileContent, 'utf8');
console.log('Successfully updated HeroSection.tsx');
