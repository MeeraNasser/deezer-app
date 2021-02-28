import {BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Nav from './Nav';
import ArtistsModal from './MusicGenre/ArtistsModal';
import MusicGenres from './MusicGenre/MusicGenres';
import useToken from './UserAuthentication/useToken';
import Login from './UserAuthentication/Login';
import About from './About';
import Home from './Home';
import '../style.css';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

function Routes() {
const location = useLocation();
const { token, setToken } = useToken();

if(!token) {
  return <Login setToken={setToken} />
}

let isModalopen = location.state && location.state.modalIsOpen;
let genreID = location.state && location.state.id;
  return (
    <div>
      <Switch location={ isModalopen || location}>
        <div className="App">
          <Nav />
          <Route path="/" exact component = {Home}/>
          <Route path="/about" component = {About}/>
          <Route path="/music-genres" exact component = {MusicGenres}/>
        </div>
      </Switch>
      {isModalopen && <Route path="/music-genres/:id" children={<ArtistsModal id={genreID} />} />}
    </div>

  );
}

export default App;
