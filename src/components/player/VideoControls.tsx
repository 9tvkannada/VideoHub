import React from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Settings } from 'lucide-react';
import ProgressBar from './ProgressBar';

interface VideoControlsProps {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  currentTime: number;
  duration: number;
  onPlayPause: () => void;
  onMute: () => void;
  onVolumeChange: (volume: number) => void;
  onFullscreen: () => void;
  onTimeUpdate: (time: number) => void;
}

export default function VideoControls({
  isPlaying,
  isMuted,
  volume,
  currentTime,
  duration,
  onPlayPause,
  onMute,
  onVolumeChange,
  onFullscreen,
  onTimeUpdate
}: VideoControlsProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        onTimeUpdate={onTimeUpdate}
      />
      
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center space-x-4">
          <button
            onClick={onPlayPause}
            className="text-white hover:text-red-500 transition"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6" />
            )}
          </button>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={onMute}
              className="text-white hover:text-red-500 transition"
            >
              {isMuted ? (
                <VolumeX className="h-6 w-6" />
              ) : (
                <Volume2 className="h-6 w-6" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
              className="w-20"
            />
          </div>
          
          <div className="text-white text-sm">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={onFullscreen}
            className="text-white hover:text-red-500 transition"
          >
            <Maximize className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}