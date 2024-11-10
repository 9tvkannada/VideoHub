import axios from 'axios';
import type { ApiResponse } from '../../types/api';

interface RentalPeriod {
  hours: number;
  price: number;
}

export async function rentVideo(
  videoId: string,
  rentalPeriod: RentalPeriod
): Promise<ApiResponse<{ expiryDate: Date }>> {
  try {
    const response = await axios.post('/api/rentals/create', {
      videoId,
      rentalPeriod
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to rent video');
  }
}

export async function checkRentalAccess(videoId: string): Promise<ApiResponse<{
  hasAccess: boolean;
  expiryDate?: Date;
}>> {
  try {
    const response = await axios.get(`/api/rentals/${videoId}/access`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to check rental access');
  }
}