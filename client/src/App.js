import React, { Component } from 'react';
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './history';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="container">
        <Router history={history}>
          <div>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/posts/:id" exact component={Home} />
              <Redirect to="/" />
            </Switch>
          </div>
        </Router>
        
        
      </div>
     );
  }
}
 
export default App;