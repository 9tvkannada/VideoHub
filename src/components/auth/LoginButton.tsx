import React from 'react';
import { signInWithGoogle } from '../../services/auth';

export default function LoginButton() {
  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="flex items-center space-x-2 bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <img
        src="https://www.google.com/favicon.ico"
        alt="Google"
        className="w-5 h-5"
      />
      <span>Sign in with Google</span>
    </button>
  );
}