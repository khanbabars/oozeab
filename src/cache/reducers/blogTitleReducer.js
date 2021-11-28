import { GET_BLOG_TITLE} from '../types'


const initialState = {
    blogTitle: [],
    loading: true
}


export const  blogTitle =   (state = initialState, action) => {
    switch(action.type){
        case GET_BLOG_TITLE: return { ...state, blogTitle:action.payload, loading:false }
        default: return state
    }
}

