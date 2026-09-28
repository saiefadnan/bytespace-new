import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { CourseCard } from '../../components/courses/CourseCard';
import { CourseDetailsModal } from '../../components/courses/CourseDetailsModal';
import { Button } from '../../components/common/Button';
import { mockCourses, mockCategories } from '../../data';
import type { Course } from '../../types';

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const categoryParam = searchParams.get('category') || 'all';

  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'price-low' | 'price-high'>('popular');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [enrollSuccessMessage, setEnrollSuccessMessage] = useState<string | null>(null);

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
    setSelectedLevel('all');
    setSortBy('popular');
    setSearchParams(new URLSearchParams());
  };

  const filteredCourses = useMemo(() => {
    return mockCourses
      .filter((course) => {
        const matchesCategory =
          selectedCategory === 'all' || course.category === selectedCategory;
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
        return (b.reviewCount || 0) - (a.reviewCount || 0); // popular default
      });
  }, [searchQuery, selectedCategory, selectedLevel, sortBy]);

  const handleEnrollCourse = (course: Course) => {
    setSelectedCourse(null);
    setEnrollSuccessMessage(`Successfully enrolled in "${course.title}"! Welcome aboard.`);
    setTimeout(() => {
      setEnrollSuccessMessage(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#242528] selection:bg-[#CBFC01] selection:text-[#172400]">
      {/* Toast Notification */}
      {enrollSuccessMessage && (
        <div className="fixed top-20 right-6 z-50 bg-[#FDFFE4] border-2 border-[#CBFC01] text-[#243300] px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-4 duration-300">
          <span className="w-7 h-7 rounded-full bg-[#CBFC01] text-[#172400] flex items-center justify-center font-extrabold text-sm">
            ✓
          </span>
          <span className="text-sm font-bold">{enrollSuccessMessage}</span>
        </div>
      )}

      {/* Global Navbar */}
      <Navbar isTransparent={false} />

      {/* Top Banner on Royal Blue Canvas (Figma Search Page header) */}
      <header className="bg-[#003BE2] pt-32 pb-16 px-6 relative overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-gradient-to-b from-[#2872FF]/40 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="bytespace-container relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block bg-[#CBFC01] text-[#172400] text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
            Course Catalog & Search
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Explore 100+ Masterclasses & Courses
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
            Discover cutting-edge design, engineering, and technology courses taught by veteran leaders from top companies.
          </p>

          {/* Interactive Search Bar matching Figma's 52px rounded input */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex flex-col sm:flex-row items-center gap-3 max-w-2xl mx-auto pt-2"
          >
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, instructors, or topics..."
                className="w-full h-13 pl-12 pr-10 rounded-full bg-white text-[#242528] placeholder-[#82868E] text-sm shadow-xl focus:outline-none focus:ring-3 focus:ring-[#CBFC01] transition-all"
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
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#82868E] hover:text-[#242528]"
                >
                  ✕
                </button>
              )}
            </div>

            <Button
              type="submit"
              variant="lime"
              size="lg"
              className="w-full sm:w-auto px-8 h-13 rounded-full font-bold shadow-lg shadow-black/20 flex-shrink-0 cursor-pointer"
            >
              Search
            </Button>
          </form>
        </div>
      </header>

      {/* Main Filter & Course Catalog Section */}
      <main className="flex-1 py-12 px-6">
        <div className="bytespace-container">
          {/* Controls Bar: Categories & Level & Sorting */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-[#E5E6E8]">
            {/* Category Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex-shrink-0 cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-[#CBFC01] text-[#172400] shadow-md'
                    : 'bg-[#F5F5F6] text-[#585A62] hover:bg-[#E5E6E8]'
                }`}
              >
                All Courses ({mockCourses.length})
              </button>
              {mockCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex-shrink-0 cursor-pointer ${
                    selectedCategory === cat.slug
                      ? 'bg-[#CBFC01] text-[#172400] shadow-md'
                      : 'bg-[#F5F5F6] text-[#585A62] hover:bg-[#E5E6E8]'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Sub-Filters: Level & Sort By */}
            <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
              {/* Level Dropdown */}
              <div className="flex items-center gap-2">
                <label htmlFor="level-filter" className="text-xs font-semibold text-[#82868E] hidden sm:inline">
                  Level:
                </label>
                <select
                  id="level-filter"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="px-3.5 py-2 rounded-xl bg-[#F5F5F6] border border-[#CED0D3] text-xs font-bold text-[#242528] focus:outline-none focus:ring-2 focus:ring-[#003BE2] cursor-pointer"
                >
                  <option value="all">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2">
                <label htmlFor="sort-filter" className="text-xs font-semibold text-[#82868E] hidden sm:inline">
                  Sort:
                </label>
                <select
                  id="sort-filter"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'popular' | 'rating' | 'price-low' | 'price-high')}
                  className="px-3.5 py-2 rounded-xl bg-[#F5F5F6] border border-[#CED0D3] text-xs font-bold text-[#242528] focus:outline-none focus:ring-2 focus:ring-[#003BE2] cursor-pointer"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Summary & Clear Filters */}
          <div className="py-6 flex items-center justify-between text-xs text-[#82868E]">
            <p>
              Showing <span className="font-bold text-[#242528]">{filteredCourses.length}</span> courses
              {searchQuery && (
                <> for keyword <span className="font-bold text-[#003BE2]">"{searchQuery}"</span></>
              )}
            </p>

            {(searchQuery || selectedCategory !== 'all' || selectedLevel !== 'all') && (
              <button
                onClick={handleResetFilters}
                className="font-bold text-[#003BE2] hover:underline flex items-center gap-1 cursor-pointer"
              >
                Reset all filters
              </button>
            )}
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onSelect={(c) => setSelectedCourse(c)}
                />
              ))}
            </div>
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

      {/* Course Curriculum & Details Modal */}
      <CourseDetailsModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={handleEnrollCourse}
      />
    </div>
  );
};
