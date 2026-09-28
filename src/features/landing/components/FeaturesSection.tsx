import React from 'react';
import featureStudent from '../../../assets/images/feature-student.png';
import creatorStudent from '../../../assets/images/feature-student-creator.png';
import avatar3 from '../../../assets/images/avatar-3.png';
import avatar4 from '../../../assets/images/avatar-4.png';
import avatar5 from '../../../assets/images/avatar-5.png';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="bg-[#FAFAFA] py-20 sm:py-28 border-b border-[#E5E6E8] space-y-24">
      <div className="bytespace-container">
        {/* ========================================================= */}
        {/* SHOWCASE 1: Professional Growth (Left Text, Right Visual) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headlines & Metrics */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block bg-[#E7F6FF] text-[#003BE2] border border-[#B0DDFF] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              About ByteSpace
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-[#242528] tracking-tight leading-[1.2]">
              Your Path to Professional <br />
              <span className="text-[#003BE2]">Growth Starts Here!</span>
            </h2>

            <p className="text-[#585A62] text-sm sm:text-base leading-relaxed max-w-xl">
              At Bytespace, we believe in empowering individuals through knowledge. Our mission is to bridge the gap between passion and profession by offering a rich catalog of high-impact courses led by industry veterans.
            </p>

            {/* 3 Metric Counters from Figma */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#E5E6E8] max-w-lg">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#003BE2] font-display">
                  12K+
                </div>
                <div className="text-xs text-[#82868E] mt-1 font-medium">Students Enrolled</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#003BE2] font-display">
                  70+
                </div>
                <div className="text-xs text-[#82868E] mt-1 font-medium">Verified Courses</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#003BE2] font-display">
                  16+
                </div>
                <div className="text-xs text-[#82868E] mt-1 font-medium">Expert Creators</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Card with Student Cutout & Floating Progress Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative mx-auto w-full max-w-md bg-[#003BE2] rounded-3xl p-6 sm:p-8 text-white overflow-visible shadow-2xl">
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2554FF] rounded-full blur-2xl opacity-50 pointer-events-none" />

              {/* Student Cutout */}
              <div className="pt-4 flex justify-center relative z-10">
                <img
                  src={featureStudent}
                  alt="Student with laptop"
                  className="w-60 sm:w-72 object-contain drop-shadow-2xl select-none"
                />
              </div>

              {/* Floating Progress Bar Card matching Figma */}
              <div className="absolute -bottom-6 left-4 right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-5 text-[#242528] shadow-2xl border border-white/60 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span>Learning Progress</span>
                  <span className="text-[#003BE2] font-extrabold">55% Complete</span>
                </div>
                {/* Progress bar with lime fill */}
                <div className="w-full h-2.5 rounded-full bg-[#F5F5F6] overflow-hidden">
                  <div className="h-full rounded-full bg-[#D4FB20] w-[55%]" />
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#82868E] pt-1">
                  <span>Fullstack Web Development</span>
                  <span>14 of 28 Modules</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SHOWCASE 2: Course Creation & Monetization (Left Visual, Right Text) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-16 border-t border-[#E5E6E8]">
          {/* Left Column: Visual with Creator Student & Floating Revenue Badges */}
          <div className="lg:col-span-5 relative order-2 lg:order-1 flex justify-center">
            <div className="relative mx-auto w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E6E8] shadow-2xl overflow-visible">
              <div className="relative z-10 flex justify-center pt-2">
                <img
                  src={creatorStudent}
                  alt="ByteSpace Creator"
                  className="w-60 sm:w-72 object-contain drop-shadow-xl select-none"
                />
              </div>

              {/* Floating Revenue Card 1 (Top-Left): Total Revenue */}
              <div className="absolute top-6 -left-6 sm:-left-10 z-20 bg-[#003BE2] text-white rounded-2xl px-4 py-3 shadow-2xl border border-white/20">
                <div className="text-[10px] text-white/80 font-medium">Total Revenue (July 1-28)</div>
                <div className="text-lg font-black text-[#D4FB20]">$120.29</div>
              </div>

              {/* Floating Revenue Card 2 (Bottom-Right): Year to Date */}
              <div className="absolute bottom-6 -right-6 sm:-right-8 z-20 bg-[#003BE2] text-white rounded-2xl px-4 py-3 shadow-2xl border border-white/20 flex items-center gap-3">
                <div>
                  <div className="text-[10px] text-white/80 font-medium">Year to Date (2026)</div>
                  <div className="text-base font-extrabold text-white">$1,200.38</div>
                </div>
                <span className="bg-[#D4FB20] text-[#172400] text-[10px] font-black px-2 py-0.5 rounded-full">
                  +12%
                </span>
              </div>

              {/* Floating Card 3 (Bottom-Left): Community Avatars */}
              <div className="absolute -bottom-5 left-4 z-20 bg-white/95 backdrop-blur-md px-3 py-2 rounded-2xl border border-white/60 shadow-xl flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  <img className="w-6 h-6 rounded-full ring-2 ring-white object-cover" src={avatar3} alt="" />
                  <img className="w-6 h-6 rounded-full ring-2 ring-white object-cover" src={avatar4} alt="" />
                  <img className="w-6 h-6 rounded-full ring-2 ring-white object-cover" src={avatar5} alt="" />
                </div>
                <span className="text-[10px] font-bold text-[#242528]">2.4k Students</span>
              </div>
            </div>
          </div>

          {/* Right Column: Checklist for Creators */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <span className="inline-block bg-[#E7F6FF] text-[#003BE2] border border-[#B0DDFF] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              For Creators
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-[#242528] tracking-tight leading-[1.2]">
              Create & Manage <br />
              <span className="text-[#003BE2]">Courses Easily.</span>
            </h2>

            <p className="text-[#585A62] text-sm sm:text-base leading-relaxed">
              Empower learners across the globe while monetizing your hard-earned knowledge. ByteSpace provides the hosting, payment rails, and marketing engine so you can focus on teaching.
            </p>

            <div className="space-y-4 pt-2">
              {[
                {
                  title: 'Share Your Expertise',
                  desc: 'Publish high-resolution video modules, downloadable worksheets, and coding assignments.',
                },
                {
                  title: 'Monetize Your Passion',
                  desc: 'Earn recurring subscription royalties and direct course sales deposited right to your bank.',
                },
                {
                  title: 'Flexibility and Autonomy',
                  desc: 'Maintain 100% intellectual property ownership. Update curriculum anytime you want.',
                },
                {
                  title: 'Build a Global Community',
                  desc: 'Engage with students via lesson discussions, live Q&A sessions, and cohort meetups.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#D4FB20] text-[#172400] flex items-center justify-center font-extrabold text-xs flex-shrink-0 mt-0.5 shadow-sm">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#242528]">{item.title}</h4>
                    <p className="text-xs text-[#585A62] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
