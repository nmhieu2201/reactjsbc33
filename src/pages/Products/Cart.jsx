import React, { Component } from "react";
import { connect } from "react-redux";
import {
  changerQuantity,
  deleteItem,
} from "../../Components/redux/reducers/cartReducer";
class Cart extends Component {
  render() {
    console.log(this.props.cart);
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>image</th>
              <th>price</th>
              <th>quantity</th>
              <th>total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((item, index) => {
              return (
                <tr key={index}>
                  <th>{item.id}</th>
                  <th>{item.name}</th>
                  <th>
                    <img src={item.image} width={50} height={50} alt="..." />
                  </th>
                  <th>{item.price}</th>
                  <th>
                    <button
                      className="btn btn-dark mx-2"
                      onClick={() => {
                        const action = changerQuantity({
                          id: item.id,
                          quantity: 1,
                        });
                        this.props.dispatch(action);
                        //tạo ra action và đưa action lên reducer
                      }}
                    >
                      +
                    </button>
                    {item.quantity}
                    <button
                      className="btn btn-dark mx-2"
                      onClick={() => {
                        const action = changerQuantity({
                          id: item.id,
                          quantity: -1,
                        });
                        this.props.dispatch(action);
                      }}
                    >
                      -
                    </button>
                  </th>
                  <th>{item.price * item.quantity}</th>
                  <th>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        //tạo ra action đưa dữ liệu lên redux
                        const action = deleteItem(item.id);
                        /*
                      action = {
                        type: 'cartReducer/deleteItem'
                        payload:item.id
                      }
                      */
                        this.props.dispatch(action);
                      }}
                    >
                      Del
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart,
});

export default connect(mapStateToProps)(Cart);
