import React from 'react';

const Banner = () => {
  return (
    <div
      className="banner h-64 bg-cover bg-center text-white flex items-center"
      style={{ backgroundImage: 'url(/path-to-banner.jpg)' }}
    >
      <div className="ml-4">
        <h1 className="text-4xl font-bold">Featured Movie</h1>
        <p className="text-lg">Watch now on Olympia video</p>
      </div>
    </div>
  );
};

export default Banner;