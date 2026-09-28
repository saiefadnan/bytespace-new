import React from 'react';
import doodleShape from '../../../assets/images/doodle-shape-2.png';
import doodleSpring from '../../../assets/images/doodle-spring-2.png';
import doodleShape3 from '../../../assets/images/doodle-shape-3.png';

export interface PromoCtaSectionProps {
  onCtaClick?: () => void;
}

export const PromoCtaSection: React.FC<PromoCtaSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-[#003BE2] text-white py-20 sm:py-24 overflow-hidden">
      {/* Decorative 3D Doodles from Figma */}
      <img
        src={doodleSpring}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute -left-12 top-10 w-44 lg:w-56 opacity-85 select-none pointer-events-none"
      />
      <img
        src={doodleShape}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute -right-12 bottom-6 w-48 lg:w-60 opacity-85 select-none pointer-events-none"
      />
      <img
        src={doodleShape3}
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute right-1/4 -top-12 w-32 opacity-40 select-none pointer-events-none"
      />

      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#2554FF]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="bytespace-container relative z-10 text-center max-w-3xl mx-auto space-y-6">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[3.25rem] tracking-tight leading-[1.15]">
          Unlock Your Potential as a <br />
          <span className="text-[#D4FB20]">Creator with ByteSpace</span>
        </h2>

        <p className="text-white/85 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Experience the collaboration of numerous creators and an expanding selection of courses. Join us in shaping a thriving learning space.
        </p>

        <div className="pt-4 flex justify-center">
          <button
            type="button"
            onClick={onCtaClick}
            className="bg-[#D4FB20] text-[#172400] hover:bg-[#CBFC01] transition-all px-9 py-4 rounded-full font-bold text-sm md:text-base shadow-xl hover:shadow-2xl cursor-pointer active:scale-95"
          >
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  );
};
