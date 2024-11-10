import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoGrid from './components/VideoGrid';
import PremiumAd from './components/PremiumAd';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import SubscriptionPlans from './components/dashboard/SubscriptionPlans';

// Simulated routing - in a real app, use React Router
const CURRENT_PAGE = 'home';

const trendingVideos = [
  {
    id: '1',
    thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3',
    title: 'AI-Enhanced Cinematography Guide',
    creator: 'Cinema Masters',
    views: '1.2M views',
    duration: '15:24'
  },
  {
    id: '2',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3',
    title: 'Machine Learning in Travel Vlogs',
    creator: 'Wanderlust AI',
    views: '890K views',
    duration: '21:15'
  },
  {
    id: '3',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3',
    title: 'AI Music Production Revolution',
    creator: 'Studio Pro',
    views: '567K views',
    duration: '32:40'
  },
  {
    id: '4',
    thumbnail: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3',
    title: 'Neural Networks in Video Editing',
    creator: 'Tech Today',
    views: '750K views',
    duration: '18:55'
  }
];

const aiRecommendations = [
  {
    id: '5',
    thumbnail: 'https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?ixlib=rb-4.0.3',
    title: 'AI-Generated Recipe Tutorials',
    creator: 'Gourmet Kitchen',
    views: '420K views',
    duration: '25:30'
  },
  {
    id: '6',
    thumbnail: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3',
    title: 'Smart Fitness Analysis',
    creator: 'AI Trainer Pro',
    views: '980K views',
    duration: '45:12'
  },
  {
    id: '7',
    thumbnail: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3',
    title: 'AI Marketing Strategies 2024',
    creator: 'Business Insider',
    views: '330K views',
    duration: '28:45'
  },
  {
    id: '8',
    thumbnail: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3',
    title: 'Neural Art Generation Tutorial',
    creator: 'Creative AI',
    views: '280K views',
    duration: '19:18'
  }
];

function App() {
  const renderPage = () => {
    switch (CURRENT_PAGE) {
      case 'dashboard':
        return <Dashboard />;
      case 'upload':
        return <Upload />;
      default:
        return (
          <>
            <Navbar />
            <Hero />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
              <VideoGrid title="AI-Enhanced Trending" videos={trendingVideos} />
              <PremiumAd />
              <VideoGrid title="AI Recommendations" videos={aiRecommendations} />
              <section className="py-16">
                <h2 className="text-3xl font-bold text-white mb-8">AI-Powered Premium Plans</h2>
                <SubscriptionPlans />
              </section>
            </main>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {renderPage()}
    </div>
  );
}

export default App;