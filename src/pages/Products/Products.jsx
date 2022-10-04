import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { addNewProduct } from "../../Components/redux/reducers/cartReducer";
class Products extends Component {
  state = {
    arrProduct: [],
  };
  async componentDidMount() {
    //call API
    try {
      const result = await axios.get("https://shop.cyberlearn.vn/api/product");
      await this.setState({
        arrProduct: result.data.content,
      });
      console.log(result.data.content);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div className="container">
        <h3>Product List</h3>
        <div className="row">
          {this.state.arrProduct.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="card">
                  <img src={item.image} alt="..." />
                  <div className="card-body">
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <button
                      className="btn-dark btn"
                      onClick={() => {
                        const itemCart = { ...item,quantity:1 };
                        // const action = {
                        // //   type: "cartReducer/addNewProduct",
                        // //   payload: itemCart,
                    
                        // };
                        const action =  addNewProduct(itemCart)
                        this.props.dispatch(action);
                        console.log(action);
                      }}
                    >
                      Add to cart
                      <i className="fa fa-cart-plus mx-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Products);
