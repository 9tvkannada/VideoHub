import React from 'react';
import { Activity, Server, AlertTriangle } from 'lucide-react';

interface ServerData {
  id: string;
  name: string;
  status: 'healthy' | 'warning' | 'critical';
  load: number;
  storage: number;
  ram: number;
}

interface ServerMetricsProps {
  servers: ServerData[];
}

export default function ServerMetrics({ servers }: ServerMetricsProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center">
          <Activity className="h-5 w-5 mr-2 text-blue-500" />
          Server Metrics
        </h2>
        <select className="bg-gray-700 text-white text-sm rounded-lg px-3 py-1.5">
          <option>Last Hour</option>
          <option>Last 24 Hours</option>
          <option>Last 7 Days</option>
        </select>
      </div>

      <div className="space-y-4">
        {servers.map((server) => (
          <div key={server.id} className="bg-gray-700/50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Server className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-white font-medium">{server.name}</span>
              </div>
              <div className={`flex items-center px-3 py-1 rounded-full ${
                server.status === 'healthy' ? 'bg-green-500/20 text-green-400' :
                server.status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  server.status === 'healthy' ? 'bg-green-400' :
                  server.status === 'warning' ? 'bg-yellow-400' :
                  'bg-red-400'
                }`} />
                {server.status.charAt(0).toUpperCase() + server.status.slice(1)}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-400">CPU Load</span>
                  <span className="text-white">{server.load}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      server.load > 80 ? 'bg-red-500' :
                      server.load > 60 ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}
                    style={{ width: `${server.load}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-400">Storage</span>
                  <span className="text-white">{server.storage}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      server.storage > 80 ? 'bg-red-500' :
                      server.storage > 60 ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}
                    style={{ width: `${server.storage}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-400">RAM</span>
                  <span className="text-white">{server.ram}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      server.ram > 80 ? 'bg-red-500' :
                      server.ram > 60 ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}
                    style={{ width: `${server.ram}%` }}
                  />
                </div>
              </div>
            </div>

            {server.status === 'warning' && (
              <div className="mt-4 flex items-center text-yellow-400 text-sm">
                <AlertTriangle className="h-4 w-4 mr-2" />
                High resource usage detected. Consider scaling up resources.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}