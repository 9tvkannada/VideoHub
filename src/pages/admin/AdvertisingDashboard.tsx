import React from 'react';
import { BarChart2, TrendingUp, Target, Users, DollarSign } from 'lucide-react';
import AdminLayout from '../../components/layouts/AdminLayout';
import AdPerformanceChart from '../../components/admin/advertising/AdPerformanceChart';
import AdCampaignsList from '../../components/admin/advertising/AdCampaignsList';
import CountryWiseStats from '../../components/admin/advertising/CountryWiseStats';
import PricingPlans from '../../components/admin/advertising/PricingPlans';

export default function AdvertisingDashboard() {
  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Advertising Dashboard</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Create Campaign
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Revenue</p>
                <h3 className="text-2xl font-bold text-white mt-1">$45,231</h3>
                <p className="text-green-500 text-sm mt-1">+12.5% from last month</p>
              </div>
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <DollarSign className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Campaigns</p>
                <h3 className="text-2xl font-bold text-white mt-1">24</h3>
                <p className="text-green-500 text-sm mt-1">+3 new this week</p>
              </div>
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <Target className="h-6 w-6 text-purple-500" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Impressions</p>
                <h3 className="text-2xl font-bold text-white mt-1">1.2M</h3>
                <p className="text-green-500 text-sm mt-1">+18.2% from last month</p>
              </div>
              <div className="p-3 bg-green-500/20 rounded-lg">
                <Users className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Average CTR</p>
                <h3 className="text-2xl font-bold text-white mt-1">3.8%</h3>
                <p className="text-red-500 text-sm mt-1">-0.5% from last month</p>
              </div>
              <div className="p-3 bg-red-500/20 rounded-lg">
                <TrendingUp className="h-6 w-6 text-red-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <AdPerformanceChart />
          <CountryWiseStats />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <AdCampaignsList />
          <PricingPlans />
        </div>
      </div>
    </AdminLayout>
  );
}