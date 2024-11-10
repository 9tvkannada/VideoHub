import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

const securityLogs = [
  {
    type: 'warning',
    message: 'Multiple failed login attempts detected',
    location: 'United States',
    time: '2 minutes ago'
  },
  {
    type: 'success',
    message: 'System security update completed',
    location: 'System',
    time: '1 hour ago'
  },
  {
    type: 'info',
    message: 'New device authentication',
    location: 'Germany',
    time: '3 hours ago'
  }
];

export default function SecurityLog() {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center">
          <Shield className="h-5 w-5 mr-2 text-blue-500" />
          Security Log
        </h2>
        <button className="text-sm text-gray-400 hover:text-white">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {securityLogs.map((log, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-lg"
          >
            <div className="p-2 bg-yellow-500/20 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">{log.message}</p>
              <div className="flex items-center mt-1 text-sm text-gray-400">
                <span>{log.location}</span>
                <span className="mx-2">•</span>
                <span>{log.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}