import React from 'react';
import featureStudent from '../../assets/images/feature-student.png';
import doodleTorus from '../../assets/images/doodle-torus.png';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: '1-on-1 Code Reviews & Mentorship',
      desc: 'Get personalized feedback from staff engineers and design leads at top tech companies.',
      icon: (
        <svg className="w-5 h-5 text-[#003BE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: 'Portfolio-Ready Real Projects',
      desc: 'Build scalable applications and Figma design systems that stand out on your resume.',
      icon: (
        <svg className="w-5 h-5 text-[#003BE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Verified Industry Certificates',
      desc: 'Earn shareable credentials verified on LinkedIn and trusted by recruiters worldwide.',
      icon: (
        <svg className="w-5 h-5 text-[#003BE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: 'Lifelong Community & Career Network',
      desc: 'Collaborate with over 50,000 active students, attend weekly AMAs, and access hiring boards.',
      icon: (
        <svg className="w-5 h-5 text-[#003BE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="bg-white py-20 sm:py-28 overflow-hidden">
      <div className="bytespace-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual with Student & 3D Torus */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[420px]">
              {/* Organic Background Surface */}
              <div className="absolute inset-0 bg-[#003BE2] rounded-[36px] -rotate-3 -z-20" />
              <div className="absolute inset-0 bg-[#D4FB20] rounded-[36px] rotate-2 -z-10" />

              {/* 3D Torus Floating Doodle */}
              <img
                src={doodleTorus}
                alt="3D Ring"
                className="absolute -top-10 -right-8 w-24 h-24 object-contain animate-spin z-20 pointer-events-none drop-shadow-xl"
                style={{ animationDuration: '20s' }}
              />

              {/* Student Image */}
              <div className="overflow-hidden rounded-[32px] bg-white">
                <img
                  src={featureStudent}
                  alt="Student with headset"
                  className="w-full h-auto object-cover transform translate-y-2"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -left-6 -bottom-6 z-30 bg-[#242528] text-white p-4 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#CBFC01] text-[#172400] flex items-center justify-center font-extrabold text-base">
                  ✓
                </div>
                <div>
                  <div className="font-display font-extrabold text-base text-[#CBFC01]">98% Success</div>
                  <div className="text-xs text-white/70">Career Outcome Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block bg-[#FDFFE4] text-[#465A0D] border border-[#FAFFC5] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              Why Choose ByteSpace
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#242528] tracking-tight leading-tight">
              Real Skills for Real-world Jobs
            </h2>

            <p className="text-[#585A62] text-base leading-relaxed">
              We eliminate outdated theory. Our curriculum is reverse-engineered from current job market requirements, ensuring you graduate job-ready from day one.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="p-5 rounded-2xl bg-[#FAFAFA] border border-[#E5E6E8] hover:border-[#003BE2] hover:bg-white hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E7F6FF] flex items-center justify-center mb-3">
                    {f.icon}
                  </div>
                  <h3 className="font-display font-bold text-sm text-[#242528] mb-1.5">
                    {f.title}
                  </h3>
                  <p className="text-xs text-[#585A62] leading-relaxed">
                    {f.desc}
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
