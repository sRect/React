import {combineReducers} from "redux";
import * as types from "./types";
import {num, defaultCount} from "./state";

const numReducer = (state = num, action) => {
  switch(action.type) {
    case types.ADD:
      return state + 1;
    case types.DELETE:
      return state - 1;
    default:
      return state;
  }
}

export const countReducer = (state = defaultCount, action) => {
  switch (action.type) {
    case types.COUNT_ADD:
      return state + 1;
    case types.COUNT_DELETE:
      return state - 1;
    default:
      return state;
  }
}

const allReducer = {
  numReducer,
  countReducer
}

const rootReducer = combineReducers(allReducer);

export default rootReducer;


