import React, { Component } from "react";

export default class Item extends Component {
  render() {
    //this.props không thể gán lại giá trị (read only)
    const { image, name, price } = this.props.propItem;
    return (
      <div className="card">
        <img src={image} alt="" />
        <div className="card-body">
          <h1>{name}</h1>
          <p>{price}</p>
          <button className="btn btn-primary">add to cart</button>
        </div>
      </div>
    );
  }
}
