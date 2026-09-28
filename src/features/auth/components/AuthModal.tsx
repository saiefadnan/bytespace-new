import React, { useState } from 'react';
import { Button } from '../../../components/common/Button';
import { ByteSpaceLogo } from '../../../components/common/ByteSpaceLogo';

export interface AuthModalProps {
  isOpen: boolean;
  initialMode?: 'login' | 'signup';
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode = 'login',
  onClose,
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 relative border border-[#CED0D3]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#82868E] hover:text-[#242528] p-1.5 rounded-full hover:bg-[#F5F5F6] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Brand Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <ByteSpaceLogo theme="dark" size="sm" />
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#242528] mt-3">
            {mode === 'login' ? 'Welcome Back!' : 'Join ByteSpace'}
          </h2>
          <p className="text-xs text-[#82868E] mt-1 max-w-xs">
            {mode === 'login'
              ? 'Access thousands of high-demand masterclasses and courses.'
              : 'Create your account to start learning immediately.'}
          </p>
        </div>

        {submitted ? (
          <div className="p-6 text-center space-y-3 bg-[#FDFFE4] border border-[#CBFC01] rounded-2xl">
            <span className="w-12 h-12 rounded-full bg-[#CBFC01] text-[#172400] inline-flex items-center justify-center font-extrabold text-lg">
              ✓
            </span>
            <h3 className="text-base font-bold text-[#172400]">
              {mode === 'login' ? 'Signed in successfully!' : 'Account registered!'}
            </h3>
            <p className="text-xs text-[#3C4A00]">Redirecting you to your workspace...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4B4C53] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Alex Morgan"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F5F5F6] border border-[#E5E6E8] text-[#242528] placeholder-[#82868E] text-sm focus:outline-none focus:ring-2 focus:ring-[#003BE2]"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#4B4C53] mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-[#F5F5F6] border border-[#E5E6E8] text-[#242528] placeholder-[#82868E] text-sm focus:outline-none focus:ring-2 focus:ring-[#003BE2]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#4B4C53] mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-[#F5F5F6] border border-[#E5E6E8] text-[#242528] placeholder-[#82868E] text-sm focus:outline-none focus:ring-2 focus:ring-[#003BE2]"
              />
            </div>

            <Button
              type="submit"
              variant="lime"
              size="md"
              fullWidth
              className="py-3 font-bold mt-2 shadow-md cursor-pointer"
            >
              {mode === 'login' ? 'Sign In' : 'Create Free Account'}
            </Button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E5E6E8]" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white text-[#82868E]">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  setEmail('alex@google.com');
                  setPassword('demo1234');
                }}
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-[#CED0D3] hover:bg-[#F5F5F6] text-xs font-semibold text-[#242528] transition-colors cursor-pointer"
              >
                <span>Google</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setEmail('alex@github.com');
                  setPassword('demo1234');
                }}
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-[#CED0D3] hover:bg-[#F5F5F6] text-xs font-semibold text-[#242528] transition-colors cursor-pointer"
              >
                <span>GitHub</span>
              </button>
            </div>

            <div className="text-center pt-2">
              {mode === 'login' ? (
                <p className="text-xs text-[#82868E]">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('signup')}
                    className="text-[#003BE2] font-bold hover:underline cursor-pointer"
                  >
                    Sign up
                  </button>
                </p>
              ) : (
                <p className="text-xs text-[#82868E]">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('login')}
                    className="text-[#003BE2] font-bold hover:underline cursor-pointer"
                  >
                    Sign in
                  </button>
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
