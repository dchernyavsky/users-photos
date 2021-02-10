import {UserType} from "../types/entities";
import {usersAPI} from '../api/api'
import {Dispatch} from "redux";

export enum ACTION_TYPES {
  SET_USERS = 'USERS/SET_USERS'
}

type SetUsersActionType = ReturnType<typeof setUsers>

export type ActionsTypes = SetUsersActionType

const initialState = [] as Array<UserType>
type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case ACTION_TYPES.SET_USERS: {
      return [...action.payload]
    }
    default:
      return state
  }
}

export const setUsers = (users: Array<UserType>) => ({
  type: ACTION_TYPES.SET_USERS,
  payload: users
})

export const getUsers = () => (dispatch: Dispatch<any>) => {
  usersAPI.getUsers()
    .then(res => dispatch(setUsers(res.data)))
    .catch(rej => console.log(rej))
}