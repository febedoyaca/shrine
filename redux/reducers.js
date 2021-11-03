import { UPDATE_TEXT } from "./actions";

const initialState = {
    text: '',
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_TEXT:
            return { ...state, text: action.payload };
        default:
            return state;
    }
}

export default userReducer;