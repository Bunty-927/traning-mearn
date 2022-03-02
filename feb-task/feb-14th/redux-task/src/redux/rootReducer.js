import { combineReducers } from "redux";

import UserReducer from "./User/User.reducer";
import ProductReducer from "./Product/Product.reducer";

export default combineReducers({
  User: UserReducer,
  Product: ProductReducer,
});
