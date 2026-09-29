import React from 'react';
import heroStudent from '../../../assets/images/figma-hero-student.png';
import creatorStudent from '../../../assets/images/feature-student.png';
import courseThumb from '../../../assets/images/course-wireframing.jpg';
import avatar3 from '../../../assets/images/avatar-3.png';
import avatar4 from '../../../assets/images/avatar-4.png';
import avatar5 from '../../../assets/images/avatar-5.png';
import avatar6 from '../../../assets/images/avatar-6.png';
import avatar7 from '../../../assets/images/avatar-7.png';
import avatar8 from '../../../assets/images/avatar-8.png';
import avatar9 from '../../../assets/images/avatar-9.png';
import doodleSpiral from '../../../assets/images/hero-doodle-lime-spiral.png';

// CSS filter to convert gray 3D doodle to vibrant lemon yellow (#CBFC01 / #D4FB20)
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
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-[#1A1C20] tracking-tight leading-[1.1]">
                Your Path to Professional Growth Starts Here!
              </h2>

              <p className="text-[#4A4D57] text-sm sm:text-[15px] leading-relaxed max-w-sm">
                Explore our curated selection of courses tailored to enhance your capabilities and
                accelerate your career journey. Whether you are looking to sharpen specific skills,
                gain industry expertise, or embark on a new career path entirely, we have the
                resources you need.
              </p>

              {/* Stats row with blue numbers matching Figma */}
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-[#003BE2] font-display">12K</div>
                  <div className="text-xs text-[#82868E] mt-1 font-medium">Students</div>
                </div>
                <div className="w-px h-12 bg-[#CED0D3]" />
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-[#003BE2] font-display">70+</div>
                  <div className="text-xs text-[#82868E] mt-1 font-medium">Courses</div>
                </div>
                <div className="w-px h-12 bg-[#CED0D3]" />
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-[#003BE2] font-display">16</div>
                  <div className="text-xs text-[#82868E] mt-1 font-medium">Creators</div>
                </div>
              </div>
            </div>

            {/* ---- Right: Floating Visual (Exact Figma Dimensions: 577x540 visual box) ---- */}
            <div className="lg:col-span-7 relative flex items-center justify-center min-h-[540px]">

              {/* Course Card: w=372px, h=383px, rx=24px */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-[24px] shadow-2xl border border-[#CED0D3] p-4 w-[372px] h-[383px] flex flex-col justify-between hidden sm:flex">
                <div className="relative w-full h-[195px] rounded-[12px] overflow-hidden bg-[#F5F5F6]">
                  <img
                    src={courseThumb}
                    alt="Course Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#E7F6FF] text-[#003BE2] text-[11px] font-bold px-3 py-1 rounded-full">
                    17 Lessons
                  </div>
                  <div className="absolute top-3 right-3 bg-black/40 text-white text-[11px] font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                    2 hours 16 mins
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-xs text-[#82868E]">by puropport studio</div>
                  <div className="text-base font-bold text-[#1A1C20] leading-snug mt-0.5 mb-2">
                    Learn Figma from scratch
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-semibold bg-[#F6F6F6] text-[#4B4C53] rounded-full px-2.5 py-0.5">
                      Beginner
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#F5F5F6]">
                    <div className="flex items-center -space-x-1.5">
                      <img className="w-7 h-7 rounded-full ring-2 ring-white object-cover" src={avatar3} alt="" />
                      <img className="w-7 h-7 rounded-full ring-2 ring-white object-cover" src={avatar4} alt="" />
                      <img className="w-7 h-7 rounded-full ring-2 ring-white object-cover" src={avatar5} alt="" />
                      <div className="w-7 h-7 rounded-full ring-2 ring-white bg-[#003BE2] text-white text-[9px] font-black flex items-center justify-center">
                        +12K
                      </div>
                    </div>
                    <span className="text-sm font-black text-[#003BE2]">
                      $25<span className="font-normal text-[#82868E] text-[11px]">/lifetime</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Lemon Spiral Doodle: w=216px, h=216px, behind top-right of student */}
              <img
                src={doodleSpiral}
                alt=""
                aria-hidden="true"
                className="absolute top-4 right-16 w-[216px] h-[216px] object-contain select-none pointer-events-none z-10"
                style={{ filter: LEMON_FILTER, transform: 'rotate(-8deg)' }}
              />

              {/* Authentic Student Cutout: w=577px, h=540px */}
              <img
                src={heroStudent}
                alt="Student learning"
                className="relative z-20 w-[480px] sm:w-[577px] h-auto max-h-[540px] object-contain drop-shadow-2xl select-none translate-x-4 sm:translate-x-12"
              />

              {/* Learning Progress Card: w=232px, h=138px, rx=16px */}
              <div className="absolute top-16 right-0 z-30 bg-white/95 backdrop-blur-md rounded-[16px] shadow-2xl border border-[#E5E6E8] p-4 w-[232px] h-[138px] flex flex-col justify-between">
                <div>
                  <div className="text-[11px] text-[#82868E] font-semibold">Learning Progress</div>
                  <div className="text-4xl font-extrabold text-[#1A1C20] tracking-tight mt-1">55%</div>
                </div>
                <div>
                  <div className="w-[200px] h-[8px] rounded-full bg-[#F6F6F6] overflow-hidden">
                    <div className="h-full rounded-full bg-[#D4FB20] w-[56%]" />
                  </div>
                </div>
              </div>

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

            {/* ---- Left: Floating Visual (Creator student + 3 cards) ---- */}
            <div className="lg:col-span-7 relative flex items-center justify-center min-h-[580px] order-2 lg:order-1">

              {/* Total Revenue Card: w=232px, h=119px, rx=16px, bg=#003BE2 */}
              <div className="absolute top-8 left-0 sm:left-4 z-20 bg-[#003BE2] text-white rounded-[16px] p-4 shadow-2xl w-[232px] h-[119px] flex flex-col justify-between">
                <div>
                  <div className="text-xs text-white/70 font-medium">Total Revenue</div>
                  <div className="text-[10px] text-white/50">July 1-28</div>
                </div>
                <div className="text-2xl font-black text-[#CBFC01]">$120.29</div>
                <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden">
                  <div className="h-full rounded-full bg-[#CBFC01] w-[56%]" />
                </div>
              </div>

              {/* Year to Date Card: w=134px, h=135px, rx=16px, bg=#003BE2 */}
              <div className="absolute top-44 left-0 sm:left-4 z-20 bg-[#003BE2] text-white rounded-[16px] p-4 shadow-2xl w-[134px] h-[135px] flex flex-col justify-between">
                <div>
                  <div className="text-xs text-white/70 font-medium">Year to Date</div>
                  <div className="text-[10px] text-white/50">2026</div>
                </div>
                <div className="text-base font-extrabold text-white leading-tight">$1,200.38</div>
                <div>
                  <span className="inline-block bg-[#CBFC01] text-[#172400] text-[11px] font-black px-2 py-0.5 rounded-full">
                    +12%
                  </span>
                </div>
              </div>

              {/* Lemon Spiral Doodle: w=216px, h=216px, to right of creator student */}
              <img
                src={doodleSpiral}
                alt=""
                aria-hidden="true"
                className="absolute top-12 right-12 sm:right-24 w-[216px] h-[216px] object-contain select-none pointer-events-none z-10"
                style={{ filter: LEMON_FILTER, transform: 'rotate(12deg)' }}
              />

              {/* Creator Student Cutout: w=435px, h=596px */}
              <img
                src={creatorStudent}
                alt="ByteSpace Creator"
                className="relative z-20 w-[340px] sm:w-[435px] h-auto max-h-[596px] object-contain drop-shadow-2xl select-none"
              />

              {/* Happy Students Card: w=258px, h=123px, rx=16px, bg=white */}
              <div className="absolute bottom-2 right-4 sm:right-16 z-30 bg-white/95 backdrop-blur-md rounded-[16px] shadow-2xl border border-[#E5E6E8] p-4 w-[258px] h-[123px] flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#242528]">Happy Students</span>
                  <span className="text-xs text-amber-500 font-extrabold flex items-center gap-0.5">
                    4.5 <span className="text-[#82868E] font-normal">(240)</span> ★
                  </span>
                </div>

                <div className="flex items-center -space-x-2">
                  <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src={avatar3} alt="" />
                  <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src={avatar4} alt="" />
                  <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src={avatar5} alt="" />
                  <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src={avatar6} alt="" />
                  <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src={avatar7} alt="" />
                  <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src={avatar8} alt="" />
                  <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src={avatar9} alt="" />
                  <div className="w-8 h-8 rounded-full ring-2 ring-white bg-[#D4FB20] text-[#172400] text-[9px] font-black flex items-center justify-center">
                    2K+
                  </div>
                </div>
              </div>

            </div>

            {/* ---- Right: Text + Checklist ---- */}
            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-[#1A1C20] tracking-tight leading-[1.1]">
                Create &amp; Manage Courses Easily.
              </h2>

              <p className="text-[#4A4D57] text-sm sm:text-[15px] leading-relaxed max-w-sm">
                ByteSpace supports individuals or entities in the creation, publication, and
                administration of educational courses.
              </p>

              <div className="space-y-4 pt-2">
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
