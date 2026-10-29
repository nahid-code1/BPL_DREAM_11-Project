import React, { use } from "react";
import AvailablePlayers from "./AvailablePlayers";

const Players = ({ playersPromise }) => {
  const data = use(playersPromise);

  return (
    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 w-full gap-10 py-10 justify-between">
      {data.map((player) => (
        <AvailablePlayers player={player}></AvailablePlayers>
      ))}
    </div>
  );
};

export default Players;
