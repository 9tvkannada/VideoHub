import React from 'react';
import { Search, Filter } from 'lucide-react';

interface VideoFiltersProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function VideoFilters({
  selectedFilter,
  onFilterChange,
  searchQuery,
  onSearchChange
}: VideoFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search videos..."
            className="w-64 bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        
        <select
          value={selectedFilter}
          onChange={(e) => onFilterChange(e.target.value)}
          className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="all">All Videos</option>
          <option value="published">Published</option>
          <option value="processing">Processing</option>
          <option value="draft">Drafts</option>
        </select>
      </div>

      <div className="flex items-center space-x-4">
        <select
          className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="popular">Most Popular</option>
          <option value="views">Most Views</option>
        </select>
      </div>
    </div>
  );
}