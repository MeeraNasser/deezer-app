import {
    FETCH_GENRE_ARTISTS_BEGIN,
    FETCH_GENRE_ARTISTS_SUCCESS,
    FETCH_GENRE_ARTISTS_FAILURE,
} from "../reducers/constants";
import { BASE_URL, DEEZER_API} from '../APIUrls';
import axios from 'axios';

export const fetchGenreArtists = () => async (dispatch) => {
    dispatch({ type: FETCH_GENRE_ARTISTS_BEGIN });

    await axios.get(`${BASE_URL}${DEEZER_API}/${this.props.id}/artists`)
    .then((response) => {
        console.log("Afteeer",response);
        dispatch({
            type: FETCH_GENRE_ARTISTS_SUCCESS,
            payload: response.data.data,
        });
    })
    .catch((err) => {
        // handle error
        dispatch({ type: FETCH_GENRE_ARTISTS_FAILURE });
    });
};
