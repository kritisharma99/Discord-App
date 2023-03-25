import React from 'react'
import Button from "@mui/material/Button"
import GroupsIcon from "@mui/icons-material/Groups"
import CustomPrimaryButton from "../../shared/component/CustomPrimaryButton"

const additionalStyles = {
    marginTop: '10px',
    marginLeft: "5px",
    width:'80%',
    height:'30px',
    backgroundColor:'#3ba55d'
}
function AddFriendButton() {
  const handleOpenAddFriendDialog = () =>{

  }
  return (
    <CustomPrimaryButton additionalStyles ={additionalStyles}
    label="Add Friend"
    onClick={handleOpenAddFriendDialog}
    />

  )
}

export default AddFriendButton
