import React from 'react';

const DesignIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12c1.657 0 3-1.343 3-3v-.5c0-.414.148-.793.391-1.086.244-.293.609-.414 1.009-.414H22c3.314 0 6-2.686 6-6C28 9.373 22.627 4 16 4z" stroke="#172400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10" cy="16" r="1.5" fill="#172400"/>
    <circle cx="14" cy="11" r="1.5" fill="#172400"/>
    <circle cx="20" cy="11" r="1.5" fill="#172400"/>
    <circle cx="23" cy="16" r="1.5" fill="#172400"/>
  </svg>
);

const DevelopmentIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect x="3" y="5" width="26" height="18" rx="2" stroke="#172400" strokeWidth="2"/>
    <path d="M3 9h26" stroke="#172400" strokeWidth="2"/>
    <path d="M10 15l-3 3 3 3M22 15l3 3-3 3M14 22l4-10" stroke="#172400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 27h16" stroke="#172400" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 23v4" stroke="#172400" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ITSoftwareIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect x="4" y="4" width="10" height="10" rx="1.5" stroke="#172400" strokeWidth="2"/>
    <rect x="18" y="4" width="10" height="10" rx="1.5" stroke="#172400" strokeWidth="2"/>
    <rect x="4" y="18" width="10" height="10" rx="1.5" stroke="#172400" strokeWidth="2"/>
    <rect x="18" y="18" width="10" height="10" rx="1.5" stroke="#172400" strokeWidth="2"/>
  </svg>
);

const BusinessIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <path d="M4 26h24M8 26V18M14 26V12M20 26V16M26 26V8" stroke="#172400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 8l-4-4-4 4" stroke="#172400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 4v12" stroke="#172400" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const MarketingIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <path d="M6 18V14l14-8v16L6 18z" stroke="#172400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 14a4 4 0 010 8" stroke="#172400" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6 18l-2 6" stroke="#172400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 10a8 8 0 010 12" stroke="#172400" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const PhotographyIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <path d="M28 24a2 2 0 01-2 2H6a2 2 0 01-2-2V12a2 2 0 012-2h3l2-3h10l2 3h3a2 2 0 012 2v12z" stroke="#172400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="16" cy="17" r="4" stroke="#172400" strokeWidth="2"/>
    <circle cx="24.5" cy="13.5" r="1" fill="#172400"/>
  </svg>
);

const categories = [
  { id: 'design', name: 'Design', icon: DesignIcon },
  { id: 'development', name: 'Development', icon: DevelopmentIcon },
  { id: 'it-software', name: 'IT & Software', icon: ITSoftwareIcon },
  { id: 'business', name: 'Business', icon: BusinessIcon },
  { id: 'marketing', name: 'Marketing', icon: MarketingIcon },
  { id: 'photography', name: 'Photography', icon: PhotographyIcon },
];

export const CategoriesSection: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-24 border-b border-[#E5E6E8]">
      <div className="bytespace-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#242528] tracking-tight leading-tight mb-4">
            Explore Diverse Learning Paths{' '}
            <span className="text-[#003BE2]">at Bytespace</span>
          </h2>
          <p className="text-[#585A62] text-sm sm:text-base leading-relaxed">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range
            of courses spans various fields, ensuring there&apos;s something for everyone. Unleash
            your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Category Cards — 6-column grid matching Figma exact 166x166px, rounded-[24px], border #CED0D3 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[40px] justify-items-center">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                id={`category-${cat.id}`}
                className="group flex flex-col items-center justify-center gap-3 w-[166px] h-[166px] bg-white border border-[#CED0D3] rounded-[24px] shadow-sm hover:border-[#CBFC01] hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                {/* Icon Circle: exact 60x60px, rounded-full, fill #D4FB20 */}
                <div className="w-[60px] h-[60px] rounded-full bg-[#D4FB20] flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-sm flex-shrink-0">
                  <Icon />
                </div>
                {/* Label: exact font size & styling */}
                <span className="text-[15px] font-bold text-[#1A1C20] text-center leading-tight">
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
