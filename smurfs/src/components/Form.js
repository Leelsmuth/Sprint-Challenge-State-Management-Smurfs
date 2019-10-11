import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export function Form({ form, changeInput, addSmurf }) {
  const onValueChange = event => {
    changeInput(event.target);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    addSmurf(form);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        <input
          name="name"
          value={form.name}
          onChange={onValueChange}
          placeholder="Name"
        />
      </label>

      <label>
        <input
          name="height"
          value={form.height}
          onChange={onValueChange}
          placeholder="Height in cm"
        />
      </label>

      <label>
        <input
          name="age"
          value={form.age}
          onChange={onValueChange}
          placeholder="Age"
        />
      </label>
      <input type="Submit" />
    </form>
  );
}

export default connect(
  state => state,
  actionCreators
)(Form);
