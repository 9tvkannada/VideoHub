import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Settings, Download, Sparkles } from 'lucide-react';
import VideoControls from './VideoControls';
import VideoQualitySelector from './VideoQualitySelector';
import AIEnhancementPanel from './AIEnhancementPanel';
import { VideoSource, VideoQuality } from '../../types/player';

interface VideoPlayerProps {
  sources: VideoSource[];
  poster?: string;
  autoplay?: boolean;
  allowDownload?: boolean;
  showAIFeatures?: boolean;
}

export default function VideoPlayer({ 
  sources, 
  poster, 
  autoplay = false,
  allowDownload = false,
  showAIFeatures = true 
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState<VideoQuality>('auto');
  const [showAIPanel, setShowAIPanel] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    
    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    
    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="relative bg-black rounded-lg overflow-hidden group">
      <video
        ref={videoRef}
        className="w-full aspect-video"
        poster={poster}
        autoPlay={autoplay}
      >
        {sources.map((source, index) => (
          <source key={index} src={source.src} type={source.type} />
        ))}
      </video>

      <VideoControls
        isPlaying={isPlaying}
        isMuted={isMuted}
        volume={volume}
        currentTime={currentTime}
        duration={duration}
        onPlayPause={togglePlay}
        onMute={toggleMute}
        onVolumeChange={handleVolumeChange}
        onFullscreen={toggleFullscreen}
        onTimeUpdate={(time) => {
          if (videoRef.current) {
            videoRef.current.currentTime = time;
          }
        }}
      />

      {showAIFeatures && (
        <button
          onClick={() => setShowAIPanel(!showAIPanel)}
          className="absolute top-4 right-4 p-2 bg-purple-600/80 rounded-lg text-white hover:bg-purple-700/80 transition-colors z-20"
        >
          <Sparkles className="h-5 w-5" />
        </button>
      )}

      {showAIPanel && (
        <AIEnhancementPanel
          onClose={() => setShowAIPanel(false)}
          onApplyEffect={(effect) => {
            // Apply AI video effects here
            console.log('Applying effect:', effect);
          }}
        />
      )}

      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <VideoQualitySelector
          qualities={sources.map(s => s.quality).filter(Boolean) as VideoQuality[]}
          selectedQuality={selectedQuality}
          onQualityChange={setSelectedQuality}
        />
      </div>
    </div>
  );
}