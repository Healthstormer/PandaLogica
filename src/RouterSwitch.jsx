
import React from 'react';
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Layout from './components/Layout.js';
import Start from './components/Start.js';
import Register from './components/Register.js';
import Results from './components/Results.js';
import Confirm from './components/Confirm.js';
import Success from './components/Success.js';
import HealthProfessionalStart from './components/HealthProfessionalStart';
import SupplierStart from './components/SupplierStart';
import SupplierRegistration from './components/SupplierRegistration.js';
import Login from './components/Login.js';

const routes = require('./layoutist/routes.json');
function RouterSwitch(props) {
      return (
          <Switch>
              <Route exact path="/">
                <Redirect to={routes[0].route} />
              </Route>
              <Route exact path={`/start`}>
                {/*<Layout route={routes[0]} />*/}
                <Start />
              </Route>
              <Route exact path={`/healthprofessionalstart`}>
                {/*<Layout route={routes[0]} />*/}
                <HealthProfessionalStart />
              </Route>
              <Route exact path={`/supplierstart`}>
                {/*<Layout route={routes[0]} />*/}
                <SupplierStart />
              </Route>
              <Route exact path={`/login`}>
                {/*<Layout route={routes[0]} />*/}
                <Login />
              </Route>
              <Route exact path={`/supplierregistration`}>
                {/*<Layout route={routes[0]} />*/}
                <SupplierRegistration />
              </Route>
              <Route exact path={`/register`}>
                {/*<Layout route={routes[1]} />*/}
                <Register />
              </Route>
              <Route exact path={`/results`}>
                {/*<Layout route={routes[2]} />*/}
                <Results />
              </Route>
              <Route exact path={`/confirm`}>
                {/*<Layout route={routes[3]} />*/}
                <Confirm />
              </Route>
              <Route exact path={`/success`}>
                {/*<Layout route={routes[4]} />*/}
                <Success /> 
              </Route>
          </Switch>
      )
    }
  
  export default RouterSwitch;
  