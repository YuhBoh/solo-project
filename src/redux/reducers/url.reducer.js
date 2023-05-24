const urlReducer = (state = [], action) => {
    switch (action.type) {
      case "REDUX/GET_URLS":
        return action.payload;
      default:
        return state;
    }
}

export default urlReducer;