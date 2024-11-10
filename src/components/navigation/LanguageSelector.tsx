import React, { useState } from 'react';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'hi', name: 'Hindi' },
  { code: 'en', name: 'English' },
  { code: 'te', name: 'Telugu' },
  { code: 'kn', name: 'Kannada' },
  { code: 'ml', name: 'Malayalam' },
  { code: 'ta', name: 'Tamil' },
  { code: 'mr', name: 'Marathi' },
  { code: 'pa', name: 'Punjabi' },
  { code: 'bn', name: 'Bengali' },
  { code: 'bho', name: 'Bhojpuri' },
  { code: 'gu', name: 'Gujarati' }
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
      >
        <Globe className="h-4 w-4 text-gray-400" />
        <span className="text-white">{selectedLanguage.name}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl py-2">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                setSelectedLanguage(language);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors ${
                selectedLanguage.code === language.code
                  ? 'text-red-500'
                  : 'text-gray-300'
              }`}
            >
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}