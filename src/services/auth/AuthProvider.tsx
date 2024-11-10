import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  RecaptchaVerifier
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db, AUTH_CONFIG, UserProfile, ROLES } from './config';
import { useToast } from '../../hooks/useToast';

interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  signIn: (email: string, password: string, remember?: boolean) => Promise<void>;
  signInWithPhone: (phone: string) => Promise<void>;
  signUp: (userData: SignUpData) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateUserProfile: (data: Partial<UserProfile>) => Promise<void>;
  verifyPhoneCode: (code: string) => Promise<void>;
}

interface SignUpData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  gender?: 'male' | 'female' | 'other';
  accountType: 'personal' | 'creator';
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        if (userDoc.exists()) {
          setUser(userDoc.data() as UserProfile);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string, remember = false) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', email));
      const userData = userDoc.data() as UserProfile;

      if (userData.loginAttempts >= AUTH_CONFIG.maxLoginAttempts) {
        const lockUntil = userData.lockUntil as Date;
        if (lockUntil && lockUntil > new Date()) {
          throw new Error('Account is locked. Please try again later.');
        }
      }

      const result = await signInWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, 'users', result.user.uid), {
        lastLogin: new Date(),
        loginAttempts: 0,
        isLocked: false,
        lockUntil: null
      }, { merge: true });

      if (remember) {
        // Implement remember me logic
        localStorage.setItem('rememberMe', 'true');
      }
    } catch (error) {
      await handleLoginError(email);
      throw error;
    }
  };

  const signInWithPhone = async (phone: string) => {
    const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      size: 'invisible'
    });
    try {
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptchaVerifier);
      // Store confirmation result for later verification
      localStorage.setItem('phoneConfirmation', JSON.stringify(confirmation));
    } catch (error) {
      showToast('error', 'Failed to send OTP');
      throw error;
    }
  };

  const verifyPhoneCode = async (code: string) => {
    const confirmation = JSON.parse(localStorage.getItem('phoneConfirmation') || '');
    if (!confirmation) {
      throw new Error('No phone confirmation found');
    }
    try {
      await confirmation.confirm(code);
      localStorage.removeItem('phoneConfirmation');
    } catch (error) {
      showToast('error', 'Invalid OTP');
      throw error;
    }
  };

  const signUp = async (userData: SignUpData) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );

      await updateProfile(result.user, {
        displayName: `${userData.firstName} ${userData.lastName}`
      });

      const userProfile: UserProfile = {
        uid: result.user.uid,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: userData.phone,
        gender: userData.gender,
        accountType: userData.accountType,
        role: userData.accountType === 'creator' ? ROLES.CREATOR : ROLES.USER,
        isEnabled: true,
        createdAt: new Date(),
        loginAttempts: 0,
        isLocked: false,
        preferences: {
          language: 'en',
          theme: 'light',
          notifications: true
        }
      };

      await setDoc(doc(db, 'users', result.user.uid), userProfile);
    } catch (error) {
      showToast('error', 'Failed to create account');
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem('rememberMe');
    } catch (error) {
      showToast('error', 'Failed to sign out');
      throw error;
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      showToast('success', 'Password reset email sent');
    } catch (error) {
      showToast('error', 'Failed to send reset email');
      throw error;
    }
  };

  const updateUserProfile = async (data: Partial<UserProfile>) => {
    if (!user?.uid) return;
    try {
      await setDoc(doc(db, 'users', user.uid), data, { merge: true });
      setUser({ ...user, ...data });
      showToast('success', 'Profile updated successfully');
    } catch (error) {
      showToast('error', 'Failed to update profile');
      throw error;
    }
  };

  const handleLoginError = async (email: string) => {
    const userDoc = await getDoc(doc(db, 'users', email));
    if (userDoc.exists()) {
      const userData = userDoc.data() as UserProfile;
      const attempts = (userData.loginAttempts || 0) + 1;
      
      await setDoc(doc(db, 'users', email), {
        loginAttempts: attempts,
        isLocked: attempts >= AUTH_CONFIG.maxLoginAttempts,
        lockUntil: attempts >= AUTH_CONFIG.maxLoginAttempts 
          ? new Date(Date.now() + AUTH_CONFIG.lockoutDuration * 60000)
          : null
      }, { merge: true });
    }
  };

  const value = {
    user,
    loading,
    signIn,
    signInWithPhone,
    signUp,
    signOut,
    resetPassword,
    updateUserProfile,
    verifyPhoneCode
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};