import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { TourListingPage } from './pages/TourListingPage';
import { TourDetailsPage } from './pages/TourDetailsPage';
import { UserDashboardPage } from './pages/UserDashboardPage';
import { BookingFlowPage } from './pages/BookingFlowPage';
import { CruisesPage } from './pages/CruisesPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { AuthPage } from './pages/AuthPage';
import { ContentPage } from './pages/ContentPage';

// Define available pages for our simulated router
export type Page = 
  | 'home' 
  | 'tours' 
  | 'tour-details' 
  | 'dashboard' 
  | 'booking' 
  | 'cruises' 
  | 'destinations' 
  | 'blog' 
  | 'blog-post'
  | 'contact' 
  | 'auth'
  | 'about' 
  | 'careers' 
  | 'press' 
  | 'help' 
  | 'terms' 
  | 'privacy' 
  | 'cancellation' 
  | 'sitemap';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Simple router function to switch pages
  const navigate = (page: Page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  // On the home page, we want the hero to sit under the transparent navbar (pt-0).
  // On other pages, we need to push content down so it's not hidden by the fixed navbar.
  // We use pt-[72px] for mobile and md:pt-[80px] for desktop to match navbar height.
  const mainPadding = currentPage === 'home' ? 'pt-0' : 'pt-[72px] md:pt-[80px]';

  return (
    <div className="flex flex-col min-h-screen bg-background-light overflow-x-hidden">
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      
      <main className={`flex-grow w-full ${mainPadding}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {currentPage === 'home' && <HomePage onNavigate={navigate} />}
            {currentPage === 'tours' && <TourListingPage onNavigate={navigate} />}
            {currentPage === 'tour-details' && <TourDetailsPage onNavigate={navigate} />}
            {currentPage === 'dashboard' && <UserDashboardPage onNavigate={navigate} />}
            {currentPage === 'booking' && <BookingFlowPage onNavigate={navigate} />}
            {currentPage === 'cruises' && <CruisesPage onNavigate={navigate} />}
            {currentPage === 'destinations' && <DestinationsPage onNavigate={navigate} />}
            {currentPage === 'blog' && <BlogPage onNavigate={navigate} />}
            {currentPage === 'blog-post' && <BlogPostPage onNavigate={navigate} />}
            {currentPage === 'contact' && <ContactPage onNavigate={navigate} />}
            {currentPage === 'auth' && <AuthPage onNavigate={navigate} />}
            
            {/* Content Pages */}
            {(['about', 'careers', 'press', 'help', 'terms', 'privacy', 'cancellation', 'sitemap'].includes(currentPage)) && (
              <ContentPage page={currentPage} onNavigate={navigate} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;