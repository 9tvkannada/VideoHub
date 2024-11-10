import React, { useState, useEffect } from 'react';
import { Search, Mic, Menu, X, User, Bell } from 'lucide-react';
import GenreMenu from './navigation/GenreMenu';
import LanguageSelector from './navigation/LanguageSelector';
import SearchVoice from './navigation/SearchVoice';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showVoiceSearch, setShowVoiceSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/80 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-red-600 text-2xl font-bold">VideoHub</span>
            </div>
            
            <GenreMenu />
          </div>

          <div className="flex items-center space-x-4">
            <div className={`relative ${isSearchOpen ? 'w-64' : 'w-auto'}`}>
              {isSearchOpen ? (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search movies, shows..."
                    className="w-full bg-gray-800 text-white pl-10 pr-12 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <button
                    onClick={() => setShowVoiceSearch(true)}
                    className="absolute right-3 top-2.5"
                  >
                    <Mic className="h-5 w-5 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 hover:bg-gray-800 rounded-full"
                >
                  <Search className="h-5 w-5 text-white" />
                </button>
              )}
            </div>

            <button className="p-2 hover:bg-gray-800 rounded-full">
              <Bell className="h-5 w-5 text-white" />
            </button>
            
            <button className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded-lg">
              <User className="h-5 w-5 text-white" />
              <span className="hidden md:inline text-white text-sm">Login</span>
            </button>

            <button
              className="md:hidden p-2 hover:bg-gray-800 rounded-full"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {showVoiceSearch && <SearchVoice onClose={() => setShowVoiceSearch(false)} />}
    </nav>
  );
}