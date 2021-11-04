export const UPDATE_TEXT = "UPDATE_TEXT";
export const FILTER_BY_NAME = "FILTER_BY_NAME";

/*
export const updateText = text => dispatch => {
    dispatch({
        type: UPDATE_TEXT,
        payload: text,
    });
};
*/

export const filterByName = textToFilterBy => dispatch => {
    dispatch({
        type: FILTER_BY_NAME,
        payload: textToFilterBy,
    });
};