import { actions } from "../actions/authAction"

const initialState ={
    userDetails: null
}

const registerReducer = (state = initialState,action) =>{
    switch(action.type){
        case actions.SET_USERS_DETAILS:
            return {
                ...state,
                userDetails: action.userDetails,
            }
        default:
            return state
    }
}

export default registerReducer;