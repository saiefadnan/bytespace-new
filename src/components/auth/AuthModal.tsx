import React, { useState } from 'react';
import { Button } from '../common/Button';
import { ByteSpaceLogo } from '../common/ByteSpaceLogo';

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
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F5F5F6] hover:bg-[#E5E6E8] flex items-center justify-center text-[#585A62] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <ByteSpaceLogo theme="dark" size="md" />
          </div>
          <h2 className="font-display font-extrabold text-2xl text-[#242528] mb-1">
            {mode === 'login' ? 'Welcome Back' : 'Create an Account'}
          </h2>
          <p className="text-xs text-[#585A62]">
            {mode === 'login'
              ? 'Enter your credentials to access your ByteSpace courses'
              : 'Join over 50,000 students learning in-demand tech skills'}
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex bg-[#F5F5F6] p-1 rounded-full mb-6 text-xs font-bold">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`flex-1 py-2 rounded-full transition-all cursor-pointer ${
              mode === 'login'
                ? 'bg-white text-[#003BE2] shadow-sm'
                : 'text-[#585A62] hover:text-[#242528]'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`flex-1 py-2 rounded-full transition-all cursor-pointer ${
              mode === 'signup'
                ? 'bg-white text-[#003BE2] shadow-sm'
                : 'text-[#585A62] hover:text-[#242528]'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Submission Feedback */}
        {submitted ? (
          <div className="bg-[#FDFFE4] border border-[#FAFFC5] text-[#243300] p-6 rounded-2xl text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#CBFC01] flex items-center justify-center mx-auto text-lg font-bold">
              ✓
            </div>
            <h3 className="font-bold text-sm">
              {mode === 'login' ? 'Successfully Signed In!' : 'Account Created Successfully!'}
            </h3>
            <p className="text-xs text-[#465A0D]">Redirecting to your course workspace...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-semibold text-[#242528] mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#F5F5F6] border border-[#CED0D3] rounded-xl px-4 py-2.5 text-sm text-[#242528] placeholder-[#82868E] focus:outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2]"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-[#242528] mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#F5F5F6] border border-[#CED0D3] rounded-xl px-4 py-2.5 text-sm text-[#242528] placeholder-[#82868E] focus:outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2]"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-[#242528]">
                  Password
                </label>
                {mode === 'login' && (
                  <a href="#" className="text-xs text-[#003BE2] hover:underline font-medium">
                    Forgot Password?
                  </a>
                )}
              </div>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#F5F5F6] border border-[#CED0D3] rounded-xl px-4 py-2.5 text-sm text-[#242528] placeholder-[#82868E] focus:outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2]"
              />
            </div>

            <Button variant="lime" size="md" fullWidth type="submit" className="mt-2 py-3">
              {mode === 'login' ? 'Sign In to ByteSpace' : 'Create Free Account'}
            </Button>

            {/* Social Logins */}
            <div className="pt-4 border-t border-[#F5F5F6] space-y-3">
              <span className="block text-center text-xs text-[#82868E]">Or continue with</span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-[#CED0D3] rounded-xl text-xs font-semibold text-[#4B4C53] hover:bg-[#F5F5F6] transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-[#CED0D3] rounded-xl text-xs font-semibold text-[#4B4C53] hover:bg-[#F5F5F6] transition-colors"
                >
                  <svg className="w-4 h-4 fill-current text-[#242528]" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
