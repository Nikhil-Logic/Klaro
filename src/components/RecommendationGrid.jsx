import React from 'react';

function RecommendationGrid({ items }) {
  const getBadgeColor = (type, value) => {
    const base = "inline-block px-2 py-1 text-xs font-semibold rounded-full";
    const colors = {
      gender: {
        Men: "bg-blue-100 text-blue-800",
        Women: "bg-pink-100 text-pink-800",
        Unisex: "bg-purple-100 text-purple-800",
      },
      usage: {
        Casual: "bg-green-100 text-green-800",
        Sports: "bg-red-100 text-red-800",
        Formal: "bg-yellow-100 text-yellow-800",
        Party: "bg-purple-100 text-purple-800",
      },
      articleType: {
        Shirt: "bg-cyan-100 text-cyan-800",
        Jeans: "bg-indigo-100 text-indigo-800",
        Trousers: "bg-orange-100 text-orange-800",
      },
      baseColour: {
        Black: "bg-gray-800 text-white",
        White: "bg-gray-100 text-gray-800",
        Red: "bg-red-100 text-red-800",
        Blue: "bg-blue-100 text-blue-800",
        Green: "bg-green-100 text-green-800",
      }
    };

    const colorClass = colors[type]?.[value] || "bg-gray-100 text-gray-800";
    return `${base} ${colorClass}`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition duration-300 ease-in-out"
        >
          <div className="overflow-hidden rounded-t-2xl">
            <img
              src={item.image_url}
              alt={`Recommended item ${index + 1}`}
              className="w-full h-64 object-contain transform transition duration-300 hover:scale-105"
            />
          </div>
          <div className="p-4 text-sm text-gray-700 space-y-2 border-t border-gray-200">
            <p>
              <strong>Type:</strong>{" "}
              <span className={getBadgeColor("articleType", item.metadata.articleType)}>
                {item.metadata.articleType}
              </span>
            </p>
            <p>
              <strong>Color:</strong>{" "}
              <span className={getBadgeColor("baseColour", item.metadata.baseColour)}>
                {item.metadata.baseColour}
              </span>
            </p>
            <p>
              <strong>Gender:</strong>{" "}
              <span className={getBadgeColor("gender", item.metadata.gender)}>
                {item.metadata.gender}
              </span>
            </p>
            <p>
              <strong>Usage:</strong>{" "}
              <span className={getBadgeColor("usage", item.metadata.usage)}>
                {item.metadata.usage}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecommendationGrid;
