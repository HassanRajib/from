import React from 'react'
import { makeStyles } from '@mui/styles'
import Paper from '@mui/material/Paper'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

const useStyles= makeStyles({
    root:{
        flexGrow:1
    },
    
    tab:{
        fontSize:12,
        color:"#5f6368",
        textTransform: "capitalize",
        height: 10,
        fontWeight: "600",
    },
    tabs:{
        height:10
    }
})
function CenterTab() {
    const classes = useStyles()
  return (
    <Paper className={classes.root}>
        <Tabs
        className ={classes.tabs}
        textColor="primary"
        indicateColor="primary"
        centered>
            <Tab label="Questions" className={classes.tab}>

            </Tab>
            <Tab label="Responses" className={classes.tab}>
                 
            </Tab>
        </Tabs>
    </Paper>
  )
}

export default CenterTab