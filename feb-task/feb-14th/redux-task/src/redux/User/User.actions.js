import UserActionTypes from "./User.types";

export const createNewUser = (user) => ({
  type: UserActionTypes.CREATE_NEW_USER,
  payload: {
    user,
  },
});

export const editUser = (id, user) => ({
  type: UserActionTypes.EDIT_USER,
  payload: {
    id,
    user,
  },
});

export const deleteUser = (id) => ({
  type: UserActionTypes.DELETE_USER,
  payload: {
    id,
  },
});
