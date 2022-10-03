import React, { Component, PureComponent } from "react";
//pureComponent : là class tương tự component tuy nhiên không có lifecycle shouldComponentUpdate.PureComponent sẽ đảm nhiệm việc phân biệt state
// props của component khi có sự thay đổi thì mới cho render lại
//tuy nhiên: sự nhận biết này chỉ diễn ra với primitive value
//ĐỔi vs props là object haocjw arr thì khi xử lí setState lưu ý phải clone ra object hoặc arr mới
export default class ChildComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor children");
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps children");
    return null;
  }

  render() {
    console.log("render children");
    return (
      <div className="bg-dark text-light p-5 text-center">
        ChildComponent
        <h3>like {this.props.obLike.like}</h3>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount children");
  }
  componentDidUpdate(prevProps, prevState) {
    //khi 1 thuộc tính trong state thay đổi thì kéo theo các thuộc tính khác thay đổi
    //Khi setState tại lifecycle này phải có if
    console.log("preProps",prevProps);
    console.log("preState",prevState);
    // if(prevProps.obLike.like){
    //   this.setState({})
    // }
  }
}
