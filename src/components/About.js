import React from 'react';
import artists from '../images/artists.png';
import deezer from '../images/deezer-icon.png';
import { NavLink } from 'react-router-dom';
import line from '../images/line.png';

const About = () => {
    return (
        <div className="about">
            {/* eslint-disable-next-line */}
            <NavLink target="blank" to={{ pathname: "https://www.deezer.com/en/?utm_campaign=crm&utm_source=crm&utm_medium=obj_stream&utm_content=email-logo" }} target="_blank">
                <img alt="deezer" src={deezer}/>
            </NavLink>
            <h1>Welcome</h1>
            <p>We’ve got tracks, playlists and more just waiting to be discovered. Have a look around, and make yourself at home!</p>
            <img alt="artists" src={artists}/>
            <img alt="line" src={line}/>
        </div>
    )
}

export default About;