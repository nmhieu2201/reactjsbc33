import React, { Component } from "react";

export default class ChangeCarColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: "./img/products/red-car.jpg",
    };
  }
  handleChangeColor = (color) => {
    this.setState({
      imgSrc: `./img/products/${color}-car.jpg`,
    });
  };
  render() {
    return (
      <div className="row py-5">
        <div className="col-4">
          <img src={this.state.imgSrc} alt="" className="w-100" />
        </div>
        <div className="col-8">
          <button
            onClick={() => {
              //   this.setState({ imgSrc: "./img/products/black-car.jpg" });
              this.handleChangeColor("black");
            }}
            className="btn btn-dark mx-2"
          >
            Black Car
          </button>
          <button
            onClick={() => {
              //   this.setState({ imgSrc: "./img/products/red-car.jpg" });
              this.handleChangeColor("red");
            }}
            className="btn btn-danger mx-2"
          >
            Red Car
          </button>
          <button
            onClick={() => {
              this.setState({ imgSrc: "./img/products/silver-car.jpg" });
            }}
            className="btn btn-secondary mx-2"
          >
            Sliver Car
          </button>
          <button
            onClick={() => {
              this.setState({ imgSrc: "./img/products/steel-car.jpg" });
            }}
            className="btn btn-light mx-2"
          >
            Steel Car
          </button>
        </div>
      </div>
    );
  }
}
