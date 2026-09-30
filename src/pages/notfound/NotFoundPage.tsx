import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#242528] selection:bg-[#CBFC01] selection:text-[#172400]">
      {/* Top Navbar on Royal Blue */}
      <Navbar isTransparent={true} />

      {/* 404 Hero Canvas on Royal Blue with 120px Grid Background matching Figma */}
      <main className="flex-1 bg-[#003BE2] relative flex flex-col items-center justify-center pt-28 sm:pt-36 pb-24 sm:pb-32 px-6 overflow-hidden">
        {/* 120px Grid Background SVG matching Figma exact layout */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="notfound-grid" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M 120 0 L 0 0 0 120" fill="none" stroke="white" strokeWidth="2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#notfound-grid)" />
          </svg>
        </div>

        {/* 404 Center Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Giant 404 Vector Display with Figma Gradient */}
          <div className="w-full max-w-[780px] mx-auto">
            <svg
              viewBox="250 200 940 380"
              className="w-full h-auto select-none pointer-events-none drop-shadow-sm"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="figma-404-grad"
                  x1="720"
                  y1="160"
                  x2="720"
                  y2="640"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D4FB20" />
                  <stop offset="0.25" stopColor="#D4FB20" stopOpacity="0.96" />
                  <stop offset="0.505" stopColor="#D4FB20" stopOpacity="0.81" />
                  <stop offset="0.68" stopColor="#D4FB20" stopOpacity="0.61" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M278.754 499.84V443.68L440.994 225.28H513.474V441.28H557.634V499.84H513.474V568H445.314V499.84H278.754ZM450.594 304.48L347.874 441.28H450.594V304.48ZM720.519 568C634.119 568 590.919 510.56 590.919 395.68C590.919 281.12 634.119 223.84 720.519 223.84C766.279 223.84 799.239 239.2 819.399 269.92C839.559 300.64 849.639 342.56 849.639 395.68C849.639 449.12 839.559 491.2 819.399 521.92C799.239 552.64 766.279 568 720.519 568ZM769.959 476.32C778.599 457.44 782.919 430.56 782.919 395.68C782.919 361.12 778.599 334.56 769.959 316C761.639 297.12 745.159 287.68 720.519 287.68C695.559 287.68 678.759 297.12 670.119 316C661.799 334.56 657.639 361.12 657.639 395.68C657.639 430.56 661.799 457.44 670.119 476.32C678.759 494.88 695.559 504.16 720.519 504.16C745.159 504.16 761.639 494.88 769.959 476.32ZM885.561 499.84V443.68L1047.8 225.28H1120.28V441.28H1164.44V499.84H1120.28V568H1052.12V499.84H885.561ZM1057.4 304.48L954.681 441.28H1057.4V304.48Z"
                fill="url(#figma-404-grad)"
              />
            </svg>
          </div>

          {/* Heading overlapping the bottom of 404 matching Figma exact layout */}
          <div className="relative -mt-16 sm:-mt-24 text-center px-4 space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.12] max-w-3xl mx-auto">
              The page you are looking for doesn’t exist
            </h1>
            <p className="text-white/80 text-xs sm:text-sm font-normal max-w-xl mx-auto pt-1">
              Try to use a correct url or go back to homepage to start again
            </p>
            <div className="pt-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center h-[46px] px-8 rounded-full bg-[#D4FB20] text-[#172400] text-sm font-bold shadow-md hover:brightness-95 transition-all cursor-pointer"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};
