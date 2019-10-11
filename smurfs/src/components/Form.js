import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export const NewSmurf = props => {
  const [addSmurf, setSmurf] = useState({ name: "", age: "", height: "" });

  const handleChanges = e => {
    setSmurf({ ...addSmurf, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.addNewSmurf(addSmurf);
    setSmurf({ name: "", age: "", height: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a Smurf</h1>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        type="text"
        placeholder="Enter Smurfs Name"
        value={addSmurf.name}
        onChange={handleChanges}
      />
      <input
        name="age"
        type="text"
        placeholder="Enter Smurfs Age"
        value={addSmurf.age}
        onChange={handleChanges}
      />
      <input
        name="height"
        type="text"
        placeholder="Enter Smurfs Height"
        value={addSmurf.height}
        onChange={handleChanges}
      />
      <button>Add a New Smurf</button>
    </form>
  );
};

export default connect(
  state => state,
  actionCreators
)(NewSmurf);
