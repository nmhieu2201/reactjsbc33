import React, { Component } from "react";
import SanPham from "./SanPham";
const dataPhone = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

export default class BaiTapXemChiTiet extends Component {
  state = {
    spChiTiet: {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
  };

  renderPhone = () => {
    return dataPhone.map((phone, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham phone={phone} xemChiTiet={this.xemChiTiet} />
        </div>
      );
    });
  };
  xemChiTiet = (phone) => {
    this.setState({ spChiTiet: phone });
  };
  render() {
    let {
      tenSP,
      hinhAnh,
      manHinh,
      ram,
      rom,
      cameraTruoc,
      cameraSau,
      heDieuHanh,
    } = this.state.spChiTiet;
    return (
      <div className="container" style={{ padding: "50px 0" }}>
        <div className="row">{this.renderPhone()}</div>
        <div className="mt-3">
          <div className="row">
            <div className="col-4">
              <h3>{tenSP}</h3>
              <img
                src={hinhAnh}
                height={300}
                className="w-100"
                style={{ objectFit: "contain" }}
                alt="..."
              />
            </div>
            <div className="col-8">
              <h3>Thông tin chi tiết</h3>
              <table className="table">
                <thead>
                  <tr>
                    <td>Màn Hình</td>
                    <td>{manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Cam Trước</td>
                    <td>{cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Cam sau</td>
                    <td>{cameraSau}</td>
                  </tr>
                  <tr>
                    <td>Ram</td>
                    <td>{ram}</td>
                  </tr>
                  <tr>
                    <td>Rom</td>
                    <td>{rom}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
