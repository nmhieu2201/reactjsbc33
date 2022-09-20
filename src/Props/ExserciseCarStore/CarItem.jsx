import React, { Component } from "react";

export default class CarItem extends Component {
  render() {
    const { car, xemChiTiet } = this.props;
    return (
      <div className="card">
        <img src={car.img} alt="..." />
        <div className="card-body" style={{ padding: "20px" }}>
          <p>{car.name}</p>
          <p>{car.price.toLocaleString()}</p>
          <button
            className="btn btn-success "
            data-bs-toggle="modal"
            data-bs-target="#modalId"
            onClick={() => {
              xemChiTiet(car);
            }}
          >
            Xem Chi Tiết
          </button>
        </div>
      </div>
    );
  }
}
