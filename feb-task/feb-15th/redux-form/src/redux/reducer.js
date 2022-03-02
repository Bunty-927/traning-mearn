import ActionTypes from "./actionTypes";

const reducer = (currentState = [], action) => {
  switch (action.type) {
    case ActionTypes.CREATE_NEW_USER:
      return [...currentState, action.payload];

    default:
      return currentState;
  }
};

export default reducer;
