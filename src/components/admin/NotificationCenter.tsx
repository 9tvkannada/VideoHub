import React, { useState } from 'react';
import { Bell, Mail, MessageSquare, AlertTriangle } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'alert',
    message: 'System update available',
    time: '2 minutes ago'
  },
  {
    id: 2,
    type: 'message',
    message: 'New support ticket',
    time: '10 minutes ago'
  },
  {
    id: 3,
    type: 'email',
    message: 'Payment gateway error',
    time: '1 hour ago'
  }
];

export default function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-400 hover:text-white transition-colors"
      >
        <Bell className="h-6 w-6" />
        <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
          3
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-lg font-semibold text-white">Notifications</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-4 border-b border-gray-700 hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-start">
                  {notification.type === 'alert' && (
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-1" />
                  )}
                  {notification.type === 'message' && (
                    <MessageSquare className="h-5 w-5 text-blue-500 mt-1" />
                  )}
                  {notification.type === 'email' && (
                    <Mail className="h-5 w-5 text-green-500 mt-1" />
                  )}
                  <div className="ml-3">
                    <p className="text-white">{notification.message}</p>
                    <p className="text-sm text-gray-400">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-700">
            <button className="w-full text-center text-sm text-blue-400 hover:text-blue-300">
              View All Notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
}