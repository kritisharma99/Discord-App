import React, {useState, useEffect} from 'react'
import AuthBox from '../shared/component/AuthBox'
import LoginPageHeader from '../single Component/LoginPageHeader'
import LoginPageForm from '../single Component/LoginPageForm'
import LoginPageFooter from '../single Component/LoginPageFooter'
import { validateLoginForm } from '../shared/utils/validators'
function Login() {
    const [mail,setMail] = useState('')
    const [password,setPassword] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)

    useEffect(()=>{
        //her we gonna validate the mail n password
        setIsFormValid(validateLoginForm({ mail, password}))
    },[mail,password, setIsFormValid])
    const handleLogin=()=>{
        console.log("mail:",mail)
        console.log("password:",password)
        console.log('Log In')
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

export default Login
