import React from 'react';
import featureStudent from '../../../assets/images/feature-student.png';

export const FeaturesSection: React.FC = () => {
  const valueProps = [
    {
      id: 'vp-1',
      title: 'Industry-Standard Curriculum',
      description: 'Courses updated continuously to match modern Silicon Valley engineering and product design standards.',
      icon: '⚡',
    },
    {
      id: 'vp-2',
      title: 'Direct 1-on-1 Mentor Guidance',
      description: 'Get code reviews, portfolio feedback, and interview preparation from staff-level practitioners.',
      icon: '🎯',
    },
    {
      id: 'vp-3',
      title: 'Project-First Mastery',
      description: 'No boring theory exams. Build real-world production web applications and Figma design libraries.',
      icon: '🛠️',
    },
    {
      id: 'vp-4',
      title: 'Verified Certificate of Completion',
      description: 'Earn a cryptographically verified credential to showcase your demonstrated competence on LinkedIn.',
      icon: '📜',
    },
  ];

  return (
    <section id="features" className="bg-white py-20 sm:py-28 border-b border-[#E5E6E8]">
      <div className="bytespace-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Feature Banner */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-[#003BE2] rounded-3xl p-6 sm:p-8 text-white overflow-hidden shadow-2xl">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2554FF] rounded-full blur-2xl opacity-50" />
              
              <div className="relative z-10 space-y-4">
                <span className="inline-block bg-[#CBFC01] text-[#172400] text-xs font-black uppercase px-3 py-1 rounded-full">
                  Real Skills, Real Career
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl leading-snug">
                  Designed for modern creators who learn by doing.
                </h3>

                {/* Cutout student */}
                <div className="pt-4 flex justify-center">
                  <img
                    src={featureStudent}
                    alt="Student with laptop"
                    className="w-48 sm:w-56 object-contain drop-shadow-xl"
                  />
                </div>
              </div>

              {/* Floating review card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 text-[#242528] shadow-lg border border-white/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FDFFE4] border border-[#CBFC01] flex items-center justify-center font-bold text-[#172400] text-sm">
                  98%
                </div>
                <div>
                  <div className="text-xs font-bold text-[#242528]">Course Completion Rate</div>
                  <div className="text-[11px] text-[#82868E]">Top 1% engagement among online academies</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Value Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="inline-block bg-[#E7F6FF] text-[#003BE2] border border-[#B0DDFF] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                Why ByteSpace
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#242528] tracking-tight">
                High-Impact Learning Engineered for Rapid Growth
              </h2>
              <p className="text-[#585A62] text-sm sm:text-base leading-relaxed">
                Traditional education moves too slow for tech. ByteSpace bridges the gap between foundational theory and actual hiring requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {valueProps.map((prop) => (
                <div
                  key={prop.id}
                  className="p-5 rounded-2xl bg-[#FAFAFA] border border-[#E5E6E8] hover:border-[#003BE2] transition-colors duration-200 space-y-2.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E6E8] shadow-sm flex items-center justify-center text-lg">
                    {prop.icon}
                  </div>
                  <h4 className="font-display font-bold text-base text-[#242528]">
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
