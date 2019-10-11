import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

const AllSmurfs = props => {
  useEffect(() => {
    props.getSmurfs();
  }, []);

  return (
    <div className="">
      <h2>All Smurfs</h2>
      <div>
        {props.smurfs.map(smurf => {
          return (
            <div className="" key={smurf.id}>
              <h4>
                {smurf.name}, {smurf.height}, {smurf.age}
              </h4>
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
