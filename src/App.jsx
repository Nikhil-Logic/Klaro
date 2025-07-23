import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recommend from "./pages/Recommend";
import Products from "./pages/Products";
import About from "./pages/About";
import SearchRecommend from "./pages/SearchRecommend";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<SearchRecommend />} /> {/* ✅ */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
