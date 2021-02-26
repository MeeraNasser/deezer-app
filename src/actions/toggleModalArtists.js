import {
    TOGGLE_MODAL_ARTISTS,
} from "../reducers/constants";

export const toggleModalAtists = () => (dispatch) => {
    dispatch({ type: TOGGLE_MODAL_ARTISTS });
};
