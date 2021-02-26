import {
    TOGGLE_MODAL_ARTISTS,
} from "../reducers/constants";

export const toggleModalArtists = () => (dispatch) => {
    dispatch({ type: TOGGLE_MODAL_ARTISTS });
};
