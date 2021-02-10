import {AlbumType} from '../types/entities'
import {albumsAPI} from '../api/api'
import {Dispatch} from 'redux'
import {setIsFetching} from './loading-reducer'

export enum ACTION_TYPES {
  SET_ALBUMS = 'ALBUMS/SET_ALBUMS'
}

type SetAlbumsActionType = ReturnType<typeof setAlbums>

export type ActionsTypes = SetAlbumsActionType

const initialState = [] as Array<AlbumType>
type InitialStateType = typeof initialState

export const albumsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case ACTION_TYPES.SET_ALBUMS: {
      return [...action.payload]
    }
    default:
      return state
  }
}

export const setAlbums = (users: Array<AlbumType>) => ({
  type: ACTION_TYPES.SET_ALBUMS,
  payload: users
})

export const getAlbums = (userId: string) => (dispatch: Dispatch<any>) => {
  dispatch(setIsFetching(true))
  albumsAPI.getAlbums(userId)
    .then(res => {
      dispatch(setAlbums(res.data))
    })
    .catch(rej => console.log(rej))
    .finally(() => dispatch(setIsFetching(false)))
}