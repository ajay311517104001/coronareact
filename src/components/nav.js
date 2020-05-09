import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import{Navbar,Nav} from 'react-bootstrap'
import './worls.scss'
class Time extends React.Component{
  
    render(){
      var time= Date().split(' ')
      return(<div>
        <center>{time[0]},{time[2]} {time[1] }</center>
        </div>)
    }
  
  
  
  }

class Navbaro extends Component{
    render(){
        return(
                <div>
                  <div class="navbar">
  <ul><li> <Link to="/" style={{color:'#C2D9DD'}}>WORLD</Link></li><li> <Link to="/india" style={{color:'#C2D9DD'}}>INDIA</Link></li><li>help</li></ul>
</div>

                         <br></br>
                         <br></br>
                        <center><Time /></center>
                        <center><h1 style={{color:'grey'}}>▄︻デ=COVID-INDIA═━一</h1></center>
                      
                        
                </div>

        )
    }
}

export default Navbaro;