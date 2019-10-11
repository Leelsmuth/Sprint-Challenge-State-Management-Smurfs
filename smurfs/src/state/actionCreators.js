import axios from "axios";
import * as types from "./actionTypes";

export const getSmurf = () => dispatch => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => dispatch({ type: types.ADD_SMURF, payload: res.data }))
    .catch(err => console.log("Error", err));
};

export const addNewSmurf = addSmurf => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", addSmurf)
    .then(res => dispatch({ type: types.ADD_SMURF, payload: res.data }))
    .catch(err => console.log("Cannot Add Smurf", err));
};
