import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ByteSpaceLogo } from './ByteSpaceLogo';
import { Button } from './Button';

export interface NavbarProps {
  onOpenLogin?: () => void;
  onOpenSignup?: () => void;
  isTransparent?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenLogin,
  onOpenSignup,
  isTransparent = true,
}) => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignInClick = () => {
    if (onOpenLogin) {
      onOpenLogin();
    } else {
      navigate('/login');
    }
  };

  const handleGetStartedClick = () => {
    if (onOpenSignup) {
      onOpenSignup();
    } else {
      navigate('/signup');
    }
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/#courses' },
    { label: 'Why Us', href: '/#features' },
    { label: 'Mentors', href: '/#mentors' },
    { label: 'Reviews', href: '/#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#003BE2]/95 backdrop-blur-md shadow-lg shadow-black/10 py-3.5'
          : isTransparent
          ? 'bg-transparent py-5'
          : 'bg-[#003BE2] py-4'
      }`}
    >
      <div className="bytespace-container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <ByteSpaceLogo theme="light" size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/85 hover:text-[#CBFC01] font-medium text-sm transition-colors duration-150 relative py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons (Sign In / Register) */}
        <div className="hidden sm:flex items-center gap-3.5">
          <button
            onClick={handleSignInClick}
            className="text-white hover:text-[#CBFC01] font-semibold text-sm px-4 py-2 transition-colors cursor-pointer"
          >
            Sign In
          </button>
          <Button
            variant="lime"
            size="sm"
            onClick={handleGetStartedClick}
            className="px-5 py-2 font-bold text-xs"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none cursor-pointer"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0030B8] border-t border-white/10 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/90 hover:text-[#CBFC01] font-medium text-base py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleSignInClick();
              }}
              className="text-white font-semibold text-sm py-2 text-left"
            >
              Sign In
            </button>
            <Button
              variant="lime"
              size="md"
              fullWidth
              onClick={() => {
                setMobileMenuOpen(false);
                handleGetStartedClick();
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
