import React, { Component } from 'react';

import{Navbar,Nav} from 'react-bootstrap'
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
                    <Navbar bg="dark"  variant="dark" expand="lg">
                  
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link  href="/india">INDIA</Nav.Link>
                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                         </Nav>
                         </Navbar>
                         <br></br>
                         <br></br>
                        <center><Time /></center>
                        <center><h1 style={{color:'grey'}}>▄︻デ=COVID-INDIA═━一</h1></center>
                      
                        
                </div>

        )
    }
}

export default Navbaro;