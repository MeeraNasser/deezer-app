import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchGenres } from "../../actions/fetchGenres";
import { toggleModalArtists } from "../../actions/toggleModalArtists";

const mapStateToProps = (state) => ({
    musicGenresList: state.musicGenresList,
    modalOpen: state.modalOpen
});

const mapDispatchToProps = {
    fetchGenres,
    toggleModalArtists,
};

const MusicGenres = (props) => {
    const location = useLocation();

    useEffect(() => {
        props.fetchGenres();
        // eslint-disable-next-line
    }, []);

    const showArtists = () =>  {
        props.toggleModalArtists();
    }

    const {musicGenresList} = props;
    const items = musicGenresList.map(item => {
        return (
            <div className="wrapper" key={item.id}>
                <div className="row">
                    <div className="imgs">
                        <img alt="Music" src={item.picture}/>
                    </div>
                    <div className="genre-details">
                        <div>
                            <span>{item.name}</span>
                        </div>
                        <NavLink onClick={()=>showArtists} exact to={{pathname:`/music-genres/${item.id}`,state:{modalIsOpen:location, id:item.id}}}>
                            Show Artists
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    })
    return(
        <div className="content">
            {items}
        </div>
        )
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicGenres);