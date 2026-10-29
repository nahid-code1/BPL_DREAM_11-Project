import { Flag } from "lucide-react";
import React from "react";

const AvailablePlayers = ({ player }) => {
  console.log(player);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name</h2>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <Flag />
            Country
          </span>
          <button className="btn">Role</button>
        </div>
        <div className="divider"></div>
        <h4 className="font-medium text-xl">Rating</h4>
        <div className="flex justify-between w-full">
          <p>Batting Style</p>
          <p>Bowling style</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayers;
