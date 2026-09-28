import React from 'react';
import avatar3 from '../../../assets/images/avatar-3.png';
import avatar4 from '../../../assets/images/avatar-4.png';
import avatar5 from '../../../assets/images/avatar-5.png';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Enthusiastic Learner',
      rating: 5,
      avatar: avatar3,
      quote:
        'Bytespace Courses has truly transformed my learning journey. The variety of courses and the quality of instructors are unmatched. I’ve gained practical skills that have already propelled my career forward.',
    },
    {
      name: 'James L.',
      role: 'Lifelong Learner',
      rating: 5,
      avatar: avatar4,
      quote:
        'I’ve tried various online learning platforms, but Bytespace Courses stands out. The interactive courses, engaging community, and practical projects make learning enjoyable and effective. Highly recommend!',
    },
    {
      name: 'Alex B.',
      role: 'Inspired Creator',
      rating: 5,
      avatar: avatar5,
      quote:
        'As a creator, Bytespace has provided me with an incredible platform to share my passion. The intuitive tools, dedicated support, and engaged students have made my teaching journey fulfilling and rewarding.',
    },
  ];

  return (
    <section id="testimonials" className="bg-[#FAFAFA] py-20 sm:py-28 border-b border-[#E5E6E8]">
      <div className="bytespace-container">
        {/* Section Header: Exact Figma Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-14">
          <div className="lg:col-span-6">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-[#242528] tracking-tight leading-[1.2]">
              Discover What Our Community <br />
              <span className="text-[#003BE2]">Is Saying</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[#585A62] text-sm sm:text-base leading-relaxed">
              At Bytespace Courses, we take pride in fostering a vibrant community of learners and creators. Here's a glimpse into the experiences of those who have embraced our platform.
            </p>
          </div>
        </div>

        {/* Testimonials Grid: 3 cards matching Figma 374px width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E6E8] rounded-3xl p-8 sm:p-9 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
            >
              <div className="space-y-4">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-base">★</span>
                  ))}
                  <span className="ml-2 text-xs font-bold text-[#242528]">{t.rating}.0</span>
                </div>

                {/* Quote */}
                <p className="text-[#242528] text-sm sm:text-base leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-6 border-t border-[#F5F5F6] mt-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#D4FB20]"
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
