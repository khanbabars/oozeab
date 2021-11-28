import {GET_ABOUT, ABOUT_ERROR, GET_BLOG_TITLE, BLOG_TITLE_ERROR} from '../types'
import axios from 'axios'
import {API_GET_ABOUT, API_BLOG_TITLE} from '../api'



export const getAboutText = () => async dispatch => {
    
    try{
        const res = await axios.get(API_GET_ABOUT)
        dispatch( {
            type: GET_ABOUT,
            payload: res.data.items
        })
    }
    catch(e){
        dispatch( {
            type: ABOUT_ERROR,
            payload: console.log(e),
        })
    }

}


export const getBlogTitle = () => async dispatch => {
    
    try{
        const res = await axios.get(API_BLOG_TITLE)
        dispatch( {
            type: GET_BLOG_TITLE,
            payload: res.data.items
        })
    }
    catch(e){
        dispatch( {
            type: BLOG_TITLE_ERROR,
            payload: console.log(e),
        })
    }

}