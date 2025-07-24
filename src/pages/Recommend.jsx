import React, { useState } from "react";
import UploadForm from "../components/UploadForm";
import RecommendationGrid from "../components/RecommendationGrid";

const Recommend = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async (file) => {
    setLoading(true);
    setError("");
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://thenikhil-fashion-recommender-api.hf.space/recommend", {
        method: "POST",
        body: formData
      });

      if (!response.ok) throw new Error("Failed to get recommendations");

      const data = await response.json();
      setRecommendations(data.recommendations);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <UploadForm onUpload={handleUpload} />
      {loading && <p className="text-center text-blue-500 mt-4">Loading recommendations...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      <RecommendationGrid items={recommendations} />
    </div>
  );
};

export default Recommend;