const initialState ={
    userDetails: null
}

const registerReducer = (state = initialState,action) =>{
    switch(action.type){
        case 'DUMMY':
            return {
                ...state
            }
        default:
            return state
    }
}

export default registerReducer;