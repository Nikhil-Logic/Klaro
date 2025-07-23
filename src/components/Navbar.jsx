import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim().length >= 2) {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">👗 Klaro</h1>
        <form onSubmit={handleSearch} className="flex space-x-2">
          <input
            type="text"
            placeholder="Search for items..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-3 py-1 border rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          >
            Search
          </button>
        </form>
        <ul className="flex space-x-6 ml-4">
          {["/", "/recommend", "/products", "/about"].map((path, idx) => {
            const label = ["Home", "Recommend", "Products", "About"][idx];
            const isActive = location.pathname === path;
            return (
              <li key={path}>
                <Link
                  to={path}
                  className={`text-sm font-medium ${
                    isActive ? "text-blue-600 underline" : "text-gray-600 hover:text-blue-500"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
