import { combineReducers } from 'redux'
import userReducer from './userReducer'
import appReducer from './appReducer'

export const mainReducer = combineReducers({
    userReducer,
    appReducer
})
