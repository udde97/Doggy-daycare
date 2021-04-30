import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Register from './Register';

import {HashRouter as Router, Route, Switch,Link} from 'react-router-dom';
import Dogs from './Dogs'

class App extends Component {
  
      
    
  
  




  render() 
  {
    return(

    <Router>
      <switch>
      <Route exact path="/">
        <Home/>
      
      </Route>

      <Route path= "/register">

        <Register/>

      </Route>

      <Route path= "/Dogs/:chipNumber"> 
      
      <Dogs/>

      </Route>


      </switch>
     </Router>
    )
    }

  }

export default App;
