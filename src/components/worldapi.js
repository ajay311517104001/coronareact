import React, { Component } from 'react';
import axios from 'axios'
import ReactLoading from "react-loading";
import Searchbox from './searchbox'
import Worldbox from './worldbox'
import Worlddisplay from './worldtable'
import './worls.scss'
class Worldapi extends Component{
 constructor(props){
    super(props)
    this.state={
        items:[],
        flag:false,
        field:"",

    }

 }
async componentDidMount(){
    await  axios.get('https://coronavirus-19-api.herokuapp.com/countries/')
     .then((response)=>{
         console.log(response.data)
        
        this.setState({items:response.data,flag:true})}).catch((err)=>console.log(err))

 }
 
 onSearchChange=event=>{
  this.setState({field:event.target.value})
 
   }
  
    
   
 render(){
  var filtered= this.state.items.slice(1,this.state.items.length).filter(item=>{
    return item.country.toUpperCase().includes(this.state.field.toUpperCase())
   })
 
  
     return(
         <div>
      {! this.state.flag? (<div style={{position:'relative',top:'40em',left:"39em"}}><ReactLoading type='spokes' color='grey' height={100} width={100} /></div>):(
     <div>
  
     <Worldbox items={this.state.items[0]}/>
    
   
     <div class="container2">
     <center><Searchbox changer={this.onSearchChange} /> </center>
     <center><h2>COUNTRY-WISE</h2></center>
     

          <ul class="responsive-table">
            <li class="table-header">
            <div class="col col-1"><b>Country, other</b></div>
              <div class="col col-2"><b>Total cases</b></div>
              <div class="col col-3"><b>Today cases</b></div>
              <div class="col col-4"><b>Total Deaths</b></div>
               <div class="col col-5"><b>Today Deaths</b></div>
               <div class="col col-6"><b>Total Recovered</b></div>
               <div class="col col-7"><b>Active cases</b></div>
              
               <div class="col col-8"><b>Critical Cases</b></div>
               <div class="col col-9"><b>Total cases/1M-p</b></div>
               <div class="col col-10"><b>Deaths /1M-p</b></div>
               <div class="col col-11"><b>Total Tests</b></div>
               <div class="col col-12"><b>Total/1M-p</b></div>

            </li>
          
             <Worlddisplay items={filtered}/>
            
                      </ul>
        </div>
    
     </div>
     )}
         </div>
     )
 }


}

export default Worldapi;