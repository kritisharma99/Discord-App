import React from 'react'
import CustomPrimaryButton from '../shared/component/CustomPrimaryButton'
import RedirectInfo from '../shared/component/RedirectInfo'
import { useNavigate } from "react-router-dom"
import { Tooltip} from "@mui/material"


const getFormNotValidMessage = () =>{
    return 'Username should contains between 3 and 12 characters and password should contains between 6 and 12 characters.'
}
const getFormValidMessage = () =>{
    return 'Press to register'
}
function RegisterPageFooter({  handleRegister,isFormValid }) {
    const navigate = useNavigate()
    const handlePushToRegisterPage=()=>{
        navigate('/login')
    }
  return (
    <>
    <Tooltip
    title={!isFormValid ?  getFormValidMessage() : getFormNotValidMessage()}>
        <div>
      <CustomPrimaryButton
      label="Register"
      additionalStyle={{ marginTop:'30px', color:'white'}}
      disabled={isFormValid}
      onClick={handleRegister}
      />
      <RedirectInfo
      text="Need an account? "
      redirectText="Already have an account ?"
      additionalStyles={{ marginTop:"5px"}}
      redirectHandler={handlePushToRegisterPage}
      />
    </div>
    </Tooltip>
    
    </>
    
  )
}

export default RegisterPageFooter
