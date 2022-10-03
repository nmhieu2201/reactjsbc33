import React, { Component } from "react";
import { connect } from "react-redux";
class BaiTapChonXeRedux extends Component {
  changColor = (color) => {
    //Tạo ra action buộc có type
    const action = {
      type: "CHANGE_COLOR",
      payload: color,
    };
    //Dùng this.props.dispach từ connect để cung cấp để đưa dữ liệu trên redux
    this.props.dispatch(action);
  };
  render() {
    console.log(this.props);
    let { imgSrc } = this.props;
    return (
      <div className="container">
        <h3>Bài Tập Chọn Xe Redux</h3>
        <div className="row">
          <div className="col-6">
            <img src={imgSrc} className="w-100" alt="..." />
          </div>
          <div className="col-6">
            <button
              className="btn btn-danger"
              onClick={() => {
                this.changColor("red");
              }}
            >
              Red
            </button>
            <button
              className="btn btn-dark mx-2"
              onClick={() => {
                this.changColor("black");
              }}
            >
              Black
            </button>
            <button
              className="btn btn-light mx-2"
              onClick={() => {
                this.changColor("silver");
              }}
            >
              Silver
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    imgSrc: state.imgSrc,
  };
};
export default connect(mapStateToProps)(BaiTapChonXeRedux);

