import React from 'react';
import { Wand2, X, Sparkles, Zap, Camera, Video } from 'lucide-react';

interface AIEnhancementPanelProps {
  onClose: () => void;
  onApplyEffect: (effect: string) => void;
}

const aiEffects = [
  {
    id: 'enhance',
    name: 'Auto Enhance',
    icon: Wand2,
    description: 'AI-powered video enhancement'
  },
  {
    id: 'stabilize',
    name: 'Stabilize',
    icon: Zap,
    description: 'Reduce camera shake'
  },
  {
    id: 'upscale',
    name: 'Upscale',
    icon: Camera,
    description: 'Improve video resolution'
  },
  {
    id: 'denoise',
    name: 'Denoise',
    icon: Video,
    description: 'Remove video noise'
  }
];

export default function AIEnhancementPanel({ onClose, onApplyEffect }: AIEnhancementPanelProps) {
  return (
    <div className="absolute right-0 top-16 w-72 bg-gray-900/95 rounded-lg m-4 p-4 z-20 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center text-white">
          <Sparkles className="h-5 w-5 text-purple-400 mr-2" />
          <h3 className="font-semibold">AI Enhancements</h3>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-700 rounded-lg transition-colors"
        >
          <X className="h-5 w-5 text-gray-400" />
        </button>
      </div>

      <div className="space-y-2">
        {aiEffects.map((effect) => (
          <button
            key={effect.id}
            onClick={() => onApplyEffect(effect.id)}
            className="w-full flex items-center p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-white transition-colors"
          >
            <effect.icon className="h-5 w-5 text-purple-400 mr-3" />
            <div className="text-left">
              <div className="font-medium">{effect.name}</div>
              <div className="text-sm text-gray-400">{effect.description}</div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-700">
        <div className="text-xs text-gray-400">
          Processing may take a few moments depending on video length
        </div>
      </div>
    </div>
  );
}