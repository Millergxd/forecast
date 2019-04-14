import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-grid-system'
import withStyles from 'react-jss'
import classnames from 'classnames'

function City(props) {
  const {
    city,
    time,
    temperature,
    classes
  } = props

  return (
    <Col
      lg={4}
      md={4}
      sm={6}
      xs={12}
    >
      <div className={classes.container}>
        <h6 className={classnames(classes.title, classes.city)}>
          {city}
        </h6>
        <h4 className={classnames(classes.title, classes.temperature)}>
          {`Temperature ${temperature}`}
        </h4>
        <h4 className={classnames(classes.title, classes.time)}>
          {time}
          </h4>
      </div>
    </Col>
  )
}

City.propTypes = {
  city: PropTypes.string.isRequired,
  time: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  temperature: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
}

const styles={
  container:{
    backgroundColor:'black',
    color:'white',
    padding:'20px'
  },
  title:{
    textAlign:'center',
    margin:'0',
    padding:'0',
    fontFamily: "'Roboto', sans-serif"
  },
  city:{
    fontSize:'200%',
    paddingBottom:'15px'
  },
  temperature:{
    fontSize:'140%',
    paddingBottom:'10px'
  },
  time:{
    fontSize:'120%',
    paddingBottom:'10px',
    fontWeight:'normal'
  }
}

export default withStyles(styles)(City)

