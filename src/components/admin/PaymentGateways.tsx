import React from 'react';
import { CreditCard, Check, X, Settings } from 'lucide-react';

interface PaymentGateway {
  id: string;
  name: string;
  status: 'active' | 'pending' | 'inactive';
}

interface PaymentGatewaysProps {
  gateways: PaymentGateway[];
}

export default function PaymentGateways({ gateways }: PaymentGatewaysProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center">
          <CreditCard className="h-5 w-5 mr-2 text-blue-500" />
          Payment Gateways
        </h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Configure Gateways
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gateways.map((gateway) => (
          <div
            key={gateway.id}
            className="bg-gray-700/50 p-4 rounded-lg flex items-center justify-between"
          >
            <div className="flex items-center">
              <div className="p-2 bg-gray-700 rounded-lg mr-3">
                <img
                  src={`/payment-icons/${gateway.id}.svg`}
                  alt={gateway.name}
                  className="h-6 w-6"
                />
              </div>
              <div>
                <h3 className="text-white font-medium">{gateway.name}</h3>
                <span className={`text-sm ${
                  gateway.status === 'active' ? 'text-green-400' :
                  gateway.status === 'pending' ? 'text-yellow-400' :
                  'text-red-400'
                }`}>
                  {gateway.status.charAt(0).toUpperCase() + gateway.status.slice(1)}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-600 rounded-lg transition-colors">
                <Settings className="h-5 w-5 text-gray-400" />
              </button>
              <button className={`p-2 rounded-lg transition-colors ${
                gateway.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-600/20 text-gray-400'
              }`}>
                {gateway.status === 'active' ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <X className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}