import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import VideoPlayer from '../components/player/VideoPlayer';

describe('VideoPlayer Component', () => {
  const mockSources = [
    { src: 'test-video.mp4', type: 'video/mp4', quality: '1080p' }
  ];

  it('renders video player with correct source', () => {
    render(<VideoPlayer sources={mockSources} />);
    const videoElement = screen.getByTestId('video-player');
    expect(videoElement).toBeInTheDocument();
    expect(videoElement.querySelector('source')).toHaveAttribute('src', 'test-video.mp4');
  });

  it('toggles play/pause when clicked', () => {
    render(<VideoPlayer sources={mockSources} />);
    const playButton = screen.getByTestId('play-button');
    
    fireEvent.click(playButton);
    expect(playButton).toHaveAttribute('aria-label', 'Pause');
    
    fireEvent.click(playButton);
    expect(playButton).toHaveAttribute('aria-label', 'Play');
  });

  it('changes volume when volume slider is adjusted', () => {
    render(<VideoPlayer sources={mockSources} />);
    const volumeSlider = screen.getByTestId('volume-slider');
    
    fireEvent.change(volumeSlider, { target: { value: '0.5' } });
    expect(volumeSlider).toHaveValue('0.5');
  });

  it('toggles fullscreen mode', () => {
    render(<VideoPlayer sources={mockSources} />);
    const fullscreenButton = screen.getByTestId('fullscreen-button');
    
    const mockRequestFullscreen = vi.fn();
    const mockExitFullscreen = vi.fn();
    
    Object.defineProperty(document, 'fullscreenElement', {
      value: null,
      writable: true
    });
    
    Element.prototype.requestFullscreen = mockRequestFullscreen;
    document.exitFullscreen = mockExitFullscreen;
    
    fireEvent.click(fullscreenButton);
    expect(mockRequestFullscreen).toHaveBeenCalled();
  });

  it('shows quality selector when settings button is clicked', () => {
    render(<VideoPlayer sources={mockSources} />);
    const settingsButton = screen.getByTestId('settings-button');
    
    fireEvent.click(settingsButton);
    expect(screen.getByText('1080p')).toBeInTheDocument();
  });

  it('applies AI enhancement when enabled', () => {
    render(<VideoPlayer sources={mockSources} showAIFeatures={true} />);
    const aiButton = screen.getByTestId('ai-enhance-button');
    
    fireEvent.click(aiButton);
    expect(screen.getByText('AI Enhancements')).toBeInTheDocument();
  });
});