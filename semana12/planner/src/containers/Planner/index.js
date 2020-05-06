import React from "react";
import { connect } from "react-redux";
import Task from '../Task'

class Planner extends React.Component {
  render() {
    return <div>
      <Task/>
    </div>;
  }
}

export default connect()(Planner);
