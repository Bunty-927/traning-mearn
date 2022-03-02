import UserActionType from "./ActionType";

const UserReducer = (currentState = {}, action) => {
  switch (action.type) {
    case UserActionType.SAVE_LOGIN:
      return {
        ...currentState,
        login: action.payload,
      };
    case UserActionType.SAVE_INFO:
      return {
        ...currentState,
        fetchedDataFromAPI: action.payload,
      };
    default:
      return currentState;
  }
};

export const EmailReducer = (currentState = [], action) => {
  switch (action.type) {
    case UserActionType.GET_EMAIL:
      return [...currentState, action.payload];
    default:
      return currentState;
  }
};

export const AddressReducer = (currentState = [], action) => {
  switch (action.type) {
    case UserActionType.GET_ADDRESS:
      return [...currentState, action.payload];
    default:
      return currentState;
  }
};

export const ContactReducer = (currentState = [], action) => {
  switch (action.type) {
    case UserActionType.GET_CONTACT:
      return [...currentState, action.payload];
    default:
      return currentState;
  }
};

export default UserReducer;
