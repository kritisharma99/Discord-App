import * as api from '../../api'
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { openAlertMessage } from './alertAction'

export const actions ={
    SET_USERS_DETAILS: 'AUTH.SET_USERS_DETAILS'
}

export const getActions = (dispatch) =>{
    // const dispatch = useDispatch()
    // const navigate = useNavigate()

    return{
        login: (userDetails,navigate) => dispatch(login(userDetails,navigate)),
        register: (userDetails,navigate) => dispatch(register(userDetails,navigate))
    }
}

const setUserDetails =(userDetails)=>{
    return{
        type:actions.SET_USERS_DETAILS,
        userDetails
    }
}

const login = ( userDetails,navigate) =>{
    return async(dispatch) =>{
        const response = await api.login(userDetails)
        console.log("response from login :", response)
        if (response.error){
            //just show error msg
            dispatch(openAlertMessage(response?.exception?.response?.data))
        }
        else{
            const { userDetails } = response?.data;
            localStorage.setItem("user", JSON.stringify(userDetails));

            dispatch(setUserDetails(userDetails));
            navigate('/dashboard')
        }
    }
}

const register = ( userDetails,navigate) =>{
    return async(dispatch) =>{
        const response = await api.register(userDetails)
        console.log("response:",response.data)
        if (response.error){
            //just show error msg

        }
        else{
            const { userDetails } = response.data
            console.log("userDEtails",userDetails)
            localStorage.setItem('user',JSON.stringify(userDetails));

            dispatch(setUserDetails(userDetails))
            navigate('/dashboard')
        }
    }
}

