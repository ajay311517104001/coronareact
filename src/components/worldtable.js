import React, { Component } from 'react';
import Searchbox from './searchbox'
import './worls.scss';
function Worlddisplay({items}){



console.log('helo',items)
    return(

    <div>{
      items.map(item=>
        <li class="table-row">
            <div class="col col-1"><b>{item.country}</b></div>
             <div class="col col-2" style={{color:'red'}}><b>{item.cases}</b></div>
      <div class="col col-3" style={{color:'red'}}><b>+{item.todayCases}</b></div>
              <div class="col col-4" style={{color:'grey'}}><b>{item.deaths}</b></div>
      <div class="col col-5" style={{color:'grey'}}><b>+{item.todayDeaths}</b></div>
               <div class="col col-6" style={{color:'green'}}><b>{item.recovered}</b></div>
               <div class="col col-7" style={{color:'red'}}><b>{item.active}</b></div>
              
               <div class="col col-8" style={{color:'red'}}><b>{item.critical}</b></div>
               <div class="col col-9" style={{color:'red'}}><b>{item.casesPerOneMillion}</b></div>
               <div class="col col-10" style={{color:'grey'}}><b>{item.deathsPerOneMillion}</b></div>
               <div class="col col-11"  style={{color:'blue'}}><b>{item.totalTests}</b></div>
               <div class="col col-12 " style={{color:'blue'}}><b>{item.testsPerOneMillion}</b></div>
    
            </li>
      )
     
      }</div>
    )
}


export default Worlddisplay;