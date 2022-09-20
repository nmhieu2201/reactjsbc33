import React, { Component } from "react";
import CarList from "./CarList";
import Modal from "./Modal";
const products = [
  {
    id: 1,
    name: "black car",
    img: "./img/imgBlackCar.jpg",
    price: 1000,
  },
  { id: 2, name: "red car", img: "./img/imgRedCar.jpg", price: 2000 },
  {
    id: 3,
    name: "silver car",
    img: "./img/imgSilverCar.jpg",
    price: 3000,
  },
  {
    id: 3,
    name: "Steel car",
    img: "./img/imgSilverCar.jpg",
    price: 4000,
  },
];

export default class ExerciseCarStore extends Component {
  state = {
    srcImg: "./img/imgSilverCar.jpg",
  };
  //state đặt trên components nào thì setState trên components đó
  xemChiTiet = (car) => {
    this.setState({
      srcImg: car.img,
    });
  };
  render() {
    return (
      <div className="container">
        <Modal imgCar={this.state.srcImg} />
        <CarList products={products} xemChiTiet={this.xemChiTiet}/>
      </div>
    );
  }
}
