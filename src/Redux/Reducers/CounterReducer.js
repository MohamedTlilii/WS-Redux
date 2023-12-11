const counterReducer = (
  state = {
    counter: 0,
    name: "Mohamed",
  },
  action
) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, counter: state.counter + 1 };
    case "DECREASE":
      if (state.counter > 0) {
        return { ...state, counter: state.counter - 1 };
      }
      break; // Add this break statement
    case "CHANGE_NAME":
      return { ...state, name: "Mohamed Tlili" };
    default:
      return state;
  }
};

export default counterReducer;