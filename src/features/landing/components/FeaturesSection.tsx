import React from 'react';
import featureStudent from '../../../assets/images/feature-student.png';
import heroStudent from '../../../assets/images/hero-student.png';
import doodleTorus from '../../../assets/images/doodle-torus.png';

export const FeaturesSection: React.FC = () => {
  const valueProps1 = [
    {
      title: 'Industry-Standard Curriculum',
      description: 'Master practical skills through production-grade projects built with current industry tech stacks.',
    },
    {
      title: 'Direct 1-on-1 Mentor Guidance',
      description: 'Get code reviews, portfolio feedback, and interview preparation from staff-level practitioners.',
    },
    {
      title: 'Verified Certificate of Completion',
      description: 'Earn a recognized credential to showcase your demonstrated competence to recruiters.',
    },
  ];

  const valueProps2 = [
    {
      title: 'Hands-On Project Portfolio',
      description: 'Graduate with 5+ portfolio-ready case studies and apps that prove your abilities.',
      icon: '💼',
    },
    {
      title: 'Flexible Lifetime Access',
      description: 'Learn at your own pace with lifetime access to all lectures, templates, and community chats.',
      icon: '♾️',
    },
    {
      title: 'Collaborative Community',
      description: 'Connect with 25,000+ passionate creators, share feedback, and find accountability partners.',
      icon: '🌐',
    },
    {
      title: 'Hiring Network & Job Board',
      description: 'Direct access to hiring partners seeking talented junior and mid-level engineers and designers.',
      icon: '🚀',
    },
  ];

  return (
    <section id="features" className="bg-[#FAFAFA] py-20 sm:py-28 border-b border-[#E5E6E8] space-y-24">
      <div className="bytespace-container">
        {/* ========================================================= */}
        {/* SHOWCASE 1: Real Skills for Real World (Left Text, Right Visual) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headlines & Bullet Points */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block bg-[#E7F6FF] text-[#003BE2] border border-[#B0DDFF] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Real Skills, Real Career
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#242528] tracking-tight leading-tight">
              Designed for modern creators who learn by doing.
            </h2>

            <p className="text-[#585A62] text-sm sm:text-base leading-relaxed max-w-xl">
              Traditional education moves too slow for tech. ByteSpace bridges the gap between foundational theory and actual hiring requirements with mentor-led masterclasses.
            </p>

            {/* Checklist */}
            <div className="space-y-4 pt-2">
              {valueProps1.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#CBFC01] text-[#172400] flex items-center justify-center font-extrabold text-xs flex-shrink-0 mt-0.5 shadow-sm">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#242528]">{item.title}</h4>
                    <p className="text-xs text-[#585A62] mt-0.5">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Card with Student & Floating Progress Bar (Figma style) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative mx-auto w-full max-w-md bg-[#003BE2] rounded-3xl p-6 sm:p-8 text-white overflow-hidden shadow-2xl">
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2554FF] rounded-full blur-2xl opacity-50 pointer-events-none" />

              {/* Student Cutout */}
              <div className="pt-4 flex justify-center relative z-10">
                <img
                  src={featureStudent}
                  alt="Student learning on laptop"
                  className="w-56 sm:w-64 object-contain drop-shadow-2xl select-none"
                />
              </div>

              {/* Floating Progress Bar Card matching Figma rect y=3567 */}
              <div className="absolute bottom-5 left-4 right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 text-[#242528] shadow-2xl border border-white/40 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#242528]">Course Progress</span>
                  <span className="font-extrabold text-[#003BE2]">75% Complete</span>
                </div>
                {/* Progress bar with lime fill */}
                <div className="w-full h-2 rounded-full bg-[#F5F5F6] overflow-hidden">
                  <div className="h-full rounded-full bg-[#CBFC01] w-3/4" />
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#82868E] pt-1">
                  <span>UI/UX Masterclass</span>
                  <span>18 of 24 lessons</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SHOWCASE 2: Learn from Leaders (Left Visual, Right Text) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-16 border-t border-[#E5E6E8]">
          {/* Left Column: Visual with Headphones Student & Certified Badge */}
          <div className="lg:col-span-5 relative order-2 lg:order-1 flex justify-center">
            {/* 3D Floating Torus */}
            <img
              src={doodleTorus}
              alt=""
              aria-hidden="true"
              className="hidden sm:block absolute -top-8 -left-6 w-24 opacity-60 pointer-events-none select-none z-20"
            />

            <div className="relative mx-auto w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E6E8] shadow-2xl overflow-hidden">
              <div className="relative z-10 flex justify-center pt-2">
                <img
                  src={heroStudent}
                  alt="Student with headphones"
                  className="w-56 sm:w-64 object-contain drop-shadow-xl select-none"
                />
              </div>

              {/* Floating Royal Blue Badge matching Figma rect y=3908 w=232 h=119 fill=#003BE2 */}
              <div className="absolute bottom-5 left-4 right-4 z-20 bg-[#003BE2] text-white rounded-2xl p-4 shadow-2xl border border-white/20 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Certificate of Mastery</span>
                  <span className="bg-[#CBFC01] text-[#172400] text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                    Verified
                  </span>
                </div>
                <p className="text-[11px] text-white/80 leading-tight">
                  Cryptographically signed & recognized by top hiring partners worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Value Highlights */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div className="space-y-3">
              <span className="inline-block bg-[#E7F6FF] text-[#003BE2] border border-[#B0DDFF] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#242528] tracking-tight">
                High-Impact Learning Engineered for Rapid Career Growth
              </h2>
              <p className="text-[#585A62] text-sm sm:text-base leading-relaxed">
                Every curriculum module is vetted by hiring managers to ensure you build the exact skillsets companies compete for today.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {valueProps2.map((prop, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white border border-[#E5E6E8] hover:border-[#003BE2] hover:shadow-md transition-all space-y-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F5F5F6] flex items-center justify-center text-lg">
                    {prop.icon}
                  </div>
                  <h4 className="font-display font-bold text-sm text-[#242528]">
                    {prop.title}
                  </h4>
                  <p className="text-xs text-[#585A62] leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
