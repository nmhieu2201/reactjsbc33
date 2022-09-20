import React, { Component } from "react";
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
export default class RenderArrComponent extends Component {
  renderProduct = () => {
    //output : [<tr></tr>,<tr></tr>]
    // let arrTr = [];
    // for (let prod of arrProduct) {
    //   //tạo ra đối tượng JSX là tr
    //   let trX = (
    //     <tr key={prod.id}>
    //       <td>{prod.id}</td>
    //       <td>{prod.nameCar}</td>
    //       <td>
    //         <img src={prod.img} alt="" width={50} height={50} />
    //       </td>
    //       <td>{prod.price}</td>
    //       <td>
    //         <button className="btn btn-danger">Delete</button>
    //       </td>
    //     </tr>
    //   );
    //   arrTr.push(trX);
    // }
    // //đưa object trX vào mảng
    // return arrTr;
    return arrProduct.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.nameCar}</td>
          <td>
            <img src={item.img} alt="" width={50} height={50} />
          </td>
          <td>{item.price}</td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      );
    });
  };
  renderCardProduct = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="card text-dark bg-light col-3" key={index}>
          <img className="card-img-top w-100" src={item.img} alt="" />
          <div className="card-body">
            <h4 className="card-title">{item.nameCar}</h4>
            <p className="card-text">Giá: {item.price}$</p>
            <button className="btn btn-success">Add to cart</button>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-center">ProductList</h3>
        <table className="table mt-4">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Image</td>
              <td>Price</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </table>
        <hr />
        <h3 className="text-center">Danh sách sản phẩm</h3>
        <div className="row">{this.renderCardProduct()}</div>
      </div>
    );
  }
}
