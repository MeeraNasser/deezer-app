import './App.css';
import MusicGenres from './components/MusicGenres';
import Nav from './components/Nav';
import {BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ArtistsModal from './components/ArtistsModal';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

function Routes() {
const location = useLocation();

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
