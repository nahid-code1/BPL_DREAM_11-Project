import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="hero container mx-auto my-8 bg-base-200 min-h-[60vh]">
        <div className="hero-content flex-col lg:flex-row">
          <img
            alt="Tailwind CSS hero component"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-k_EO05vFPGzW0ZiygNw-IIS-1VaLKAnI8cvr8pBTZEydn3XgN1v1Tyw&s=10"
            className="max-w-3xs md:max-w-2xs lg:max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Welcome to Dream 11!</h1>
            <p className="py-6">
              Pick your players and make your dream starting 11. Each player has
              their specific attribute and value, make sure to choose wisely
              because you have a limited balance.
            </p>
            <button className="btn btn-neutral">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
