const fs = require('fs');

const fileContent = `import React from 'react';
import doodleZigzagTopLeft from '../../../assets/images/figma-hero-doodle-zigzag-left.png';
import doodleSpringTopLeft from '../../../assets/images/figma-hero-doodle-zigzag-left.png';
import doodleConeMidLeft from '../../../assets/images/promo-pattern76_1_1067.png';
import doodleTorusBottomLeft from '../../../assets/images/figma-hero-doodle-torus-left.png';
import doodlePyramidTopRight from '../../../assets/images/figma-hero-doodle-pyramid-right.png';
import doodleCylinderTopRight from '../../../assets/images/figma-hero-doodle-cylinder-right.png';
import doodleSpiralBottomRight from '../../../assets/images/figma-hero-doodle-spring-right.png';

// CSS filter to convert gray 3D doodle to vivid electric lemon (#D4FB20 / #CBFC01)
const LEMON_FILTER =
  'brightness(0) saturate(100%) invert(92%) sepia(90%) saturate(600%) hue-rotate(28deg) brightness(108%)';

// Filter for crisp clean pure white 3D objects matching Figma
const WHITE_DOODLE_FILTER = 'brightness(1.55) contrast(1.1) drop-shadow(0 15px 25px rgba(0,0,0,0.18))';
const LEMON_DOODLE_FILTER = \`\${LEMON_FILTER} drop-shadow(0 20px 30px rgba(0,0,0,0.18))\`;

export interface PromoCtaSectionProps {
  onCtaClick?: () => void;
}

export const PromoCtaSection: React.FC<PromoCtaSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-[#003BE2] text-white py-20 sm:py-24 overflow-hidden min-h-[488px] flex items-center justify-center">
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
      {/* 2. Centered 1440px Floating Doodles Stage (Exact Figma Vectors)  */}
      {/* Anchored to center (left-1/2 -translate-x-1/2 w-[1440px]) so doodles never drift away on wide screens */}
      {/* ================================================================ */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-full pointer-events-none z-10 select-none">
        {/* 1. Top-Left: Lemon Zigzag Scribble (x: -121.6, y: -162, w: 386.8) */}
        <img
          src={doodleZigzagTopLeft}
          alt=""
          aria-hidden="true"
          className="absolute left-[-122px] top-[-162px] w-[387px] h-[387px] object-contain pointer-events-none select-none"
          style={{ filter: LEMON_DOODLE_FILTER }}
        />

        {/* 2. Top-Left-Mid: Pure White 3D Spring (x: 178.8, y: 5, w: 175.8) */}
        <img
          src={doodleSpringTopLeft}
          alt=""
          aria-hidden="true"
          className="absolute left-[179px] top-[5px] w-[176px] h-[176px] object-contain pointer-events-none select-none"
          style={{ filter: WHITE_DOODLE_FILTER, transform: 'scaleX(-1)' }}
        />

        {/* 3. Mid-Left: Pure White 3D Cone / Pyramid (x: -50, y: 224.6, w: 188.9) */}
        <img
          src={doodleConeMidLeft}
          alt=""
          aria-hidden="true"
          className="absolute left-[-50px] top-[225px] w-[189px] h-[189px] object-contain pointer-events-none select-none"
          style={{ filter: WHITE_DOODLE_FILTER }}
        />

        {/* 4. Bottom-Left: Lemon Torus Ring (x: 16.4, y: 298.3, w: 343.7) */}
        <img
          src={doodleTorusBottomLeft}
          alt=""
          aria-hidden="true"
          className="absolute left-[16px] top-[298px] w-[344px] h-[344px] object-contain pointer-events-none select-none"
          style={{ filter: LEMON_DOODLE_FILTER }}
        />

        {/* 5. Top-Right: Lemon 3D Pyramid (x: 1078, y: 0, w: 188.9) */}
        <img
          src={doodlePyramidTopRight}
          alt=""
          aria-hidden="true"
          className="absolute left-[1078px] top-0 w-[189px] h-[189px] object-contain pointer-events-none select-none"
          style={{ filter: LEMON_DOODLE_FILTER }}
        />

        {/* 6. Top-Far-Right: Pure White 3D Cylinder / Pillow (x: 1222.1, y: 5.2, w: 371.8) */}
        <img
          src={doodleCylinderTopRight}
          alt=""
          aria-hidden="true"
          className="absolute left-[1222px] top-[5px] w-[372px] h-[372px] object-contain pointer-events-none select-none"
          style={{ filter: WHITE_DOODLE_FILTER }}
        />

        {/* 7. Bottom-Right: Lemon 3D Scribble (x: 1106.9, y: 289, w: 331.5) */}
        <img
          src={doodleSpiralBottomRight}
          alt=""
          aria-hidden="true"
          className="absolute left-[1107px] top-[289px] w-[332px] h-[332px] object-contain pointer-events-none select-none"
          style={{ filter: LEMON_DOODLE_FILTER }}
        />
      </div>

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
`;

fs.writeFileSync('src/features/landing/components/PromoCtaSection.tsx', fileContent, 'utf8');
console.log('Successfully updated PromoCtaSection.tsx');
