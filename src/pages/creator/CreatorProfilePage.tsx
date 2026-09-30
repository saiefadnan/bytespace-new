import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { CourseCard } from '../../features/courses';
import { mockCourses, mockCategories } from '../../data';
import creatorAvatar from '../../assets/images/creator-profile-avatar.jpg';

export const CreatorProfilePage: React.FC = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'relevant' | 'popular' | 'rating' | 'price-low' | 'price-high'>('relevant');

  const [levelDropdownOpen, setLevelDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  const levelRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (levelRef.current && !levelRef.current.contains(target)) {
        setLevelDropdownOpen(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(target)) {
        setCategoryDropdownOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(target)) {
        setSortDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResetFilters = () => {
    setSelectedLevel('all');
    setSelectedCategory('all');
    setSortBy('relevant');
  };

  // PurePearl Studio's 6 courses matching Figma specs
  const creatorCourses = useMemo(() => {
    return mockCourses
      .slice(0, 6)
      .filter((c) => {
        const matchesLevel = selectedLevel === 'all' || c.level === selectedLevel;
        const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory;
        return matchesLevel && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return 0; // canonical Figma order
      });
  }, [selectedLevel, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#242528] selection:bg-[#CBFC01] selection:text-[#172400]">
      {/* Global Transparent Navbar on top of Blue Grid Canvas */}
      <Navbar isTransparent={true} />

      {/* Top Banner on Royal Blue Canvas (exact 592px height with 120px Grid Overlay from Figma) */}
      <header className="bg-[#003BE2] pt-28 sm:pt-32 pb-14 px-6 relative overflow-hidden">
        {/* 120px Grid Overlay matching Figma exact coordinates */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="creator-grid" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M 120 0 L 0 0 0 120" fill="none" stroke="white" strokeWidth="2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#creator-grid)" />
          </svg>
        </div>

        <div className="bytespace-container relative z-10 space-y-6 sm:space-y-8">
          {/* Creator Profile Header (Avatar + Title + Badge + Subtitle) */}
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Creator Squircle Avatar: 96px x 96px, rx 24px */}
            <div className="w-24 h-24 rounded-[24px] overflow-hidden bg-[#FDEDEC] flex-shrink-0 shadow-md">
              <img
                src={creatorAvatar}
                alt="PurePearl Studio"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="space-y-2 pt-1 text-white">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  PurePearl Studio
                </h1>
                {/* Lime Creator Badge: 103px x 35px, rx 17.5px */}
                <span className="h-[35px] px-4 rounded-full bg-[#D4FB20] text-[#172400] text-xs font-semibold flex items-center justify-center shadow-xs">
                  Creator
                </span>
              </div>
              <p className="text-white/85 text-sm sm:text-base font-normal">
                Passionate UI/UX, Web designer
              </p>
            </div>
          </div>

          {/* Bio Description Paragraphs matching Figma exact text */}
          <div className="space-y-4 text-white/90 text-sm sm:text-base leading-relaxed max-w-5xl">
            <p>
              Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!
            </p>
            <p>
              ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
            </p>
          </div>

          {/* Action & Stats Row: 3 Products, 12 Followers, Follow Button */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
            {/* Left Badges */}
            <div className="flex items-center gap-4">
              {/* 6 Products Pill: 140px x 46px, rx 23px */}
              <div className="h-[46px] px-6 rounded-full bg-white text-[#242528] text-sm font-normal flex items-center shadow-xs select-none">
                <span className="font-bold mr-1.5">6</span> Products
              </div>

              {/* 12 Followers Pill: 150px x 46px, rx 23px */}
              <div className="h-[46px] px-6 rounded-full bg-white text-[#242528] text-sm font-normal flex items-center shadow-xs select-none">
                <span className="font-bold mr-1.5">{isFollowing ? 13 : 12}</span> Followers
              </div>
            </div>

            {/* Right Follow Button: 101px x 46px, rx 23px, #D4FB20 */}
            <button
              type="button"
              onClick={() => setIsFollowing((prev) => !prev)}
              className="h-[46px] px-7 rounded-full bg-[#D4FB20] hover:brightness-95 text-[#172400] text-sm font-semibold transition-all shadow-xs cursor-pointer flex items-center justify-center shrink-0"
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Course Catalog Section */}
      <main className="flex-1 pt-10 sm:pt-14 pb-20 px-6">
        <div className="bytespace-container space-y-8">
          {/* Controls Bar: Filter, Level, Category on left, Most relevant on right */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Left 3 Pills: Filter, Level, Category */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* Filter Button */}
              <button
                type="button"
                onClick={handleResetFilters}
                className={`h-[47px] px-6 rounded-full border text-sm transition-colors flex items-center gap-2.5 cursor-pointer ${
                  selectedCategory !== 'all' || selectedLevel !== 'all'
                    ? 'border-[#003BE2] bg-[#003BE2]/5 text-[#003BE2] font-semibold'
                    : 'border-[#CED0D3] bg-white text-[#242528] hover:border-[#242528]'
                }`}
              >
                <svg className="w-4 h-4 text-current" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M1.5 2h13l-5.2 6.5v4.5l-2.6 1v-5.5L1.5 2z" />
                </svg>
                <span>Filter</span>
              </button>

              {/* Level Dropdown Pill */}
              <div className="relative" ref={levelRef}>
                <button
                  type="button"
                  onClick={() => setLevelDropdownOpen((prev) => !prev)}
                  className={`h-[47px] px-6 rounded-full border text-sm transition-colors flex items-center gap-2.5 cursor-pointer ${
                    selectedLevel !== 'all'
                      ? 'border-[#003BE2] bg-[#003BE2]/5 text-[#003BE2] font-semibold'
                      : 'border-[#CED0D3] bg-white text-[#242528] hover:border-[#242528]'
                  }`}
                >
                  <svg className="w-4 h-4 text-current" viewBox="0 0 16 16" fill="currentColor">
                    <rect x="1" y="10" width="3" height="6" rx="0.5" />
                    <rect x="6.5" y="5" width="3" height="11" rx="0.5" />
                    <rect x="12" y="1" width="3" height="15" rx="0.5" />
                  </svg>
                  <span>{selectedLevel === 'all' ? 'Level' : selectedLevel}</span>
                </button>

                {levelDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-[#CED0D3] py-2 z-50">
                    {['all', 'Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => {
                          setSelectedLevel(lvl);
                          setLevelDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-2.5 text-xs font-semibold text-left transition-colors flex items-center justify-between ${
                          selectedLevel === lvl
                            ? 'bg-[#FDFFE4] text-[#172400]'
                            : 'text-[#242528] hover:bg-[#F5F5F6]'
                        }`}
                      >
                        <span>{lvl === 'all' ? 'All Levels' : lvl}</span>
                        {selectedLevel === lvl && <span className="text-[#003BE2]">✓</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Category Dropdown Pill */}
              <div className="relative" ref={categoryRef}>
                <button
                  type="button"
                  onClick={() => setCategoryDropdownOpen((prev) => !prev)}
                  className={`h-[47px] px-6 rounded-full border text-sm transition-colors flex items-center gap-2.5 cursor-pointer ${
                    selectedCategory !== 'all'
                      ? 'border-[#003BE2] bg-[#003BE2]/5 text-[#003BE2] font-semibold'
                      : 'border-[#CED0D3] bg-white text-[#242528] hover:border-[#242528]'
                  }`}
                >
                  <svg className="w-4 h-4 text-current" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 1L3 9h10L8 1z" />
                    <circle cx="12" cy="13" r="2.5" />
                    <rect x="2" y="11" width="4" height="4" rx="0.5" />
                  </svg>
                  <span>
                    {selectedCategory === 'all'
                      ? 'Category'
                      : mockCategories.find((c) => c.slug === selectedCategory)?.name || 'Category'}
                  </span>
                </button>

                {categoryDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-[#CED0D3] py-2 z-50">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory('all');
                        setCategoryDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2.5 text-xs font-semibold text-left transition-colors flex items-center justify-between ${
                        selectedCategory === 'all'
                          ? 'bg-[#FDFFE4] text-[#172400]'
                          : 'text-[#242528] hover:bg-[#F5F5F6]'
                      }`}
                    >
                      <span>All Categories</span>
                      {selectedCategory === 'all' && <span className="text-[#003BE2]">✓</span>}
                    </button>
                    {mockCategories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat.slug);
                          setCategoryDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-2.5 text-xs font-semibold text-left transition-colors flex items-center justify-between ${
                          selectedCategory === cat.slug
                            ? 'bg-[#FDFFE4] text-[#172400]'
                            : 'text-[#242528] hover:bg-[#F5F5F6]'
                        }`}
                      >
                        <span>{cat.name}</span>
                        {selectedCategory === cat.slug && <span className="text-[#003BE2]">✓</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Pill: Most relevant */}
            <div className="relative" ref={sortRef}>
              <button
                type="button"
                onClick={() => setSortDropdownOpen((prev) => !prev)}
                className="h-[47px] px-6 rounded-full border border-[#CED0D3] bg-white text-[#242528] hover:border-[#242528] text-sm transition-colors flex items-center gap-2.5 cursor-pointer shrink-0"
              >
                <svg className="w-4 h-4 text-current" viewBox="0 0 18 14" fill="currentColor">
                  <rect x="0" y="0" width="18" height="2" rx="1" />
                  <rect x="0" y="6" width="12" height="2" rx="1" />
                  <rect x="0" y="12" width="6" height="2" rx="1" />
                </svg>
                <span>
                  {sortBy === 'relevant'
                    ? 'Most relevant'
                    : sortBy === 'rating'
                    ? 'Highest Rated'
                    : sortBy === 'price-low'
                    ? 'Price: Low to High'
                    : sortBy === 'price-high'
                    ? 'Price: High to Low'
                    : 'Most Popular'}
                </span>
              </button>

              {sortDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-[#CED0D3] py-2 z-50">
                  {[
                    { id: 'relevant', label: 'Most relevant' },
                    { id: 'popular', label: 'Most Popular' },
                    { id: 'rating', label: 'Highest Rated' },
                    { id: 'price-low', label: 'Price: Low to High' },
                    { id: 'price-high', label: 'Price: High to Low' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => {
                        setSortBy(s.id as any);
                        setSortDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2.5 text-xs font-semibold text-left transition-colors flex items-center justify-between ${
                        sortBy === s.id
                          ? 'bg-[#FDFFE4] text-[#172400]'
                          : 'text-[#242528] hover:bg-[#F5F5F6]'
                      }`}
                    >
                      <span>{s.label}</span>
                      {sortBy === s.id && <span className="text-[#003BE2]">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Courses Grid: 3 Products by PurePearl Studio */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-2">
            {creatorCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};
