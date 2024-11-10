import React from 'react';
import { Tool } from 'lucide-react';

interface MaintenanceModeProps {
  enabled: boolean;
  onToggle: () => void;
}

export default function MaintenanceMode({ enabled, onToggle }: MaintenanceModeProps) {
  return (
    <div className="flex items-center">
      <button
        onClick={onToggle}
        className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
          enabled ? 'bg-yellow-600 text-white' : 'bg-gray-700 text-gray-300'
        }`}
      >
        <Tool className="h-5 w-5 mr-2" />
        <span>{enabled ? 'Maintenance Mode On' : 'Maintenance Mode Off'}</span>
      </button>
    </div>
  );
}