import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ByteSpaceLogo } from '../../components/common/ByteSpaceLogo';
import { Button } from '../../components/common/Button';
import avatarImg from '../../assets/images/avatar-3.png';
import doodleSpring from '../../assets/images/doodle-spring-1.png';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    setLoading(true);
    // Simulate real auth handshake
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 1200);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#003BE2] relative flex flex-col justify-between overflow-x-hidden selection:bg-[#CBFC01] selection:text-[#172400]">
      {/* Background Decorative Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-[#2872FF]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#CBFC01]/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* 3D Floating Element */}
      <img
        src={doodleSpring}
        alt=""
        aria-hidden="true"
        className="hidden xl:block absolute top-12 left-10 w-28 opacity-40 animate-pulse pointer-events-none select-none"
      />

      {/* Top Header / Logo Bar */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <ByteSpaceLogo theme="light" size="md" />
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/90 hover:text-[#CBFC01] text-sm font-semibold transition-colors bg-white/10 hover:bg-white/15 px-4 py-2 rounded-full backdrop-blur-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </header>

      {/* Main Content Area: Split 2-Column Desktop Grid */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 md:py-12 flex-1 flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full max-w-5xl">
          {/* Left Column: Branding / Value Proposition Card (Figma style) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-center space-y-8 text-white">
            <div className="space-y-4">
              <span className="inline-block bg-[#CBFC01] text-[#172400] text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                Welcome Back
              </span>
              <h1 className="text-4xl xl:text-5xl font-extrabold leading-tight">
                Unlock your creative potential with <span className="text-[#CBFC01]">ByteSpace</span>.
              </h1>
              <p className="text-white/80 text-base leading-relaxed">
                Connect with world-class industry mentors, master high-income skills, and collaborate with thousands of passionate creators.
              </p>
            </div>

            {/* Testimonial Quote Card matching Figma layout */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center gap-1 text-[#CBFC01]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/95 text-sm italic leading-relaxed">
                "The curriculum and 1-on-1 mentorship at ByteSpace landed me my first senior product design role within 4 months."
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <img
                  src={avatarImg}
                  alt="Courtney Henry"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-[#CBFC01]"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">Courtney Henry</h4>
                  <p className="text-xs text-white/70">UI/UX Designer at Spotify</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Auth Form Card */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/25 border border-white/20">
              {/* Form Header */}
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242528] tracking-tight">
                  Sign In
                </h2>
                <p className="text-sm text-[#82868E] mt-2">
                  Welcome back! Please enter your details.
                </p>
              </div>

              {/* Status Banner */}
              {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}

              {success && (
                <div className="mb-6 p-4 rounded-xl bg-[#FDFFE4] border border-[#CBFC01] text-[#243300] text-sm flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold">Login successful! Redirecting to home...</span>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4B4C53] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F5F5F6] border border-[#E5E6E8] text-[#242528] placeholder-[#82868E] text-sm focus:outline-none focus:ring-2 focus:ring-[#003BE2] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#4B4C53]">
                      Password
                    </label>
                    <a
                      href="#forgot"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Password reset link sent to registered email.');
                      }}
                      className="text-xs font-semibold text-[#003BE2] hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F5F5F6] border border-[#E5E6E8] text-[#242528] placeholder-[#82868E] text-sm focus:outline-none focus:ring-2 focus:ring-[#003BE2] focus:bg-white transition-all pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#82868E] hover:text-[#242528] p-1"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-[#003BE2] rounded border-[#CED0D3] focus:ring-[#003BE2]"
                  />
                  <label htmlFor="remember-me" className="ml-2 text-xs font-medium text-[#585A62]">
                    Remember me for 30 days
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="lime"
                  size="lg"
                  fullWidth
                  disabled={loading}
                  className="mt-2 py-3.5 font-bold shadow-lg shadow-[#CBFC01]/25 cursor-pointer"
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </Button>
              </form>

              {/* Social Login Options */}
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#E5E6E8]" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-3 bg-white text-[#82868E] uppercase tracking-wider font-semibold">
                      Or sign in with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setEmail('alex@google.com');
                      setPassword('demo1234');
                    }}
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#E5E6E8] hover:bg-[#F5F5F6] transition-colors text-xs font-bold text-[#242528] cursor-pointer"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                    Google
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setEmail('alex@github.com');
                      setPassword('demo1234');
                    }}
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#E5E6E8] hover:bg-[#F5F5F6] transition-colors text-xs font-bold text-[#242528] cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current text-[#242528]" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    GitHub
                  </button>
                </div>
              </div>

              {/* Bottom switch link */}
              <p className="mt-8 text-center text-xs text-[#82868E]">
                Don't have an account?{' '}
                <Link to="/signup" className="font-bold text-[#003BE2] hover:underline">
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer copyright */}
      <footer className="relative z-10 w-full text-center py-6 text-xs text-white/60">
        © 2026 ByteSpace, Inc. All rights reserved.
      </footer>
    </div>
  );
};
