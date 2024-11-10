import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';

export default function VideoUpload() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="w-full">
      <div
        className={`border-2 border-dashed rounded-xl p-8 ${
          dragActive ? 'border-red-500 bg-red-500/10' : 'border-gray-700'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {!file ? (
          <div className="flex flex-col items-center">
            <Upload className="h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-300 text-center mb-2">
              Drag and drop your video here, or click to select
            </p>
            <p className="text-gray-500 text-sm">MP4, WebM or OGG (max. 2GB)</p>
            <input
              type="file"
              className="hidden"
              accept="video/*"
              onChange={handleChange}
            />
          </div>
        ) : (
          <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center">
              <video className="h-16 w-28 object-cover rounded mr-4">
                <source src={URL.createObjectURL(file)} type={file.type} />
              </video>
              <div>
                <p className="text-white font-medium">{file.name}</p>
                <p className="text-gray-400 text-sm">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
            <button
              onClick={() => setFile(null)}
              className="p-2 hover:bg-gray-700 rounded-full"
            >
              <X className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}