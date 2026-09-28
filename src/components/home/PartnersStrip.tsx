import React from 'react';
import { mockPartners } from '../../data';

export const PartnersStrip: React.FC = () => {
  return (
    <section className="bg-[#F5F5F6] border-y border-[#E5E6E8] py-8 sm:py-10">
      <div className="bytespace-container flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Label */}
        <div className="text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-[#82868E] block mb-1">
            Global Recognition
          </span>
          <p className="text-sm font-semibold text-[#242528]">
            Trusted by teams at 500+ leading tech organizations
          </p>
        </div>

        {/* Partners Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all">
          {mockPartners.map((partner) => (
            <span
              key={partner.name}
              className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#4B4C53] hover:text-[#003BE2] transition-colors select-none"
            >
              {partner.symbol}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
