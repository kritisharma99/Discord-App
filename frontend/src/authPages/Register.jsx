import { Typography } from '@mui/material'
import React, {useState, useEffect} from 'react'
import AuthBox from '../shared/component/AuthBox'
import RegisterPageFooter from '../single Component/RegisterPageFooter'
import RegisterPageForm from '../single Component/RegisterPageForm'
import { validateRegisterForm } from '../shared/utils/validators'
import { connect } from 'react-redux'
import { getActions } from "../store/actions/authAction"
import { useNavigate } from "react-router-dom"

function Register({register}) {
  const [username,setUsername] = useState('')
  const [mail,setMail] = useState('')
  const [password,setPassword] = useState('')
  const [isFormValid, setIsFormValid] = useState('')
  const navigate = useNavigate()
  useEffect(()=>{
    //her we gonna validate the mail n password
    setIsFormValid(validateRegisterForm({ username,mail, password}))
  },[username,mail,password, setIsFormValid])

  const handleRegister =()=>{
      const userDetails = { 
        username,
        mail,
        password
      };

      register(userDetails,navigate)
      // console.log("mail:",mail)
      //   console.log("password:",password)
      //   console.log('Register')
  }
  return (
    <div>
    <AuthBox>
      <Typography variant='h5' sx={{ color:'white'}}>
        Create an account
      </Typography>
      <RegisterPageForm username={username} setUsername={setUsername} mail={mail} setMail={setMail} password={password} setPassword={setPassword}/>
      <RegisterPageFooter isFormValid={isFormValid} handleRegister={handleRegister}/>
    </AuthBox>  
    </div>
  )
}

const mapActionsToProps = (dispatch) =>{
  return{
    ...getActions(dispatch),
  }
}

export default connect(null, mapActionsToProps)(Register)
