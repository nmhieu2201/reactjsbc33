import React, { Component } from "react";

export default class ProductItem extends Component {
  //this.props: là thuộc tính có sẵn của React components dùng để nhận giá trị từ COmponét cha (Nơi sử dụng thẻ này) truyền vào
  render() {
    // const name = this.props.productName;
    // const img = this.props.img
    const { name, img, price, id } = this.props.product;
    return (
      <div className="card">
        <img src={img} alt="" />
        <div className="card-body">
          <p>{name}</p>
          <p>{price}</p>
          <button className="btn btn-dark">Add to cart</button>
        </div>
      </div>
    );
  }
}
