import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {usersReducer} from "./users-reducer";


const reducer = combineReducers({
  users: usersReducer
})

export type StateType = ReturnType<typeof reducer>

export const store = createStore(reducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store