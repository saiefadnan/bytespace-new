import { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HeroSection } from './components/home/HeroSection';
import { PartnersStrip } from './components/home/PartnersStrip';
import { PopularCoursesSection } from './components/home/PopularCoursesSection';
import { FeaturesSection } from './components/home/FeaturesSection';
import { MentorsSection } from './components/home/MentorsSection';
import { TestimonialsSection } from './components/home/TestimonialsSection';
import { PromoCtaSection } from './components/home/PromoCtaSection';
import { CourseDetailsModal } from './components/courses/CourseDetailsModal';
import { AuthModal } from './components/auth/AuthModal';
import { mockCourses, mockCategories } from './data';
import type { Course } from './types';

function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const [authInitialMode, setAuthInitialMode] = useState<'login' | 'signup'>('login');
  const [enrollSuccessMessage, setEnrollSuccessMessage] = useState<string | null>(null);

  // Filter courses by category and optional search query
  const displayedCourses = mockCourses.filter((course) => {
    const matchesCategory =
      activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenAuth = (mode: 'login' | 'signup') => {
    setAuthInitialMode(mode);
    setAuthModalOpen(true);
  };

  const handleHeroSearch = (query: string) => {
    setSearchQuery(query);
    // Smooth scroll down to the courses section
    const coursesElem = document.getElementById('courses');
    if (coursesElem) {
      coursesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      <Navbar
        onOpenLogin={() => handleOpenAuth('login')}
        onOpenSignup={() => handleOpenAuth('signup')}
      />

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
            setSearchQuery(''); // clear query when switching category
          }}
          onSelectCourse={(course) => setSelectedCourse(course)}
        />

        {/* 4. Features: Real Skills for Real World */}
        <FeaturesSection />

        {/* 5. Mentors Section */}
        <MentorsSection />

        {/* 6. High-Energy Call to Action Banner */}
        <PromoCtaSection onCtaClick={() => handleOpenAuth('signup')} />

        {/* 7. Student Testimonials */}
        <TestimonialsSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Course Curriculum & Details Modal */}
      <CourseDetailsModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={handleEnrollCourse}
      />

      {/* Login & Register Auth Modal (Bonus Extra Credit) */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authInitialMode}
        onClose={() => setAuthModalOpen(false)}
      />
    </div>
  );
}

export default App;
