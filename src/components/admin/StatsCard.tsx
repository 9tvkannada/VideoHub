import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

export default function StatsCard({ title, value, change, icon }: StatsCardProps) {
  const isPositive = change >= 0;

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between">
        <div className="p-2 bg-gray-700 rounded-lg">
          {icon}
        </div>
        <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? (
            <TrendingUp className="h-4 w-4 mr-1" />
          ) : (
            <TrendingDown className="h-4 w-4 mr-1" />
          )}
          <span>{Math.abs(change)}%</span>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mt-4">{value}</h3>
      <p className="text-gray-400 text-sm">{title}</p>
    </div>
  );
}