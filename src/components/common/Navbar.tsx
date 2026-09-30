import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ByteSpaceLogo } from './ByteSpaceLogo';

export interface NavbarProps {
  isTransparent?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  isTransparent = true,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exactly 3 center links as specified in Figma: Home, Courses, Creators
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/search' },
    { label: 'Creators', href: '/creators' },
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

        {/* Center: Exactly Home, Courses, Creators */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-white/90 hover:text-[#CBFC01] font-medium text-sm transition-colors duration-150 py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Sign In, Join Us, and Shopping Bag Icon */}
        <div className="hidden sm:flex items-center gap-7">
          <Link
            to="/login"
            className="text-white/90 hover:text-[#CBFC01] font-medium text-sm transition-colors cursor-pointer"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="text-white/90 hover:text-[#CBFC01] font-medium text-sm transition-colors cursor-pointer"
          >
            Join Us
          </Link>
          {/* Authentic Shopping Bag Icon from Figma */}
          <Link
            to="/search"
            aria-label="Shopping Cart"
            className="text-white/90 hover:text-[#CBFC01] transition-colors p-1"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 16 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 4H12C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6C16 4.9 15.1 4 14 4ZM8 2C9.1 2 10 2.9 10 4H6C6 2.9 6.9 2 8 2ZM14 18H2V6H4V8C4 8.55 4.45 9 5 9C5.55 9 6 8.55 6 8V6H10V8C10 8.55 10.45 9 11 9C11.55 9 12 8.55 12 8V6H14V18Z" />
            </svg>
          </Link>
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
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/90 hover:text-[#CBFC01] font-medium text-base py-1.5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white font-medium text-sm hover:text-[#CBFC01] transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white font-medium text-sm hover:text-[#CBFC01] transition-colors"
            >
              Join Us
            </Link>
            <Link
              to="/search"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white p-1 hover:text-[#CBFC01] transition-colors"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 16 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 4H12C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6C16 4.9 15.1 4 14 4ZM8 2C9.1 2 10 2.9 10 4H6C6 2.9 6.9 2 8 2ZM14 18H2V6H4V8C4 8.55 4.45 9 5 9C5.55 9 6 8.55 6 8V6H10V8C10 8.55 10.45 9 11 9C11.55 9 12 8.55 12 8V6H14V18Z" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
