import axios from "axios";
import * as types from "./actionTypes";

export const getSmurfs = () => dispatch => {
  axios
    .get("http://localhost:3333/smurfs/")
    .then(response => {
      dispatch({
        type: types.IMPORT_SMURFS,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const addSmurf = newSmurf => dispatch => {
  axios
    .post("http://localhost:3333/smurfs/", newSmurf)
    .then(response => {
      dispatch({
        type: types.IMPORT_SMURFS,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export function changeInput(target) {
  return {
    type: types.ON_INPUT_CHANGE,
    payload: {
      name: target.name,
      value: target.value
    }
  };
}
