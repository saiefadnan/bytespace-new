import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'lime' | 'blue' | 'gray' | 'white';
  size?: 'sm' | 'md';
  pill?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'lime',
  size = 'sm',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 font-bold',
    md: 'text-xs px-3 py-1 font-bold',
  }[size];

  const variantStyles = {
    lime: 'bg-[#FDFFE4] text-[#465A0D] border border-[#FAFFC5]',
    blue: 'bg-[#E7F6FF] text-[#003BE2] border border-[#B0DDFF]',
    gray: 'bg-[#F5F5F6] text-[#4B4C53] border border-[#CED0D3]',
    white: 'bg-white/90 backdrop-blur-sm text-[#242528] shadow-sm',
  }[variant];

  return (
    <span
      className={`inline-flex items-center rounded-full uppercase tracking-wider ${sizeStyles} ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
};
