import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { mockCourses } from '../../data';
import type { Course } from '../../types';

// Images extracted directly from Figma Course Details
import courseHeroImage from '../../assets/images/course-details-hero.jpg';
import courseCreatorAvatar from '../../assets/images/course-creator-avatar.jpg';
import courseGallery0 from '../../assets/images/course-gallery-0.jpg';
import courseGallery1 from '../../assets/images/course-gallery-1.jpg';
import courseGallery2 from '../../assets/images/course-gallery-2.jpg';
import courseGallery3 from '../../assets/images/course-gallery-3.jpg';

// Reviewer avatars extracted directly from Figma Course Reviews
import reviewAvatar0 from '../../assets/images/review_avatar_0.png';
import reviewAvatar1 from '../../assets/images/review_avatar_1.png';
import reviewAvatar2 from '../../assets/images/review_avatar_2.png';
import reviewAvatar3 from '../../assets/images/review_avatar_3.png';

// Exact SVG icons extracted directly from Figma Course Details design
const LearningResourcesIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="950 964 20 16" fill="none">
    <path
      d="M968 966H960L958 964H952C950.9 964 950.01 964.9 950.01 966L950 978C950 979.1 950.9 980 952 980H968C969.1 980 970 979.1 970 978V968C970 966.9 969.1 966 968 966ZM968 978H952V966H957.17L959.17 968H968V978ZM966 972H954V970H966V972ZM962 976H954V974H962V976Z"
      fill="#003BE2"
    />
  </svg>
);

const QualityLessonVideosIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="951 1004 18 12" fill="none">
    <path
      d="M963 1006V1014H953V1006H963ZM964 1004H952C951.45 1004 951 1004.45 951 1005V1015C951 1015.55 951.45 1016 952 1016H964C964.55 1016 965 1015.55 965 1015V1011.5L969 1015.5V1004.5L965 1008.5V1005C965 1004.45 964.55 1004 964 1004Z"
      fill="#003BE2"
    />
  </svg>
);

const CertificateOfCompletionIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="950 1038 20 20" fill="none">
    <path
      d="M968 1043H963V1040C963 1038.9 962.1 1038 961 1038H959C957.9 1038 957 1038.9 957 1040V1043H952C950.9 1043 950 1043.9 950 1045V1056C950 1057.1 950.9 1058 952 1058H968C969.1 1058 970 1057.1 970 1056V1045C970 1043.9 969.1 1043 968 1043ZM959 1040H961V1045H959V1040ZM968 1056H952V1045H957C957 1046.1 957.9 1047 959 1047H961C962.1 1047 963 1046.1 963 1045H968V1056Z"
      fill="#003BE2"
    />
    <path d="M966 1048H962V1049.5H966V1048Z" fill="#003BE2" />
    <path d="M966 1051H962V1052.5H966V1051Z" fill="#003BE2" />
    <path
      d="M957 1051C957.828 1051 958.5 1050.33 958.5 1049.5C958.5 1048.67 957.828 1048 957 1048C956.172 1048 955.5 1048.67 955.5 1049.5C955.5 1050.33 956.172 1051 957 1051Z"
      fill="#003BE2"
    />
    <path
      d="M959.08 1052.18C958.44 1051.9 957.74 1051.75 957 1051.75C956.26 1051.75 955.56 1051.9 954.92 1052.18C954.36 1052.42 954 1052.96 954 1053.57V1054H960V1053.57C960 1052.96 959.64 1052.42 959.08 1052.18Z"
      fill="#003BE2"
    />
  </svg>
);

const PrivateConsultationIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="950 1076 20 20" fill="none">
    <path
      d="M959 1088H957C957 1083.03 961.03 1079 966 1079V1081C962.13 1081 959 1084.13 959 1088ZM966 1085V1083C963.24 1083 961 1085.24 961 1088H963C963 1086.34 964.34 1085 966 1085ZM955 1078C955 1076.89 954.11 1076 953 1076C951.89 1076 951 1076.89 951 1078C951 1079.11 951.89 1080 953 1080C954.11 1080 955 1079.11 955 1078ZM959.45 1078.5H957.45C957.21 1079.92 955.99 1081 954.5 1081H951.5C950.67 1081 950 1081.67 950 1082.5V1085H956V1082.74C957.86 1082.15 959.25 1080.51 959.45 1078.5ZM967 1091C968.11 1091 969 1090.11 969 1089C969 1087.89 968.11 1087 967 1087C965.89 1087 965 1087.89 965 1089C965 1090.11 965.89 1091 967 1091ZM968.5 1092H965.5C964.01 1092 962.79 1090.92 962.55 1089.5H960.55C960.75 1091.51 962.14 1093.15 964 1093.74V1096H970V1093.5C970 1092.67 969.33 1092 968.5 1092Z"
      fill="#003BE2"
    />
  </svg>
);

