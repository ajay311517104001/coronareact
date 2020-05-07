import React, { Component } from 'react';

import{Navbar,Nav} from 'react-bootstrap'


class Navbaro extends Component{
    render(){
        return(
                <div>
                    <Navbar bg="dark" variant="dark">
                  <Navbar.Brand href="#home">▄︻デ=COVID-TRACKER═━一</Navbar.Brand>
                  <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                         </Nav>
                         </Navbar>
                </div>

        )
    }
}

export default Navbaro;

//ReactDOM.render(
//    <Navbaro />,
 //  
//    document.getElementById('root')
//  );
<div className="mainAll">
     
<br>
</br>
<Display valuE={this.state.flag} />
<div className="tableCent">
<Table   hover variant="dark">
<thead>
 <tr>
 <th> <center>STATES</center> </th>
 <th colspan="2" scope="colgroup"><center>CONFIRMED</center></th>
  <th ><center>ACTIVE</center></th>
  <th colspan="2" scope="colgroup"><center>RECOVERED</center></th>
  <th colspan="2" scope="colgroup"><center>DEATHS</center></th>

 </tr>
</thead>




 {
 
 this.state.items.map(item=> <tr> 
   
    <td style={{color:"white"}}key={item.id}> {item.state}</td>
    <td style={{color:"black",backgroundColor:"yellow"}} key={item.id}> <center>{item.confirmed}</center></td>
     <td style={{color:"yellow" }}key={item.id}><center>+{item.deltaconfirmed}</center></td>
     <td style={{color:"white",backgroundColor:"#FF0000"}} key={item.id}><center>{item.active}</center></td>
     <td style={{color:"black",backgroundColor:"#7CFC00"}} key={item.id}><center>{item.recovered}</center></td>
     <td style={{color:"#7CFC00"}} key={item.id}><center>+{item.deltarecovered}</center></td>
     <td style={{color:"black",backgroundColor:"white"}}key={item.id}><center>{item.deaths}</center></td>
     <td key={item.id}><center>+{item.deltadeaths}</center></td>
     
    </tr>)}
 


</Table>
</div>

</div> 
