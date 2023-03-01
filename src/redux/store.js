import { createStore } from "redux";
import submitReducer from "./flight-booking/reducer";

const store = createStore(submitReducer);

export default store;
