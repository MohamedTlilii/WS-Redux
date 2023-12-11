import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../redux/actions";
import "../App.css";
function C4() {
  const dispatch = useDispatch();
  let store = useSelector((store) => store);
  console.log(store);
  return (
    <div className="bnts">
      <div>
        <h1>{store.counter}</h1>

        <button
          className="font-tajawal"
          onClick={() => {
            dispatch(increase());
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            dispatch(decrease());
          }}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

export default C4;
