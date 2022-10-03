import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ReactLifecicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      obLike: {
        like: 1,
      },
      count: 0,
    };
    console.log("constructor");
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    //Xử lí => state mới
    //Sử dụng để xử lí state trước khi render (xử lí ngày tháng năm....)
    // return {
    //   number: currentState.number + 1,
    // };
    return null;
  }
  shouldComponentUpdate(newProps, newState) {
    console.log("state hiện tại", this.state);
    console.log("State sau khi thay đổi nhưng chưa render", newState);
    return true;
    //sinh ra để tối ưu hoá render
  }
  render() {
    console.log("render");
    return (
      <div className="container">
        <h3>Number:{this.state.number}</h3>
        <br />
        <button
          className="btn btn-primary"
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          Number
        </button>
        <br />
        <h3>Like: {this.state.obLike.like}</h3>
        <button
          className="btn btn-danger"
          onClick={() => {
            let newOblike = { ...this.state.obLike };
            newOblike.like = newOblike.like + 1;
            this.setState({ obLike: newOblike });
          }}
        >
          Like
        </button>
        <hr />
        <ChildComponent obLike={this.state.obLike} />
        <hr />
        <h3>Count: {this.state.count}</h3>
      </div>
    );
  }
  timeout = null;
  componentDidMount() {
    // Thư viện áp lên các thẻ html hoặc các nghiệp vụ liên quan đến API
    // => setState
    console.log("componentDidMount");
    // this.timeout = setInterval(() => {
    //   this.setState({
    //     count: this.state.count + 1,
    //   });
    // }, 1000);
  }
  componentWillUnmount() {
    //Chạy trước khi component mất khỏi giao diện
    //Dùng để clear các service chạy ngầm khi component này không còn load nữa
    clearInterval(this.timeout);
  }

}
