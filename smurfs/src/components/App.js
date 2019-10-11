import React from "react";
import Form from "./Form";
import Smurf from "./Smurfs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <Smurf />
      <Form />
    </div>
  );
}

export default App;
