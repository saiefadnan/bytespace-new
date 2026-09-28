import React from 'react';
import { mockTestimonials } from '../../../data';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-[#FAFAFA] py-20 sm:py-28 border-b border-[#E5E6E8]">
      <div className="bytespace-container">
        {/* Section Header matching Figma */}
        <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
          <span className="inline-block bg-[#E7F6FF] text-[#003BE2] border border-[#B0DDFF] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Verified Reviews
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#242528] tracking-tight">
            What Our Students Think About Learning
          </h2>
          <p className="text-[#585A62] text-sm sm:text-base leading-relaxed">
            Real career transformations and feedback from students who transformed their careers with ByteSpace.
          </p>
        </div>

        {/* Testimonials Grid: 3 cards matching Figma 374px width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockTestimonials.map((t, idx) => (
            <div
              key={t.id || idx}
              className="bg-white border border-[#E5E6E8] rounded-3xl p-8 sm:p-9 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
            >
              <div className="space-y-4">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: t.rating || 5 }).map((_, i) => (
                    <span key={i} className="text-base">★</span>
                  ))}
                  <span className="ml-2 text-xs font-bold text-[#242528]">{t.rating}.0</span>
                </div>

                {/* Quote */}
                <p className="text-[#242528] text-sm sm:text-base leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-6 border-t border-[#F5F5F6] mt-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#CBFC01]"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-[#242528]">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#82868E]">{t.role}</p>
                  <p className="text-[11px] font-semibold text-[#003BE2]">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
