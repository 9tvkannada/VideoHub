// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Authentication
export interface AuthEndpoints {
  LOGIN = '/auth/login',
  REGISTER = '/auth/register',
  VERIFY_EMAIL = '/auth/verify-email',
  RESET_PASSWORD = '/auth/reset-password',
  REFRESH_TOKEN = '/auth/refresh-token'
}

// Video Management
export interface VideoUploadEndpoints {
  UPLOAD = '/videos/upload',
  UPDATE = '/videos/update',
  DELETE = '/videos/delete',
  GET_UPLOAD_URL = '/videos/get-upload-url',
  PROCESS_VIDEO = '/videos/process'
}

// Content Categories
export enum ContentType {
  FREE = 'free',
  PREMIUM = 'premium',
  RENTAL = 'rental',
  SUBSCRIPTION = 'subscription'
}

// Video Processing Status
export enum ProcessingStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  FAILED = 'failed'
}

// Creator Dashboard
export interface CreatorEndpoints {
  ANALYTICS = '/creator/analytics',
  EARNINGS = '/creator/earnings',
  SUBSCRIBERS = '/creator/subscribers',
  CONTENT_LIBRARY = '/creator/content'
}

// Subscription Management
export interface SubscriptionEndpoints {
  CREATE = '/subscriptions/create',
  CANCEL = '/subscriptions/cancel',
  UPGRADE = '/subscriptions/upgrade',
  GET_PLANS = '/subscriptions/plans'
}

// Rental System
export interface RentalEndpoints {
  RENT_VIDEO = '/rentals/create',
  CHECK_ACCESS = '/rentals/check-access',
  GET_RENTAL_HISTORY = '/rentals/history'
}

// Advertisement System
export interface AdEndpoints {
  CREATE_CAMPAIGN = '/ads/campaigns/create',
  UPDATE_CAMPAIGN = '/ads/campaigns/update',
  GET_AD_SLOTS = '/ads/slots',
  GET_ANALYTICS = '/ads/analytics'
}

// User Management
export interface UserEndpoints {
  UPDATE_PROFILE = '/users/update',
  GET_PROFILE = '/users/profile',
  UPDATE_PREFERENCES = '/users/preferences',
  GET_WATCH_HISTORY = '/users/watch-history'
}

// Payment System
export interface PaymentEndpoints {
  CREATE_PAYMENT = '/payments/create',
  VERIFY_PAYMENT = '/payments/verify',
  GET_HISTORY = '/payments/history'
}

// Analytics
export interface AnalyticsEndpoints {
  VIEW_COUNTS = '/analytics/views',
  ENGAGEMENT = '/analytics/engagement',
  REVENUE = '/analytics/revenue',
  AUDIENCE = '/analytics/audience'
}