export const CourseDetailsPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [activeTab, setActiveTab] = useState<'about' | 'lesson' | 'reviews'>('about');
  const [selectedStarFilter, setSelectedStarFilter] = useState<number | 'all'>('all');
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const [enrollToast, setEnrollToast] = useState(false);
  const [shareToast, setShareToast] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [id]);

  // Look up course by id or slug, or fallback to first course
  const course: Course =
    mockCourses.find((c) => c.id === id || c.slug === id) || mockCourses[0];

  const handleEnroll = () => {
    setEnrollToast(true);
    setTimeout(() => {
      setEnrollToast(false);
    }, 4500);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
    setShareToast(true);
    setTimeout(() => {
      setShareToast(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#242528] selection:bg-[#CBFC01] selection:text-[#172400]">
      {/* Toast Notifications */}
      {enrollToast && (
        <div className="fixed top-24 right-6 z-50 bg-[#FDFFE4] border-2 border-[#CBFC01] text-[#243300] px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-4 duration-300">
          <span className="w-7 h-7 rounded-full bg-[#CBFC01] text-[#172400] flex items-center justify-center font-extrabold text-sm">
            ✓
          </span>
          <span className="text-sm font-bold">
            Successfully enrolled in &quot;{course.title}&quot;! Welcome aboard.
          </span>
        </div>
      )}

      {shareToast && (
        <div className="fixed top-24 right-6 z-50 bg-[#FDFFE4] border-2 border-[#CBFC01] text-[#243300] px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-4 duration-300">
          <span className="w-7 h-7 rounded-full bg-[#CBFC01] text-[#172400] flex items-center justify-center font-extrabold text-sm">
            ✓
          </span>
          <span className="text-sm font-bold">Course link copied to clipboard!</span>
        </div>
      )}

      {/* Global Transparent Navbar */}
      <Navbar isTransparent={true} />

      {/* Main Header on Royal Blue Canvas with 120px Grid Background */}
      <header className="relative bg-[#003BE2] pt-28 sm:pt-32 pb-8 sm:pb-12 overflow-hidden text-white">
        {/* 120px Grid Background SVG matching Figma */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="course-header-grid" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M 120 0 L 0 0 0 120" fill="none" stroke="white" strokeWidth="2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#course-header-grid)" />
          </svg>
        </div>

        <div className="bytespace-container relative z-10 max-w-7xl mx-auto">
          {/* Header Title Row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-4">
            <div className="max-w-3xl space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.15] text-white">
                {course.title}: A Comprehensive Guide
              </h1>
              <p className="text-white/90 text-sm sm:text-base font-normal">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <div className="text-xs sm:text-sm pt-1">
                <span className="text-white/70">by </span>
                <span className="font-bold text-[#D4FB20] hover:underline cursor-pointer">
                  {course.instructor.name}
                </span>
              </div>

              {/* 3 Pills Row matching Figma */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                {/* Level Pill */}
                <div className="h-10 px-4 rounded-full bg-white text-[#242528] text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm select-none">
                  <svg className="w-4 h-4 text-[#003BE2]" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M2 13h2V8H2v5zm5 0h2V5H7v8zm5 0h2V2h-2v11z" />
                  </svg>
                  <span>{course.level || 'Intermediate'}</span>
                </div>

                {/* Rating Pill */}
                <div className="h-10 px-4 rounded-full bg-white text-[#242528] text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm select-none">
                  <svg className="w-4 h-4 text-[#242528]" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0.5l2.4 4.8 5.3 0.8-3.8 3.7 0.9 5.3L8 12.6l-4.8 2.5 0.9-5.3-3.8-3.7 5.3-0.8L8 0.5z" />
                  </svg>
                  <span>4.8 (172 reviews)</span>
                </div>

                {/* Students Pill */}
                <div className="h-10 px-4 rounded-full bg-white text-[#242528] text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm select-none">
                  <svg className="w-4 h-4 text-[#242528]" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 13s-.5 0-.5-.5c0-1.2.7-2.7 2.5-3.3C4.4 8.7 4 7.9 4 7a3 3 0 1 1 5.4 1.8c-.8.4-1.4.9-1.9 1.5-.7-.2-1.5-.3-2.5-.3-2 0-2 2-2 3z" />
                  </svg>
                  <span>199 Students</span>
                </div>
              </div>
            </div>

            {/* Share Button matching Figma */}
            <button
              onClick={handleShare}
              className="h-10 px-6 rounded-full bg-[#D4FB20] text-[#172400] text-sm font-bold flex items-center gap-2 shadow-sm hover:brightness-95 transition-all self-start flex-shrink-0 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
              </svg>
              <span>Share</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area: Blue top band behind the video, white canvas below */}
      <main className="relative flex-1 bg-white">
        {/* Blue band that extends behind the video player matching Figma exact layout */}
        <div className="absolute top-0 left-0 right-0 h-[380px] sm:h-[460px] lg:h-[500px] bg-[#003BE2] overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-[0.12]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="url(#course-header-grid)" />
            </svg>
          </div>
        </div>

        <div className="bytespace-container relative z-10 max-w-7xl mx-auto pt-2 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Video Card on top + Tabs & Content below */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-10">
              {/* 1. Large 720x479 Video Card */}
              <div className="relative w-full aspect-[720/479] max-h-[480px] rounded-[24px] overflow-hidden bg-gray-900 shadow-2xl border border-white/10 group">
                <img
                  src={courseHeroImage}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />

                {/* Video Play Overlay */}
                {isPlayingPreview ? (
                  <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-6 text-center text-white">
                    <div className="w-16 h-16 rounded-full bg-[#D4FB20] text-[#172400] flex items-center justify-center font-bold text-2xl mb-4 animate-pulse">
                      ▶
                    </div>
                    <p className="text-lg font-bold">Video Preview Active</p>
                    <p className="text-xs text-white/70 mt-1 max-w-sm">
                      Interactive sample curriculum trailer for &quot;{course.title}&quot;.
                    </p>
                    <button
                      onClick={() => setIsPlayingPreview(false)}
                      className="mt-4 px-5 py-2 rounded-full bg-white/20 hover:bg-white/30 text-xs font-semibold text-white transition-colors"
                    >
                      Close Preview
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsPlayingPreview(true)}
                    className="absolute inset-0 m-auto w-[90px] h-[90px] sm:w-[103px] sm:h-[103px] rounded-[24px] bg-[#3D3D3D]/80 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl hover:scale-105 transition-all cursor-pointer group-hover:bg-[#3D3D3D]/95"
                    aria-label="Play Course Video Preview"
                  >
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                )}
              </div>

              {/* 2. Three Tabs: About / Lesson / Reviews */}
              <div className="space-y-6 pt-2">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveTab('about')}
                    className={`h-11 px-6 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'about'
                        ? 'bg-[#D4FB20] text-[#172400] shadow-sm'
                        : 'bg-[#F5F5F6] text-[#585A62] hover:bg-[#EAEBED]'
                    }`}
                  >
                    About
                  </button>
                  <button
                    onClick={() => setActiveTab('lesson')}
                    className={`h-11 px-6 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'lesson'
                        ? 'bg-[#D4FB20] text-[#172400] shadow-sm'
                        : 'bg-[#F5F5F6] text-[#585A62] hover:bg-[#EAEBED]'
                    }`}
                  >
                    Lesson
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`h-11 px-6 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'reviews'
                        ? 'bg-[#D4FB20] text-[#172400] shadow-sm'
                        : 'bg-[#F5F5F6] text-[#585A62] hover:bg-[#EAEBED]'
                    }`}
                  >
                    Reviews
                  </button>
                </div>

                {/* Tab 1: About */}
                {activeTab === 'about' && (
                  <div className="space-y-8 animate-in fade-in duration-200">
                    {/* Description Section with all 3 paragraphs */}
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-[#1A1A1A]">
                        Description
                      </h2>
                      <div className="text-sm sm:text-[15px] text-[#585A62] leading-relaxed space-y-4 max-w-3xl">
                        <p>
                          Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &quot;Build Digital Assets: A Comprehensive Guide.&quot; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                        </p>
                        <p>
                          In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
                        </p>
                        <p>
                          As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
                        </p>
                      </div>
                    </div>

                    {/* Sneak Peak Section with 4 Preview Gallery Thumbnails matching Figma */}
                    <div className="space-y-4 pt-2">
                      <h3 className="text-xl font-bold text-[#1A1A1A]">
                        Sneak Peak
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <img
                          src={courseGallery0}
                          alt="Sneak Peak preview 1"
                          className="w-full h-[125px] rounded-[16px] object-cover shadow-sm hover:opacity-95 transition-opacity"
                        />
                        <img
                          src={courseGallery1}
                          alt="Sneak Peak preview 2"
                          className="w-full h-[125px] rounded-[16px] object-cover shadow-sm hover:opacity-95 transition-opacity"
                        />
                        <img
                          src={courseGallery2}
                          alt="Sneak Peak preview 3"
                          className="w-full h-[125px] rounded-[16px] object-cover shadow-sm hover:opacity-95 transition-opacity"
                        />
                        <img
                          src={courseGallery3}
                          alt="Sneak Peak preview 4"
                          className="w-full h-[125px] rounded-[16px] object-cover shadow-sm hover:opacity-95 transition-opacity"
                        />
                      </div>
                    </div>

                    {/* Key Points Section matching Figma exact checklist */}
                    <div className="space-y-4 pt-2">
                      <h3 className="text-xl font-bold text-[#1A1A1A]">
                        Key Points
                      </h3>
                      <div className="space-y-3">
                        {[
                          'Foundational Concepts',
                          'Design Principles Mastery',
                          'Advanced Techniques in Digital Creation',
                          'Project Showcase and Critique',
                          'Optimizing for Various Platforms',
                          'Digital Asset Management Best Practices',
                          'Monetization Strategies',
                          'Capstone Project: Building Your Portfolio',
                        ].map((point) => (
                          <div key={point} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#003BE2] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                              <svg className="w-3 h-3 stroke-white stroke-[2.5]" viewBox="0 0 24 24" fill="none">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-sm font-medium text-[#585A62]">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Lesson (Explore the Modules) matching Figma exact layout */}
                {activeTab === 'lesson' && (
                  <div className="space-y-8 animate-in fade-in duration-200">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-[#1A1A1A]">
                        Explore the Modules
                      </h2>
                      <p className="text-sm text-[#585A62] leading-relaxed max-w-2xl">
                        Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
                      </p>
                    </div>

                    {/* Lesson List */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-[#1A1A1A]">
                        Lesson List
                      </h3>

                      <div className="space-y-4 max-w-3xl">
                        {[
                          {
                            title: 'Module 1: Introduction to Digital Assets',
                            desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
                          },
                          {
                            title: 'Module 2: Design Principles for Impact',
                            desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
                          },
                          {
                            title: 'Module 4: User-Centric Design Strategies',
                            desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
                          },
                          {
                            title: 'Module 5: Interactive Media and Engagement',
                            desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
                          },
                          {
                            title: 'Module 6: Project Showcase and Critique',
                            desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
                          },
                          {
                            title: 'Module 7: Optimizing Digital Assets for Various Platforms',
                            desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
                          },
                        ].map((mod) => (
                          <div key={mod.title} className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-[16px] bg-[#D4FB20] text-[#172400] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                              <svg className="w-5 h-5 fill-current text-[#172400]" viewBox="0 0 24 24">
                                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                              </svg>
                            </div>
                            <div className="space-y-0.5">
                              <h4 className="font-bold text-[15px] text-[#1A1A1A] leading-snug">
                                {mod.title}
                              </h4>
                              <p className="text-xs text-[#585A62] leading-relaxed">
                                {mod.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Lesson Content */}
                    <div className="space-y-2 pt-2">
                      <h3 className="text-lg font-bold text-[#1A1A1A]">
                        Lesson Content
                      </h3>
                      <p className="text-sm text-[#585A62] leading-relaxed max-w-2xl">
                        Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
                      </p>
                    </div>

                    {/* Lesson Progress Tracking */}
                    <div className="space-y-4 pt-2">
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-[#1A1A1A]">
                          Lesson Progress Tracking
                        </h3>
                        <p className="text-sm text-[#585A62] leading-relaxed max-w-2xl">
                          Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
                        </p>
                      </div>

                      {/* Learning Progress Card matching Figma 55% */}
                      <div className="border border-[#CED0D3] rounded-[20px] p-5 sm:p-6 bg-white max-w-md space-y-2">
                        <span className="text-xs font-semibold text-[#82868E]">
                          Learning Progress
                        </span>
                        <div className="text-3xl font-extrabold text-[#1A1A1A]">
                          55%
                        </div>
                        <div className="h-2 w-full bg-[#E5E6E8] rounded-full overflow-hidden">
                          <div className="h-full bg-[#D4FB20] rounded-full w-[55%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Reviews (What Learners Are Saying) matching Figma exact layout */}
                {activeTab === 'reviews' && (
                  <div className="space-y-8 animate-in fade-in duration-200 max-w-3xl">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-[#1A1A1A]">
                        What Learners Are Saying
                      </h2>
                      <p className="text-sm text-[#585A62] leading-relaxed max-w-2xl">
                        Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                      </p>
                    </div>

                    {/* Rating Summary Box matching Figma Course Reviews exact specs */}
                    <div className="border border-[#CED0D3] rounded-[24px] p-6 sm:p-8 bg-white flex flex-col sm:flex-row items-center gap-8 shadow-xs">
                      {/* Left Lime Block: Ratings 4.7 */}
                      <div className="w-[130px] h-[130px] sm:w-[140px] sm:h-[140px] rounded-[20px] bg-[#D4FB20] text-[#172400] flex flex-col items-center justify-center flex-shrink-0 shadow-sm">
                        <span className="text-xs font-bold text-[#172400] mb-0.5">
                          Ratings
                        </span>
                        <div className="text-4xl sm:text-5xl font-extrabold leading-none text-[#172400]">
                          4.7
                        </div>
                      </div>

                      {/* Right: Star Distribution Bars matching Figma exact numbers */}
                      <div className="flex-1 space-y-2 text-xs font-semibold text-[#585A62] w-full">
                        {/* 5 stars */}
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-[#E5E6E8] rounded-full overflow-hidden">
                            <div className="h-full bg-[#D4FB20] rounded-full w-[92%]" />
                          </div>
                          <div className="flex items-center gap-0.5 text-xs text-[#242528] tracking-tighter">
                            ★★★★★
                          </div>
                          <span className="w-8 text-right font-medium text-[#585A62]">720</span>
                        </div>

                        {/* 4 stars */}
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-[#E5E6E8] rounded-full overflow-hidden">
                            <div className="h-full bg-[#D4FB20] rounded-full w-[35%]" />
                          </div>
                          <div className="flex items-center gap-0.5 text-xs text-[#242528] tracking-tighter">
                            ★★★★★
                          </div>
                          <span className="w-8 text-right font-medium text-[#585A62]">120</span>
                        </div>

                        {/* 3 stars */}
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-[#E5E6E8] rounded-full overflow-hidden">
                            <div className="h-full bg-[#D4FB20] rounded-full w-[8%]" />
                          </div>
                          <div className="flex items-center gap-0.5 text-xs text-[#242528] tracking-tighter">
                            ★★★★★
                          </div>
                          <span className="w-8 text-right font-medium text-[#585A62]">21</span>
                        </div>

                        {/* 2 stars */}
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-[#E5E6E8] rounded-full overflow-hidden">
                            <div className="h-full bg-[#D4FB20] rounded-full w-[3%]" />
                          </div>
                          <div className="flex items-center gap-0.5 text-xs text-[#242528] tracking-tighter">
                            ★★★★★
                          </div>
                          <span className="w-8 text-right font-medium text-[#585A62]">12</span>
                        </div>

                        {/* 1 star */}
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-[#E5E6E8] rounded-full overflow-hidden">
                            <div className="h-full bg-[#D4FB20] rounded-full w-[5%]" />
                          </div>
                          <div className="flex items-center gap-0.5 text-xs text-[#242528] tracking-tighter">
                            ★★★★★
                          </div>
                          <span className="w-8 text-right font-medium text-[#585A62]">16</span>
                        </div>
                      </div>
                    </div>

                    {/* Section: Individual Reviews */}
                    <div className="space-y-4 pt-2">
                      <h3 className="font-bold text-base text-[#1A1A1A]">
                        Individual Reviews:
                      </h3>

                      {/* Filter Pills matching Figma */}
                      <div className="flex flex-wrap items-center gap-2.5">
                        <button
                          onClick={() => setSelectedStarFilter('all')}
                          className={`h-9 px-5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                            selectedStarFilter === 'all'
                              ? 'bg-[#D4FB20] text-[#172400] shadow-sm'
                              : 'bg-[#F5F5F6] text-[#585A62] hover:bg-[#EAEBED]'
                          }`}
                        >
                          All rating
                        </button>
                        {[5, 4, 3, 2, 1].map((stars) => (
                          <button
                            key={stars}
                            onClick={() => setSelectedStarFilter(stars)}
                            className={`h-9 px-4 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                              selectedStarFilter === stars
                                ? 'bg-[#D4FB20] text-[#172400] shadow-sm'
                                : 'bg-[#F5F5F6] text-[#585A62] hover:bg-[#EAEBED]'
                            }`}
                          >
                            <span>★</span>
                            <span>{stars}</span>
                          </button>
                        ))}
                      </div>

                      {/* 4 Review Cards matching Figma exact text and reviewer avatars */}
                      <div className="space-y-4 pt-2">
                        {/* Card 1 */}
                        {(selectedStarFilter === 'all' || selectedStarFilter === 5) && (
                          <div className="p-6 rounded-[24px] bg-white border border-[#CED0D3] space-y-3 shadow-xs">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <img
                                  src={reviewAvatar0}
                                  alt="PurePearl Studio"
                                  className="w-11 h-11 rounded-full object-cover border border-[#E5E6E8]"
                                />
                                <div>
                                  <h4 className="font-bold text-sm text-[#1A1A1A] leading-tight">
                                    PurePearl Studio
                                  </h4>
                                  <span className="text-xs text-[#82868E]">UI/UX Designer</span>
                                </div>
                              </div>
                              <span className="text-xs text-[#82868E]">a year ago</span>
                            </div>
                            <div className="text-xs text-[#242528] tracking-tighter">
                              ★★★★★
                            </div>
                            <p className="text-xs sm:text-sm text-[#585A62] leading-relaxed">
                              &quot;The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!&quot;
                            </p>
                          </div>
                        )}

                        {/* Card 2 */}
                        {(selectedStarFilter === 'all' || selectedStarFilter === 5) && (
                          <div className="p-6 rounded-[24px] bg-white border border-[#CED0D3] space-y-3 shadow-xs">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <img
                                  src={reviewAvatar1}
                                  alt="Albert Flores"
                                  className="w-11 h-11 rounded-full object-cover border border-[#E5E6E8]"
                                />
                                <div>
                                  <h4 className="font-bold text-sm text-[#1A1A1A] leading-tight">
                                    Albert Flores
                                  </h4>
                                  <span className="text-xs text-[#82868E]">UI/UX Designer</span>
                                </div>
                              </div>
                              <span className="text-xs text-[#82868E]">a year ago</span>
                            </div>
                            <div className="text-xs text-[#242528] tracking-tighter">
                              ★★★★★
                            </div>
                            <p className="text-xs sm:text-sm text-[#585A62] leading-relaxed">
                              This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I&apos;ve learned!
                            </p>
                          </div>
                        )}

                        {/* Card 3 */}
                        {(selectedStarFilter === 'all' || selectedStarFilter === 5) && (
                          <div className="p-6 rounded-[24px] bg-white border border-[#CED0D3] space-y-3 shadow-xs">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <img
                                  src={reviewAvatar2}
                                  alt="Cody Fisher"
                                  className="w-11 h-11 rounded-full object-cover border border-[#E5E6E8]"
                                />
                                <div>
                                  <h4 className="font-bold text-sm text-[#1A1A1A] leading-tight">
                                    Cody Fisher
                                  </h4>
                                  <span className="text-xs text-[#82868E]">UI/UX Designer</span>
                                </div>
                              </div>
                              <span className="text-xs text-[#82868E]">a year ago</span>
                            </div>
                            <div className="text-xs text-[#242528] tracking-tighter">
                              ★★★★★
                            </div>
                            <p className="text-xs sm:text-sm text-[#585A62] leading-relaxed">
                              The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.
                            </p>
                          </div>
                        )}

                        {/* Card 4 */}
                        {(selectedStarFilter === 'all' || selectedStarFilter === 5) && (
                          <div className="p-6 rounded-[24px] bg-white border border-[#CED0D3] space-y-3 shadow-xs">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <img
                                  src={reviewAvatar3}
                                  alt="Brooklyn Simmons"
                                  className="w-11 h-11 rounded-full object-cover border border-[#E5E6E8]"
                                />
                                <div>
                                  <h4 className="font-bold text-sm text-[#1A1A1A] leading-tight">
                                    Brooklyn Simmons
                                  </h4>
                                  <span className="text-xs text-[#82868E]">UI/UX Designer</span>
                                </div>
                              </div>
                              <span className="text-xs text-[#82868E]">a year ago</span>
                            </div>
                            <div className="text-xs text-[#242528] tracking-tighter">
                              ★★★★★
                            </div>
                            <p className="text-xs sm:text-sm text-[#585A62] leading-relaxed">
                              The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Sticky Sidebar Card matching Figma exact 411px */}
            <div className="lg:col-span-5 xl:col-span-4 sticky top-24">
              <div className="bg-white border border-[#CED0D3] rounded-[24px] p-6 sm:p-7 shadow-xl space-y-4 text-[#242528]">
                {/* Header */}
                <h3 className="font-bold text-[18px] text-[#1A1A1A]">
                  112 Lessons (24 hours)
                </h3>

                {/* 3 Preview Lessons List */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-center justify-between text-xs sm:text-[13px]">
                    <div className="flex items-center gap-2 text-[#242528]">
                      <span className="font-bold text-[#82868E]">01</span>
                      <span className="font-medium">Introduction to Digital Assets</span>
                    </div>
                    <span className="font-semibold text-[#003BE2]">12 mins</span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-[13px]">
                    <div className="flex items-center gap-2 text-[#242528]">
                      <span className="font-bold text-[#82868E]">02</span>
                      <span className="font-medium">Design Principles for Impacts</span>
                    </div>
                    <span className="font-semibold text-[#003BE2]">21 mins</span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-[13px]">
                    <div className="flex items-center gap-2 text-[#242528]">
                      <span className="font-bold text-[#82868E]">03</span>
                      <span className="font-medium">Advanced Techniques in Digital Creation</span>
                    </div>
                    <span className="font-semibold text-[#003BE2]">16 mins</span>
                  </div>

                  <button
                    onClick={() => setActiveTab('lesson')}
                    className="text-xs text-[#82868E] hover:text-[#003BE2] font-medium pt-1 cursor-pointer transition-colors block"
                  >
                    99 more videos
                  </button>
                </div>

                {/* Subtitle Message */}
                <p className="text-xs text-[#585A62] leading-relaxed pt-1">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                {/* Price Row */}
                <div className="flex items-baseline gap-1 pt-1">
                  <span className="text-[28px] font-extrabold text-[#003BE2] leading-none">
                    $25
                  </span>
                  <span className="text-xs text-[#585A62]">/lifetime</span>
                </div>

                {/* Enroll Button */}
                <button
                  onClick={handleEnroll}
                  className="w-full h-12 rounded-full bg-[#D4FB20] text-[#172400] font-bold text-sm hover:brightness-95 transition-all shadow-sm flex items-center justify-center cursor-pointer"
                >
                  Enroll Now
                </button>

                {/* This course include */}
                <div className="pt-3 space-y-3">
                  <h4 className="font-bold text-[15px] text-[#1A1A1A]">
                    This course include
                  </h4>
                  <ul className="space-y-3 text-xs text-[#585A62]">
                    <li className="flex items-center gap-3">
                      <LearningResourcesIcon />
                      <span>Learning Resources</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <QualityLessonVideosIcon />
                      <span>Quality Lesson Videos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CertificateOfCompletionIcon />
                      <span>Certificate of Completion</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <PrivateConsultationIcon />
                      <span>Private Consultation</span>
                    </li>
                  </ul>
                </div>

                {/* Divider Line */}
                <div className="border-t border-[#D1D1D1] my-4" />

                {/* Creator Profile Section */}
                <div className="pt-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={courseCreatorAvatar}
                      alt="PurePearl Studio"
                      className="w-[52px] h-[52px] rounded-full object-cover border border-[#E5E6E8]"
                    />
                    <div>
                      <h5 className="font-bold text-[15px] text-[#1A1A1A] leading-tight">
                        PurePearl Studio
                      </h5>
                      <span className="text-xs text-[#82868E]">Professional Creator</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#585A62] leading-relaxed">
                    Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                  </p>

                  <Link
                    to="/creator/inst-1"
                    className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-[#CED0D3] text-xs font-semibold text-[#242528] hover:bg-[#F5F5F6] transition-colors"
                  >
                    See Full Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};
