import { Suspense } from "react";
import "./App.css";
import Players from "./Components/HomePage/Players";
import Navbar from "./Components/Navbar/Navbar";

const fetchPlayers = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
function App() {
  const playersPromise = fetchPlayers()
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </>
  );
}

export default App;
