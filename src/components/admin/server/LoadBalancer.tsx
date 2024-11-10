import React from 'react';
import { Network, Zap, Shield, RefreshCw } from 'lucide-react';

interface LoadBalancerProps {
  enabled: boolean;
  onToggle: () => void;
}

export default function LoadBalancer({ enabled, onToggle }: LoadBalancerProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center">
          <Network className="h-5 w-5 mr-2 text-blue-500" />
          Load Balancer
        </h2>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            onChange={onToggle}
          />
          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-700/50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Zap className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-white">Auto Scaling</span>
            </div>
            <span className="text-green-500">Active</span>
          </div>
          <div className="text-sm text-gray-400">
            Automatically scales resources based on demand
          </div>
        </div>

        <div className="bg-gray-700/50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-white">DDoS Protection</span>
            </div>
            <span className="text-green-500">Active</span>
          </div>
          <div className="text-sm text-gray-400">
            Advanced protection against DDoS attacks
          </div>
        </div>

        <div className="bg-gray-700/50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <RefreshCw className="h-5 w-5 text-purple-500 mr-2" />
              <span className="text-white">Health Checks</span>
            </div>
            <span className="text-green-500">Active</span>
          </div>
          <div className="text-sm text-gray-400">
            Continuous monitoring of server health
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="bg-blue-500/10 p-4 rounded-lg">
          <h3 className="text-blue-400 font-semibold mb-2">Current Status</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Active Connections</span>
              <span className="text-white">1.2M</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Response Time</span>
              <span className="text-white">45ms</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Success Rate</span>
              <span className="text-white">99.99%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}