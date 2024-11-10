import React from 'react';
import { Search, Bell, Settings, User } from 'lucide-react';

export default function AdminHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-gray-800 border-b border-gray-700 z-50">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold text-white">Admin Panel</span>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 bg-gray-900 text-white px-4 py-2 rounded-lg pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-700 rounded-lg">
            <Bell className="h-5 w-5 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-700 rounded-lg">
            <Settings className="h-5 w-5 text-gray-400" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <span className="text-white">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}