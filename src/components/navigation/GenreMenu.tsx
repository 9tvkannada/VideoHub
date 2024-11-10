import React, { useState } from 'react';
import { Film, Tv, TrendingUp, Clock, Baby, Theater, Heart } from 'lucide-react';

const genres = [
  { id: 'action', name: 'Action', icon: Film },
  { id: 'adventure', name: 'Adventure', icon: Film },
  { id: 'animation', name: 'Animation', icon: Film },
  { id: 'biography', name: 'Biography', icon: Film },
  { id: 'comedy', name: 'Comedy', icon: Film },
  { id: 'crime', name: 'Crime & Thriller', icon: Film },
  { id: 'drama', name: 'Drama', icon: Film },
  { id: 'family', name: 'Family', icon: Film },
  { id: 'fantasy', name: 'Fantasy', icon: Film },
  { id: 'history', name: 'History', icon: Film },
  { id: 'horror', name: 'Horror', icon: Film },
  { id: 'musical', name: 'Musical', icon: Film },
  { id: 'romantic', name: 'Romantic', icon: Heart }
];

const categories = [
  { id: 'movies', name: 'Movies', icon: Film },
  { id: 'series', name: 'Web Series', icon: Tv },
  { id: 'trending', name: 'Trending', icon: TrendingUp },
  { id: 'short', name: 'Short Films', icon: Clock },
  { id: 'kids', name: 'Kids', icon: Baby },
  { id: 'theater', name: 'Theater', icon: Theater }
];

export default function GenreMenu() {
  const [activeCategory, setActiveCategory] = useState('');

  return (
    <div className="hidden md:flex items-center ml-10 space-x-8">
      {categories.map((category) => (
        <div key={category.id} className="relative group">
          <button
            className="flex items-center text-gray-300 hover:text-white transition-colors"
            onMouseEnter={() => setActiveCategory(category.id)}
          >
            <category.icon className="h-4 w-4 mr-2" />
            {category.name}
          </button>

          {activeCategory === category.id && (
            <div
              className="absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl py-2"
              onMouseLeave={() => setActiveCategory('')}
            >
              {genres.map((genre) => (
                <a
                  key={genre.id}
                  href={`/genre/${genre.id}`}
                  className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                >
                  <genre.icon className="h-4 w-4 mr-2" />
                  {genre.name}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}