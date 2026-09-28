import React from 'react';
import { mockTestimonials } from '../../data';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-[#FAFAFA] py-20 sm:py-28 border-y border-[#E5E6E8]">
      <div className="bytespace-container">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="inline-block bg-[#E7F6FF] text-[#003BE2] border border-[#B0DDFF] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            Real Stories
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#242528] tracking-tight mb-3">
            Students Who Learned with Us
          </h2>
          <p className="text-[#585A62] text-sm sm:text-base leading-relaxed">
            See how ByteSpace alumni transitioned into leading engineering and design roles worldwide.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-[#E5E6E8] rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg hover:border-[#003BE2]/30 transition-all duration-200"
            >
              {/* Star Rating & Quote */}
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3 text-sm">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <blockquote className="text-sm text-[#4B4C53] leading-relaxed mb-6 italic">
                  "{t.quote}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#F5F5F6] flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#E5E6E8]"
                />
                <div className="text-xs">
                  <div className="font-bold text-[#242528]">{t.name}</div>
                  <div className="text-[#82868E]">
                    {t.role} at <span className="font-medium text-[#003BE2]">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
