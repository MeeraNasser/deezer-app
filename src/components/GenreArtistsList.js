import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Item } from "semantic-ui-react";
import { fetchGenreArtists } from "../actions/fetchGenreArtists";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    artists: state.genreArtists,
});

const mapDispatchToProps = {
    fetchGenreArtists,
};

const GenreArtistsList = (props) => {
    const artists = props.artists;

    useEffect(() => {
        fetchGenreArtists(props.id);
        // eslint-disable-next-line
    }, []);

    return (
        <Item.Group>
        {artists.map((artist) => (
            <Item key={artist.id}>
                <Item.Image size="tiny" src={artist.picture_medium} />
                <Item.Content verticalAlign="middle">
                    <Item.Header>{artist.name}</Item.Header>
                </Item.Content>
            </Item>
        ))}
    </Item.Group>
    );
};

GenreArtistsList.propTypes = {
    id: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreArtistsList);
