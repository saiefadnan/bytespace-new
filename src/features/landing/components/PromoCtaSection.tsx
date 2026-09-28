import React from 'react';
import { Button } from '../../../components/common/Button';
import doodleShape from '../../../assets/images/doodle-shape-2.png';

export interface PromoCtaSectionProps {
  onCtaClick?: () => void;
}

export const PromoCtaSection: React.FC<PromoCtaSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="bytespace-container">
        <div className="relative rounded-3xl bg-[#003BE2] text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2554FF] rounded-full blur-3xl opacity-40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#CBFC01] rounded-full blur-3xl opacity-15 pointer-events-none" />

          {/* 3D Floating Vector Asset from Figma */}
          <img
            src={doodleShape}
            alt=""
            aria-hidden="true"
            className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 w-48 lg:w-64 opacity-80 pointer-events-none select-none"
          />

          <div className="relative z-10 max-w-xl space-y-6">
            <span className="inline-block bg-[#CBFC01] text-[#172400] text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
              Limited Intake Open
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Ready to accelerate your tech career?
            </h2>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Join over 25,000+ ambitious learners worldwide. Start learning from industry masters today and turn your curiosity into career mastery.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="lime"
                size="lg"
                onClick={onCtaClick}
                className="px-8 py-4 font-bold shadow-xl shadow-black/20 text-xs sm:text-sm cursor-pointer"
              >
                Claim Free 7-Day Trial
              </Button>
              <a
                href="#courses"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-white/90 hover:text-white font-semibold text-xs sm:text-sm bg-white/10 hover:bg-white/20 transition-colors"
              >
                View Catalog →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
