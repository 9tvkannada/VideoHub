import React from 'react';
import { 
  Layout, 
  Video, 
  BarChart2, 
  DollarSign, 
  Settings, 
  Users, 
  MessageCircle,
  Upload,
  Star
} from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { icon: Layout, label: 'Overview', path: '/dashboard' },
    { icon: Video, label: 'Content', path: '/dashboard/content' },
    { icon: Upload, label: 'Upload', path: '/dashboard/upload' },
    { icon: BarChart2, label: 'Analytics', path: '/dashboard/analytics' },
    { icon: DollarSign, label: 'Revenue', path: '/dashboard/revenue' },
    { icon: Star, label: 'Subscriptions', path: '/dashboard/subscriptions' },
    { icon: MessageCircle, label: 'Comments', path: '/dashboard/comments' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  return (
    <div className="w-64 bg-gray-900 h-screen fixed left-0 top-16 p-4">
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
  );
}