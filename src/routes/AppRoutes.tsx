import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/home';
import { LoginPage, SignupPage } from '../pages/auth';
import { SearchPage } from '../pages/search';
import { CreatorProfilePage } from '../pages/creator';
import { CourseDetailsPage } from '../pages/course';
import { NotFoundPage } from '../pages/notfound';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/course/:id" element={<CourseDetailsPage />} />
      <Route path="/creator" element={<CreatorProfilePage />} />
      <Route path="/creator/:id" element={<CreatorProfilePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/register" element={<SignupPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
