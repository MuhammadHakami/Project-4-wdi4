import React, { Component } from 'react'
import {Redirect,withRouter} from 'react-router-dom'
import axios from 'axios'
import Plotly from 'plotly'
class Show extends Component {


  render() {
    const isAuth=(this.props.auth)?this.props.match.params.id:<Redirect to='/' />
    return (
      <div>
        {isAuth}
        <div id="myDiv"></div>
      </div>
    )
  }
}

export default withRouter(Show)