import React, { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

const Players = ({ playersPromise }) => {
  const data = use(playersPromise);
  const [selectedType, setSelectedType] = useState("available");
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center gap-4 py-8 ">
        <h4 className=" text-lg ml-2 md:ml-0 md:text-2xl">
          {selectedType === "available"
            ? "Available players"
            : "Selected players"}
        </h4>
        <div className="">
          <button
            onClick={() => setSelectedType("available")}
            className={`${selectedType === "available" ? "bg-black text-white" : ""} btn btn-soft rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`${selectedType === "selected" ? "bg-black text-white" : ""} btn btn-soft rounded-l-none rounded-r-xl`}
          >
            Selected
          </button>
        </div>
      </div>
      <div className="border w-full ">
        {selectedType === "available" ? (
          <AvailablePlayers data={data}></AvailablePlayers>
        ) : (
          <SelectedPlayers></SelectedPlayers>
        )}
      </div>
    </div>
  );
};

export default Players;
