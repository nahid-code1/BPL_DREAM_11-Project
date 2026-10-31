import { Flag } from "lucide-react";

import { toast } from "react-toastify";

const PlayerCard = ({
  player,
  amount,
  setAmount,
  setSelectedPlayers,
  selectedPlayers,
}) => {
  const selected = selectedPlayers.some(
    (selectedPlayer) => selectedPlayer.name === player.name,
  );
  const handleSelected = () => {
    if (selected) return;
    const newAmont = amount - player.price;
    if (newAmont >= 0) {
      setAmount(amount - player.price);
      toast.success(`${player.name} selected successfully`);
    } else {
      toast.error("Unable to select due to insufficient balance");
      return;
    }

    setSelectedPlayers([...selectedPlayers, player]);
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-lg">
        <figure>
          <img src={player.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{player.name}</h2>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <Flag />
              {player.country}
            </span>
            <button className="btn">{player.role}</button>
          </div>
          <div className="divider"></div>
          <h4 className="font-medium text-xl">Rating : {player.rating}</h4>
          <div className="flex justify-between items-center w-full text-md font-medium pt-2">
            <h5 className="w-fit ">{player.battingStyle}</h5>
            <h5 className="w-fit ">{player.bowlingStyle}</h5>
          </div>
          <div className="flex justify-between items-center w-full text-md font-medium py-2">
            <h5 className="w-fit ">Price: {player.price} $</h5>
            <button
              className="btn btn-dash"
              onClick={handleSelected}
              disabled={selected}
            >
              {selected ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
