import React, { Component } from "react";

export default class DemoDataBinding extends Component {
  renderTitle = () => {
    return <div className="bg-dark text-white text-center p-5">Cyber</div>;
  };
  renderCard = () => {};
  //Databinding có thể binding các giá trị như primitive value (string. boolean. number...) và jsx
  render() {
    const hoTen = "Nguyễn Minh Hiếu";
    const prod = {
      id: 1,
      name: "Product 1",
      price: 1000,
    };
    return (
      <div>
        <h3>Họ tên: {hoTen} </h3>
        <div className="mt-2 w-25">
          <div className="card">
            <img src="https://picsum.photos/200" alt="" />
            <div className="card-body">
              <p>{prod.name}</p>
              <p>{prod.price} $</p>
            </div>
          </div>
        </div>
        {this.renderTitle()}
      </div>
    );
  }
}
