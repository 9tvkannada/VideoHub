import React from 'react';
import {
  LayoutDashboard,
  Users,
  DollarSign,
  Globe,
  Shield,
  Settings,
  MessageSquare,
  FileText,
  Bell,
  Languages,
  Palette,
  Lock
} from 'lucide-react';

const menuItems = [
  {
    title: 'Main',
    items: [
      { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
      { icon: Users, label: 'Users', path: '/admin/users' },
      { icon: DollarSign, label: 'Payments', path: '/admin/payments' },
      { icon: Globe, label: 'Advertisements', path: '/admin/ads' }
    ]
  },
  {
    title: 'Management',
    items: [
      { icon: Shield, label: 'Security', path: '/admin/security' },
      { icon: Settings, label: 'Settings', path: '/admin/settings' },
      { icon: MessageSquare, label: 'Support', path: '/admin/support' },
      { icon: FileText, label: 'Reports', path: '/admin/reports' }
    ]
  },
  {
    title: 'Configuration',
    items: [
      { icon: Bell, label: 'Notifications', path: '/admin/notifications' },
      { icon: Languages, label: 'Languages', path: '/admin/languages' },
      { icon: Palette, label: 'Appearance', path: '/admin/appearance' },
      { icon: Lock, label: 'Permissions', path: '/admin/permissions' }
    ]
  }
];

export default function AdminSidebar() {
  return (
    <aside className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-gray-800 border-r border-gray-700 overflow-y-auto">
      <nav className="p-4">
        {menuItems.map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-gray-400 text-xs uppercase font-semibold mb-3 px-4">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.items.map((item, itemIndex) => (
                <a
                  key={itemIndex}
                  href={item.path}
                  className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}