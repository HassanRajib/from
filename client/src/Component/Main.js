import React from 'react'
import "./Main.css"
import DropDown from "@mui/icons-material/ArrowDropDown"
import FolOpn from "@mui/icons-material/FolderOpen"
import { IconButton } from '@mui/material'
import Stor from "@mui/icons-material/Storage"
import Dcard from "../image/dcard.PNG"


function Main() {
  return (
    <div className='main_body'>
        <div className='main_top'>
            <div className='mbtole' style={{fontSize: "16px", fontWeight: "500"}}>
                recent forms
            </div>
            <div className='mbtoca' style={{fontSize: "15px", marginRight: "10px"}}>
                owned by anyone <DropDown/>
            </div>
            <div className='mbtori'>
                <IconButton>
                    <Stor />
                </IconButton>
                <IconButton>
                    <FolOpn />
                </IconButton>

            </div>
        </div>
        <div className='main_doc'>
            <div className='doc_im'>
                <img src={Dcard} alt='no' className="doc_im_cont" style={{width: "80px", height: "80px"}}/>
                <h4></h4>
                <div className='doc_con' >
                    <Stor style={{color: "white", fontSize: "12px", backgroundColor: "#6e2594", padding: "5px", marginRight: "3px", borderRadius: "5px" }}/>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Main