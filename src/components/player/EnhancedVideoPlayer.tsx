import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Settings, Sparkles, Share2, Heart, Download } from 'lucide-react';
import VideoControls from './VideoControls';
import VideoQualitySelector from './VideoQualitySelector';
import AIEnhancementPanel from './AIEnhancementPanel';
import VideoOverlay from './VideoOverlay';
import { VideoSource, VideoQuality } from '../../types/player';

interface EnhancedVideoPlayerProps {
  sources: VideoSource[];
  poster?: string;
  title: string;
  creator: string;
  views: number;
  likes: number;
  autoplay?: boolean;
  allowDownload?: boolean;
  showAIFeatures?: boolean;
}

export default function EnhancedVideoPlayer({
  sources,
  poster,
  title,
  creator,
  views,
  likes,
  autoplay = false,
  allowDownload = false,
  showAIFeatures = true
}: EnhancedVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [selectedQuality, setSelectedQuality] = useState<VideoQuality>('auto');
  const [showAIPanel, setShowAIPanel] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    
    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('play', () => setIsPlaying(true));
    video.addEventListener('pause', () => setIsPlaying(false));
    
    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('play', () => setIsPlaying(true));
      video.removeEventListener('pause', () => setIsPlaying(false));
    };
  }, []);

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
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

  const handleQualityChange = (quality: VideoQuality) => {
    const currentTime = videoRef.current?.currentTime || 0;
    setSelectedQuality(quality);
    if (videoRef.current) {
      videoRef.current.currentTime = currentTime;
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: `Check out "${title}" by ${creator}`,
          url: window.location.href
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  return (
    <div 
      className="relative bg-black rounded-lg overflow-hidden group"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        className="w-full aspect-video"
        poster={poster}
        autoPlay={autoplay}
        onClick={togglePlay}
      >
        {sources.map((source, index) => (
          <source key={index} src={source.src} type={source.type} />
        ))}
      </video>

      <VideoOverlay
        isVisible={!isPlaying || showControls}
        title={title}
        creator={creator}
        views={views}
        likes={likes}
        isLiked={isLiked}
        onLike={() => setIsLiked(!isLiked)}
        onShare={handleShare}
      />

      <VideoControls
        isVisible={showControls}
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
            // Apply AI video effects
            console.log('Applying effect:', effect);
          }}
        />
      )}

      <div className="absolute top-4 left-4 z-20 flex space-x-2">
        <VideoQualitySelector
          qualities={sources.map(s => s.quality).filter(Boolean) as VideoQuality[]}
          selectedQuality={selectedQuality}
          onQualityChange={handleQualityChange}
        />

        {allowDownload && (
          <button
            onClick={() => {
              const link = document.createElement('a');
              link.href = sources[0].src;
              link.download = title;
              link.click();
            }}
            className="p-2 bg-gray-800/80 rounded-lg text-white hover:bg-gray-700/80 transition-colors"
          >
            <Download className="h-5 w-5" />
          </button>
        )}
      </div>

      {showShareMenu && (
        <div className="absolute top-4 right-16 bg-gray-900/95 rounded-lg p-4 z-20">
          <div className="flex space-x-4">
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Share2 className="h-5 w-5 text-white" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Heart className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}