import React from "react";

const About = () => {
  return (
    <div className="text-center py-20 px-4">
      <h2 className="text-3xl font-bold mb-4">About This Project</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        This fashion recommendation system was built using deep learning models and FastAPI to suggest visually and contextually similar clothing items based on the uploaded image.
      </p>
    </div>
  );
};

export default About;
