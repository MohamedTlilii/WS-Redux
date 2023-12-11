const counterReducer = (
  state = {
    counter: 0,
    name: "Mohamed",
  },
  action
) => {
  if (action.type === "INCREASE") {
    return { ...state, counter: state.counter + 1 };
  } else if (action.type === "DECREASE" && state.counter > 0) {
    return { ...state, counter: state.counter - 1 };
  } else {
    return state;
  }
};

export default counterReducer;
