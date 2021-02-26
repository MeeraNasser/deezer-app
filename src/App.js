import './App.css';
import MusicGenres from './components/MusicGenres';
import Nav from './components/Nav';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route path="/" exact component = {Home}/>
        <Route path="/about" component = {About}/>
        <Route path="/music-genres" exact component = {MusicGenres}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
