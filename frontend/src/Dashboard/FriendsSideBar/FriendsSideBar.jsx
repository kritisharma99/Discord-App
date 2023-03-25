import React from 'react'
import {  styled } from '@mui/system'
import AddFriendButton from "../FriendsSideBar/AddFriendButton"
import FriendsTitle from './FriendsTitle'
import FriendsList from './FriendsList'
import PendingInvitationList from './PendingInvitationList'

const MainContainer = styled('div')({
    width:'224px',
    height:'100%',
    display:'flex',
    flexDirection: "column",
    alignItem: "center",
    backgroundColor: "#2F3136"
})

function FriendsSideBar() {
  return (
    <MainContainer>
      <AddFriendButton/>
      <FriendsTitle title="Private Messages"/>
      <FriendsList/>
      <FriendsTitle title="Invitations"/>
      <PendingInvitationList/>
    </MainContainer>
  )
}

export default FriendsSideBar
