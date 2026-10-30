import { Trash } from "lucide-react";
import React from "react";

const SelectedPlayerCard = ({ selectedPlayer }) => {
  return (
    <div className=" rounded-2xl border-2 border-gray-200 my-5 flex justify-between items-center p-6">
      <div className="flex items-center">
        <img
          className="w-20 h-20 rounded-2xl bg-gray-200"
          src={selectedPlayer.image}
          alt={`${selectedPlayer.name} image`}
        />
        <div className="pl-3">
          <h4 className="text-xl font-medium pb-2">{selectedPlayer.name}</h4>
          <p>{selectedPlayer.role}</p>
        </div>
      </div>
      <button className="btn bg-none">
        <Trash />
      </button>
    </div>
  );
};

export default SelectedPlayerCard;
