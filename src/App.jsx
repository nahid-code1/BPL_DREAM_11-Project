import { Suspense, useState } from "react";
import "./App.css";
import Players from "./Components/HomePage/Players";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/HomePage/Hero";
import Footer from "./Components/HomePage/Footer";

const fetchPlayers = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const playersPromise = fetchPlayers();

function App() {
  const [amount, setAmount] = useState(10000000);
  return (
    <>
      <Navbar amount={amount}></Navbar>
      <Hero></Hero>
      <Suspense
        fallback={
          <div className="flex min-h-[80vh] items-center justify-center">
            <span className="item loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <Players
          playersPromise={playersPromise}
          amount={amount}
          setAmount={setAmount}
        ></Players>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
