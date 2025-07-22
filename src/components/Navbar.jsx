import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">👗 Klaro</h1>
        <ul className="flex space-x-6">
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
