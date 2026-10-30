import SelectedPlayerCard from "./SelectedPlayerCard";

const SelectedPlayers = ({ selectedPlayers }) => {
  console.log(selectedPlayers);
  return (
    <div className="">
      {selectedPlayers.map((selectedPlayer) => (
        <SelectedPlayerCard
          selectedPlayer={selectedPlayer}
        ></SelectedPlayerCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
