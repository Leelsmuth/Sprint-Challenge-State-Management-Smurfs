import React from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import NewSmurf from "./Form";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>

      <NewSmurf />
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(App);
