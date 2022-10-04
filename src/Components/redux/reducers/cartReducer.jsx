// const initialState = {
//   cart: [],
// };
// //Nếu như state là object hoặc array ? => lưu địa chỉ ô nhớ
// //{...object} - [...array]
// export default (state = initialState, { type, payload }) => {
//   switch (type) {
//     case "ADD_NEW_PRODUCT": {
//       //B1: Lấy dữ liệu từ payload
//       //B2: Xử lí thay đổi state
//       const item = state.cart.find((sp) => sp.id === payload.id);
//       if (item) {
//         item.quantity = item.quantity + 1;
//       } else {
//         state.cart = [...state.cart, payload];
//       }
//     }
//     default:
//       return state;
//   }
// };
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addNewProduct: (state, { type, payload }) => {
      // B1: Lấy dữ liệu từ payload
      //B2: Xử lí thay đổi state
      const item = state.cart.find((sp) => sp.id === payload.id);
      if (item) {
        item.quantity = item.quantity + 1;
      } else {
        state.cart = [...state.cart, payload];
      }
    },
    deleteItem: (state, { type, payload }) => {
      //
      const id = payload;
      state.cart = state.cart.filter((item) => item.id !== id);
    },
    changerQuantity: (state, { type, payload }) => {
      //Lấy dữ liệu từ payload
      const { id, quantity } = payload;
      //tìm ra sản phẩm cần tăng giảm só lượng dựa vào id
      const item = state.cart.find((item) => item.id === id);
      item.quantity += quantity;
    },
  },
});

export const { addNewProduct, deleteItem, changerQuantity } =
  cartReducer.actions;

export default cartReducer.reducer;
