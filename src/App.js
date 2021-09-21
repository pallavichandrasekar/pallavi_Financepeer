import React from 'react';
import './App.css';
import Home from './Home'
import Login from './Login'
import Logout from './Logout'
import Data from './Data'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <div>
      
      <Router>
        <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/logout' component={Logout} />
        <Route path='/Home'  component={Home} />
        <Route path='/Data'  component={Data} />
        </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
