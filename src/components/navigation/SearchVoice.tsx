import React, { useState, useEffect } from 'react';
import { Mic, X } from 'lucide-react';

interface SearchVoiceProps {
  onClose: () => void;
}

export default function SearchVoice({ onClose }: SearchVoiceProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result) => result.transcript)
          .join('');
        setTranscript(transcript);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      if (isListening) {
        recognition.start();
      }

      return () => {
        recognition.stop();
      };
    }
  }, [isListening]);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-xl p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Voice Search</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-full"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        <div className="text-center">
          <button
            onClick={() => setIsListening(!isListening)}
            className={`p-8 rounded-full mb-6 transition-colors ${
              isListening ? 'bg-red-600 animate-pulse' : 'bg-gray-800'
            }`}
          >
            <Mic className={`h-8 w-8 ${isListening ? 'text-white' : 'text-gray-400'}`} />
          </button>

          <p className="text-gray-400 mb-4">
            {isListening ? 'Listening...' : 'Click the microphone to start'}
          </p>

          {transcript && (
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-white">{transcript}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}