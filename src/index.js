import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'


import Navbaro from './components/nav'
import IndiaTable from './components/indiaTable'

import World from './components/world'



class App extends React.Component {
  
  
render(){

  
  return(
    <div>
      <Router>
       <Navbaro />
       <Switch>
        <Route exact path='/' component={World} />
        <Route exact path="/india" component={IndiaTable} />
       </Switch>
       </Router>
    </div>
         
    )}
  
  
}


ReactDOM.render(
  <App />,
 
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

