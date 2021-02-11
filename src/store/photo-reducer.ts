import {PhotoType} from '../types/entities'
import {photosAPI} from '../api/api'
import {Dispatch} from 'redux'
import {setIsFetching} from './loading-reducer'

export enum ACTION_TYPES {
  SET_PHOTO = 'PHOTO/SET_PHOTO'
}

type SetPhotoActionType = ReturnType<typeof setPhoto>

export type ActionsTypes = SetPhotoActionType

const initialState = {} as PhotoType
type InitialStateType = typeof initialState

export const photoReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case ACTION_TYPES.SET_PHOTO: {
      return {...state, ...action.payload.photo}
    }
    default:
      return state
  }
}

export const setPhoto = (photo: PhotoType) => ({
  type: ACTION_TYPES.SET_PHOTO,
  payload: {photo}
})

export const getPhoto = (photoId: string) => (dispatch: Dispatch<any>) => {
  dispatch(setIsFetching(true))
  photosAPI.getPhoto(photoId)
    .then(res => dispatch(setPhoto(res.data)))
    .catch(rej => console.log(rej))
    .finally(() => dispatch(setIsFetching(false)))
}