import ActionTypes from "./actionTypes";

const createNewUser = (user) => ({
    type: ActionTypes.CREATE_NEW_USER,
    payload: {
        user,
    }
})


export default createNewUser;