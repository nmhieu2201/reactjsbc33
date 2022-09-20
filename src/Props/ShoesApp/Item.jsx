import React, { Component } from "react";

export default class Item extends Component {
  render() {
    //this.props không thể gán lại giá trị (read only)
    const { image, name, price } = this.props.propItem;
    return (
      <div className="card">
        <img src={image} alt="" width={200} height={200} />
        <div className="card-body">
          <h4>{name}</h4>
          <p>{price}</p>
          <button className="btn btn-primary">add to cart</button>
        </div>
      </div>
    );
  }
}
