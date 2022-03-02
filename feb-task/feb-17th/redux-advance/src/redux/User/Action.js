import UserActionType from "./ActionType";

export const SaveLogin = (data) => ({
  type: UserActionType.SAVE_LOGIN,
  payload: data,
});

export const SaveInfo = (data) => ({
  type: UserActionType.SAVE_INFO,
  payload: data,
});

export const SaveEmail = (data) => ({
  type: UserActionType.GET_EMAIL,
  payload: data,
});

export const SaveAddress = (data) => ({
  type: UserActionType.GET_ADDRESS,
  payload: data,
});

export const SaveContact = (data) => ({
  type: UserActionType.GET_CONTACT,
  payload: data,
});
