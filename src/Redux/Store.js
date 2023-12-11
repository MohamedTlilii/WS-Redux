import { createStore } from "redux";
import counterReducer from "./reducers/counterReducer";

const Store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default Store;
