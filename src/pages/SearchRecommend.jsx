import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SearchRecommend = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    const fetchRecommendations = async () => {
      if (query.length < 2) return;
      setLoading(true);
      try {
        const res = await fetch(
          `https://thenikhil-fashion-search-api.hf.space/recommend?query=${encodeURIComponent(query)}`
        );
        const data = await res.json();
        setResults(data);
        setPage(1); // reset to first page when query changes
      } catch (err) {
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [query]);

  // Pagination logic
  const totalPages = Math.ceil(results.length / perPage);
  const paginatedResults = results.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">
        🔍 Results for: <span className="text-blue-600">{query}</span>
      </h2>

      {loading && <p>Loading...</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {paginatedResults.map((item, index) => (
          <div key={index} className="p-4 shadow rounded border">
            <img
              src={item.image_url}
              alt={item.name}
              className="w-full h-64 object-contain mb-2 rounded bg-white"
            />
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600">
              👕 {item.gender} | 🎯 {item.articleType} | 🎨 {item.baseColour}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setPage((p) => p - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded ${
              i + 1 === page ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setPage((p) => p + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchRecommend;
