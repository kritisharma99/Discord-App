import React, {useState, useEffect} from 'react'
import AuthBox from '../shared/component/AuthBox'
import LoginPageHeader from '../single Component/LoginPageHeader'
import LoginPageForm from '../single Component/LoginPageForm'
import LoginPageFooter from '../single Component/LoginPageFooter'
import { validateLoginForm } from '../shared/utils/validators'
import { connect } from 'react-redux'
import { getActions } from "../store/actions/authAction"
import { useNavigate } from "react-router-dom"

//this "login" function coming from the props. see at the last -> authActons
function Login( {login}) {
    const [mail,setMail] = useState('')
    const [password,setPassword] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)
    const navigate = useNavigate()
    useEffect(()=>{
        //her we gonna validate the mail n password
        setIsFormValid(validateLoginForm({ mail, password}))
    },[mail,password, setIsFormValid])
    const handleLogin=()=>{
      const userDetails = {
        mail,
        password
      }
      login(userDetails,navigate)
        // console.log("mail:",mail)
        // console.log("password:",password)
        // console.log('Log In')
    }

  return (
    <div>
      <AuthBox>
          <LoginPageHeader/>
          <LoginPageForm mail={mail} setMail={setMail} password={password} setPassword={setPassword}/>
          <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin}/>
      </AuthBox>
    </div>
  )
}

const mapActionsToProps = (dispatch) =>{
  return{
    ...getActions(dispatch),
  }
}


export default connect(null, mapActionsToProps)(Login)
