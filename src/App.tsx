import React from 'react'
import './App.css'
import UsersContainer from './components/User/UsersContainer'
import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import AlbumsContainer from './components/Album/AlbumsContainer'
import PhotosPreviewContainer from './components/Photo/PhotosPreviewContainer'
import Header from './components/Header/Header'
import PhotoContainer from './components/Photo/PhotoContainer'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
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
          component={PhotosPreviewContainer}
        />
        <Route
          path='/photo/:photoId?'
          component={PhotoContainer}
        />
        <Route
          exact
          path="/"
        >
          <Redirect to="/users"/>
        </Route>
      </ BrowserRouter>
    </div>
  )
}

export default App
