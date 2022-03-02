import UserActionTypes from "./User.types";

let counter = 0;

const UserReducer = (currentState = [], action) => {
  switch (action.type) {
    case UserActionTypes.CREATE_NEW_USER:
      return [
        ...currentState,
        {
          id: counter++,
          user: action.payload.user,
        },
      ];

    case UserActionTypes.EDIT_USER:
      // console.log("CURRENT STATE", currentState);
      // const { id, user } = action.payload;
      currentState.map(({ id, user }) => {
        if (id === action.payload.id) {
          user.firstName = action.payload.user.firstName;
          user.lastName = action.payload.user.lastName;
          user.email = action.payload.user.email;
          user.password = action.payload.user.password;
        }
      });

      return currentState;
    // return currentState.filter((user) => user.id === action.payload.id);

    case UserActionTypes.DELETE_USER:
      return currentState.filter((user) => user.id !== action.payload.id);

    default:
      return currentState;
  }
};

export default UserReducer;
