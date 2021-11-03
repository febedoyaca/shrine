export const UPDATE_TEXT = "UPDATE_TEXT";

export const updateText = text => dispatch => {
    dispatch({
        type: UPDATE_TEXT,
        payload: text,
    });
};