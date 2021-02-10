import {PhotoType} from '../types/entities'
import {photosAPI} from '../api/api'
import {Dispatch} from 'redux'
import {setIsFetching} from './loading-reducer'

export enum ACTION_TYPES {
  SET_PHOTOS = 'PHOTOS/SET_PHOTOS'
}

type SetPhotosActionType = ReturnType<typeof setPhotos>

export type ActionsTypes = SetPhotosActionType

const initialState = [] as Array<PhotoType>
type InitialStateType = typeof initialState

export const photosReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case ACTION_TYPES.SET_PHOTOS: {
      return [...action.payload]
    }
    default:
      return state
  }
}

export const setPhotos = (users: Array<PhotoType>) => ({
  type: ACTION_TYPES.SET_PHOTOS,
  payload: users
})

export const getPhotos = (albumId: string) => (dispatch: Dispatch<any>) => {
  dispatch(setIsFetching(true))
  photosAPI.getPhotos(albumId)
    .then(res => dispatch(setPhotos(res.data)))
    .catch(rej => console.log(rej))
    .finally(() => dispatch(setIsFetching(false)))
}