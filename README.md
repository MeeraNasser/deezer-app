# Getting Started with create-react-app ... with Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#DeezerApp Challenge !
 **The list of music genres.** application, that display Music genres and its details .

## Table of Contents

- [Features](#features)
- [Deployed version on heroku](#deployed-version-on-heroku)
- [Getting started](#getting-started)
- [Note](#note)
- [Tests](#tests)
- [Related packages and dependencies](#related-packages-and-dependencies)

## Features

- `/` Welcome page.
- `/genre` view all music genres listed from deezer api
- `/genre/:id/artists` when click on show artists button in genres list view you will get all related artists

## Deployed version on heroku

You can visit deployed version on Heroku
https://deezer-react-app.herokuapp.com/

## Getting started

- install package.json (npm install) , this should install all packages required
- Write in terminal (npm start) to run the project server 
- open browser with localhost:3000 as 3000 the default port

## NOTE .. for run app local to avoid problem of CORS is a MUST to have access for deezer APIs

visit this link and click on Request temporary access to the demo server button

> https://cors-anywhere.herokuapp.com/corsdemo

## Tests

> npm test

## Related packages and dependencies

- react
- redux
- react-redux
- react-router-dom
- semantic-ui-react
- styled-navbar-component
- styled-nav-component
- styled-button-component
- redux-devtools-extension
- redux-thunk
- semantic-ui-css/semantic.min.css
