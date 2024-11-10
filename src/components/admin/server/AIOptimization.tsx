import React from 'react';
import { Brain, Zap, Server, BarChart2 } from 'lucide-react';

interface AIOptimizationProps {
  enabled: boolean;
  onToggle: () => void;
}

export default function AIOptimization({ enabled, onToggle }: AIOptimizationProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center">
          <Brain className="h-5 w-5 mr-2 text-purple-500" />
          AI Optimization
        </h2>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            onChange={onToggle}
          />
          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
        </label>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-700/50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Zap className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-white">Load Prediction</span>
            </div>
            <span className="text-green-500">Active</span>
          </div>
          <div className="text-sm text-gray-400">
            AI predicts server load patterns and adjusts resources automatically
          </div>
        </div>

        <div className="bg-gray-700/50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Server className="h-5 w-5 text-blue-500 mr-2" />
              <span className="text-white">Smart Caching</span>
            </div>
            <span className="text-green-500">Active</span>
          </div>
          <div className="text-sm text-gray-400">
            ML-powered content caching based on user behavior analysis
          </div>
        </div>

        <div className="bg-gray-700/50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <BarChart2 className="h-5 w-5 text-red-500 mr-2" />
              <span className="text-white">Resource Optimization</span>
            </div>
            <span className="text-green-500">Active</span>
          </div>
          <div className="text-sm text-gray-400">
            Dynamic resource allocation based on real-time analytics
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-purple-500/10 rounded-lg">
        <h3 className="text-purple-400 font-semibold mb-2">AI Performance Impact</h3>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Server Load Reduction</span>
          <span className="text-white">-35%</span>
        </div>
        <div className="flex items-center justify-between text-sm mt-2">
          <span className="text-gray-400">Response Time Improvement</span>
          <span className="text-white">+42%</span>
        </div>
      </div>
    </div>
  );
}