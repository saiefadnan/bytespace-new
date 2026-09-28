import React, { useState } from 'react';
import { ByteSpaceLogo } from './ByteSpaceLogo';
import { Button } from './Button';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const footerLinks = {
    programs: [
      { label: 'UI/UX Design Bootcamp', href: '#courses' },
      { label: 'Full Stack Development', href: '#courses' },
      { label: 'Data Science & Python', href: '#courses' },
      { label: 'Iconography & 3D Design', href: '#courses' },
      { label: 'Agile & Team Sprints', href: '#courses' },
    ],
    resources: [
      { label: 'Student Community', href: '#' },
      { label: 'Career Roadmaps', href: '#' },
      { label: 'Free Video Tutorials', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Scholarships', href: '#' },
    ],
    company: [
      { label: 'About ByteSpace', href: '#' },
      { label: 'Meet the Instructors', href: '#mentors' },
      { label: 'Careers (We are hiring!)', href: '#' },
      { label: 'Press & Media', href: '#' },
      { label: 'Contact Support', href: '#' },
    ],
  };

  return (
    <footer className="bg-white border-t border-[#E5E6E8] pt-16 pb-12 text-[#4B4C53]">
      <div className="bytespace-container">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[#E5E6E8]">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-2 space-y-5">
            <ByteSpaceLogo theme="dark" size="lg" />
            <p className="text-sm text-[#585A62] leading-relaxed max-w-sm">
              ByteSpace is the premier hands-on platform empowering ambitious builders to master modern engineering, product design, and real-world tech capabilities.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#242528] mb-2.5">
                Subscribe for weekly course discounts & tutorials
              </span>
              {subscribed ? (
                <div className="bg-[#FDFFE4] border border-[#FAFFC5] text-[#243300] text-sm px-4 py-2.5 rounded-full inline-flex items-center gap-2 font-medium">
                  <svg className="w-4 h-4 text-[#8CB400]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Thank you! You're now subscribed to ByteSpace updates.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-[#F5F5F6] border border-[#CED0D3] rounded-full px-4 py-2.5 text-sm text-[#242528] placeholder-[#82868E] focus:outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-colors"
                  />
                  <Button variant="lime" size="sm" type="submit" className="px-6 py-2.5 shrink-0 text-xs">
                    Subscribe
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-[#242528] text-sm mb-4">Programs</h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.programs.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#003BE2] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#242528] text-sm mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.resources.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#003BE2] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#242528] text-sm mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#003BE2] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#82868E]">
          <p>© {CURRENT_YEAR} ByteSpace Inc. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-[#585A62]">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="hover:text-[#003BE2] transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[#003BE2] transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" aria-label="Discord" className="hover:text-[#003BE2] transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
