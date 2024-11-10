import React from 'react';
import EnhancedVideoPlayer from '../components/player/EnhancedVideoPlayer';
import RelatedVideos from '../components/video/RelatedVideos';
import VideoComments from '../components/video/VideoComments';
import CreatorCard from '../components/video/CreatorCard';

const demoVideo = {
  sources: [
    { src: 'https://example.com/video-1080p.mp4', type: 'video/mp4', quality: '1080p' },
    { src: 'https://example.com/video-720p.mp4', type: 'video/mp4', quality: '720p' },
    { src: 'https://example.com/video-480p.mp4', type: 'video/mp4', quality: '480p' }
  ],
  poster: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
  title: 'The Ultimate Guide to Video Creation',
  creator: 'Creative Studio Pro',
  views: 128945,
  likes: 12543,
  description: `Learn the secrets of professional video creation in this comprehensive guide. 
  We'll cover everything from pre-production planning to post-production effects.`,
  createdAt: new Date('2024-02-15')
};

export default function VideoPage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-xl overflow-hidden">
              <EnhancedVideoPlayer
                sources={demoVideo.sources}
                poster={demoVideo.poster}
                title={demoVideo.title}
                creator={demoVideo.creator}
                views={demoVideo.views}
                likes={demoVideo.likes}
                showAIFeatures={true}
                allowDownload={true}
              />
            </div>

            <div className="mt-6">
              <h1 className="text-2xl font-bold text-white mb-2">
                {demoVideo.title}
              </h1>
              <div className="flex items-center justify-between">
                <div className="text-gray-400">
                  {demoVideo.views.toLocaleString()} views •{' '}
                  {new Date(demoVideo.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <CreatorCard
                name={demoVideo.creator}
                subscribers={256000}
                avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                description="Professional video creation tutorials and tips"
              />
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-white mb-4">Description</h2>
              <p className="text-gray-400 whitespace-pre-line">
                {demoVideo.description}
              </p>
            </div>

            <div className="mt-8">
              <VideoComments videoId="demo" />
            </div>
          </div>

          <div>
            <RelatedVideos />
          </div>
        </div>
      </div>
    </div>
  );
}