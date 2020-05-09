import React, { Component } from 'react';

import Worldapi from './worldapi';

import './worls.scss'

class Worldbox extends Component{
render(){
    return(
    <div class="container1">
    <div class="mini">
    <div class="box">
       
      <h5 style={{color:'red'}}><br></br>Confirmed</h5>
      
      <h6 className="today"style={{color:'red', position: 'relative',top:'15px'}}>Today<h5 style={{color:'red'}}><b>[{this.props.items.todayCases}]</b></h5></h6>
      <br></br>
      <h3 style={{color:'red'}}><b>{this.props.items.cases}</b></h3>
    </div>
      <div class="box">
      <h5 style={{color:'green'}}><br></br>Recovered</h5>
      <h6 style={{color:'red', position: 'relative',top:'15px'}}>Critical<h5 style={{color:'red'}}><b>[{this.props.items.critical}]</b></h5></h6>

      <br></br>
      <h3 style={{color:'green'}}><b>{this.props.items.recovered}</b></h3>
    
    </div>
    <div class="box">
    <h5 style={{color:'grey'}}><br></br>Deaths</h5>
      
      <h6 style={{color:'grey', position: 'relative',top:'15px'}}>Today<h5 style={{color:'grey'}}><b>[{this.props.items.todayDeaths}]</b></h5></h6>
      <br></br>
      <h3 style={{color:'grey'}}><b>{this.props.items.deaths}</b></h3>
    </div>
  </div>
  
    </div>
)
    }
}

export default Worldbox;