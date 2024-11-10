import React, { useState } from 'react';
import { Mail, Lock, Loader } from 'lucide-react';
import { signInWithGoogle, sendOTP } from '../../services/auth';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      await signInWithGoogle();
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      setIsLoading(true);
      await sendOTP(email);
      setOtpSent(true);
    } catch (error) {
      console.error('Failed to send OTP:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Sign In</h2>

      <form onSubmit={handleEmailLogin} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-700 text-white px-4 py-2 pl-10 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition flex items-center justify-center"
        >
          {isLoading ? (
            <Loader className="h-5 w-5 animate-spin" />
          ) : (
            <>
              <Lock className="h-5 w-5 mr-2" />
              {otpSent ? 'Resend OTP' : 'Send OTP'}
            </>
          )}
        </button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="w-full bg-white text-gray-900 py-2 rounded-lg hover:bg-gray-100 transition flex items-center justify-center"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="h-5 w-5 mr-2"
          />
          Sign in with Google
        </button>
      </form>

      {otpSent && (
        <div className="mt-4 text-center text-sm text-gray-400">
          OTP has been sent to your email address.
          <br />
          Please check your inbox and spam folder.
        </div>
      )}
    </div>
  );
}