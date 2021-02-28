import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import PropTypes from "prop-types";
import GenreArtistsList from './GenreArtistsList';
import { history } from "./../../history";
import Dance from '../../images/dance.svg'
import deezerIcon from '../../images/deezer-icon.png'

function ArtistsModal(props) {
  const [open, setOpen] = React.useState(true)
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      closeOnEscape = {false}
      closeOnDimmerClick={false}
      open={open}>
      <Modal.Header><img alt="deezer" src={deezerIcon}/> Enjoy with your favourite artists !</Modal.Header>
      <Modal.Content scrolling image>
        <Modal.Description>
          <Header>Ready to play ? <img alt="dance" src={Dance}/></Header>
          <GenreArtistsList id={props.id}/>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => history.goBack()}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

ArtistsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  id: PropTypes.any,
};

export default ArtistsModal
