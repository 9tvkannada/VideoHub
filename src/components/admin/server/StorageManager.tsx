import React from 'react';
import { HardDrive, Cloud, Database, Upload } from 'lucide-react';

interface StorageProvider {
  id: string;
  name: string;
  enabled: boolean;
  usage: string;
}

interface StorageManagerProps {
  providers: StorageProvider[];
}

export default function StorageManager({ providers }: StorageManagerProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center">
          <HardDrive className="h-5 w-5 mr-2 text-green-500" />
          Storage Manager
        </h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
          Add Storage
        </button>
      </div>

      <div className="space-y-4">
        {providers.map((provider) => (
          <div key={provider.id} className="bg-gray-700/50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Cloud className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-white">{provider.name}</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={provider.enabled}
                  onChange={() => {}}
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Storage Usage</span>
              <span className="text-white">{provider.usage}</span>
            </div>
            <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full"
                style={{
                  width: `${(parseInt(provider.usage) / parseInt(provider.usage.split('/')[1])) * 100}%`
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-700/30 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold">Quick Actions</h3>
          <button className="text-blue-400 text-sm hover:text-blue-300">
            View All
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center space-x-2 bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition">
            <Upload className="h-5 w-5 text-gray-400" />
            <span className="text-gray-300">Upload Files</span>
          </button>
          <button className="flex items-center justify-center space-x-2 bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition">
            <Database className="h-5 w-5 text-gray-400" />
            <span className="text-gray-300">Optimize</span>
          </button>
        </div>
      </div>
    </div>
  );
}