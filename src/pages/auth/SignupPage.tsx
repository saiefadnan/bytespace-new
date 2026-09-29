import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Authentic Assets
import courseBigData from '../../assets/images/auth/course-big-data.jpg';
import courseBuildDigital from '../../assets/images/auth/course-build-digital.jpg';
import doodleTorus from '../../assets/images/auth/doodle-torus.png';
import doodleCone from '../../assets/images/auth/doodle-cone.png';
import doodleSpring from '../../assets/images/auth/doodle-spring.png';

// Avatars
import avatar1 from '../../assets/images/auth/avatar-1.png';
import avatar2 from '../../assets/images/auth/avatar-2.png';
import avatar3 from '../../assets/images/auth/avatar-3.png';
import avatar6 from '../../assets/images/auth/avatar-6.png';
import avatar7 from '../../assets/images/auth/avatar-7.png';
import avatar8 from '../../assets/images/auth/avatar-8.png';
import avatar9 from '../../assets/images/auth/avatar-9.png';
import avatar10 from '../../assets/images/auth/avatar-10.png';
import avatar11 from '../../assets/images/auth/avatar-11.png';

// Authentic Figma Doodle Filters
const LEMON_FILTER =
  'brightness(0) saturate(100%) invert(92%) sepia(90%) saturate(600%) hue-rotate(28deg) brightness(108%)';
const LEMON_DOODLE_FILTER = `${LEMON_FILTER} drop-shadow(0 20px 30px rgba(0,0,0,0.18))`;
const WHITE_DOODLE_FILTER = 'brightness(1.5) contrast(1.1) drop-shadow(0 15px 25px rgba(0,0,0,0.18))';

