import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './components/Home';
import Registration from './components/Registration';
import AddEmployee from './components/AddEmployee';
import Login from './components/Login';
import ManageEmployee from './components/ManageEmployee';

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={Registration} />
          <Route exact path='/employee' component={AddEmployee} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/employee/all' component={ManageEmployee} />
          <Route exact path='/employee/:id' component={AddEmployee} />
        </Switch>
      </Router>
    </>
  )
}

export default Routes;