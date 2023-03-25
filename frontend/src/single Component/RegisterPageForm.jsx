import React from 'react'
import InputWithLabel from '../shared/component/InputWithLabel'

function RegisterPageForm(props) {
    const {username,setUsername,mail,setMail,password,setPassword} = props
  return (
    <>
        <InputWithLabel value={username} setValue={setUsername} label="Username" type="text" placeholder="enter username"/>
        <InputWithLabel value={mail} setValue={setMail} label="Email" type="text" placeholder="enter your email"/>
        <InputWithLabel value={password} setValue={setPassword} label="Password" type="password" placeholder="enter your password"/>
    </>
  )
}

export default RegisterPageForm
