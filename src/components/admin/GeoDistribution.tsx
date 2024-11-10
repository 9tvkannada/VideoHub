import React from 'react';
import { Globe } from 'lucide-react';

const countryData = [
  { country: 'United States', users: 45678, revenue: '$234,567', color: 'bg-blue-500' },
  { country: 'United Kingdom', users: 23456, revenue: '$123,456', color: 'bg-green-500' },
  { country: 'Germany', users: 12345, revenue: '$98,765', color: 'bg-yellow-500' },
  { country: 'France', users: 9876, revenue: '$87,654', color: 'bg-purple-500' },
  { country: 'Japan', users: 8765, revenue: '$76,543', color: 'bg-red-500' }
];

export default function GeoDistribution() {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center">
          <Globe className="h-5 w-5 mr-2 text-blue-500" />
          Geographic Distribution
        </h2>
        <select className="bg-gray-700 text-white text-sm rounded-lg px-3 py-1.5">
          <option>All Time</option>
          <option>Last Month</option>
          <option>Last Week</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="text-left py-3">Country</th>
              <th className="text-left py-3">Users</th>
              <th className="text-left py-3">Revenue</th>
              <th className="text-left py-3">Distribution</th>
            </tr>
          </thead>
          <tbody>
            {countryData.map((item, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="py-4">
                  <span className="text-white">{item.country}</span>
                </td>
                <td className="py-4">
                  <span className="text-white">{item.users.toLocaleString()}</span>
                </td>
                <td className="py-4">
                  <span className="text-white">{item.revenue}</span>
                </td>
                <td className="py-4">
                  <div className="flex items-center">
                    <div className={`h-2 rounded-full w-24 ${item.color}`} />
                    <span className="ml-2 text-gray-400">
                      {Math.round((item.users / 100000) * 100)}%
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