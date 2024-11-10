import React from 'react';
import { Play, Clock, Heart } from 'lucide-react';

interface Video {
  id: string;
  thumbnail: string;
  title: string;
  creator: string;
  views: string;
  duration: string;
}

interface VideoGridProps {
  title: string;
  videos: Video[];
}

export default function VideoGrid({ title, videos }: VideoGridProps) {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="group relative">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Play className="h-12 w-12 text-white" />
              </div>
              <span className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-sm rounded">
                {video.duration}
              </span>
            </div>
            <div className="mt-3">
              <h3 className="text-white font-semibold line-clamp-2">{video.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{video.creator}</p>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {video.views}
                </span>
                <span className="flex items-center">
                  <Heart className="h-4 w-4 mr-1" />
                  {video.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}