import React, { useState } from 'react';
import { Server, Database, Cloud, HardDrive, Activity, AlertTriangle, Settings, BarChart2 } from 'lucide-react';
import AdminLayout from '../../components/layouts/AdminLayout';
import ServerMetrics from '../../components/admin/server/ServerMetrics';
import StorageManager from '../../components/admin/server/StorageManager';
import AIOptimization from '../../components/admin/server/AIOptimization';
import LoadBalancer from '../../components/admin/server/LoadBalancer';

const servers = [
  { id: 'us-east', name: 'US East', status: 'healthy', load: 42, storage: 68, ram: 58 },
  { id: 'eu-west', name: 'EU West', status: 'warning', load: 78, storage: 82, ram: 75 },
  { id: 'ap-south', name: 'Asia Pacific', status: 'healthy', load: 35, storage: 45, ram: 40 }
];

const storageProviders = [
  { id: 's3', name: 'Amazon S3', enabled: true, usage: '4.2TB/5TB' },
  { id: 'do', name: 'DigitalOcean Spaces', enabled: true, usage: '2.8TB/4TB' },
  { id: 'gcs', name: 'Google Cloud Storage', enabled: false, usage: '0TB/2TB' },
  { id: 'ftp', name: 'FTP Storage', enabled: true, usage: '1.5TB/2TB' }
];

export default function ServerManagement() {
  const [activeTab, setActiveTab] = useState('overview');
  const [aiOptimization, setAiOptimization] = useState(true);
  const [loadBalancing, setLoadBalancing] = useState(true);

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Server Management</h1>
          <div className="flex space-x-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
              Add Server
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Configure CDN
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">Total Servers</p>
                <h3 className="text-2xl font-bold text-white mt-1">12</h3>
              </div>
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Server className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">Storage Used</p>
                <h3 className="text-2xl font-bold text-white mt-1">8.5TB</h3>
              </div>
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <Database className="h-6 w-6 text-purple-500" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">CDN Status</p>
                <h3 className="text-2xl font-bold text-green-500 mt-1">Healthy</h3>
              </div>
              <div className="p-3 bg-green-500/20 rounded-lg">
                <Cloud className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">Active Users</p>
                <h3 className="text-2xl font-bold text-white mt-1">1.2M</h3>
              </div>
              <div className="p-3 bg-yellow-500/20 rounded-lg">
                <Activity className="h-6 w-6 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="col-span-2">
            <ServerMetrics servers={servers} />
          </div>
          <div>
            <AIOptimization
              enabled={aiOptimization}
              onToggle={() => setAiOptimization(!aiOptimization)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <StorageManager providers={storageProviders} />
          <LoadBalancer
            enabled={loadBalancing}
            onToggle={() => setLoadBalancing(!loadBalancing)}
          />
        </div>
      </div>
    </AdminLayout>
  );
}