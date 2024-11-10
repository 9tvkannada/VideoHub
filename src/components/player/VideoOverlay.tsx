import React from 'react';
import { Heart, Share2, Play } from 'lucide-react';

interface VideoOverlayProps {
  isVisible: boolean;
  title: string;
  creator: string;
  views: number;
  likes: number;
  isLiked: boolean;
  onLike: () => void;
  onShare: () => void;
}

export default function VideoOverlay({
  isVisible,
  title,
  creator,
  views,
  likes,
  isLiked,
  onLike,
  onShare
}: VideoOverlayProps) {
  return (
    <div
      className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 bg-red-600/80 rounded-full flex items-center justify-center">
          <Play className="h-10 w-10 text-white" />
        </div>
      </button>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-300">{creator}</p>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
              <span>{views.toLocaleString()} views</span>
              <span>{likes.toLocaleString()} likes</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={onLike}
              className={`p-2 rounded-full ${
                isLiked ? 'bg-red-600 text-white' : 'bg-gray-800/80 text-gray-300'
              } hover:bg-red-700 transition-colors`}
            >
              <Heart className="h-6 w-6" />
            </button>
            <button
              onClick={onShare}
              className="p-2 bg-gray-800/80 rounded-full text-gray-300 hover:bg-gray-700/80 transition-colors"
            >
              <Share2 className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}