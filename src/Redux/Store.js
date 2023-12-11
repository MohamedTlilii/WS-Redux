import { createStore } from "redux";
import CounterReducer from "./Reducers/CounterReducer";

const Store = createStore(CounterReducer);
export default Store