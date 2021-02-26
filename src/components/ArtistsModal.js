import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import PropTypes from "prop-types";
import GenreArtistsList from './GenreArtistsList';
import { history } from "./../history";

function ArtistsModal(props) {
  const [setOpen] = React.useState(false)
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={props.open}
    >
      <Modal.Header>Genre Artists List</Modal.Header>
      <Modal.Content scrolling image>
        <Modal.Description>
          <Header>Hello There</Header>
          <GenreArtistsList id={props.id}/>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
      {/* <NavLink exact to={`/music-genres/${item.id}`}>
                                <button onClick={this.showArtists} >show artists</button>
                            </NavLink> */}
        <Button color='black' onClick={() => history.goBack()}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

ArtistsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  id: PropTypes.string,
};

export default ArtistsModal
