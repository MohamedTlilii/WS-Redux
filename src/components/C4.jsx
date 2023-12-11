import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../redux/actions";
function C4() {
  const dispatch = useDispatch();
  let counter = useSelector((store) => store);
  console.log(counter);
  return (
    <div className="bnts">
      <div>
        <h1>{counter}</h1>

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
