import React, { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

const Players = ({ playersPromise, amount, setAmount }) => {
  const data = use(playersPromise);
  const [selectedType, setSelectedType] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  return (
    <div className="container mx-auto">
      <div className="space-y-2 md:space-y-0 md:flex justify-between items-center gap-4 py-8 ">
        <div className=" text-lg ml-2  md:text-2xl">
          {selectedType === "available" ? (
            <h5>Available Players : {data.length}</h5>
          ) : (
            <h5>
              Selected players ({selectedPlayers.length}/{data.length})
            </h5>
          )}
        </div>
        <div className="flex justify-center pt-4 md:pt-0">
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
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      <div className=" w-full ">
        {selectedType === "available" ? (
          <AvailablePlayers
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            data={data}
            amount={amount}
            setAmount={setAmount}
          ></AvailablePlayers>
        ) : (
          <SelectedPlayers
            amount={amount}
            setAmount={setAmount}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></SelectedPlayers>
        )}
      </div>
    </div>
  );
};

export default Players;
