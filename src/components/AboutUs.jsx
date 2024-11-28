import React from "react";
import kitchenVideo from "../assets/kitchenVideo.mp4";

function AboutUs() {
  return (
    <div className=" relative z-10 bg-gray-900 text-gray-200 min-h-screen flex items-center justify-center px-6 md:px-20 lg:px-40">
      {/* Behind the Scenes Video */}
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg w-full md:w-2/3">
        <h2 className="text-3xl font-semibold text-center text-orange-500 mb-8">Behind the Scenes</h2>
        <div className="flex justify-center">
          <video
            src={kitchenVideo}
            controls
            className="w-full rounded-lg shadow-lg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
