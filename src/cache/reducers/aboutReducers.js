import {GET_ABOUT} from '../types'


const initialState = {
    about:[],
    loading:true
}


export const about =  (state = initialState, action) => {
    switch(action.type){
        case GET_ABOUT: return { ...state, about:action.payload, loading:false }
        default: return state
    }

}

