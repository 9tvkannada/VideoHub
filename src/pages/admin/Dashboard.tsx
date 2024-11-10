import React, { useState } from 'react';
import { BarChart2, Users, DollarSign, Globe, Shield, Bell, Wallet, CreditCard } from 'lucide-react';
import AdminLayout from '../../components/layouts/AdminLayout';
import StatsCard from '../../components/admin/StatsCard';
import SecurityLog from '../../components/admin/SecurityLog';
import PaymentOverview from '../../components/admin/PaymentOverview';
import GeoDistribution from '../../components/admin/GeoDistribution';
import PaymentGateways from '../../components/admin/PaymentGateways';
import MaintenanceMode from '../../components/admin/MaintenanceMode';
import NotificationCenter from '../../components/admin/NotificationCenter';

const paymentGateways = [
  { id: 'stripe', name: 'Stripe', status: 'active' },
  { id: 'paypal', name: 'PayPal', status: 'active' },
  { id: 'google_pay', name: 'Google Pay', status: 'active' },
  { id: 'binance', name: 'Binance', status: 'active' },
  { id: 'sslcommerz', name: 'SSLCommerz', status: 'pending' },
  { id: 'aamarpay', name: 'Aamarpay', status: 'active' },
  { id: 'nowpayments', name: 'NowPayments', status: 'active' }
];

export default function AdminDashboard() {
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
          <div className="flex space-x-4">
            <NotificationCenter />
            <MaintenanceMode
              enabled={maintenanceMode}
              onToggle={() => setMaintenanceMode(!maintenanceMode)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Publishers"
            value="12,345"
            change={8.2}
            icon={<Users className="h-6 w-6 text-blue-500" />}
          />
          <StatsCard
            title="Total Advertisers"
            value="4,567"
            change={12.5}
            icon={<BarChart2 className="h-6 w-6 text-green-500" />}
          />
          <StatsCard
            title="Revenue"
            value="$234,567"
            change={15.8}
            icon={<DollarSign className="h-6 w-6 text-yellow-500" />}
          />
          <StatsCard
            title="Active Countries"
            value="156"
            change={5.3}
            icon={<Globe className="h-6 w-6 text-purple-500" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <SecurityLog />
          <PaymentOverview />
        </div>

        <div className="grid grid-cols-1 gap-6 mb-8">
          <PaymentGateways gateways={paymentGateways} />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <GeoDistribution />
        </div>
      </div>
    </AdminLayout>
  );
}