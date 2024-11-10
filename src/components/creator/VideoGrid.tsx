import React from 'react';
import { MoreVertical, Edit2, Trash2, Eye, Globe, Lock } from 'lucide-react';

interface Video {
  id: string;
  thumbnail: string;
  title: string;
  status: 'published' | 'processing' | 'draft';
  visibility: 'public' | 'private' | 'unlisted';
  views: string;
  likes: number;
  comments: number;
  uploadDate: string;
  duration: string;
}

interface VideoGridProps {
  videos: Video[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function VideoGrid({ videos, onEdit, onDelete }: VideoGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {videos.map((video) => (
        <div
          key={video.id}
          className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors"
        >
          <div className="flex items-center p-4">
            <div className="relative w-48 h-27 rounded-lg overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
                {video.duration}
              </span>
            </div>

            <div className="flex-1 ml-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                  <div className="flex items-center mt-2 space-x-4">
                    <span className="text-sm text-gray-400">{video.uploadDate}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      video.status === 'published' ? 'bg-green-500/20 text-green-400' :
                      video.status === 'processing' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {video.status.charAt(0).toUpperCase() + video.status.slice(1)}
                    </span>
                    <span className="flex items-center text-gray-400">
                      {video.visibility === 'public' ? (
                        <Globe className="h-4 w-4 mr-1" />
                      ) : (
                        <Lock className="h-4 w-4 mr-1" />
                      )}
                      {video.visibility.charAt(0).toUpperCase() + video.visibility.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onEdit(video.id)}
                    className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <Edit2 className="h-5 w-5 text-gray-400" />
                  </button>
                  <button
                    onClick={() => onDelete(video.id)}
                    className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-6 mt-4">
                <div className="flex items-center text-gray-400">
                  <Eye className="h-4 w-4 mr-1" />
                  <span>{video.views} views</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <span>{video.likes} likes</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <span>{video.comments} comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}