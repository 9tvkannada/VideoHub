import axios from 'axios';
import type { ApiResponse, ContentType, ProcessingStatus } from '../../types/api';

interface VideoMetadata {
  title: string;
  description: string;
  contentType: ContentType;
  price?: number;
  thumbnailUrl?: string;
  tags?: string[];
}

export async function getUploadUrl(fileSize: number, fileType: string): Promise<ApiResponse<string>> {
  try {
    const response = await axios.post('/api/videos/get-upload-url', {
      fileSize,
      fileType
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to get upload URL');
  }
}

export async function uploadVideo(
  uploadUrl: string,
  file: File,
  onProgress?: (progress: number) => void
): Promise<ApiResponse<string>> {
  try {
    const formData = new FormData();
    formData.append('video', file);

    const response = await axios.put(uploadUrl, formData, {
      onUploadProgress: (progressEvent) => {
        if (onProgress && progressEvent.total) {
          const progress = (progressEvent.loaded / progressEvent.total) * 100;
          onProgress(progress);
        }
      }
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to upload video');
  }
}

export async function processVideo(
  videoId: string,
  metadata: VideoMetadata
): Promise<ApiResponse<{ status: ProcessingStatus }>> {
  try {
    const response = await axios.post('/api/videos/process', {
      videoId,
      metadata
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to process video');
  }
}

export async function updateVideoMetadata(
  videoId: string,
  metadata: Partial<VideoMetadata>
): Promise<ApiResponse<void>> {
  try {
    const response = await axios.patch(`/api/videos/${videoId}`, metadata);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update video metadata');
  }
}