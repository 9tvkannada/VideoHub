import React from 'react';
import { MoreVertical, Edit2, Trash2, Eye, PauseCircle, PlayCircle } from 'lucide-react';

const campaigns = [
  {
    id: 1,
    name: 'Summer Sale Promotion',
    status: 'active',
    budget: '$5,000',
    spent: '$3,245',
    impressions: '245K',
    clicks: '12.3K',
    ctr: '5.02%'
  },
  {
    id: 2,
    name: 'Product Launch Campaign',
    status: 'paused',
    budget: '$10,000',
    spent: '$4,567',
    impressions: '180K',
    clicks: '8.9K',
    ctr: '4.94%'
  }
];

export default function AdCampaignsList() {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden">
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-xl font-bold text-white">Active Campaigns</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-700/50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Campaign
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Budget
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Spent
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Impressions
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Clicks
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                CTR
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {campaigns.map((campaign) => (
              <tr key={campaign.id} className="hover:bg-gray-700/50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-white">{campaign.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    campaign.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {campaign.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {campaign.budget}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {campaign.spent}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {campaign.impressions}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {campaign.clicks}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {campaign.ctr}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-2">
                    <button className="p-1 hover:bg-gray-600 rounded">
                      {campaign.status === 'active' ? (
                        <PauseCircle className="h-5 w-5 text-gray-400" />
                      ) : (
                        <PlayCircle className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                    <button className="p-1 hover:bg-gray-600 rounded">
                      <Eye className="h-5 w-5 text-gray-400" />
                    </button>
                    <button className="p-1 hover:bg-gray-600 rounded">
                      <Edit2 className="h-5 w-5 text-gray-400" />
                    </button>
                    <button className="p-1 hover:bg-gray-600 rounded">
                      <Trash2 className="h-5 w-5 text-gray-400" />
                    </button>
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