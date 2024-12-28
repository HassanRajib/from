import React from 'react'
import "./Header.css"
import { IconButton } from '@mui/material'
import Search from "@mui/icons-material/Search"
import AppIcon from "@mui/icons-material/Apps"
import TemDrawer from './TemDrawer'
import formIcon from "../image/form.png"


function Header() {
  return (
    <div className='header'>
      <div className='head_info'>
        <TemDrawer />
        <img src= {formIcon} style={{height:"35px", width: "35px" }} alt='nofile'/>
      </div>
      
      <div className='head_search'>
      <Search />
      <input type='text' name='search' placeholder='Search'/>  
      </div>

      <div className='head_right'>
        <IconButton>
          <AppIcon />
        </IconButton>
      </div>

    </div>
  )
}

export default Header