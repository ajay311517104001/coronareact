import React, { Component } from 'react';


import './indiaTable'
const Displaytable =({items})=>{
return(
    <div>
{
 
 items.map(item=> 
  
 <li class="table-row">
   <div class="col-3 col-1" key={item.id}> <b>{item.state}</b><br></br><small>lastupdate:{item.lastupdatedtime} </small></div>
   <div class="col-1 col-2 " key={item.id} style={{color:'red'}}> <large ><b>{item.confirmed}</b> </large><small ><b>⇧{item.deltaconfirmed}</b></small></div>
   <div  class="col col-1 " key={item.id} style={{color:'blue'}}><b>{item.active}</b></div>
   <div class="col- col-2" style={{color:'green'}}> <large ><b>{item.recovered}</b> </large><small ><b>⇧{item.deltarecovered}</b></small></div>
   <div class="col col-2"style={{color:'grey'}}> <large ><b>{item.deaths}</b> </large><small ><b>⇧{item.deltadeaths}</b></small></div>
 </li>)}
    </div>
)


}
export default Displaytable ;