import {combineReducers} from 'redux'
import Display from './display.reducers.js'
import CommentReducer from './comment.reducers.js'

const rootReducers = combineReducers( {Display , CommentReducer} )


export default rootReducers;