import React from 'react';

export interface ByteSpaceLogoProps {
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ByteSpaceLogo: React.FC<ByteSpaceLogoProps> = ({
  theme = 'light',
  size = 'md',
  className = '',
}) => {
  const textColor = theme === 'light' ? 'text-white' : 'text-[#242528]';
  const scale = size === 'sm' ? 24 : size === 'lg' ? 36 : 28;

  return (
    <div className={`inline-flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}>
      {/* Figma ByteSpace Icon Mark */}
      <svg
        width={scale}
        height={(scale * 31.5) / 29}
        viewBox="0 0 29 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-200 hover:rotate-3"
      >
        <path
          d="M10.5 10.5C10.5 4.701 5.799 0 0 0V21C0 26.799 4.701 31.5 10.5 31.5V10.5Z"
          fill="#D4FB20"
        />
        <path
          d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z"
          fill="#D4FB20"
        />
        <path
          d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z"
          fill="#D4FB20"
        />
      </svg>
      <span
        style={{ fontFamily: 'var(--font-display)' }}
        className={`font-extrabold ${size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl'} ${textColor} tracking-tight`}
      >
        ByteSpace
      </span>
    </div>
  );
};
