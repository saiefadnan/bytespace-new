import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ByteSpaceLogo } from './ByteSpaceLogo';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const column1Links = [
    { label: 'Featured Courses', href: '/#courses' },
    { label: 'Featured Categories', href: '/#courses' },
    { label: 'Business', href: '/search?category=business' },
    { label: 'IT', href: '/search?category=it-software' },
    { label: 'Design', href: '/search?category=design' },
  ];

  const column2Links = [
    { label: 'Development', href: '/search?category=development' },
    { label: 'Marketing', href: '/search?category=marketing' },
    { label: 'Photography', href: '/search?category=photography' },
    { label: 'Finance', href: '/search?category=finance' },
    { label: 'Sport', href: '/search?category=sport' },
  ];

  const column3Links = [
    { label: 'Become a Creator', href: '/creators' },
    { label: 'Affiliate Program', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Help', href: '#' },
    { label: 'About', href: '#' },
  ];

  return (
    <footer className="bg-white border-t border-[#CED0D3] pt-16 sm:pt-20 pb-12 text-[#242528]">
      <div className="bytespace-container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-16">
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-6 space-y-6">
            <Link to="/" className="inline-block">
              <ByteSpaceLogo theme="dark" size="md" />
            </Link>

            <p className="text-sm text-[#4F4F4F] leading-relaxed max-w-md">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Input + Search Button matching Figma exact coords */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-lg pt-1">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[51px] px-6 rounded-full border border-[#CED0D3] text-sm text-[#242528] placeholder-[#82868E] bg-white focus:outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-colors w-full sm:w-[375px]"
              />
              <button
                type="submit"
                className="h-[46px] px-8 rounded-full bg-[#D4FB20] text-[#172400] font-bold text-sm shadow-xs hover:brightness-95 transition-all flex items-center justify-center cursor-pointer shrink-0"
              >
                Search
              </button>
            </form>

            {submitted && (
              <p className="text-xs font-semibold text-[#172400] bg-[#FDFFE4] px-4 py-2 rounded-full inline-block">
                ✓ Thank you for subscribing to updates!
              </p>
            )}

            <p className="text-[11px] sm:text-xs text-[#585A62] leading-relaxed max-w-md">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns: 3 Columns without headers matching Figma */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-6 pt-2">
            {/* Column 1 */}
            <ul className="space-y-4 text-sm text-[#242528]">
              {column1Links.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="hover:text-[#003BE2] transition-colors font-normal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Column 2 */}
            <ul className="space-y-4 text-sm text-[#242528]">
              {column2Links.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="hover:text-[#003BE2] transition-colors font-normal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Column 3 */}
            <ul className="space-y-4 text-sm text-[#242528]">
              {column3Links.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="hover:text-[#003BE2] transition-colors font-normal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar matching Figma exact layout */}
        <div className="pt-8 border-t border-[#CED0D3] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4F4F4F]">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6 text-xs text-[#4F4F4F]">
            <Link to="#" className="hover:text-[#003BE2] transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-[#003BE2] transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-[#003BE2] transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
