import React from 'react'
import './App.css'
import UsersContainer from './components/User/UsersContainer'
import {HashRouter, Redirect, Route} from 'react-router-dom'
import AlbumsContainer from './components/Album/AlbumsContainer'
import PhotosContainer from './components/Photo/PhotosContainer'
import PhotoViewer from './components/Photo/PhotoViewer'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Route
          path='/users'
          component={UsersContainer}
        />
        <Route
          path='/albums/:userId?'
          component={AlbumsContainer}
        />
        <Route
          path='/photos/:albumId?'
          component={PhotosContainer}
        />
        <Route
          path='/photo/:photoId?'
          component={PhotoViewer}
        />

        <Route
          exact
          path="/"
        >
          <Redirect to="/users"/>
        </Route>
      </ HashRouter>
    </div>
  )
}

export default App
