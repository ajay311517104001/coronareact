import React from 'react';
import SearchBox from './searchbox'

import axios from 'axios'
import { Table } from 'react-bootstrap'
import './worls.scss'
import Displaytable from './tabledisplay'
import ReactLoading from "react-loading";



class Display extends React.Component {
  
  
  render() { 
   
    if(this.props.valuE===false){
      var val= <ReactLoading type='spokes' color='grey' height={100} width={100} />
    }
    return (<div className="loading"><center>{val}</center></div>  );
  }
}
 
class Glob extends React.Component{
  render(){
    return(
      <div>
      
<div class="container1" style={{position:'relative',left:'-5em'}}>
    <div class="mini">
    <div class="box">
       
      <h5 style={{color:'red'}}><br></br>Confirmed</h5>
      
      <h6 className="today"style={{color:'red', position: 'relative',top:'15px'}}><h5 style={{color:'red'}}><b>[+{this.props.glob.deltaconfirmed}]</b></h5></h6>
      <br></br>
      <h3 style={{color:'red'}}><b>{this.props.glob.confirmed}</b></h3>
    </div>
    <div class="box">
       
       <h5 style={{color:'blue'}}><br></br>Active</h5>
       
       <h6 className="today"style={{color:'red', position: 'relative',top:'15px'}}><br></br></h6>
       <br></br>
       <h3 style={{color:'blue'}}><b>{this.props.glob.active}</b></h3>
     </div>
     <div class="box">
       
      <h5 style={{color:'green'}}><br></br>Recovered</h5>
      
      <h6 className="today"style={{color:'green', position: 'relative',top:'15px'}}><h5 style={{color:'green'}}><b>[+{this.props.glob.deltarecovered}]</b></h5></h6>
      <br></br>
      <h3 style={{color:'green'}}><b>{this.props.glob.recovered}</b></h3>
    </div>
    <div class="box">
       
      <h5 style={{color:'grey'}}><br></br>Deaths</h5>
      
      <h6 className="today"style={{color:'grey', position: 'relative',top:'15px'}}><h5 style={{color:'grey'}}><b>[+{this.props.glob.deltadeaths}]</b></h5></h6>
      <br></br>
      <h3 style={{color:'grey'}}><b>{this.props.glob.deaths}</b></h3>
    </div>
  </div>
  
    </div>
    </div>
    )
  }
}




class IndiaTable extends React.Component{
  
  constructor(props){
    super(props)
    this.state={
      items:[],
      gob:[],
      flag:false,
      field:"",
      
    }
  }


 async componentDidMount(){
  await axios.get("https://api.covid19india.org/data.json")
  .then((response)=>{
    console.log(response.data)
    this.setState({items:response.data.statewise.slice(1,(response.data.statewise).length),gob:response.data.statewise[0],flag:true})})
  .catch((err)=>console.log(err))
 

  
   
    
   
  }

  onSearchChange=event=>{
    this.setState({field:event.target.value})
   
     }

render(){
  var count=0
for (var i=0;i<this.state.items.length;i++){
  if (this.state.items[i].confirmed=='0'){
    count=count+1;
  }
}

console.log( Date().split(' '))


var {items,field}=this.state;
 const filterdItem=items.filter(item=>{
  return item.state.toLowerCase().includes(field.toLowerCase())
})


 
  return(
    <div>
      <Glob glob={this.state.gob} />
  

  <Display valuE={this.state.flag} />

<div class="container" style={{position:'relative',top:'10em'}} >



  <ul class="responsive-table">
  
  <center><h2>INDIA-STATEWISE</h2><h6>{this.state.items.length-count}  States/UTS Affected</h6></center> 
  <center style={{position:'absolute',left:'-2.5em',top:'-0.8em'}} ><SearchBox  changer={this.onSearchChange} /> </center>
    <li class="table-header">
      <div class="col col-1"  ><b>STATES</b></div>
      <div class="col col-2"><b>CONFIRMED</b></div>
      <div class="col  col-3"><b>ACTIVE</b></div>
      <div class="col col-4"><b>RECOVERED</b></div>
      <div class="col col-5"><b>DEATHS</b></div>
    </li>
    
    <Displaytable items={ filterdItem}/>
  </ul>
    </div>

    </div>

         
    )}
  
  
}

export default IndiaTable;