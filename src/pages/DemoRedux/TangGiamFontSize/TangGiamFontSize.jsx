import React, { Component } from "react";
import { connect } from "react-redux";
class TangGiamFontSize extends Component {
  render() {
    console.log(this.props);
    let { fontSize, dispatch } = this.props;
    return (
      <div className="container">
        <h3>Bài tập tăng giảm fontsize</h3>
        <p style={{ fontSize: fontSize }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
          corporis?
        </p>
        <button
          className="btn btn-success"
          onClick={() => {
            //action
            const action = {
              type: "TANG_GIAM_FONT_SIZE",
              payload: 1,
              //payload phần dữ liệu gửi lên redux
            };
            //Dùng props.dispatch để đưa dữ liệu lên redex
            dispatch(action);
          }}
        >
          +
        </button>
        <button className="btn btn-success mx-2" onClick={()=>{
            const action = {
                type:"TANG_GIAM_FONT_SIZE",
                payload:-1,
            }
            dispatch(action);
        }}>-</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    //hàm return về giá trị gì thì giá trị đó sẽ chuyển thành this.props của component
    fontSize: state.fontSize,
  };
};
const ComponentRedux = connect(mapStateToProps)(TangGiamFontSize);
export default ComponentRedux;
