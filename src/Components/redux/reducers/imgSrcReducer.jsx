const stateDefault = "./img/imgBlackCar.jpg";
export const imgSrcReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHANGE_COLOR": {
      state = `./img/img${action.payload}car.jpg`;
      return state;
    }
    default:
      return state;
  }
};
