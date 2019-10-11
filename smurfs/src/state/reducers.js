import * as types from "./actionTypes";

const initialState = {
  name: "",
  age: "",
  height: "",
  id: "",
  smurfs: []
};

export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    case types.ADD_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, { smurfs: action.payload }]
      };
    default:
      return state;
  }
};
