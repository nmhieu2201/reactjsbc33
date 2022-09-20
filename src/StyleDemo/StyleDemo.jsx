import React, { Component } from "react";
import "../assets/style.css";
//Khi import tất cả các components đều sử dụng được (thường hay sử dụng)
import style from "./StyleDemo.module.css";
export default class StyleDemo extends Component {
  render() {
    return (
      <div className="container">
        <h3 className={`text-center ${style["color-pink"]}`}>CyberSoft</h3>
        <div style={{
            color: "red",
            border: "1px solid red",
            padding: "10px",
            backgroundColor: "#000",
        }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veritatis suscipit quibusdam, amet, dolorem ea atque rerum cupiditate neque dignissimos, fugit cum ipsa quam? Asperiores repellat ipsum inventore fugit corporis.</div>
      </div>
    );
  }
}
