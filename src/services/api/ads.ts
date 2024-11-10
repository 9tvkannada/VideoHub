import axios from 'axios';
import type { ApiResponse } from '../../types/api';

interface AdCampaign {
  id: string;
  name: string;
  budget: number;
  startDate: Date;
  endDate: Date;
  targetAudience: {
    countries: string[];
    ageRange: [number, number];
    interests: string[];
  };
}

export async function createAdCampaign(campaign: Omit<AdCampaign, 'id'>): Promise<ApiResponse<string>> {
  try {
    const response = await axios.post('/api/ads/campaigns', campaign);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create ad campaign');
  }
}

export async function getAdAnalytics(campaignId: string): Promise<ApiResponse<{
  impressions: number;
  clicks: number;
  ctr: number;
  spend: number;
}>> {
  try {
    const response = await axios.get(`/api/ads/campaigns/${campaignId}/analytics`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch ad analytics');
  }
}