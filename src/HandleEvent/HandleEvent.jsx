import React, { Component } from "react";

export default class HandleEvent extends Component {
  hanleClick = (event) => {
    // alert("Hello");
    console.log(event.target.className);
    event.target.className = "btn btn-danger";
    event.target.innerHTML = "Button danger";
  };
  showMessage = (name) => {
    alert("Hello " + name);
  };
  render() {
    return (
      <div className="container">
        <button
          className="btn btn-dark"
          onClick={this.hanleClick}
        >
          SayHello
        </button>
        <button
          className="btn btn-dark mx-3"
          onClick={(e) => {
            //Gọi nhiều hàm trong đây
            this.showMessage("Hiếu");
            e.target.innerHTML = "Hello Hiếu";
          }}
        >
          Hi!
        </button>
      </div>
    );
  }
}
