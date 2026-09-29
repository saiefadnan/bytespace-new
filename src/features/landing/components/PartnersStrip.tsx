import React from 'react';
import partnerDuolingo from '../../../assets/images/partner-duolingo.svg';
import partnerMagicleap from '../../../assets/images/partner-magicleap.svg';
import partnerMicrosoft from '../../../assets/images/partner-microsoft.svg';
import partnerCodecov from '../../../assets/images/partner-codecov.svg';
import partnerUsertesting from '../../../assets/images/partner-usertesting.svg';

export const PartnersStrip: React.FC = () => {
  const partners = [
    { name: 'Duolingo', src: partnerDuolingo },
    { name: 'Magic Leap', src: partnerMagicleap },
    { name: 'Microsoft', src: partnerMicrosoft },
    { name: 'Codecov', src: partnerCodecov },
    { name: 'UserTesting', src: partnerUsertesting },
  ];

  return (
    <section className="bg-[#F5F5F6] py-14 border-y border-[#E5E6E8]">
      <div className="bytespace-container">
        <p className="text-center text-xs uppercase tracking-widest text-[#82868E] font-bold mb-8">
          Trusted by learners & engineers from leading tech giants
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14 md:gap-20 opacity-75 hover:opacity-100 transition-opacity">
          {partners.map((partner) => (
            <img
              key={partner.name}
              src={partner.src}
              alt={partner.name}
              className="h-8 md:h-9 object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
