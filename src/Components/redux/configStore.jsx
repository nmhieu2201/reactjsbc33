import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    //Nơi chứa toàn bộ state của ứng dụng
    fontSize: (state = 16, action) => {
      switch (action.type) {
        case "TANG_GIAM_FONT_SIZE": {
          //xử lí
          state += action.payload;
          return state;
        }
        default:
          return state;
      }
    },
    imgSrc: (state = "./img/imgBlackCar.jpg", action) => {
      switch (action.type) {
        case "CHANGE_COLOR": {
          state = `./img/img${action.payload}car.jpg`;
          return state;
        }
        default:
          return state;
      }
    },
  },
});
