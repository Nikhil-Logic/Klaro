import React, { useState } from "react";
import { motion } from "framer-motion";

const UploadForm = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (selectedFile) => {
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    handleFileChange(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      onUpload(file);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-8 bg-white/50 backdrop-blur-lg rounded-2xl shadow-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`relative w-full h-72 border-2 rounded-xl flex flex-col items-center justify-center transition-all duration-300
          ${dragActive ? "border-blue-400 bg-blue-50" : "border-dashed border-gray-300"}`}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
            id="upload-input"
          />
          <label htmlFor="upload-input" className="text-center cursor-pointer p-4">
            <p className="font-semibold text-gray-700">Drag & drop your image here</p>
            <p className="text-sm text-gray-500">or</p>
            <span className="text-blue-600 font-bold hover:underline">
              Choose a file
            </span>
          </label>
        </div>
        <div className="w-full h-72 border rounded-xl overflow-hidden shadow-inner flex items-center justify-center bg-gray-50">
          {previewUrl ? (
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={previewUrl}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-gray-400">Image Preview</div>
          )}
        </div>
      </div>

      <div className="text-center mt-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={!file}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Find Recommendations
        </motion.button>
      </div>
    </motion.form>
  );
};

export default UploadForm;