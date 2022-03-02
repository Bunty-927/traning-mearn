import * as ActionTypes from "./ActionTypes";

const CalculatorReducer = (currentState = 0, action) => {
  switch (action.type) {
    case ActionTypes.CALCULATE:
      return eval(action.payload);
    default:
      return currentState;
  }
};

export default CalculatorReducer;
