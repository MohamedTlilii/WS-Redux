import "./App.css";
import React from "react";
import { useSelector } from "react-redux";

function App() {
  let counter = useSelector((store)=>store)
  console.log(counter)
  return (
    <div className="App">
      <h1>{counter}</h1>
      <div className="bnts">
      <button className="font-tajawal">Increase</button>
      <button>Decrease</button>
    </div>
    </div>
  );
}

export default App;
