import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import VideoUpload from '../components/dashboard/VideoUpload';

export default function Upload() {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <Sidebar />
      <main className="ml-64 p-8">
        <h1 className="text-3xl font-bold text-white mb-8">Upload Video</h1>
        
        <div className="max-w-3xl">
          <VideoUpload />
          
          <div className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Title
              </label>
              <input
                type="text"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter video title"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description
              </label>
              <textarea
                rows={4}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter video description"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tags
              </label>
              <input
                type="text"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Add tags (comma separated)"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Visibility
              </label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="public">Public</option>
                <option value="unlisted">Unlisted</option>
                <option value="private">Private</option>
              </select>
            </div>
            
            <button className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition">
              Upload Video
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}