export const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName || !email || !password) {
      setError('Please fill in all required fields.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true);
    // Simulate real auth handshake
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#003BE2] relative flex flex-col justify-center overflow-x-hidden selection:bg-[#D4FB20] selection:text-[#172400]">
      {/* 1. Authentic 120px Background Grid Overlay from Figma */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12] z-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, #FFFFFF 1.5px, transparent 1.5px), linear-gradient(to bottom, #FFFFFF 1.5px, transparent 1.5px)',
          backgroundSize: '120px 120px',
        }}
      />

      {/* 2. Top-bar Navigation (Logo & Back to Home) */}
      <header className="absolute top-0 left-0 right-0 z-40 w-full max-w-[1440px] mx-auto px-6 xl:px-[122px] pt-9 flex items-center justify-between pointer-events-auto">
        <Link to="/" className="group flex items-center" aria-label="ByteSpace Home">
          {/* Authentic ByteSpace Logo Mark from Figma */}
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 10.5C10.5 4.701 5.799 0 0 0V21C0 26.799 4.701 31.5 10.5 31.5V10.5Z" fill="#D4FB20" />
            <path d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z" fill="#D4FB20" />
            <path d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z" fill="#D4FB20" />
          </svg>
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/90 hover:text-[#D4FB20] text-sm font-semibold transition-colors bg-white/10 hover:bg-white/15 px-4 py-2 rounded-full backdrop-blur-sm shadow-sm"
        >
          <span aria-hidden="true">&larr;</span> Back to Home
        </Link>
      </header>

      {/* 3. Main Stage: Desktop 1440px Canvas & Mobile Stack */}
      <main className="relative z-10 w-full max-w-[1440px] mx-auto min-h-[1024px] flex items-center justify-center px-4 sm:px-6 xl:px-0 pt-24 pb-12 xl:py-0">
        
        {/* DESKTOP EXACT FIGMA VIEW (xl:block, min-width: 1280px) */}
        <div className="hidden xl:block w-[1440px] h-[1024px] relative mx-auto pointer-events-auto">
          
          {/* Top-Left Heading (Exact Figma: "Sign up and come in") */}
          <div className="absolute top-[135px] left-[120px] max-w-[440px]">
            <h1 className="text-white font-bold text-[28px] leading-tight tracking-tight">
              Sign up and come in
            </h1>
            <p className="text-white/80 text-[14px] leading-relaxed mt-3">
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
            </p>
          </div>

          {/* Left Visual Composition (Exact Figma Coordinates) */}
          
          {/* Back Card: "Build Digital..." (Figma: x=122.5, y=394.5, w=372, h=383, rx=23.5) */}
          <div className="absolute left-[122.5px] top-[394.5px] w-[372px] h-[383px] bg-white rounded-[24px] border border-[#CED0D3] p-4 flex flex-col justify-between select-none z-10 shadow-sm">
            <div className="relative w-full h-[195px] rounded-[12px] overflow-hidden bg-[#443131]">
              <img src={courseBuildDigital} alt="Build Digital Course" className="w-full h-full object-cover" />
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-[#F6F6F6]/80 backdrop-blur-md rounded-full text-[11px] font-semibold text-[#4F4F4F]">
                17 Lessons
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[#1A1A1A] text-[17px] leading-tight mt-1">Build Digit...</h3>
              <p className="text-xs text-[#82868E] mt-0.5">by purepearl studio</p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#F5F5F6]">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F5F5F6] rounded-full text-xs font-medium text-[#4F4F4F]">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
                  <path d="M2 13h2V8H2v5zm5 0h2V5H7v8zm5 0h2V2h-2v11z" />
                </svg>
                Beginner
              </div>
              <div className="flex items-center -space-x-2">
                <img src={avatar1} alt="" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
                <img src={avatar2} alt="" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
                <img src={avatar3} alt="" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
                <div className="w-6 h-6 rounded-full bg-black text-white text-[9px] font-bold flex items-center justify-center border-2 border-white">
                  26+
                </div>
              </div>
              <div className="text-right">
                <span className="text-[17px] font-bold text-[#003BE2]">$25</span>
                <span className="text-xs text-[#82868E]">/lifetime</span>
              </div>
            </div>
          </div>

          {/* Bottom-Right White Spring Doodle (Figma: matrix(-1 0 0 1 646.628 626), w=175.8, h=175.8) */}
          <img
            src={doodleSpring}
            alt=""
            aria-hidden="true"
            className="absolute left-[470.8px] top-[626px] w-[175.8px] h-[175.8px] pointer-events-none select-none z-15 scale-x-[-1]"
            style={{ filter: WHITE_DOODLE_FILTER }}
          />

          {/* Front Card: "the Power of Big Data" (Figma: x=233.5, y=305.5, w=372, h=383, rx=23.5) */}
          <div className="absolute left-[233.5px] top-[305.5px] w-[372px] h-[383px] bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.18)] p-4 flex flex-col justify-between select-none z-20">
            <div className="relative w-full h-[195px] rounded-[12px] overflow-hidden bg-[#443131]">
              <img src={courseBigData} alt="The Power of Big Data" className="w-full h-full object-cover" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5">
                <span className="px-2.5 py-1 bg-[#F6F6F6]/90 backdrop-blur-md rounded-full text-[10px] font-semibold text-[#4F4F4F]">
                  17 Lessons
                </span>
                <span className="px-2.5 py-1 bg-[#F6F6F6]/90 backdrop-blur-md rounded-full text-[10px] font-semibold text-[#4F4F4F]">
                  2 hours 16 mins
                </span>
                <span className="px-2.5 py-1 bg-[#F6F6F6]/90 backdrop-blur-md rounded-full text-[10px] font-semibold text-[#4F4F4F]">
                  59 Comments
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mt-1">
                <h3 className="font-bold text-[#1A1A1A] text-[17px] leading-tight">the Power of Big Data</h3>
                <div className="flex items-center gap-1 text-[13px] font-bold text-[#1A1A1A]">
                  <span>4.5</span>
                  <span className="text-[#FFD000] text-sm">★</span>
                </div>
              </div>
              <p className="text-xs text-[#82868E] mt-0.5">by purepearl studio</p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#F5F5F6]">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F5F5F6] rounded-full text-xs font-medium text-[#4F4F4F]">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
                  <path d="M2 13h2V8H2v5zm5 0h2V5H7v8zm5 0h2V2h-2v11z" />
                </svg>
                Beginner
              </div>
              <div className="flex items-center -space-x-2">
                <img src={avatar6} alt="" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
                <img src={avatar7} alt="" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
                <img src={avatar8} alt="" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
                <div className="w-6 h-6 rounded-full bg-black text-white text-[9px] font-bold flex items-center justify-center border-2 border-white">
                  26+
                </div>
              </div>
              <div className="text-right">
                <span className="text-[17px] font-bold text-[#003BE2]">$25</span>
                <span className="text-xs text-[#82868E]">/lifetime</span>
              </div>
            </div>
          </div>

          {/* Happy Students Floating Badge in #D4FB20 (Figma: x=348, y=740, w=258, h=123, rx=16) */}
          <div className="absolute left-[348px] top-[740px] w-[258px] h-[123px] bg-[#D4FB20] rounded-[16px] p-4 shadow-xl flex flex-col justify-between z-30 select-none">
            <div>
              <h4 className="font-extrabold text-[#172400] text-base leading-tight">Happy Students</h4>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#172400] mt-1">
                <span>4.5 (240)</span>
                <span className="text-[#003BE2] text-sm">★</span>
              </div>
            </div>
            <div className="flex items-center -space-x-2 pt-1">
              <img src={avatar9} alt="" className="w-7 h-7 rounded-full border-2 border-[#D4FB20] object-cover" />
              <img src={avatar10} alt="" className="w-7 h-7 rounded-full border-2 border-[#D4FB20] object-cover" />
              <img src={avatar11} alt="" className="w-7 h-7 rounded-full border-2 border-[#D4FB20] object-cover" />
              <img src={avatar1} alt="" className="w-7 h-7 rounded-full border-2 border-[#D4FB20] object-cover" />
              <img src={avatar2} alt="" className="w-7 h-7 rounded-full border-2 border-[#D4FB20] object-cover" />
              <div className="w-7 h-7 rounded-full bg-black text-white text-[10px] font-bold flex items-center justify-center border-2 border-[#D4FB20]">
                2K+
              </div>
            </div>
          </div>

          {/* Top-Left Lemon Donut Doodle (Figma: x=149.5, y=319.7, w=146.7, h=146.7) */}
          <img
            src={doodleTorus}
            alt=""
            aria-hidden="true"
            className="absolute left-[149.5px] top-[319.7px] w-[146.7px] h-[146.7px] pointer-events-none select-none z-40"
            style={{ filter: LEMON_DOODLE_FILTER }}
          />

          {/* Bottom-Left Lemon Cone Doodle (Figma: x=95, y=701.6, w=188.9, h=188.9) */}
          <img
            src={doodleCone}
            alt=""
            aria-hidden="true"
            className="absolute left-[95px] top-[701.6px] w-[188.9px] h-[188.9px] pointer-events-none select-none z-40"
            style={{ filter: LEMON_DOODLE_FILTER }}
          />

          {/* Right Signup Box (Exact Figma: x=741, y=120, w=579, h=784, rx=24) */}
          <div className="absolute top-[120px] left-[741px] w-[579px] h-[784px] bg-white rounded-[24px] shadow-[0_25px_60px_rgba(0,0,0,0.12)] px-16 pt-[72px] pb-12 flex flex-col justify-between z-50">
            <div>
              {/* Eyebrow & Main Title */}
              <span className="text-[#003BE2] font-semibold text-base block mb-2">Create an Account</span>
              <h2 className="text-[#242528] font-bold text-[36px] leading-[44px] tracking-tight mb-8">
                Welcome to ByteSpace
              </h2>

              {/* Feedback messages */}
              {error && (
                <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl font-medium">
                  {error}
                </div>
              )}
              {success && (
                <div className="mb-6 p-3 bg-green-50 border border-green-200 text-green-700 text-xs rounded-xl font-medium flex items-center gap-2">
                  <span>✓</span> Account created successfully! Redirecting...
                </div>
              )}

              {/* Inputs Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#242528] mb-2">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Jamie Davis"
                    required
                    className="w-full h-[51px] px-4 rounded-[12px] border border-[#E5E6E8] text-[#242528] placeholder-[#9CA3AF] text-sm focus:outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#242528] mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="designer@example.com"
                    required
                    className="w-full h-[51px] px-4 rounded-[12px] border border-[#E5E6E8] text-[#242528] placeholder-[#9CA3AF] text-sm focus:outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#242528] mb-2">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                    required
                    className="w-full h-[51px] px-4 rounded-[12px] border border-[#E5E6E8] text-[#242528] placeholder-[#9CA3AF] text-sm focus:outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] bg-white transition-colors"
                  />
                </div>

                {/* Right-Aligned Pill Submit Button: "Continue" (Figma: w=123, h=46, rx=23, fill=#D4FB20) */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-[123px] h-[46px] bg-[#D4FB20] hover:bg-[#c6ed18] text-[#172400] font-bold text-sm rounded-full flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-[#172400] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      'Continue'
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Bottom Link: "Already have an account? Login" (Exact Figma copy) */}
            <p className="mt-8 text-center text-sm text-[#4B4C53]">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-[#003BE2] hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>

        {/* MOBILE / TABLET VIEW (< xl screens) */}
        <div className="xl:hidden w-full max-w-[579px] mx-auto py-8">
          <div className="mb-6 text-center">
            <h1 className="text-white font-bold text-2xl">Sign up and come in</h1>
            <p className="text-white/80 text-sm mt-1">
              The registration process is straightforward, uncomplicated, and efficient.
            </p>
          </div>

          <div className="w-full bg-white rounded-[24px] shadow-2xl px-6 sm:px-12 py-10">
            <span className="text-[#003BE2] font-semibold text-sm block mb-1">Create an Account</span>
            <h2 className="text-[#242528] font-bold text-2xl tracking-tight mb-6">
              Welcome to ByteSpace
            </h2>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl font-medium">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 text-xs rounded-xl font-medium">
                ✓ Account created successfully! Redirecting...
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#242528] mb-1.5">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jamie Davis"
                  required
                  className="w-full h-11 px-3.5 rounded-xl border border-[#E5E6E8] text-sm text-[#242528] placeholder-[#9CA3AF] focus:outline-none focus:border-[#003BE2]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#242528] mb-1.5">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  required
                  className="w-full h-11 px-3.5 rounded-xl border border-[#E5E6E8] text-sm text-[#242528] placeholder-[#9CA3AF] focus:outline-none focus:border-[#003BE2]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#242528] mb-1.5">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  required
                  className="w-full h-11 px-3.5 rounded-xl border border-[#E5E6E8] text-sm text-[#242528] placeholder-[#9CA3AF] focus:outline-none focus:border-[#003BE2]"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-32 h-11 bg-[#D4FB20] hover:bg-[#c6ed18] text-[#172400] font-bold text-sm rounded-full flex items-center justify-center cursor-pointer shadow-sm active:scale-95"
                >
                  {loading ? '...' : 'Continue'}
                </button>
              </div>
            </form>

            <p className="mt-8 text-center text-xs text-[#4B4C53]">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-[#003BE2] hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>

      </main>
    </div>
  );
};
