import React from 'react'
import CustomPrimaryButton from '../shared/component/CustomPrimaryButton'
import RedirectInfo from '../shared/component/RedirectInfo'
import { useNavigate } from "react-router-dom"
import { Tooltip} from "@mui/material"


const getFormNotValidMessage = () =>{
    return 'Enter correct e-mail address and password should contains between 6 & 12 characters!'
}
const getFormValidMessage = () =>{
    return 'Press to log in'
}
function LoginPageFooter({  handleLogin,isFormValid }) {
    const navigate = useNavigate()
    const handlePushToRegisterPage=()=>{
        navigate('/register')
    }
  return (
    <>
    <Tooltip
    title={!isFormValid ?  getFormValidMessage() : getFormNotValidMessage()}>
        <div>
      <CustomPrimaryButton
      label="Log In"
      additionalStyle={{ marginTop:'30px', color:'white'}}
      disabled={isFormValid}
      onClick={handleLogin}
      />
      <RedirectInfo
      text="Need an account? "
      redirectText="Create an Account"
      additionalStyles={{ marginTop:"5px"}}
      redirectHandler={handlePushToRegisterPage}
      />
    </div>
    </Tooltip>
    
    </>
    
  )
}

export default LoginPageFooter
