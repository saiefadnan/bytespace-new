import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { AuthModal } from '../features/auth';
import { useAuthContext } from '../context';

export const RootLayout: React.FC = () => {
  const { authModalOpen, authModalMode, closeAuthModal, openAuthModal } = useAuthContext();

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#242528] selection:bg-[#CBFC01] selection:text-[#172400]">
      {/* Global Navbar */}
      <Navbar
        onOpenLogin={() => openAuthModal('login')}
        onOpenSignup={() => openAuthModal('signup')}
      />

      {/* Main Outlet Flow */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authModalMode}
        onClose={closeAuthModal}
      />
    </div>
  );
};
