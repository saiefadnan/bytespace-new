const fs = require('fs');

const fileContent = `import React from 'react';
import heroStudent from '../../../assets/images/figma-hero-student.png';
import showcase1Doodle from '../../../assets/images/figma-showcase1-doodle.png';
import creatorStudent from '../../../assets/images/figma-creator-pattern58_1_1067.png';
import figmaCreatorDoodle from '../../../assets/images/figma-creator-pattern66_1_1067.png';
import courseThumb from '../../../assets/images/course-wireframing.jpg';
import avatar3 from '../../../assets/images/avatar-3.png';
import avatar4 from '../../../assets/images/avatar-4.png';
import avatar5 from '../../../assets/images/avatar-5.png';
import avatar6 from '../../../assets/images/avatar-6.png';
import avatar7 from '../../../assets/images/avatar-7.png';
import avatar8 from '../../../assets/images/avatar-8.png';
import avatar9 from '../../../assets/images/avatar-9.png';

// CSS filter to convert gray 3D doodle to vibrant lemon yellow (#CBFC01 / #D4FB20)
const LEMON_FILTER =
  'brightness(0) saturate(100%) invert(92%) sepia(90%) saturate(600%) hue-rotate(28deg) brightness(108%)';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="relative overflow-hidden bg-white">

      {/* ================================================================ */}
      {/* SHOWCASE 1: Professional Growth                                   */}
      {/* ================================================================ */}
      <div className="relative bg-white pt-16 sm:pt-24 pb-8 sm:pb-10 overflow-hidden">
        {/* Background radial glows directly extracted from Figma Home.svg */}
        {/* 1. Lemon Radial Glow (paint1_radial: cx=416.5, cy=3222.5, r=568.5, fill-opacity=0.4) */}
        <div
          className="absolute -top-36 left-4 sm:left-24 w-[700px] h-[700px] pointer-events-none select-none"
          style={{
            background: 'radial-gradient(circle, rgba(203,252,1,0.40) 0%, rgba(203,252,1,0.15) 53%, rgba(203,252,1,0.03) 75%, transparent 100%)',
            filter: 'blur(60px)',
          }}
        />

        {/* 2. Blue Radial Glow (paint3_radial: cx=1379.5, cy=3230.5, r=568.5, fill-opacity=0.08) */}
        <div
          className="absolute -top-32 -right-32 w-[700px] h-[700px] pointer-events-none select-none"
          style={{
            background: 'radial-gradient(circle, rgba(0,59,226,0.12) 0%, rgba(0,59,226,0.04) 53%, transparent 100%)',
            filter: 'blur(70px)',
          }}
        />

        <div className="bytespace-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] items-center">

            {/* ---- Left: Text + Stats ---- */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-display font-bold text-4xl sm:text-[44px] lg:text-[48px] text-[#242528] tracking-tight leading-[1.15]">
                Your Path to Professional<br className="hidden sm:inline" /> Growth Starts Here!
              </h2>

              <p className="text-[#4B4C53] text-sm sm:text-[15px] leading-relaxed max-w-sm">
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

            {/* ---- Right: Floating Visual Cluster (Exact Figma 577x552 Box) ---- */}
            <div className="lg:col-span-7 relative flex items-center justify-center min-h-[520px] sm:min-h-[552px] py-4">
              <div className="relative w-[577px] h-[552px] scale-[0.65] xs:scale-[0.78] sm:scale-[0.88] md:scale-95 lg:scale-100 origin-center select-none flex-shrink-0">

                {/* Course Card: x=0, y=0, w=372px, h=383px, rx=24px, z-10 (behind boy) */}
                <div className="absolute left-0 top-0 z-10 bg-white rounded-[24px] shadow-xl border border-[#CED0D3] p-4 w-[372px] h-[383px] flex flex-col justify-between">
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
                    <div className="text-xs text-[#82868E]">by purepearl studio</div>
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

                {/* Lime Zigzag Scribble Doodle: x=404, y=67, w=216, h=216, z-10 (behind boy shoulder) */}
                <img
                  src={showcase1Doodle}
                  alt=""
                  aria-hidden="true"
                  className="absolute left-[404px] top-[67px] w-[216px] h-[216px] object-contain select-none pointer-events-none z-10"
                  style={{ filter: LEMON_FILTER }}
                />

                {/* Boy Student Cutout: x=0, y=12, w=577px, h=540px, z-20 (IN FRONT OF course card & doodle) */}
                <img
                  src={heroStudent}
                  alt="Student learning"
                  className="absolute left-0 top-[12px] w-[577px] h-[540px] object-contain z-20 pointer-events-none drop-shadow-[15px_25px_35px_rgba(0,0,0,0.12)] select-none"
                />

                {/* Learning Progress Card: x=345, y=213, w=232, h=138, rx=16px, z-30 (in front of boy) */}
                <div className="absolute left-[345px] top-[213px] z-30 bg-white/95 backdrop-blur-md rounded-[16px] shadow-2xl border border-[#E5E6E8] p-4 w-[232px] h-[138px] flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] text-[#82868E] font-semibold">Learning Progress</div>
                    <div className="text-4xl font-bold text-[#1A1C20] tracking-tight mt-1">55%</div>
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
      </div>

      {/* ================================================================ */}
      {/* SHOWCASE 2: Course Creation & Monetization                        */}
      {/* ================================================================ */}
      <div className="relative bg-white pt-8 sm:pt-10 pb-16 sm:pb-24 overflow-hidden">
        {/* Background radial glows directly extracted from Figma Home.svg */}
        {/* 1. Top-Left Blue Glow (paint2_radial: cx=60.5, cy=3871.5, r=568.5, fill-opacity=0.16) */}
        <div
          className="absolute -top-32 -left-32 w-[700px] h-[700px] pointer-events-none select-none"
          style={{
            background: 'radial-gradient(circle, rgba(0,59,226,0.18) 0%, rgba(0,59,226,0.06) 53%, rgba(0,59,226,0.01) 75%, transparent 100%)',
            filter: 'blur(50px)',
          }}
        />

        {/* 2. Bottom-Left Lemon Glow (paint4_radial: cx=49, cy=4402, r=336, fill-opacity=0.6) */}
        <div
          className="absolute -bottom-24 -left-20 w-[550px] h-[550px] pointer-events-none select-none"
          style={{
            background: 'radial-gradient(circle, rgba(203,252,1,0.50) 0%, rgba(203,252,1,0.20) 53%, rgba(203,252,1,0.05) 75%, transparent 100%)',
            filter: 'blur(45px)',
          }}
        />

        {/* 3. Bottom-Right Blue Glow (paint0_radial: cx=1290.5, cy=4476.5, r=568.5, fill-opacity=0.24) */}
        <div
          className="absolute -bottom-36 -right-36 w-[700px] h-[700px] pointer-events-none select-none"
          style={{
            background: 'radial-gradient(circle, rgba(0,59,226,0.20) 0%, rgba(0,59,226,0.06) 53%, rgba(0,59,226,0.01) 75%, transparent 100%)',
            filter: 'blur(60px)',
          }}
        />

        <div className="bytespace-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] items-center">

            {/* ---- Left: Floating Visual Cluster (Exact Figma 541x596 Box) ---- */}
            <div className="lg:col-span-7 relative flex items-center justify-center min-h-[520px] sm:min-h-[596px] order-2 lg:order-1 py-4">
              <div className="relative w-[541px] h-[596px] scale-[0.68] xs:scale-[0.8] sm:scale-[0.9] md:scale-95 lg:scale-100 origin-center select-none flex-shrink-0">

                {/* Lime Zigzag Scribble Doodle: behind girl shoulder at z-10 */}
                <img
                  src={figmaCreatorDoodle}
                  alt=""
                  aria-hidden="true"
                  className="absolute left-[303px] top-[114px] w-[216px] h-[216px] object-contain select-none pointer-events-none z-10"
                  style={{ filter: LEMON_FILTER }}
                />

                {/* Total Revenue Card: behind girl face & headset at z-10 */}
                <div className="absolute left-0 top-[44px] z-10 bg-[#003BE2] text-white rounded-[16px] p-4 shadow-xl w-[232px] h-[119px] flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-white/80 font-medium">Total Revenue</div>
                    <div className="text-[10px] text-white/60">July 1-28</div>
                  </div>
                  <div className="text-2xl font-bold text-[#CBFC01] tracking-tight">$120.29</div>
                  <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden">
                    <div className="h-full rounded-full bg-[#D4FB20] w-[56%]" />
                  </div>
                </div>

                {/* Year to Date Card: behind girl vest & sleeve at z-10 */}
                <div className="absolute left-0 top-[194px] z-10 bg-[#003BE2] text-white rounded-[16px] p-3.5 shadow-xl w-[134px] h-[135px] flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-white/80 font-medium">Year to Date</div>
                    <div className="text-[10px] text-white/60">2023</div>
                  </div>
                  <div className="text-base font-bold text-white leading-tight">$1,200.38</div>
                  <div>
                    <span className="inline-flex items-center justify-center bg-[#CBFC01] text-[#172400] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                      +12%
                    </span>
                  </div>
                </div>

                {/* Creator Student Cutout: z-20 (IN FRONT OF blue cards and doodle, behind Happy Students) */}
                {/* Exact Figma matrix scale: 683px x 683px clipped inside 435px x 596px frame */}
                <div
                  className="absolute left-[28px] top-0 w-[435px] h-[596px] overflow-hidden z-20 pointer-events-none"
                  style={{
                    filter: 'drop-shadow(15px 25px 35px rgba(0, 0, 0, 0.12))',
                  }}
                >
                  <img
                    src={creatorStudent}
                    alt="ByteSpace Creator"
                    className="absolute left-[-124px] top-0 w-[683px] h-[683px] max-w-none select-none pointer-events-none object-cover"
                  />
                </div>

                {/* Happy Students Card: z-30 (IN FRONT OF girl tablet & hand) */}
                <div className="absolute left-[283px] top-[413px] z-30 bg-white/95 backdrop-blur-md rounded-[16px] shadow-2xl border border-[#E5E6E8] p-3.5 w-[258px] h-[123px] flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#242528]">Happy Students</div>
                    <div className="text-[11px] text-[#242528] font-bold flex items-center gap-1 mt-0.5">
                      <span>4.5</span>
                      <span className="text-[#82868E] font-normal">(240)</span>
                      <span className="text-amber-500">★</span>
                    </div>
                  </div>

                  <div className="flex items-center -space-x-1.5 pt-1">
                    <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src={avatar3} alt="" />
                    <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src={avatar4} alt="" />
                    <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src={avatar5} alt="" />
                    <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src={avatar6} alt="" />
                    <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src={avatar7} alt="" />
                    <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src={avatar8} alt="" />
                    <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src={avatar9} alt="" />
                    <div className="w-8 h-8 rounded-full ring-2 ring-white bg-[#D4FB20] text-[#172400] text-[9px] font-black flex items-center justify-center flex-shrink-0">
                      2K+
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ---- Right: Text + Checklist ---- */}
            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <h2 className="font-display font-bold text-4xl sm:text-[44px] lg:text-[48px] text-[#242528] tracking-tight leading-[1.15]">
                Create &amp; Manage<br className="hidden sm:inline" /> Courses Easily.
              </h2>

              <p className="text-sm sm:text-[15px] leading-relaxed max-w-md text-[#4B4C53]">
                <strong className="font-bold text-[#242528]">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
              </p>

              <div className="space-y-5 pt-2">
                {[
                  'Share Your Expertise',
                  'Monetize Your Passion',
                  'Flexibility and Autonomy',
                  'Build a Community',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-[#003BE2] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                      </svg>
                    </div>
                    <span className="text-[15px] font-medium text-[#242528]">{item}</span>
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
`;

fs.writeFileSync('src/features/landing/components/FeaturesSection.tsx', fileContent, 'utf8');
console.log('Successfully updated FeaturesSection.tsx with Showcase 1 fixes and gap reduction');
