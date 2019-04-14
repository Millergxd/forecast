import React, { useState } from 'react'
import PropTypes from 'prop-types'
import City from './City'
import { Container, Row } from 'react-grid-system'
import withStyles from 'react-jss'
import { socket } from './api'

function App(props) {

  const { classes } = props

  const [citys, setCitys] = useState(
    [ 
      {city:"America/Santiago", temperature:'30 °C', time: +new Date()},
      {city:"Europe/Zurich", temperature:'30 °C', time: +new Date()},
      {city:"Pacific/Auckland", temperature:'30 °C', time: +new Date()},
      {city:"Australia/Sydney", temperature:'30 °C', time: +new Date()},
      {city:"Europe/London", temperature:'30 °C', time: +new Date()},
      {city:"America/New_York", temperature:'30 °C', time: +new Date()},
    ]
  )

  const showTime = (date) =>{
    let time =""
    let newDate = new Date(date)
    if(newDate.getHours()<10){
      time+=`0${newDate.getHours()}:`
    }else{
      time+= `${newDate.getHours()}:`
    }
    if(newDate.getMinutes()<10){
      time+=`0${newDate.getMinutes()}`
    }else{
      time+= `${newDate.getMinutes()}`
    }
    return time
  }

  const calcTime = offset => {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    return +new Date(utc + (3600000*offset));
  }


  socket.on('new_forecast',(newCitys)=>{
    let newArray = newCitys.map(c => {
      return {
        city:c.timezone,
        temperature: c.currently.temperature+" °C",
        time: calcTime(c.offset)
      }
    })
    setCitys(newArray)
  })

  return (
    <Container
      className={classes.container}
    >
      <Row 
        justify='center'
        align='center'
        className={classes.row}
      >
        {citys.map(c=>(
          <City 
            key={c.city}
            city={c.city} 
            temperature={c.temperature} 
            time={showTime(c.time)}
          />
        ))}
      </Row>
    </Container>
  )
}

App.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
}

const styles ={
  container:{
    height:'100%',
    width:'100%',
    maxWidth:'100% !important'
  },
  row:{
    height:'100%',
    width:'100%',
    maxWidth:'100% !important'
  }
}

export default withStyles(styles)(App)

