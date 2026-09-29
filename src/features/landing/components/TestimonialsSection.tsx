import React from 'react';
import testimonial1 from '../../../assets/images/testimonial-1.png';
import testimonial2 from '../../../assets/images/testimonial-2.png';
import testimonial3 from '../../../assets/images/testimonial-3.png';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Enthusiastic Learner',
      avatar: testimonial1,
      quote:
        'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.',
    },
    {
      name: 'James L.',
      role: 'Lifelong Learner',
      avatar: testimonial2,
      quote:
        "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    },
    {
      name: 'Alex B.',
      role: 'Inspired Creator',
      avatar: testimonial3,
      quote:
        "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    },
  ];

  return (
    <section id="testimonials" className="relative bg-[#FAFAFA] py-24 sm:py-32 overflow-hidden border-b border-[#E5E6E8]">
      {/* ================================================================ */}
      {/* Background Radial Glows directly extracted from Figma Home.svg    */}
      {/* ================================================================ */}
      {/* 1. Top-Right Lemon Glow (paint5_radial: cx=1410.5, cy=327.5, r=568.5) */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none select-none -mr-48 -mt-24"
        style={{
          background: 'radial-gradient(circle, rgba(203,252,1,0.45) 0%, rgba(203,252,1,0.18) 45%, rgba(203,252,1,0.05) 70%, transparent 100%)',
          filter: 'blur(60px)',
        }}
      />

      {/* 2. Center Lemon Glow (paint6_radial: cx=731, cy=198, r=336) */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[500px] pointer-events-none select-none"
        style={{
          background: 'radial-gradient(circle, rgba(203,252,1,0.35) 0%, rgba(203,252,1,0.12) 50%, transparent 100%)',
          filter: 'blur(70px)',
        }}
      />

      {/* 3. Bottom-Left Blue Glow (paint7_radial: cx=126.5, cy=717.5, r=568.5) */}
      <div
        className="absolute bottom-0 left-0 w-[750px] h-[750px] pointer-events-none select-none -ml-48 -mb-24"
        style={{
          background: 'radial-gradient(circle, rgba(0,59,226,0.22) 0%, rgba(0,59,226,0.08) 50%, transparent 100%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="bytespace-container relative z-10">
        {/* Section Header: Exact Figma Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[40px] items-start mb-16">
          <div className="lg:col-span-6">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#1A1C20] tracking-tight leading-[1.15]">
              Discover What Our Community Is Saying
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[#585A62] text-sm sm:text-base leading-relaxed">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what
              we do. Hear directly from those who have experienced the transformative journey of
              learning and creating on our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonials Grid: 3 cards matching exact Figma specifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] items-stretch">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] p-8 sm:p-9 flex flex-col shadow-[0_4px_24px_rgba(0,0,0,0.05)] border border-[#CED0D3]/50 hover:shadow-xl transition-all duration-300"
            >
              {/* Avatar at TOP of card (w-18 h-18 / 72px) */}
              <div className="mb-5 flex-shrink-0">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-[72px] h-[72px] rounded-full object-cover shadow-sm ring-1 ring-black/5"
                />
              </div>

              {/* Name & Blue Role */}
              <div className="mb-4">
                <h3 className="font-display font-bold text-lg text-[#1A1C20] leading-snug">
                  {t.name}
                </h3>
                <p className="text-sm font-semibold text-[#003BE2] mt-0.5">
                  {t.role}
                </p>
              </div>

              {/* Quote Text */}
              <p className="text-[#585A62] text-sm sm:text-[15px] leading-relaxed">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
