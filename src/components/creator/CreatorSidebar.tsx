import React from 'react';
import { Layout, Video, BarChart2, DollarSign, Settings, Users, MessageCircle, Upload, Star } from 'lucide-react';

const menuItems = [
  { icon: Layout, label: 'Dashboard', path: '/creator' },
  { icon: Video, label: 'Content', path: '/creator/content' },
  { icon: Upload, label: 'Upload', path: '/creator/upload' },
  { icon: BarChart2, label: 'Analytics', path: '/creator/analytics' },
  { icon: DollarSign, label: 'Monetization', path: '/creator/monetization' },
  { icon: Users, label: 'Audience', path: '/creator/audience' },
  { icon: MessageCircle, label: 'Comments', path: '/creator/comments' },
  { icon: Star, label: 'Channel', path: '/creator/channel' },
  { icon: Settings, label: 'Settings', path: '/creator/settings' }
];

export default function CreatorSidebar() {
  return (
    <div className="fixed left-0 top-0 w-64 h-screen bg-gray-900 border-r border-gray-800">
      <div className="p-6">
        <h2 className="text-xl font-bold text-white mb-6">Creator Studio</h2>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="flex items-center space-x-3 text-gray-300 hover:bg-gray-800 px-4 py-3 rounded-lg transition-colors"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}