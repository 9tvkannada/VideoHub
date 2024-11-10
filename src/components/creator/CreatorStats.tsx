import React from 'react';
import { Eye, ThumbsUp, MessageCircle, TrendingUp } from 'lucide-react';

const stats = [
  {
    title: 'Total Views',
    value: '1.2M',
    change: '+12.5%',
    icon: Eye,
    color: 'text-blue-500'
  },
  {
    title: 'Total Likes',
    value: '45.6K',
    change: '+8.2%',
    icon: ThumbsUp,
    color: 'text-green-500'
  },
  {
    title: 'Comments',
    value: '12.3K',
    change: '+15.8%',
    icon: MessageCircle,
    color: 'text-purple-500'
  },
  {
    title: 'Watch Time',
    value: '256K hrs',
    change: '+10.3%',
    icon: TrendingUp,
    color: 'text-yellow-500'
  }
];

export default function CreatorStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-gray-700 rounded-lg">
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <span className="text-green-500 text-sm">{stat.change}</span>
          </div>
          <h3 className="text-2xl font-bold text-white mt-4">{stat.value}</h3>
          <p className="text-gray-400 text-sm">{stat.title}</p>
        </div>
      ))}
    </div>
  );
}