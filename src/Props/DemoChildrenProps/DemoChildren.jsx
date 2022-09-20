import React, { Component } from "react";

export default class DemoChildren extends Component {
  render() {
    const { children, props } = this.props;
    console.log(children);
    return (
      <div>
        {children[0]}
        {props}
      </div>
    );
  }
}
