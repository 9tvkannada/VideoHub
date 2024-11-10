import React from 'react';
import { Check, Package } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$99',
    features: [
      'Up to 100K impressions',
      'Basic targeting options',
      'Standard analytics',
      'Email support'
    ],
    color: 'border-blue-500'
  },
  {
    name: 'Professional',
    price: '$299',
    features: [
      'Up to 500K impressions',
      'Advanced targeting',
      'Detailed analytics',
      'Priority support',
      'A/B testing'
    ],
    color: 'border-purple-500'
  },
  {
    name: 'Enterprise',
    price: '$999',
    features: [
      'Unlimited impressions',
      'Custom targeting',
      'Advanced analytics',
      '24/7 support',
      'API access',
      'Custom integration'
    ],
    color: 'border-green-500'
  }
];

export default function PricingPlans() {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center">
          <Package className="h-5 w-5 mr-2 text-blue-500" />
          Advertising Plans
        </h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Customize Plan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border-t-4 ${plan.color} bg-gray-700/50 rounded-xl p-6`}
          >
            <h3 className="text-xl font-bold text-white">{plan.name}</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold text-white">{plan.price}</span>
              <span className="ml-2 text-gray-400">/month</span>
            </div>
            <ul className="mt-6 space-y-4">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-gray-300">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}