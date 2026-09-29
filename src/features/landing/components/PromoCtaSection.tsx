import React from 'react';
import doodleZigzagTopLeft from '../../../assets/images/promo-pattern72_1_1067.png';
import doodleSpringTopLeft from '../../../assets/images/hero-doodle-spring-left.png';
import doodleConeMidLeft from '../../../assets/images/promo-pattern76_1_1067.png';
import doodleTorusBottomLeft from '../../../assets/images/promo-pattern78_1_1067.png';
import doodlePyramidTopRight from '../../../assets/images/promo-pattern68_1_1067.png';
import doodleCylinderTopRight from '../../../assets/images/promo-pattern80_1_1067.png';
import doodleSpiralBottomRight from '../../../assets/images/promo-pattern70_1_1067.png';

// CSS filter to convert gray 3D doodle to vivid lemon-yellow (#CBFC01 / #D4FB20)
const LEMON_FILTER =
  'brightness(0) saturate(100%) invert(92%) sepia(90%) saturate(600%) hue-rotate(28deg) brightness(108%)';

// Filter to make 3D object pure bright white matching Figma
const WHITE_FILTER = 'brightness(1.9) contrast(1.05)';

export interface PromoCtaSectionProps {
  onCtaClick?: () => void;
}

export const PromoCtaSection: React.FC<PromoCtaSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-[#003BE2] text-white py-24 sm:py-28 overflow-hidden min-h-[488px] flex items-center justify-center">
      {/* 1. Exact 120px Linear Background Grid from Figma */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.14] z-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, #FFFFFF 1.5px, transparent 1.5px), linear-gradient(to bottom, #FFFFFF 1.5px, transparent 1.5px)',
          backgroundSize: '120px 120px',
        }}
      />

      {/* ================================================================ */}
      {/* 2. Floating 3D Doodles (Exact Figma Positions, Shapes & Colors)  */}
      {/* ================================================================ */}

      {/* 1. Top-Left: Lemon Zigzag Scribble (x: -121.6, y: -162, w: 386.8) */}
      <img
        src={doodleZigzagTopLeft}
        alt=""
        aria-hidden="true"
        className="absolute -left-16 sm:-left-24 lg:-left-[100px] -top-16 sm:-top-20 lg:-top-[110px] w-48 sm:w-64 lg:w-[320px] select-none pointer-events-none z-10 drop-shadow-xl"
        style={{ filter: LEMON_FILTER }}
      />

      {/* 2. Top-Left-Center: Pure White 3D Spring (x: 141, y: 5, w: 180) */}
      <img
        src={doodleSpringTopLeft}
        alt=""
        aria-hidden="true"
        className="absolute left-24 sm:left-36 lg:left-[170px] top-4 sm:top-6 lg:top-[30px] w-20 sm:w-24 lg:w-[130px] select-none pointer-events-none z-10 drop-shadow-xl"
        style={{ filter: WHITE_FILTER }}
      />

      {/* 3. Mid-Left: Pure White 3D Cone (x: -50, y: 224.6, w: 189) */}
      <img
        src={doodleConeMidLeft}
        alt=""
        aria-hidden="true"
        className="absolute -left-8 sm:-left-6 lg:-left-[30px] top-[220px] sm:top-[230px] lg:top-[240px] w-24 sm:w-32 lg:w-[155px] select-none pointer-events-none z-10 drop-shadow-xl"
        style={{ filter: WHITE_FILTER }}
      />

      {/* 4. Bottom-Left: Lemon Torus Ring (x: 16.4, y: 298.3, w: 343.7) */}
      <img
        src={doodleTorusBottomLeft}
        alt=""
        aria-hidden="true"
        className="absolute left-4 sm:left-10 lg:left-[50px] -bottom-16 sm:-bottom-20 lg:-bottom-[80px] w-52 sm:w-64 lg:w-[300px] select-none pointer-events-none z-10 drop-shadow-2xl"
        style={{ filter: LEMON_FILTER }}
      />

      {/* 5. Top-Right: Lemon 3D Pyramid (x: 1078, y: -0.4, w: 188.9) */}
      <img
        src={doodlePyramidTopRight}
        alt=""
        aria-hidden="true"
        className="absolute right-32 sm:right-48 lg:right-[260px] top-2 sm:top-4 lg:top-[20px] w-24 sm:w-32 lg:w-[160px] select-none pointer-events-none z-10 drop-shadow-xl"
        style={{ filter: LEMON_FILTER }}
      />

      {/* 6. Top-Far-Right: Pure White 3D Cylinder / Pillow (x: 1222.1, y: 5.2, w: 371.8) */}
      <img
        src={doodleCylinderTopRight}
        alt=""
        aria-hidden="true"
        className="absolute -right-12 sm:-right-16 lg:-right-[60px] -top-8 sm:-top-10 lg:-top-[40px] w-48 sm:w-64 lg:w-[310px] select-none pointer-events-none z-10 drop-shadow-2xl"
        style={{ filter: WHITE_FILTER }}
      />

      {/* 7. Bottom-Right: Lemon 3D Spiral Doodle (x: 1106.9, y: 289, w: 331.5) */}
      <img
        src={doodleSpiralBottomRight}
        alt=""
        aria-hidden="true"
        className="absolute right-4 sm:right-12 lg:right-[70px] -bottom-12 sm:-bottom-16 lg:-bottom-[60px] w-44 sm:w-56 lg:w-[280px] select-none pointer-events-none z-10 drop-shadow-xl"
        style={{ filter: LEMON_FILTER }}
      />

      {/* ================================================================ */}
      {/* 3. Center Content (Headline, Subtitle, CTA Button)              */}
      {/* ================================================================ */}
      <div className="bytespace-container relative z-20 text-center max-w-3xl mx-auto flex flex-col items-center">
        {/* Main Headline: Both lines Pure White matching Figma */}
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[46px] text-white tracking-tight leading-[1.18] max-w-2xl mx-auto">
          Unlock Your Potential as a <br />
          Creator with ByteSpace
        </h2>

        {/* Subtitle: Exact Figma copy */}
        <p className="mt-5 text-white/90 text-xs sm:text-sm lg:text-[14px] max-w-2xl mx-auto leading-relaxed font-normal">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>

        {/* CTA Button: Exact Figma 172x46px pill */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={onCtaClick}
            className="w-[172px] h-[46px] rounded-full bg-[#D4FB20] text-[#172400] hover:bg-[#CBFC01] transition-all font-bold text-sm shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center active:scale-95"
          >
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  );
};
