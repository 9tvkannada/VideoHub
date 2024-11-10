import React from 'react';
import AdminSidebar from '../admin/AdminSidebar';
import AdminHeader from '../admin/AdminHeader';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900">
      <AdminHeader />
      <AdminSidebar />
      <main className="ml-64 pt-16">
        {children}
      </main>
    </div>
  );
}