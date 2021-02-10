import React from 'react'
import './App.css'
import UsersContainer from './components/User/UsersContainer'
import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import AlbumsContainer from './components/Album/AlbumsContainer'
import PhotosContainer from './components/Photo/PhotosContainer'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
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
