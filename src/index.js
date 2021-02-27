import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import "semantic-ui-css/semantic.min.css";
import { createStore, applyMiddleware } from 'redux';
import GenreReducer from './reducers/genreReducer';
import {Provider} from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

const store = createStore(GenreReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

ReactDOM.render(<Provider store={store}> <App /></Provider>,
  document.getElementById('root')
);

reportWebVitals();
