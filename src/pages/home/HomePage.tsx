import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import {
  HeroSection,
  PartnersStrip,
  CategoriesSection,
  FeaturesSection,
  PromoCtaSection,
  TestimonialsSection,
} from '../../features/landing';
import { PopularCoursesSection } from '../../features/courses';
import { mockCourses, mockCategories } from '../../data';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('featured');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter courses by category and optional search query
  const displayedCourses = mockCourses.filter((course) => {
    const matchesCategory =
      activeCategory === 'featured' ||
      activeCategory === 'all' ||
      course.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleHeroSearch = (query: string) => {
    setSearchQuery(query);
    const coursesElem = document.getElementById('courses');
    if (coursesElem) {
      coursesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#242528] selection:bg-[#CBFC01] selection:text-[#172400]">
      {/* Global Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onSearch={handleHeroSearch}
          onExploreClick={() => {
            const el = document.getElementById('courses');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Partners Strip */}
        <PartnersStrip />

        {/* 3. Popular Courses with Category Filters */}
        <PopularCoursesSection
          courses={displayedCourses}
          categories={mockCategories}
          activeCategory={activeCategory}
          onSelectCategory={(catSlug) => {
            setActiveCategory(catSlug);
            setSearchQuery('');
          }}
          onSelectCourse={(course) => navigate(`/course/${course.id}`)}
        />

        {/* 4. Course Categories */}
        <CategoriesSection />

        {/* 5. Features: Real Skills for Real World */}
        <FeaturesSection />

        {/* 5. High-Energy Call to Action Banner */}
        <PromoCtaSection onCtaClick={() => navigate('/signup')} />

        {/* 6. Student Testimonials */}
        <TestimonialsSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};
