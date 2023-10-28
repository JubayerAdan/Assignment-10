import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.pinimg.com/originals/68/8e/1a/688e1ad62f12aaba7b7ad36bf5025a85.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Discover Taste Innovators</h1>
          <p className="py-6">
            Immerse yourself in a unique culinary experience as you discover a
            collection of world-renowned chefs and their signature dishes. Each
            chef offers a glimpse into the culinary world's brightest minds,
            with their own delectable recipes waiting to be explored.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
