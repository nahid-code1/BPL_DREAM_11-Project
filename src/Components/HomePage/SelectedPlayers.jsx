import SelectedPlayerCard from "./SelectedPlayerCard";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  amount,
  setAmount,
}) => {
  console.log(selectedPlayers);
  return (
    <div className="">
      {selectedPlayers.length === 0 ? (
        <div className="h-[60vh] flex flex-col items-center justify-center gap-4 p-4">
          <h3 className="text-2xl font-medium">
            No currently selected players
          </h3>
          <p>Please select players from available players list</p>
        </div>
      ) : (
        selectedPlayers.map((selectedPlayer) => (
          <SelectedPlayerCard
            amount={amount}
            setAmount={setAmount}
            selectedPlayers={selectedPlayers}
            selectedPlayer={selectedPlayer}
            setSelectedPlayers={setSelectedPlayers}
          ></SelectedPlayerCard>
        ))
      )}
    </div>
  );
};

export default SelectedPlayers;
