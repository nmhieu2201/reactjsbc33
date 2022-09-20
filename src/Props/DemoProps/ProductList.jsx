import React, { Component } from "react";
import ProductItem from "./ProductItem";
const arrProduct = [
  {
    id: 1,
    nameCar: "Red-Car",
    img: "./img/products/red-car.jpg",
    price: 1000,
  },
  {
    id: 2,
    nameCar: "Black-Car",
    img: "./img/products/black-car.jpg",
    price: 2000,
  },
  {
    id: 3,
    nameCar: "Silver-Car",
    img: "./img/products/silver-car.jpg",
    price: 3000,
  },
  {
    id: 4,
    nameCar: "Steel-Car",
    img: "./img/products/steel-car.jpg",
    price: 4000,
  },
];
export default class ProductList extends Component {
  renderProduct = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <ProductItem product={item} />
        </div>
      );
    });
  };
  render() {
    // let prod = {
    //   id: 1,
    //   name: "Red car",
    //   price: 1000,
    //   img: "./img/products/red-car.jpg",
    // };
    return (
      <div className="container py-5">
        {/* <div className="w-25">
          <ProductItem product={prod} />
        </div> */}
        {/* <div className="w-25">
          <ProductItem
            productName="Black-car"
            img="./img/products/black-car.jpg"
          />
        </div>
        Ư
        <div className="w-25">
          <ProductItem />
        </div> */}
        <h3>ProductList</h3>
        <div className="row">{this.renderProduct()}</div>
      </div>
    );
  }
}
