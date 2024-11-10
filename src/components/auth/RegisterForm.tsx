import React, { useState } from 'react';
import { User, Mail, Lock, Phone, UserCircle } from 'lucide-react';
import { useAuth } from '../../services/auth/AuthProvider';

export default function RegisterForm() {
  const { signUp } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: '',
    accountType: 'personal' as 'personal' | 'creator'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return; // Add error handling
    }
    try {
      await signUp(formData);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                First Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full bg-gray-700 text-white px-4 py-2 pl-10 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                  required
                />
                <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Last Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full bg-gray-700 text-white px-4 py-2 pl-10 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                  required
                />
                <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-gray-700 text-white px-4 py-2 pl-10 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                required
              />
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-gray-700 text-white px-4 py-2 pl-10 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
              <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Gender
            </label>
            <select
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Account Type
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, accountType: 'personal' })}
                className={`flex items-center justify-center px-4 py-2 rounded-lg ${
                  formData.accountType === 'personal'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-700 text-gray-300'
                }`}
              >
                <UserCircle className="h-5 w-5 mr-2" />
                Personal
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, accountType: 'creator' })}
                className={`flex items-center justify-center px-4 py-2 rounded-lg ${
                  formData.accountType === 'creator'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-700 text-gray-300'
                }`}
              >
                <User className="h-5 w-5 mr-2" />
                Creator
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-gray-700 text-white px-4 py-2 pl-10 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                required
              />
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full bg-gray-700 text-white px-4 py-2 pl-10 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                required
              />
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
          >
            Create Account
          </button>
        </form>

        <p className="mt-4 text-center text-gray-400">
          Already have an account?{' '}
          <a href="/login" className="text-red-500 hover:text-red-400">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}