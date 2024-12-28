import React from 'react'
import MenuIcon from "@mui/icons-material/Menu"
import { IconButton } from '@mui/material'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

import Poll from "../image/poll.png"
import Quiz from "../image/quiz.jpg"
import Test from "../image/test.png"

function TemDrawer() {
    const [state,setState] = React.useState({
        left: false
    })

    const toggleDrawer = (anchor, open) => (e) => {
        setState({ ...state, [anchor]: open});
    }

    const list = (anchor)=>(
        <div style={{width:"250px"}} roll = "presentation">
            <Divider />
            <List>
                <ListItem>
                    <ListItemText style={{fontsize: "48px", marginLeft: "5px"}}>
                        <span>Our Form</span>
                    </ListItemText>
                </ListItem>
            </List>
            <Divider />

            <List style={{marginLeft: "8px", marginRight: "8px", marginTop: "14px"}}>
                <ListItem className='list_item'>
                    <img src={Test} alt='no' style={{height: "30px", width: "30px"}} />
                    <div style={{marginLeft: "20px", fontSize: "15px", fontWeight: "600", color:"black"}}> Test </div>
                </ListItem>

                <ListItem className='list_item'>
                    <img src={Quiz} alt='no' style={{height: "30px", width: "30px"}} />
                    <div style={{marginLeft: "20px", fontSize: "15px", fontWeight: "600", color:"black"}}> Quiz </div>
                </ListItem>

                <ListItem className='list_item'>
                    <img src={Poll} alt='no' style={{height: "30px", width: "30px"}} />
                    <div style={{marginLeft: "20px", fontSize: "15px", fontWeight: "600", color:"black"}}> Poll </div>
                </ListItem>

            </List>
        </div>
    )

  return (
    <div>
        <React.Fragment>
        <IconButton onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </IconButton>
        <Drawer open={state['left']} onClose={toggleDrawer("left", false)} anchor={'left'}>
            {list('left')}
        </Drawer>
        </React.Fragment>
    </div>
  )
}

export default TemDrawer