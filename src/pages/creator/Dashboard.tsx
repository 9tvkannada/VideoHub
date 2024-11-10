import React, { useState } from 'react';
import { Layout, Video, BarChart2, DollarSign, Settings, Users, MessageCircle, Upload, Star, Filter } from 'lucide-react';
import CreatorSidebar from '../../components/creator/CreatorSidebar';
import VideoGrid from '../../components/creator/VideoGrid';
import UploadModal from '../../components/creator/UploadModal';
import CreatorStats from '../../components/creator/CreatorStats';
import VideoFilters from '../../components/creator/VideoFilters';

const mockVideos = [
  {
    id: '1',
    thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    title: 'The Ultimate Guide to Filmmaking',
    status: 'published',
    visibility: 'public',
    views: '1.2K',
    likes: 245,
    comments: 89,
    uploadDate: '2024-02-15',
    duration: '15:24'
  },
  {
    id: '2',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4',
    title: 'Behind the Scenes: Movie Production',
    status: 'processing',
    visibility: 'private',
    views: '892',
    likes: 156,
    comments: 45,
    uploadDate: '2024-02-14',
    duration: '21:15'
  }
];

export default function CreatorDashboard() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-900">
      <CreatorSidebar />
      
      <main className="ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Creator Studio</h1>
          <button
            onClick={() => setIsUploadModalOpen(true)}
            className="flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
          >
            <Upload className="h-5 w-5 mr-2" />
            Upload Video
          </button>
        </div>

        <CreatorStats />

        <div className="mt-8">
          <VideoFilters
            selectedFilter={selectedFilter}
            onFilterChange={setSelectedFilter}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <VideoGrid
            videos={mockVideos}
            onEdit={(id) => console.log('Edit video:', id)}
            onDelete={(id) => console.log('Delete video:', id)}
          />
        </div>

        {isUploadModalOpen && (
          <UploadModal
            onClose={() => setIsUploadModalOpen(false)}
            onUploadComplete={(videoData) => {
              console.log('Upload complete:', videoData);
              setIsUploadModalOpen(false);
            }}
          />
        )}
      </main>
    </div>
  );
}