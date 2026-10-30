import PlayerCard from "./PlayerCard";
import SelectedPlayers from "./SelectedPlayers";

const AvailablePlayers = ({ data }) => {
  console.log(data);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10  w-full">
      {data.map((player) => (
        <PlayerCard player={player}></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
