import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

const AllSmurfs = ({ getSmurfs, smurfs }) => {
  useEffect(() => {
    getSmurfs();
  }, [getSmurfs]);

  return (
    <div>
      <h2>All Smurfs</h2>
      <div>
        {smurfs.map(smurf => {
          return (
            <div key={smurf.id}>
              <h4>
                {smurf.name}, {smurf.height}, {smurf.age}
              </h4>
              <div>
                <img src={smurf.image} alt="nice smurfy image" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default connect(
  state => state,
  actionCreators
)(AllSmurfs);
