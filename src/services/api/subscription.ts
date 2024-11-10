import axios from 'axios';
import type { ApiResponse } from '../../types/api';

interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  duration: number;
  features: string[];
}

export async function getSubscriptionPlans(): Promise<ApiResponse<SubscriptionPlan[]>> {
  try {
    const response = await axios.get('/api/subscriptions/plans');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch subscription plans');
  }
}

export async function createSubscription(planId: string): Promise<ApiResponse<void>> {
  try {
    const response = await axios.post('/api/subscriptions/create', { planId });
    return response.data;
  } catch (error) {
    throw new Error('Failed to create subscription');
  }
}

export async function cancelSubscription(subscriptionId: string): Promise<ApiResponse<void>> {
  try {
    const response = await axios.post(`/api/subscriptions/${subscriptionId}/cancel`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to cancel subscription');
  }
}