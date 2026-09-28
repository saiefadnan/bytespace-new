import React from 'react';
import { mockTestimonials } from '../../../data';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-[#FAFAFA] py-20 sm:py-28 border-b border-[#E5E6E8]">
      <div className="bytespace-container">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="inline-block bg-[#E7F6FF] text-[#003BE2] border border-[#B0DDFF] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            Real Reviews
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#242528] tracking-tight mb-3">
            What Our Students Say
          </h2>
          <p className="text-[#585A62] text-sm sm:text-base leading-relaxed">
            Real career transformations and feedback from students who transformed their portfolios with ByteSpace.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-[#E5E6E8] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-200"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-base">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#242528] text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#F5F5F6]">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#CED0D3]"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-[#242528]">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#82868E]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
