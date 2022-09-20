import React, { Component } from "react";
import CarItem from "./CarItem";

export default class CarList extends Component {
  renderProduct = () => {
    const { products,xemChiTiet } = this.props;
    return products.map((car, index) => {
      return (
        <div className="col-3" key={index}>
          <CarItem car={car} xemChiTiet={xemChiTiet} />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <h3 className="text-center">Product List</h3>
        <div className="row">{this.renderProduct()}</div>
      </div>
    );
  }
}
