import React from 'react';
import heroStudent from '../../../assets/images/figma-hero-student.png';
import creatorStudent from '../../../assets/images/feature-student.png';
import courseThumb from '../../../assets/images/course-wireframing.jpg';
import avatar3 from '../../../assets/images/avatar-3.png';
import avatar4 from '../../../assets/images/avatar-4.png';
import avatar5 from '../../../assets/images/avatar-5.png';
import doodleSpiral from '../../../assets/images/hero-doodle-lime-spiral.png';

// CSS filter to convert gray 3D doodle → lemon yellow (#CBFC01)
const LEMON_FILTER =
  'brightness(0) saturate(100%) invert(92%) sepia(90%) saturate(600%) hue-rotate(28deg) brightness(108%)';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="relative overflow-hidden">

      {/* ================================================================ */}
      {/* SHOWCASE 1: Professional Growth                                   */}
      {/* ================================================================ */}
      <div className="relative bg-gradient-to-br from-[#DFFFA0] via-[#EDFFC0] to-[#F9FFF0] py-20 sm:py-28 overflow-hidden">
        {/* Background radial glow */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#CBFC01] opacity-25 blur-[100px] pointer-events-none" />

        <div className="bytespace-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] items-center">

            {/* ---- Left: Text + Stats ---- */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-[#1A1C20] tracking-tight leading-[1.1]">
                Your Path to Professional{' '}
                <span className="text-[#003BE2]">Growth Starts Here!</span>
              </h2>

              <p className="text-[#4A4D57] text-sm sm:text-[15px] leading-relaxed max-w-sm">
                Explore our curated selection of courses tailored to enhance your capabilities and
                accelerate your career journey. Whether you are looking to sharpen specific skills,
                gain industry expertise, or embark on a new career path entirely, we have the
                resources you need.
              </p>

              {/* Stats row */}
              <div className="flex items-center gap-8 pt-2">
                <div>
                  <div className="text-4xl font-black text-[#1A1C20] font-display">12K</div>
                  <div className="text-xs text-[#82868E] mt-1 font-medium">Students</div>
                </div>
                <div className="w-px h-12 bg-[#C5C7CD]" />
                <div>
                  <div className="text-4xl font-black text-[#1A1C20] font-display">70+</div>
                  <div className="text-xs text-[#82868E] mt-1 font-medium">Courses</div>
                </div>
                <div className="w-px h-12 bg-[#C5C7CD]" />
                <div>
                  <div className="text-4xl font-black text-[#1A1C20] font-display">16</div>
                  <div className="text-xs text-[#82868E] mt-1 font-medium">Creators</div>
                </div>
              </div>
            </div>

            {/* ---- Right: Floating Visual ---- */}
            <div className="lg:col-span-6 relative" style={{ minHeight: '500px' }}>

              {/* Course card — sits at top-left behind student */}
              <div className="absolute top-0 left-0 z-10 bg-white rounded-2xl shadow-xl border border-[#E5E6E8] overflow-hidden w-56">
                <img
                  src={courseThumb}
                  alt="Figma course"
                  className="w-full h-28 object-cover"
                />
                <div className="p-3">
                  <div className="text-[10px] text-[#82868E]">by puropport studio</div>
                  <div className="text-xs font-bold text-[#1A1C20] leading-snug mt-0.5 mb-2">Learn Figma from scratch</div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold bg-[#E7F6FF] text-[#003BE2] rounded-full px-2 py-0.5">Beginner</span>
                    <span className="text-xs font-black text-[#003BE2]">$25<span className="font-normal text-[#82868E] text-[10px]">/lifetime</span></span>
                  </div>
                  <div className="mt-2 text-[10px] text-[#82868E]">17 Lessons · 2 hrs 15 min</div>
                </div>
              </div>

              {/* Lemon spiral doodle — right of student, between student and progress card */}
              <img
                src={doodleSpiral}
                alt=""
                aria-hidden="true"
                className="absolute top-12 right-12 w-28 sm:w-36 object-contain select-none pointer-events-none z-40"
                style={{ filter: LEMON_FILTER, transform: 'rotate(-10deg)' }}
              />

              {/* Learning Progress card — top-right */}
              <div className="absolute top-0 right-0 z-30 bg-white rounded-2xl shadow-xl border border-[#E5E6E8] px-4 py-3 w-44">
                <div className="text-[10px] text-[#82868E] font-medium mb-1">Learning Progress</div>
                <div className="text-3xl font-black text-[#1A1C20] leading-none">55%</div>
                <div className="w-full h-2 rounded-full bg-[#F0F0F0] mt-2.5 overflow-hidden">
                  <div className="h-full rounded-full bg-[#CBFC01] w-[55%]" />
                </div>
              </div>

              {/* Male student cutout — overlapping the course card */}
              <img
                src={heroStudent}
                alt="Student learning with laptop"
                className="absolute bottom-0 left-20 z-20 w-72 sm:w-80 object-contain drop-shadow-2xl select-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* SHOWCASE 2: Course Creation & Monetization                        */}
      {/* ================================================================ */}
      <div className="relative bg-gradient-to-tl from-[#DFFFA0] via-[#F0F4FF] to-white py-20 sm:py-28 overflow-hidden">
        {/* Background radial glow */}
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#CBFC01] opacity-20 blur-[100px] pointer-events-none" />

        <div className="bytespace-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] items-center">

            {/* ---- Left: Floating Visual ---- */}
            <div className="lg:col-span-6 relative order-2 lg:order-1" style={{ minHeight: '520px' }}>

              {/* Total Revenue card */}
              <div className="absolute top-8 left-0 z-20 bg-[#003BE2] text-white rounded-2xl px-4 py-3 shadow-2xl min-w-[145px]">
                <div className="text-[10px] text-white/60 font-medium">Total Revenue</div>
                <div className="text-[10px] text-white/50 mb-1">July 1-28</div>
                <div className="text-xl font-black text-[#CBFC01]">$120.29</div>
              </div>

              {/* Year to Date card */}
              <div className="absolute top-36 left-0 z-20 bg-[#003BE2] text-white rounded-2xl px-4 py-3 shadow-2xl min-w-[155px]">
                <div className="text-[10px] text-white/60 font-medium">Year to Date</div>
                <div className="text-[10px] text-white/50 mb-1">2026</div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-extrabold">$1,200.38</span>
                  <span className="bg-[#CBFC01] text-[#172400] text-[9px] font-black px-1.5 py-0.5 rounded-full">+12%</span>
                </div>
              </div>

              {/* Lemon spiral doodle — overlapping student to the right */}
              <img
                src={doodleSpiral}
                alt=""
                aria-hidden="true"
                className="absolute top-16 right-8 w-32 sm:w-40 object-contain select-none pointer-events-none z-30"
                style={{ filter: LEMON_FILTER, transform: 'rotate(15deg)' }}
              />

              {/* Creator student — centered */}
              <img
                src={creatorStudent}
                alt="ByteSpace Creator"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-64 sm:w-72 object-contain drop-shadow-2xl select-none"
              />

              {/* Happy Students card — bottom right */}
              <div className="absolute bottom-4 right-0 z-20 bg-white rounded-2xl shadow-xl border border-[#E5E6E8] px-4 py-3">
                <div className="text-[11px] font-bold text-[#242528] mb-2">Happy Students</div>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="flex -space-x-1.5">
                    <img className="w-7 h-7 rounded-full ring-2 ring-white object-cover" src={avatar3} alt="" />
                    <img className="w-7 h-7 rounded-full ring-2 ring-white object-cover" src={avatar4} alt="" />
                    <img className="w-7 h-7 rounded-full ring-2 ring-white object-cover" src={avatar5} alt="" />
                  </div>
                  <span className="text-[11px] font-bold text-[#82868E]">2K+</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#F5A623] text-xs tracking-tight">★★★★★</span>
                  <span className="text-[11px] font-bold text-[#242528]">4.5</span>
                  <span className="text-[10px] text-[#82868E]">(440)</span>
                </div>
              </div>
            </div>

            {/* ---- Right: Text + Checklist ---- */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-[#1A1C20] tracking-tight leading-[1.1]">
                Create &amp; Manage Courses Easily.
              </h2>

              <p className="text-[#4A4D57] text-sm sm:text-[15px] leading-relaxed max-w-sm">
                ByteSpace supports individuals or entities in the creation, publication, and
                administration of educational courses.
              </p>

              <div className="space-y-4 pt-1">
                {[
                  'Share Your Expertise',
                  'Monetize Your Passion',
                  'Flexibility and Autonomy',
                  'Build a Community',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#003BE2] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-[#242528]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
