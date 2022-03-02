import { createStore, combineReducers } from "redux";
import CalculatorReducer from "./Calculator/Reducer";
import UserReducer, {
  AddressReducer,
  ContactReducer,
  EmailReducer,
} from "./User/Reducer";

const rootReducer = combineReducers({
  calc: CalculatorReducer,
  user: UserReducer,
  email: EmailReducer,
  address: AddressReducer,
  contact: ContactReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
