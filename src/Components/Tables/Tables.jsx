import React, { Component } from "react";

export default class Tables extends Component {
  render() {
    const { arrProduct, deleProduct, editProduct } = this.props;
    return (
      <table className="table mt-2">
        <thead>
          <tr className="bg-dark text-white">
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Type</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {arrProduct.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>
                  <img src={product.image} alt="..." width={50} height={50} />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.productType}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleProduct(product.id);
                    }}
                  >
                    Xoá
                  </button>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      editProduct(product);
                    }}
                  >
                    Sửa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
