import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    const { phone, xemChiTiet } = this.props;
    return (
      <div className="card">
        <img
          src={phone.hinhAnh}
          height={300}
          className="w-100"
          style={{ objectFit: "contain" }}
          alt="..."
        />

        <div className="card-body">
          <p>{phone.tenSP}</p>
          <p>{phone.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              //   this.xemChiTiet(phone);
              xemChiTiet(phone)
            }}
          >
            Xem Chi Tiết
          </button>
        </div>
      </div>
    );
  }
}
