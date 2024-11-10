import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const AUTH_CONFIG = {
  maxLoginAttempts: 5,
  lockoutDuration: 30, // minutes
  sessionTimeout: 120, // minutes
  rememberMeDuration: 30, // days
  passwordMinLength: 8,
  requireEmailVerification: true,
  allowPhoneAuth: true,
  allowMultiFactorAuth: true,
  allowRememberMe: true,
  allowRegistration: true,
  allowPasswordReset: true
};

export const ROLES = {
  ADMIN: 'admin',
  SUB_ADMIN: 'sub_admin',
  CREATOR: 'creator',
  USER: 'user'
} as const;

export type UserRole = typeof ROLES[keyof typeof ROLES];

export interface UserProfile {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  gender?: 'male' | 'female' | 'other';
  accountType: 'personal' | 'creator';
  role: UserRole;
  isEnabled: boolean;
  createdAt: Date;
  lastLogin?: Date;
  loginAttempts: number;
  isLocked: boolean;
  lockUntil?: Date;
  preferences: {
    language: string;
    theme: 'light' | 'dark';
    notifications: boolean;
  };
}

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);