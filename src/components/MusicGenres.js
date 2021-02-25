import React, { Component } from 'react';
import axios from 'axios';
import MyModal from './ArtistsPopupModal';

class MusicGenres extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          MusicGenresList : [],
          modalOpen: true,
          valueIntoModal: "123456abcdef"
        }
    }

    BASE_URL = 'https://cors-anywhere.herokuapp.com/';
    DEEZER_API = 'https://api.deezer.com/genre';
    componentDidMount(){
        axios.get(`${this.BASE_URL}${this.DEEZER_API}`)
        .then(res => {
            this.setState({
                MusicGenresList : res.data.data
            })
        })
    }

    showArtists(){
        <MyModal 
        modalOpen={this.state.modalOpen}
        handleClose={
            () => {
            this.setState({ modalOpen: false })
            }
        }
        valueIntoModal={this.state.valueIntoModal}
        />
        // axios.get(`${this.BASE_URL}${this.DEEZER_API}${id}/artists`)
        // .then(res => {
        //     console.log("Heeeey1111",res);
        // })

            // this.setState({ modalOpen: true }) }
    }

    render(){
        const {MusicGenresList} = this.state;
        const items = MusicGenresList.map(item => {
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
                            <button primary="true" content='Click!' onClick={this.showArtists} >show artists</button>
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

export default MusicGenres;