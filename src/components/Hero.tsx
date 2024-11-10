import React, { useState, useEffect, useCallback } from 'react';
import { Play, Info, ChevronLeft, ChevronRight, Star, Clock, TrendingUp } from 'lucide-react';

const featuredContent = [
  {
    id: 1,
    title: "The Last Kingdom",
    description: "An epic saga of warriors, conquest, and destiny",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3",
    rating: "4.8",
    duration: "45m",
    genre: "Action, Drama",
    trending: true,
    gradient: "from-purple-900/80"
  },
  {
    id: 2,
    title: "Nature's Symphony",
    description: "Experience the untold stories of wildlife",
    image: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?ixlib=rb-4.0.3",
    rating: "4.5",
    duration: "1h 20m",
    genre: "Documentary",
    trending: true,
    gradient: "from-blue-900/80"
  },
  {
    id: 3,
    title: "Urban Legends",
    description: "Mystery meets reality in this thrilling series",
    image: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixlib=rb-4.0.3",
    rating: "4.7",
    duration: "55m",
    genre: "Mystery, Thriller",
    trending: false,
    gradient: "from-red-900/80"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div 
      className="relative h-[85vh] w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {featuredContent.map((content, index) => (
        <div
          key={content.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={content.image}
              alt={content.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${content.gradient} via-black/50 to-transparent`} />
          </div>
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              {content.trending && (
                <div className="flex items-center space-x-2 text-red-500 mb-4">
                  <TrendingUp className="h-5 w-5" />
                  <span className="text-sm font-semibold">Trending Now</span>
                </div>
              )}
              
              <h1 className="text-5xl md:text-7xl font-bold text-white max-w-3xl mb-4">
                {content.title}
              </h1>
              
              <div className="flex items-center space-x-4 text-white mb-6">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span>{content.rating}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{content.duration}</span>
                </div>
                <span className="text-gray-300">{content.genre}</span>
              </div>
              
              <p className="text-xl text-gray-300 max-w-2xl mb-8">
                {content.description}
              </p>
              
              <div className="flex space-x-4">
                <button className="flex items-center px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Now
                </button>
                <button className="flex items-center px-8 py-4 bg-gray-800/80 text-white rounded-lg hover:bg-gray-700/80 transition">
                  <Info className="h-5 w-5 mr-2" />
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {featuredContent.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-red-600 w-8' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}