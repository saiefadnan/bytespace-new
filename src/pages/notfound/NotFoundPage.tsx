import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { Button } from '../../components/common/Button';
import doodleSpring from '../../assets/images/doodle-spring-2.png';
import doodleShape from '../../assets/images/doodle-shape-2.png';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#242528] selection:bg-[#CBFC01] selection:text-[#172400]">
      {/* Top Navbar on Royal Blue */}
      <Navbar isTransparent={false} />

      {/* 404 Hero Canvas */}
      <main className="flex-1 bg-[#003BE2] relative flex items-center justify-center pt-28 pb-20 px-6 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#2872FF]/40 via-[#CBFC01]/10 to-[#2872FF]/40 rounded-full blur-3xl pointer-events-none" />

        {/* 3D Decorative Floating Shapes */}
        <img
          src={doodleSpring}
          alt=""
          aria-hidden="true"
          className="hidden md:block absolute left-12 top-1/3 w-32 opacity-40 animate-pulse pointer-events-none select-none"
        />
        <img
          src={doodleShape}
          alt=""
          aria-hidden="true"
          className="hidden md:block absolute right-12 bottom-1/4 w-32 opacity-40 pointer-events-none select-none"
        />

        {/* 404 Center Card */}
        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
          {/* Big 404 Display Number */}
          <div className="relative inline-block">
            <h1 className="text-[120px] sm:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20 select-none">
              404
            </h1>
            <span className="absolute -top-2 -right-4 bg-[#CBFC01] text-[#172400] text-xs font-black uppercase px-3 py-1 rounded-full shadow-lg">
              Lost In Space?
            </span>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Oops! Page not found
            </h2>
            <p className="text-white/80 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <Button
                variant="lime"
                size="lg"
                className="px-8 py-3.5 font-bold shadow-xl shadow-black/20 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Button>
            </Link>

            <Link
              to="/#courses"
              className="px-6 py-3 rounded-full text-white/90 hover:text-white font-semibold text-sm bg-white/10 hover:bg-white/15 transition-colors"
            >
              Explore Courses →
            </Link>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};
