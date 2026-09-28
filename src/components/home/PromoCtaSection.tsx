import React from 'react';
import { Button } from '../common/Button';
import doodleSpring from '../../assets/images/doodle-spring-2.png';

export interface PromoCtaSectionProps {
  onCtaClick?: () => void;
}

export const PromoCtaSection: React.FC<PromoCtaSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="bytespace-container">
        <div className="relative bg-[#003BE2] rounded-[32px] p-8 sm:p-14 text-white overflow-hidden shadow-2xl">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#CBFC01]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2554FF]/40 rounded-full blur-2xl pointer-events-none" />

          {/* Floating 3D Doodle */}
          <img
            src={doodleSpring}
            alt="3D Spiral"
            className="hidden sm:block absolute right-8 -bottom-6 w-32 h-32 object-contain opacity-90 pointer-events-none transform rotate-12"
          />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-block bg-[#CBFC01] text-[#172400] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
              Join 50k+ Learners
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-4">
              Start Your Learning Journey Today with <span className="text-[#CBFC01]">ByteSpace</span>
            </h2>

            <p className="text-white/85 text-base sm:text-lg mb-8 leading-relaxed">
              Unlock industry-tested curriculums, practical real-world capstones, and lifelong community mentorship.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="lime"
                size="lg"
                onClick={onCtaClick}
                className="px-8 py-3.5 font-bold shadow-xl"
              >
                Join Now for Free
              </Button>
              <a
                href="#courses"
                className="text-white/90 hover:text-white font-semibold text-sm px-6 py-3.5 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all"
              >
                Explore Course Catalog
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
