import * as types from "./actionTypes";

const initialSmurfs = [];

export function smurfReducer(state = initialSmurfs, action) {
  switch (action.type) {
    case types.IMPORT_SMURFS:
      return action.payload;
    default:
      return state;
  }
}

const initialForm = {
  name: "",
  height: "",
  age: ""
};

export function formReducer(state = initialForm, action) {
  switch (action.type) {
    case types.ON_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    default:
      return state;
  }
}
