import React, { Component } from "react";
import ChangeCarColor from "./ChangeCarColor";

export default class StateDemo extends Component {
  state = {
    fsize: 16,
    color: "pink",
    imgSrc: "https://i.pravatar.cc?u=1",
  };
  randomAvatar = () => {
    let randomNumber = Math.random(Math.floor() * 100);
    let imgSrcNew = "https://i.pravatar.cc?u=1" + randomNumber;
    this.setState({ imgSrc: imgSrcNew });
  };
  render() {
    return (
      <div className="container">
        <h3>Ví dụ 1:Tăng giảm font chữ của đoạn văn bản sau</h3>
        <p style={{ fontSize: this.state.fsize }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, harum!
        </p>
        <button
          onClick={() => {
            this.setState({ fsize: this.state.fsize + 1 });
          }}
          className="btn btn-primary mx-2"
        >
          +
        </button>
        <button
          onClick={() => this.setState({ fsize: this.state.fsize - 1 })}
          className="btn btn-primary mx-2"
        >
          -
        </button>
        <hr />
        <h3>Thay đổi màu sắc của div#home</h3>
        <div
          style={{ color: this.state.color }}
          className="fa fa-home fa-10x"
        ></div>
        <p>Chọn màu</p>
        <select
          className="form-control w-25 mt-2"
          onChange={(e) => {
            e.preventDefault();
            this.setState({
              color: e.target.value,
            });
          }}
        >
          <option value={"red"}>Red</option>
          <option value={"green"}>Green</option>
          <option value={"blue"}>Blue</option>
        </select>
        <hr />
        <h3>Ví dụ 3: Tinder App</h3>
        <div className="w-25 card">
          <img src={this.state.imgSrc} alt="..." />
          <div className="card-body">
            <button
              onClick={() => {
                this.randomAvatar();
              }}
              className="btn btn-danger"
            >
              Random
            </button>
          </div>
        </div>
        <hr />
        <ChangeCarColor />
      </div>
    );
  }
}
