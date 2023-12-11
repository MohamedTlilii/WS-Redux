import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase , decrease } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  let counter = useSelector((store) => store);
  console.log(counter);
  return (
    <div className="App">
      <h1>{counter}</h1>
      <div className="bnts">
        <button
          className="font-tajawal"
          onClick={() => {
            dispatch(increase());
          }}
        >
          Increase
        </button>
        <button onClick={() => {
            dispatch(decrease());
          }}>Decrease</button>
      </div>
    </div>
  );
}

export default App;
