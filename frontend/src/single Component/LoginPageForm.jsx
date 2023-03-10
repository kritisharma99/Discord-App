import React from 'react'
import InputWithLabel from '../shared/component/InputWithLabel'

function LoginPageForm({ mail, setMail, password, setPassword}) {
  return (
    <>
      <InputWithLabel value={mail} setValue={setMail} label="Email" type="text" placeholder="enter your email"/>
      <InputWithLabel value={password} setValue={setPassword} label="Password" type="password" placeholder="enter your password"/>
    </>
  )
}

export default LoginPageForm
