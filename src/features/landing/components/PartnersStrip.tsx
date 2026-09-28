import React from 'react';

export const PartnersStrip: React.FC = () => {
  const partners = [
    { name: 'Duolingo', logo: 'DUOLINGO' },
    { name: 'Magic Leap', logo: 'magic leap' },
    { name: 'Microsoft', logo: 'Microsoft' },
    { name: 'Codecov', logo: 'codecov' },
    { name: 'UserTesting', logo: 'UserTesting' },
  ];

  return (
    <section className="bg-white py-10 border-b border-[#E5E6E8]">
      <div className="bytespace-container">
        <p className="text-center text-xs uppercase tracking-widest text-[#82868E] font-bold mb-8">
          Trusted by learners & engineers from leading tech giants
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="text-lg sm:text-xl font-black tracking-tighter text-[#4B4C53] hover:text-[#003BE2] transition-colors"
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
