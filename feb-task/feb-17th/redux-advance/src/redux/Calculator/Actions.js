import * as ActionTypes from "./ActionTypes";

const calculateResult = (data) => ({
  type: ActionTypes.CALCULATE,
  payload: data,
});

export default calculateResult;
