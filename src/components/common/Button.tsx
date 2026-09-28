import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'lime' | 'blue' | 'white' | 'outline-white' | 'outline-dark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'lime',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold tracking-tight rounded-full cursor-pointer transition-all duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3 gap-2.5',
  }[size];

  const variantStyles = {
    lime: 'bg-[#CBFC01] text-[#172400] hover:bg-[#D4FB20] hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(203,252,1,0.35)] hover:shadow-[0_8px_20px_rgba(203,252,1,0.5)] focus-visible:ring-[#CBFC01]',
    blue: 'bg-[#003BE2] text-white hover:bg-[#0445FF] hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(0,59,226,0.3)] hover:shadow-[0_8px_20px_rgba(0,59,226,0.45)] focus-visible:ring-[#003BE2]',
    white: 'bg-white text-[#003BE2] hover:bg-[#F5F5F6] hover:-translate-y-0.5 shadow-sm hover:shadow focus-visible:ring-white',
    'outline-white': 'bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10 focus-visible:ring-white',
    'outline-dark': 'bg-transparent text-[#242528] border border-[#CED0D3] hover:border-[#242528] hover:bg-[#F5F5F6] focus-visible:ring-[#242528]',
    ghost: 'bg-transparent text-[#242528] hover:bg-[#F5F5F6] focus-visible:ring-gray-300',
  }[variant];

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
