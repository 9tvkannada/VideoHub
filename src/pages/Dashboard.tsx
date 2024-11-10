import React from 'react';
import { Eye, DollarSign, Users, Clock } from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import AnalyticsCard from '../components/dashboard/AnalyticsCard';
import type { Analytics } from '../types';

const analytics: Analytics = {
  views: 1234567,
  watchTime: 45678,
  revenue: 2345.67,
  subscribers: 98765,
  topCountries: [
    { country: 'United States', views: 450000 },
    { country: 'United Kingdom', views: 125000 },
    { country: 'Canada', views: 95000 },
  ]
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <Sidebar />
      <main className="ml-64 p-8">
        <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <AnalyticsCard
            title="Total Views"
            value={analytics.views.toLocaleString()}
            change={12.5}
            icon={<Eye className="h-6 w-6 text-blue-500" />}
          />
          <AnalyticsCard
            title="Watch Time (hrs)"
            value={analytics.watchTime.toLocaleString()}
            change={8.2}
            icon={<Clock className="h-6 w-6 text-green-500" />}
          />
          <AnalyticsCard
            title="Revenue"
            value={`$${analytics.revenue.toLocaleString()}`}
            change={-2.4}
            icon={<DollarSign className="h-6 w-6 text-yellow-500" />}
          />
          <AnalyticsCard
            title="Subscribers"
            value={analytics.subscribers.toLocaleString()}
            change={15.8}
            icon={<Users className="h-6 w-6 text-purple-500" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Recent Videos</h2>
            {/* Video list component would go here */}
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Top Countries</h2>
            {/* Geographic data visualization would go here */}
          </div>
        </div>
      </main>
    </div>
  );
}