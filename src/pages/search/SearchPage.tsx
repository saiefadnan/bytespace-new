import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { CourseCard } from '../../features/courses';
import { Button } from '../../components/common/Button';
import { mockCourses, mockCategories } from '../../data';

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const categoryParam = searchParams.get('category') || 'all';

  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedTag, setSelectedTag] = useState('Featured');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'relevant' | 'popular' | 'rating' | 'price-low' | 'price-high'>('relevant');
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [levelDropdownOpen, setLevelDropdownOpen] = useState(false);
  const [categoryPillDropdownOpen, setCategoryPillDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(2);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const levelRef = useRef<HTMLDivElement>(null);
  const categoryPillRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setCategoryDropdownOpen(false);
      }
      if (levelRef.current && !levelRef.current.contains(target)) {
        setLevelDropdownOpen(false);
      }
      if (categoryPillRef.current && !categoryPillRef.current.contains(target)) {
        setCategoryPillDropdownOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(target)) {
        setSortDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const figmaTags = [
    'Featured',
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing',
    'Cooking',
  ];

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    if (tag === 'Featured') {
      setSelectedCategory('all');
    } else if (tag === 'UI/UX Design' || tag === 'Drawing & Painting') {
      setSelectedCategory('design');
    } else if (tag === 'Marketing' || tag === 'Creative Marketing' || tag === 'Social Media') {
      setSelectedCategory('marketing');
    } else {
      setSelectedCategory(tag.toLowerCase().replace(/\s+/g, '-'));
    }
  };

  // Sync state to URL params on submit or click
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newParams = new URLSearchParams();
    if (searchQuery.trim()) newParams.set('q', searchQuery.trim());
    if (selectedCategory !== 'all') newParams.set('category', selectedCategory);
    setSearchParams(newParams);
  };

  const handleCategoryChange = (catSlug: string) => {
    setSelectedCategory(catSlug);
    const newParams = new URLSearchParams(searchParams);
    if (catSlug === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', catSlug);
    }
    setSearchParams(newParams);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedTag('Featured');
    setSelectedLevel('all');
    setSortBy('relevant');
    setSearchParams(new URLSearchParams());
  };

  const filteredCourses = useMemo(() => {
    return mockCourses
      .filter((course) => {
        const matchesCategory =
          selectedCategory === 'all' ||
          course.category === selectedCategory ||
          (selectedCategory === 'marketing' && (course.category === 'marketing' || course.category === 'business')) ||
          (selectedCategory === 'design' && course.category === 'design');
        const matchesLevel =
          selectedLevel === 'all' || course.level === selectedLevel;
        const matchesQuery =
          !searchQuery.trim() ||
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.instructor.name.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesLevel && matchesQuery;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'popular') return (b.reviewCount || 0) - (a.reviewCount || 0);
        return 0; // 'relevant' preserves natural Figma course order!
      });
  }, [searchQuery, selectedCategory, selectedLevel, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#242528] selection:bg-[#CBFC01] selection:text-[#172400]">
      {/* Global Navbar */}
      <Navbar isTransparent={true} />

      {/* Top Banner on Royal Blue Canvas with 120px Grid Overlay matching Figma Search Page */}
      <header className="bg-[#003BE2] pt-28 sm:pt-32 pb-14 px-6 relative overflow-hidden">
        {/* 120px Grid Overlay matching Figma exact specs */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="search-grid" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M 120 0 L 0 0 0 120" fill="none" stroke="white" strokeWidth="2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#search-grid)" />
          </svg>
        </div>

        <div className="bytespace-container relative z-10 max-w-4xl mx-auto text-center space-y-7">
          <h1 className="text-3xl sm:text-[40px] font-bold text-white tracking-tight leading-tight">
            Find Your Next Course
          </h1>

          {/* Interactive Search Bar matching Figma's exact 461px input + 147px lime Courses button */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-[624px] mx-auto"
          >
            {/* White Search Input: 461px x 52px, rx 24px */}
            <div className="relative w-full sm:w-[461px] flex-shrink-0">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full h-[52px] pl-12 pr-10 rounded-full bg-white text-[#242528] placeholder-[#82868E] text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#D4FB20] transition-all"
              />
              <svg
                className="w-5 h-5 text-[#82868E] absolute left-4.5 top-1/2 -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#82868E] hover:text-[#242528] cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Lime Courses Dropdown/Button: 147px x 48px, rx 24px, #D4FB20 */}
            <div className="relative w-full sm:w-auto" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setCategoryDropdownOpen((prev) => !prev)}
                className="w-full sm:w-[147px] h-[48px] px-5 rounded-full bg-[#D4FB20] hover:brightness-95 text-[#242528] font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs shrink-0"
              >
                <span>
                  {selectedCategory === 'all'
                    ? 'Courses'
                    : mockCategories.find((c) => c.slug === selectedCategory)?.name || 'Courses'}
                </span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${categoryDropdownOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 12 8"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M1 1.5L6 6.5L11 1.5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Category Dropdown Menu */}
              {categoryDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-[#CED0D3] py-2 z-50 text-left">
                  <button
                    type="button"
                    onClick={() => {
                      handleCategoryChange('all');
                      setSelectedTag('Featured');
                      setCategoryDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 text-xs font-semibold text-left transition-colors flex items-center justify-between ${
                      selectedCategory === 'all'
                        ? 'bg-[#FDFFE4] text-[#172400]'
                        : 'text-[#242528] hover:bg-[#F5F5F6]'
                    }`}
                  >
                    <span>All Courses</span>
                    {selectedCategory === 'all' && <span className="text-[#003BE2]">✓</span>}
                  </button>
                  {mockCategories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        handleCategoryChange(cat.slug);
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
          </form>
        </div>
      </header>

      {/* Main Filter & Course Catalog Section */}
      <main className="flex-1 pt-10 sm:pt-14 pb-20 px-6">
        <div className="bytespace-container space-y-6 sm:space-y-8">
          {/* Row 1: Filter / Level / Category on left, Most Relevant on right */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Left 3 Pills: Filter, Level, Category */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* Filter Button */}
              <button
                type="button"
                onClick={handleResetFilters}
                className={`h-[47px] px-6 rounded-full border text-sm transition-colors flex items-center gap-2.5 cursor-pointer ${
                  selectedCategory !== 'all' || selectedLevel !== 'all' || searchQuery
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
              <div className="relative" ref={categoryPillRef}>
                <button
                  type="button"
                  onClick={() => setCategoryPillDropdownOpen((prev) => !prev)}
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

                {categoryPillDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-[#CED0D3] py-2 z-50">
                    <button
                      type="button"
                      onClick={() => {
                        handleCategoryChange('all');
                        setSelectedTag('Featured');
                        setCategoryPillDropdownOpen(false);
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
                          handleCategoryChange(cat.slug);
                          setCategoryPillDropdownOpen(false);
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

          {/* Row 2: Category Chips matching Figma */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            {figmaTags.map((tag) => {
              const isActive = selectedTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagClick(tag)}
                  className={`h-[43px] px-6 rounded-full text-sm transition-all flex-shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#D4FB20] text-[#242528] font-semibold shadow-xs'
                      : 'bg-[#F5F5F6] text-[#4B4C53] font-normal hover:bg-[#E5E6E8]'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-2">
                {filteredCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                  />
                ))}
              </div>

              {/* Pagination Controls matching Figma exact layout (55x47px buttons, rx 23.5px) */}
              <div className="flex items-center justify-center gap-5 pt-12 pb-4">
                {/* Prev Button: 55px x 47px, rx 23.5px, border #CED0D3 */}
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="w-[55px] h-[47px] rounded-full border border-[#CED0D3] bg-white hover:border-[#242528] flex items-center justify-center text-[#4B4C53] transition-colors cursor-pointer shrink-0"
                  aria-label="Previous page"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Page Numbers 1, 2, 3, 4, 5 */}
                <div className="flex items-center gap-5 text-sm font-semibold">
                  {[1, 2, 3, 4, 5].map((pageNum) => {
                    const isActive = currentPage === pageNum;
                    return (
                      <button
                        key={pageNum}
                        type="button"
                        onClick={() => setCurrentPage(pageNum)}
                        className={`transition-colors cursor-pointer ${
                          isActive
                            ? 'text-[#242528] font-bold'
                            : pageNum === 1
                            ? 'text-[#CED0D3] hover:text-[#4B4C53]'
                            : 'text-[#242528] hover:text-[#003BE2]'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                {/* Next Button: 55px x 47px, rx 23.5px, border #CED0D3 */}
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.min(5, p + 1))}
                  className="w-[55px] h-[47px] rounded-full border border-[#CED0D3] bg-white hover:border-[#242528] flex items-center justify-center text-[#242528] transition-colors cursor-pointer shrink-0"
                  aria-label="Next page"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-20 bg-[#F5F5F6] rounded-3xl p-10 max-w-lg mx-auto space-y-4 my-8">
              <div className="w-16 h-16 rounded-full bg-white shadow-md mx-auto flex items-center justify-center text-2xl">
                🔍
              </div>
              <h3 className="text-xl font-extrabold text-[#242528]">
                No courses matched your search
              </h3>
              <p className="text-sm text-[#82868E]">
                We couldn't find any courses matching "{searchQuery}". Try searching for different keywords or reset your filters.
              </p>
              <Button
                variant="lime"
                size="md"
                onClick={handleResetFilters}
                className="px-6 py-2.5 font-bold cursor-pointer"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};
