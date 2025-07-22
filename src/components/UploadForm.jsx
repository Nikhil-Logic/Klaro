import React, { useState } from "react";

const UploadForm = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFile = (file) => {
    if (file) {
      setFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) onUpload(file);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 p-6">
      {/* Upload and Preview Side by Side */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Upload Box */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`w-72 h-72 border-2 rounded-xl flex flex-col items-center justify-center 
          ${dragActive ? "border-blue-400 bg-blue-50" : "border-dashed border-gray-300 bg-white"} 
          shadow p-4 transition`}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
            id="upload-input"
          />
          <label htmlFor="upload-input" className="text-center cursor-pointer text-gray-600">
            <p className="text-sm mb-2">Drag & drop or click to upload</p>
            <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 text-sm font-semibold">
              Choose File
            </div>
          </label>
        </div>

        {/* Preview Box */}
        <div className="w-72 h-72 border rounded-xl overflow-hidden shadow flex items-center justify-center bg-gray-50">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full h-full object-contain transition-transform duration-200 hover:scale-105"
            />
          ) : (
            <span className="text-gray-400 text-sm">No Image Selected</span>
          )}
        </div>
      </div>

      {/* Recommend Button Below with Space */}
      <button
        type="submit"
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-semibold shadow"
      >
        Recommend
      </button>
    </form>
  );
};

export default UploadForm;
