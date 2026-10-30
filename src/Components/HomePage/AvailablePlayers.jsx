import PlayerCard from "./PlayerCard";
import SelectedPlayers from "./SelectedPlayers";

const AvailablePlayers = ({ data, setAmount, amount }) => {
  console.log(data);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10  w-full">
      {data.map((player) => (
        <PlayerCard
          player={player}
          amount={amount}
          setAmount={setAmount}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
