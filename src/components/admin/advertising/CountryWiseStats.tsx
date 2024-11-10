import React from 'react';
import { Globe } from 'lucide-react';

const countryStats = [
  {
    country: 'United States',
    impressions: '450K',
    clicks: '23.5K',
    ctr: '5.22%',
    revenue: '$12,450',
    color: 'bg-blue-500'
  },
  {
    country: 'United Kingdom',
    impressions: '280K',
    clicks: '14.2K',
    ctr: '5.07%',
    revenue: '$8,320',
    color: 'bg-green-500'
  },
  {
    country: 'Germany',
    impressions: '195K',
    clicks: '9.8K',
    ctr: '5.03%',
    revenue: '$5,670',
    color: 'bg-yellow-500'
  },
  {
    country: 'France',
    impressions: '165K',
    clicks: '8.1K',
    ctr: '4.91%',
    revenue: '$4,890',
    color: 'bg-purple-500'
  }
];

export default function CountryWiseStats() {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center">
          <Globe className="h-5 w-5 mr-2 text-blue-500" />
          Country Performance
        </h2>
        <select className="bg-gray-700 text-white text-sm rounded-lg px-3 py-1.5">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="text-left py-3">Country</th>
              <th className="text-left py-3">Impressions</th>
              <th className="text-left py-3">Clicks</th>
              <th className="text-left py-3">CTR</th>
              <th className="text-left py-3">Revenue</th>
              <th className="text-left py-3">Distribution</th>
            </tr>
          </thead>
          <tbody>
            {countryStats.map((stat, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="py-4">
                  <span className="text-white">{stat.country}</span>
                </td>
                <td className="py-4">
                  <span className="text-white">{stat.impressions}</span>
                </td>
                <td className="py-4">
                  <span className="text-white">{stat.clicks}</span>
                </td>
                <td className="py-4">
                  <span className="text-white">{stat.ctr}</span>
                </td>
                <td className="py-4">
                  <span className="text-white">{stat.revenue}</span>
                </td>
                <td className="py-4">
                  <div className="flex items-center">
                    <div className={`h-2 rounded-full w-24 ${stat.color}`} />
                    <span className="ml-2 text-gray-400">
                      {Math.round((parseInt(stat.impressions) / 1090000) * 100)}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}