import React from 'react';

export const PartnersStrip: React.FC = () => {
  const partners = [
    { name: 'Duolingo', label: 'duolingo', font: 'font-extrabold tracking-tight lowercase text-2xl' },
    { name: 'Magic Leap', label: 'magic leap', font: 'font-medium tracking-wide lowercase text-xl' },
    { name: 'Microsoft', label: 'Microsoft', font: 'font-semibold tracking-normal text-xl' },
    { name: 'Codecov', label: 'codecov', font: 'font-bold tracking-tight lowercase text-xl' },
    { name: 'UserTesting', label: 'UserTesting', font: 'font-bold tracking-tight text-xl' },
  ];

  return (
    <section className="bg-[#F5F5F6] py-12 md:py-16 border-y border-[#E5E6E8]">
      <div className="bytespace-container">
        <p className="text-center text-xs uppercase tracking-widest text-[#82868E] font-bold mb-8">
          Trusted by learners & engineers from leading tech giants
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-20 text-[#585A62]/70">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={`${partner.font} hover:text-[#003BE2] hover:scale-105 transition-all duration-200 cursor-default select-none`}
            >
              {partner.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
