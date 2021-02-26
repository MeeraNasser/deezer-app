import {
    FETCH_GENRES_SUCCESS,
    FETCH_GENRE_ARTISTS_SUCCESS, TOGGLE_MODAL_ARTISTS
} from "../reducers/constants";

const INITIAL_STATE = {
    musicGenresList: [],
    genreArtists: [],
    modalOpen: false
};

const GenreReducer =  (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_GENRES_SUCCESS:
            return {
                ...state,
                musicGenresList: action.payload,
            };

        case FETCH_GENRE_ARTISTS_SUCCESS:
            return {
                ...state,
                genreArtists: action.payload,
            };

        case TOGGLE_MODAL_ARTISTS:
            return {
                ...state,
                modalOpen: !state.modalOpen,
            };
    
        default:
            return {
                ...state
            }
    }
}

export default GenreReducer;