import { combineReducers } from 'redux'
import {about} from './aboutReducers'
import {blogTitle} from './blogTitleReducer'



export default combineReducers({  about: about, blogTitle: blogTitle})