import React, { Component } from "react";
import Tables from "../Components/Tables/Tables";
import axios from "axios";
export default class ReactFormDemo extends Component {
  state = {
    values: {
      id: "",
      name: "",
      price: "",
      image: "",
      description: "",
      productType: "phone",
    },

    errors: {
      id: "",
      name: "",
      price: "",
      image: "",
      description: "",
    },
    isSubmit: true,
    arrProduct: [
      {
        id: 1,
        name: "product 1",
        price: 1000,
        image: "https://picsum.photos/id/1/50/50",
        description: "desc prod",
        productType: "phone",
      },
      {
        id: 2,
        name: "product 2",
        price: 2000,
        image: "https://picsum.photos/id/2/50/50",
        description: "desc prod2",
        productType: "laptop",
      },
    ],
  };
  handleChangeInput = (e) => {
    let { value, id } = e.target;

    // this.setState({ [id]: value }, () => console.log(this.state));
    let newValues = { ...this.state.values };
    newValues[id] = value;
    let newErrors = { ...this.state.errors };
    //Xử lí lỗi
    let messageError = "";
    if (value.toString().trim() === "") {
      messageError = id + " không được bỏ trống!";
    } else {
      let dataType = e.target.getAttribute("data-type");
      if (dataType === "number") {
        let regexNumber = /^\d+$/;
        if (!regexNumber.test(value)) {
          messageError = id + " phải nhập số";
        }
      }
    }
    newErrors[id] = messageError;
    console.log(newErrors);
    let submit = false;
    for (let key in newValues) {
      if (newValues[key].toString().trim() === "") {
        submit = true;
      }
    }
    this.setState(
      {
        values: newValues,
        errors: newErrors,
        isSubmit: submit,
      },
      () => console.log(this.state)
    );
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //Kiểm tra lỗi trước khi submit
    console.log(this.state);
    //Lấy ra object errors từ state
    let { errors } = this.state;
    for (let key in errors) {
      if (errors[key] !== "") {
        alert("Dữ liệu không hợp lệ");
        return;
      }
    }
    let newProduct = { ...this.state.values };
    this.state.arrProduct.push(newProduct);
    this.setState({ arrProduct: this.state.arrProduct }, () => {
      this.luuStorage();
    });
  };
  editProduct = (productEdit) => {
    console.log(productEdit);
    this.setState({
      values: productEdit,
    });
  };
  deleProduct = (idClick) => {
    this.state.arrProduct = this.state.arrProduct.filter(
      (arrProduct) => arrProduct.id !== idClick
    );
    // let indexDel = this.state.arrProduct.findIndex( prod => prod.id === idClick);
    // this.state.arrProduct.splice(indexDel, 1);
    this.setState({ arrProduct: this.state.arrProduct }, () => {
      this.luuStorage();
    });
  };
  handleUpdate = () => {
    //DỮ liệu đang edit: this.state.values
    //Dữ liệu cần thay đổi:  this.state.arrProduct
    let { values, arrProduct } = this.state;
    let productUpdate = arrProduct.find((product) => product.id === values.id);
    // productUpdate.name = values.name;
    // productUpdate.price = values.price;
    // productUpdate.description = values.description;
    // productUpdate.image = values.image;
    // productUpdate.productType = values.productType;
    for (let key in productUpdate) {
      productUpdate[key] = values[key];
    }
    this.setState(
      {
        arrProduct: arrProduct,
      },
      () => {
        this.luuStorage();
      }
    );
  };
  luuStorage = () => {
    let stringArrayProduct = JSON.stringify(this.state.arrProduct);
    localStorage.setItem("arrProduct", stringArrayProduct);
  };
  layStorage = () => {
    if (localStorage.getItem("arrProduct")) {
      return JSON.parse(localStorage.getItem("arrProduct"));
    }
    return [];
  };
  static getDerivedStateFromProps(newProps, currentState) {
    // let arrProduct = [];
    // if (localStorage.getItem("arrProduct")) {
    //   arrProduct = JSON.parse(localStorage.getItem("arrProduct"));
    // }
    // let arrProductStorage = arrProduct;
    // let newState = { ...currentState, arrProduct: arrProductStorage };
    // return newState;
  }
  render() {
    let { id, name, price, image, description, productType } =
      this.state.values;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h3>Create product</h3>
          <div className="card">
            <div className="card-header bg-dark text-warning">
              <h3>Product Info</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <p>ID</p>
                    <input
                      className="form-control mb-3"
                      id="id"
                      name="id"
                      onInput={this.handleChangeInput}
                      value={id}
                    />
                    <p className="text-danger">{this.state.errors.id}</p>
                  </div>
                  <div className="form-group">
                    <p>Name</p>
                    <input
                      className="form-control mb-3"
                      id="name"
                      name="name"
                      onInput={this.handleChangeInput}
                      value={name}
                    />
                    <p className="text-danger">{this.state.errors.name}</p>
                  </div>
                  <div className="form-group">
                    <p>Price</p>
                    <input
                      className="form-control mb-3"
                      id="price"
                      name="price"
                      data-type="number" //atributes
                      onInput={this.handleChangeInput}
                      value={price}
                    />
                    <p className="text-danger">{this.state.errors.price}</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <p>Image</p>
                    <input
                      className="form-control mb-3"
                      id="image"
                      name="image"
                      value={image}
                      onInput={this.handleChangeInput}
                    />
                    <p className="text-danger">{this.state.errors.image}</p>
                  </div>
                  <div className="form-group">
                    <p>Product Type</p>
                    <select
                      id="productType"
                      name="productType"
                      className="form-control mb-3"
                      value={productType}
                    >
                      <option value={"phone"}>Phone</option>
                      <option value={"tablet"}>Tablet</option>
                      <option value={"laptop"}>Laptop</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <p>Description</p>
                    <textarea
                      className="form-control mb-3"
                      id="description"
                      name="Description"
                      onInput={this.handleChangeInput}
                      value={description}
                    />
                    <p className="text-danger">
                      {this.state.errors.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-success"
                type="submit"
                disabled={this.state.isSubmit}
              >
                Create
              </button>
              <button
                className="btn btn-primary mx-2"
                type="button"
                disabled={this.state.isSubmit}
                onClick={() => {
                  this.handleUpdate();
                }}
              >
                Update
              </button>
            </div>
          </div>
        </form>
        <Tables
          arrProduct={this.state.arrProduct}
          deleProduct={this.deleProduct}
          editProduct={this.editProduct}
        />
      </div>
    );
  }
  async componentDidMount() {
    //window.onload
    // this.setState({
    //   arrProduct: this.layStorage(),
    // });
    // let promise = axios({
    //   url: "https://svcy.myclass.vn/api/Product/GetAll",
    //   method: "GET",
    // });
    // promise.then((result) => {
    //   this.setState({
    //     arrProduct: result.data,
    //   });
    // });
    // promise.catch((err) => {
    //   console.log(err);
    // });
    try {
      let result = await axios({
        url: "https://svcy.myclass.vn/api/Product/GetAll",
        method: "GET",
      });
      this.setState({
        arrProduct: result.data,
      });
    } catch (errors) {
      console.log(errors);
    }
  }
}
