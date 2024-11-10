import React from 'react';
import { Crown, Check } from 'lucide-react';

export default function PremiumAd() {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 my-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <div className="flex items-center">
              <Crown className="h-8 w-8 text-yellow-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Upgrade to Premium</h2>
            </div>
            <p className="mt-4 text-lg text-gray-300 max-w-xl">
              Unlock advanced AI features and take your content to the next level
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Advanced AI video enhancement',
                'Automated content tagging',
                'Priority rendering queue',
                'Custom AI model training'
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-8 px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition">
              Try Premium Free
            </button>
          </div>
          <div className="relative">
            <div className="w-64 h-64 bg-blue-600 rounded-full opacity-20 absolute -top-8 -right-8 animate-pulse" />
            <img
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3"
              alt="AI Technology"
              className="relative z-10 rounded-lg shadow-xl max-w-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}