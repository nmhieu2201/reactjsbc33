import React, { Component } from "react";
import DemoChildren from "./DemoChildren";
import ExerciseCarStore from "../ExserciseCarStore/ExerciseCarStore";

export default class DemoChildrenProps extends Component {
  render() {
    return (
      <div className="container">
        <DemoChildren props={<ExerciseCarStore />}>
          <h3>Đây là nội dung html</h3>
          {/* <ExerciseCarStore /> */}
        </DemoChildren>
      </div>
    );
  }
}
