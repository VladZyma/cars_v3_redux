import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import carsReducer from "./redux/carsSlice";

const rootReducer = combineReducers({
  cars: carsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export { store };
