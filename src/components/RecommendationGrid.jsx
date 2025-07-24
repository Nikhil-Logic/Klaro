import React from "react";

const RecommendationGrid = ({ items, title }) => {
  if (!items || items.length === 0) return null;
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-8 font-manrope text-slate-800">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-lg rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="bg-slate-100 rounded-xl mb-4 overflow-hidden">
              <img
                src={item.image_url}
                alt={`Recommended item ${index + 1}`}
                className="w-full h-64 object-contain transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/300x400/E2E8F0/CCCCCC?text=Image+Error';
                }}
              />
            </div>

            {/* Remove this line to hide image name */}
            {/* <h3 className="font-semibold truncate font-manrope text-slate-800">{item.name || item.filename}</h3> */}

            <p className="text-sm text-slate-600 truncate">
              👕 {item.metadata?.gender || 'N/A'} |
              🎯 {item.metadata?.articleType || 'N/A'} |
              🎨 {item.metadata?.baseColour || 'N/A'} |
              🧢 {item.metadata?.usage || 'N/A'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};


  export default RecommendationGrid