import React from 'react';
import { Check } from 'lucide-react';
import type { SubscriptionPlan } from '../../types';

const plans: SubscriptionPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 0,
    billing: 'monthly',
    features: [
      'Upload up to 10 videos/month',
      'Basic analytics',
      'Standard video quality',
      'Community support'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 12.99,
    billing: 'monthly',
    features: [
      'Unlimited video uploads',
      'Advanced analytics',
      '4K video quality',
      'Priority support',
      'Custom channel URL',
      'Ad revenue sharing'
    ]
  },
  {
    id: 'business',
    name: 'Business',
    price: 29.99,
    billing: 'monthly',
    features: [
      'Everything in Pro',
      'Brand partnership opportunities',
      'Dedicated account manager',
      'API access',
      'Custom branding',
      'Multiple team members'
    ]
  }
];

export default function SubscriptionPlans() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className="bg-gray-800 rounded-xl p-6 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white">{plan.name}</h3>
          <div className="mt-4 flex items-baseline">
            <span className="text-4xl font-bold text-white">${plan.price}</span>
            <span className="ml-2 text-gray-400">/month</span>
          </div>
          <ul className="mt-6 space-y-4 flex-1">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <button className="mt-8 w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition">
            {plan.price === 0 ? 'Get Started' : 'Subscribe Now'}
          </button>
        </div>
      ))}
    </div>
  );
}