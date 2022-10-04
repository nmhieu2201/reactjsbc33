import { configureStore } from "@reduxjs/toolkit";
import { imgSrcReducer } from "./reducers/imgSrcReducer.jsx";
import { fontSizeReducer } from "./reducers/fontSizeReducer.jsx";
import cartReducer from "./reducers/cartReducer.jsx";
export const store = configureStore({
  reducer: {
    //Nơi chứa toàn bộ state của ứng dụng
    fontSize: fontSizeReducer,
    imgSrc: imgSrcReducer,
    cartReducer: cartReducer,
  },
});
