export type VideoQuality = 'auto' | '4k' | '1080p' | '720p' | '480p' | '360p';

export interface VideoSource {
  src: string;
  type: string;
  quality?: VideoQuality;
}

export interface PlaylistItem {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  sources: VideoSource[];
}

export interface Playlist {
  id: string;
  title: string;
  items: PlaylistItem[];
}