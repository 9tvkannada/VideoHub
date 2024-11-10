import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { AlertTriangle, RefreshCw } from 'lucide-react';

function ErrorFallback({ error, resetErrorBoundary }: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl p-8 max-w-lg w-full">
        <div className="flex items-center justify-center mb-6">
          <AlertTriangle className="h-12 w-12 text-red-500" />
        </div>
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-400 text-center mb-6">
          {error.message}
        </p>
        <div className="flex justify-center">
          <button
            onClick={resetErrorBoundary}
            className="flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
          >
            <RefreshCw className="h-5 w-5 mr-2" />
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ErrorBoundaryWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
}