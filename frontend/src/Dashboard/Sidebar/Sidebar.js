import React from 'react'
import {  styled } from '@mui/system'
import MainPageButton from './MainPageButton'
const MainContainer = styled('div')({
    width:'72px',
    height:'100%',
    display:'flex',
    flexDirection: "column",
    alignItem: "center",
    backgroundColor: "#202225"
})

function Sidebar() {
  return (
    <MainContainer>
      <MainPageButton/>
    </MainContainer>
  )
}

export default Sidebar
