import React, { Component } from 'react';
import ArtistsModal from './ArtistsModal';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchGenres } from "../actions/fetchGenres";
import { toggleModalAtists } from "../actions/toggleModalArtists";

const mapStateToProps = (state) => ({
    musicGenresList: state.musicGenresList,
    modalOpen: state.modalOpen
});

const mapDispatchToProps = {
    fetchGenres,
    toggleModalAtists
};

class MusicGenres extends Component {
    constructor(props) {
        super(props);
        props.fetchGenres();
        this.state = props
    }

    render(){
        const {musicGenresList} = this.props;
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
                            <NavLink exact to={`/music-genres/${item.id}`}>
                                <button onClick={this.props.toggleModalAtists} >show artists</button>
                            </NavLink>
                            <Route exact path="/music-genres/:id"
                            children={({ match }) => {
                                return (
                                    <ArtistsModal open={this.props.modalOpen} id={match && match.params.id}/>
                                );
                            }}
                            />
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
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicGenres);