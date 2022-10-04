import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
class HeaderHome extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          CyberSoft
        </NavLink>
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
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link bg-warning" : "nav-link"
                }
                to="/home"
                aria-current="page"
                style={({ isActive }) => (isActive ? { color: "red" } : {})}
              >
                Home <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link bg-warning" : "nav-link"
                }
                to="/login"
                style={({ isActive }) => (isActive ? { color: "red" } : {})}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link bg-warning " : "nav-link"
                }
                to="/register"
                style={({ isActive }) => (isActive ? { color: "red" } : {})}
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link bg-warning " : "nav-link"
                }
                to="/formdemo"
                style={({ isActive }) => (isActive ? { color: "red" } : {})}
              >
                Form
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link bg-warning " : "nav-link"
                }
                to="/reactlifecycle"
                style={({ isActive }) => (isActive ? { color: "red" } : {})}
              >
                ReactLifeCycle
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link bg-warning " : "nav-link"
                }
                to="/tanggiamfont"
                style={({ isActive }) => (isActive ? { color: "red" } : {})}
              >
                Redux - Demo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link bg-warning " : "nav-link"
                }
                to="/baitapchonxe"
                style={({ isActive }) => (isActive ? { color: "red" } : {})}
              >
                Redux - ChonXe
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link bg-warning " : "nav-link"
                }
                to="/products"
                style={({ isActive }) => (isActive ? { color: "red" } : {})}
              >
                Demo - Giỏ Hàng
              </NavLink>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <NavLink
              className="nax-item text-light px-5"
              style={{ textDecoration: "none" }}
              to={"cart"}
            >
              <i className="fa fa-cart-plus"></i>({this.props.cart.length})
              {this.props.cart
                .reduce((tt, item, index) => {
                  return (tt += item.quantity * item.price);
                }, 0)
                .toLocaleString()}
              $
            </NavLink>
          </form>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart,
});

export default connect(mapStateToProps)(HeaderHome);
