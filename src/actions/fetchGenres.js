import {
    FETCH_GENRES_BEGIN,
    FETCH_GENRES_SUCCESS,
    FETCH_GENRES_FAILURE,
} from "../reducers/constants";
import { BASE_URL, DEEZER_API} from '../APIUrls';
import axios from 'axios';

export const fetchGenres = () => async (dispatch) => {
    dispatch({ type: FETCH_GENRES_BEGIN });

    await axios.get(`${BASE_URL}${DEEZER_API}/genre`)
    .then((response) => {
        dispatch({
            type: FETCH_GENRES_SUCCESS,
            payload: response.data.data,
        });
    })
    .catch((err) => {
        // handle error
        dispatch({ type: FETCH_GENRES_FAILURE });
    });
};
