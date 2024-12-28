import React from 'react'
import {IoMdFolderOpen} from "react-icons/io"
import {FiStar} from "react-icons/fi"
import { IoIosSettings } from "react-icons/io";
import "./FormHead.css"

import ColorIcon from '@mui/icons-material/ColorLens';
import MoreVer from '@mui/icons-material/MoreVert'
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';


function Formhead() {
  return (
    <div className='formhd'>
      <div className='formhdle'>
        <input type='text' placeholder='Untitled form' className='form_name'></input>
        <IoMdFolderOpen className='form_he_ic' style={{marginTop: "10px"}}></IoMdFolderOpen>
        <FiStar className='form_he_ic' style={{marginTop: "10px"}}></FiStar>
      </div>
      <div className='formhdri'>
        <IconButton>
          <ColorIcon />
        </IconButton>
        <IconButton>
          <MoreVer />
        </IconButton>
        <IconButton>
          <IoIosSettings />
        </IconButton>
      </div>
    </div>
  )
}

export default Formhead