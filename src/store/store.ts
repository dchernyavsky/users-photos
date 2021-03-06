import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {usersReducer} from './users-reducer'
import {albumsReducer} from './albums-reducer'
import {photosReducer} from './photos-reducer'
import {loadingReducer} from './loading-reducer'
import {photoReducer} from './photo-reducer'

const reducer = combineReducers({
  users: usersReducer,
  albums: albumsReducer,
  photos: photosReducer,
  photo: photoReducer,
  loading: loadingReducer
})

export type StateType = ReturnType<typeof reducer>

export const store = createStore(reducer, applyMiddleware(thunk))

// @ts-ignore
// window.store = store