import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import VideoGrid from '../components/creator/VideoGrid';

describe('VideoGrid Component', () => {
  const mockVideos = [
    {
      id: '1',
      thumbnail: 'test-thumb.jpg',
      title: 'Test Video',
      status: 'published' as const,
      visibility: 'public' as const,
      views: '1.2K',
      likes: 245,
      comments: 89,
      uploadDate: '2024-02-15',
      duration: '15:24'
    }
  ];

  it('renders video grid with correct data', () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();

    render(<VideoGrid videos={mockVideos} onEdit={onEdit} onDelete={onDelete} />);
    
    expect(screen.getByText('Test Video')).toBeInTheDocument();
    expect(screen.getByText('1.2K views')).toBeInTheDocument();
    expect(screen.getByText('Published')).toBeInTheDocument();
  });

  it('calls edit function when edit button is clicked', () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();

    render(<VideoGrid videos={mockVideos} onEdit={onEdit} onDelete={onDelete} />);
    
    const editButton = screen.getByTestId('edit-button-1');
    fireEvent.click(editButton);
    
    expect(onEdit).toHaveBeenCalledWith('1');
  });

  it('calls delete function when delete button is clicked', () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();

    render(<VideoGrid videos={mockVideos} onEdit={onEdit} onDelete={onDelete} />);
    
    const deleteButton = screen.getByTestId('delete-button-1');
    fireEvent.click(deleteButton);
    
    expect(onDelete).toHaveBeenCalledWith('1');
  });

  it('displays correct visibility icon', () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();

    render(<VideoGrid videos={mockVideos} onEdit={onEdit} onDelete={onDelete} />);
    
    expect(screen.getByTestId('visibility-icon-public')).toBeInTheDocument();
  });

  it('shows correct status indicator', () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();

    render(<VideoGrid videos={mockVideos} onEdit={onEdit} onDelete={onDelete} />);
    
    const statusBadge = screen.getByText('Published');
    expect(statusBadge).toHaveClass('bg-green-500/20');
  });
});