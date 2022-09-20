import React, { Component } from "react";

export default class HeaderLogin extends Component {
  //state là 1 thuộc tính có sẵn của REact Component, chứa giá trị thay đổi trên giao diện khi người dùng thao tác (click, change, blur..)
  state = {
    isLogin: false, //true là đã đăng nhập
    userName: "",
    number: 1,
  };

  renderLogin = () => {
    if (this.state.isLogin) {
      return (
        <div className="text-white">
          Hello! {this.state.userName}
          <button
            className="btn btn-primary"
            onClick={() => {
              this.handleLogout();
            }}
          >
            Logout
          </button>
        </div>
      );
    }
    return (
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        type="submit"
        onClick={() => {
          this.handleLogin();
        }}
      >
        Login
      </button>
    );
  };
  handleLogin = async () => {
    //setState là phương thức có sẵn được kế thừa từ class components cho phép thay đổi giá trị state cũ bằng object của state mới đồng thời render lại giao diện
    //Lưu ý: this.setState là 1 phương thức bất đồng bộ
    // this.setState({
    //   isLogin: true,
    // }, () => {
    //     console.log(this.state);
    // });
    // console.log(this.state);
    await this.setState(
      {
        isLogin: true,
        userName: "Hiếu",
      },
      () => {
        console.log(this.state);
      }
    );
  };
  handleLogout = async () => {
    await this.setState(
      {
        isLogin: false,
        userName: "",
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#" aria-current="page">
                Home <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">
                  Action 1
                </a>
                <a className="dropdown-item" href="#">
                  Action 2
                </a>
              </div>
            </li>
          </ul>
          <div className="d-flex my-2 my-lg-0">
            {/* {this.isLogin ? (
              <div className="text-white">Hello! {this.userName} <button className="btn btn-primary">Logout</button></div>
            ) : (
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Login
              </button>
            )} */}
            {this.renderLogin()}
          </div>
        </div>
      </nav>
    );
  }
}
