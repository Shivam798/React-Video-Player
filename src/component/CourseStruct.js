import React, { useState } from 'react'
import {  Card, Grid, List, ListItem ,CardContent,Typography} from '@material-ui/core'
import thumb from '../thumb.png'
import playbtn from '../favicon.svg'
import ReactPlayer from 'react-player'
import "../App.css"
import ListItemCard from '../ListItems'
 

function CourseStruct(props) {
    const courseName=props.match.params.coursename;
    const courses={
        Reactjs:[
            {title:"Introduction",vid:"https://youtu.be/9Tz2tY-ZEwQ",sub:"Outcome of Course"},
            {title:"Environment setup",vid:"https://youtu.be/xmoiyb05eOQ",sub:"Installation"},
            {title:"Fisrt App",vid:"https://youtu.be/CTd7BiaI10o",sub:"Basics"},
            {title:"Introduction",vid:"https://youtu.be/9Tz2tY-ZEwQ",sub:"Outcome of Course"},
            {title:"Environment setup",vid:"https://youtu.be/xmoiyb05eOQ",sub:"Installation"},
            {title:"Fisrt App",vid:"https://youtu.be/CTd7BiaI10o",sub:"Basics"},
            {title:"Introduction",vid:"https://youtu.be/9Tz2tY-ZEwQ",sub:"Outcome of Course"},
            {title:"Environment setup",vid:"https://youtu.be/xmoiyb05eOQ",sub:"Installation"},
            {title:"Fisrt App",vid:"https://youtu.be/CTd7BiaI10o",sub:"Basics"},
            {title:"Introduction",vid:"https://youtu.be/9Tz2tY-ZEwQ",sub:"Outcome of Course"},
            {title:"Environment setup",vid:"https://youtu.be/xmoiyb05eOQ",sub:"Installation"},
            {title:"Fisrt App",vid:"https://youtu.be/CTd7BiaI10o",sub:"Basics"},
            {title:"Introduction",vid:"https://youtu.be/9Tz2tY-ZEwQ",sub:"Outcome of Course"},
            {title:"Environment setup",vid:"https://youtu.be/xmoiyb05eOQ",sub:"Installation"},
            {title:"Fisrt App",vid:"https://youtu.be/CTd7BiaI10o",sub:"Basics"},
        ],
        Nodejs:[
            {title:"Node js title 1",vid:'https://youtu.be/_30Nn8urbmU',sub:"Outcome of Course"},
            {title:"Node js title 2",vid:'https://youtu.be/nrw6N9pEe9g',sub:"Installation"},
            {title:"Node js title 3",vid:'https://youtu.be/CJSVlCvIsJ0',sub:"Basics"}
        ]
    }
    const [vid, uvid] = useState(courses[courseName][0].vid)
    const [title, utitle] = useState(courses[courseName][0].title)
    const [sub, setsub] = useState(courses[courseName][0].sub)
    
    return (
            <Grid container spacing={2} direction="row" >
            
                <Grid item xs={8} className="player-wrapper"   >
                    <Grid container direction="column" spacing= {0}>
                    <Typography style={{margin:"1.5%" ,TextDecoder: "header",fontWeight:"bolder"}}  variant='h2' component="text">{title}</Typography>
                    <Typography style={{marginLeft:"1.5%" ,fontWeight:"lighter",textDecorationLine : "underline"}}  variant='h5' component="text">{sub}</Typography>
                    </Grid>
                <ReactPlayer
                className="react-player"
                url={vid}
                width="80%"
                height="500px"
                controls
                light={thumb}
                playing
                playIcon={<img src={playbtn} alt="playit"/>}
                />
                </Grid>
                <Grid item xs={4}>
                    <Card style={{height:"100%"}}>
                        <CardContent>
                            <Typography variant='h5' component='div'>
                                {courseName} List
                            </Typography> 
                            <Card>
                                <CardContent>
                                    <List>
                                        {
                                            courses[courseName].map(item=>{
                                                return <ListItem onClick={()=>{
                                                    uvid(item.vid)
                                                    setsub(item.sub)
                                                    utitle(item.title)
                                                }} ><ListItemCard title={item.title} subtitle={item.sub}/></ListItem>
                                            })
                                        }

                                    </List>
                                </CardContent>
                            </Card>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

    )
}

export default CourseStruct
