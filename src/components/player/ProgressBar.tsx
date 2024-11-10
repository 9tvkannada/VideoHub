import React, { useRef } from 'react';

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  onTimeUpdate: (time: number) => void;
}

export default function ProgressBar({
  currentTime,
  duration,
  onTimeUpdate
}: ProgressBarProps) {
  const progressRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current) return;

    const rect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    onTimeUpdate(percent * duration);
  };

  return (
    <div
      ref={progressRef}
      className="h-1 bg-gray-600 cursor-pointer"
      onClick={handleClick}
    >
      <div
        className="h-full bg-red-600 relative"
        style={{ width: `${(currentTime / duration) * 100}%` }}
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full transform translate-x-1/2" />
      </div>
    </div>
  );
}