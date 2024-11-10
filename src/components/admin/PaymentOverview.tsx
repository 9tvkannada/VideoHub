import React from 'react';
import { DollarSign, TrendingUp, CreditCard, Wallet } from 'lucide-react';

const paymentStats = [
  {
    title: 'Total Revenue',
    value: '$123,456',
    change: '+12.5%',
    icon: DollarSign,
    color: 'text-green-500'
  },
  {
    title: 'Pending Payments',
    value: '$4,567',
    change: '-2.3%',
    icon: CreditCard,
    color: 'text-yellow-500'
  },
  {
    title: 'Active Subscriptions',
    value: '2,345',
    change: '+8.1%',
    icon: Wallet,
    color: 'text-blue-500'
  }
];

export default function PaymentOverview() {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center">
          <DollarSign className="h-5 w-5 mr-2 text-green-500" />
          Payment Overview
        </h2>
        <select className="bg-gray-700 text-white text-sm rounded-lg px-3 py-1.5">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {paymentStats.map((stat, index) => (
          <div key={index} className="bg-gray-700/50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className={`p-2 bg-gray-700 rounded-lg ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <div className="flex items-center text-sm">
                <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                <span className="text-green-500">{stat.change}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-gray-400 text-sm">{stat.title}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <canvas id="paymentChart" height="200"></canvas>
      </div>
    </div>
  );
}