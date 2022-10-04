const stateDefault = 16;
export const fontSizeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "TANG_GIAM_FONT_SIZE": {
      //xử lí
      state += action.payload;
      return state;
    }
    default:
      return state;
  }
};
