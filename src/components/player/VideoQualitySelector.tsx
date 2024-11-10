import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import type { VideoQuality } from '../../types/player';

interface VideoQualitySelectorProps {
  qualities: VideoQuality[];
  selectedQuality: VideoQuality;
  onQualityChange: (quality: VideoQuality) => void;
}

export default function VideoQualitySelector({
  qualities,
  selectedQuality,
  onQualityChange
}: VideoQualitySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-black/60 hover:bg-black/80 text-white px-3 py-1.5 rounded-lg transition-colors"
      >
        <Settings className="h-4 w-4" />
        <span className="text-sm">{selectedQuality}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-black/90 rounded-lg overflow-hidden">
          {qualities.map((quality) => (
            <button
              key={quality}
              onClick={() => {
                onQualityChange(quality);
                setIsOpen(false);
              }}
              className={`block w-full px-4 py-2 text-sm text-left hover:bg-gray-700/50 transition-colors ${
                quality === selectedQuality ? 'text-red-500' : 'text-white'
              }`}
            >
              {quality}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}