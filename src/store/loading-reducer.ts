import {LoadingType} from '../types/entities'

export enum ACTION_TYPES {
  SET_IS_FETCHING = 'IS_FETCHING/SET_IS_FETCHING'
}

type SetIsFetchingActionType = ReturnType<typeof setIsFetching>

export type ActionsTypes = SetIsFetchingActionType

const initialState: LoadingType = {
  isFetching: true
}

export const loadingReducer = (state: LoadingType = initialState, action: ActionsTypes): LoadingType => {
  switch (action.type) {
    case ACTION_TYPES.SET_IS_FETCHING: {
      return {...state, ...action.payload}
    }
    default:
      return state
  }
}

export const setIsFetching = (isFetching: boolean) => ({
  type: ACTION_TYPES.SET_IS_FETCHING,
  payload: {isFetching}
})