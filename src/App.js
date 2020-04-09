import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import RouterSwitch from './RouterSwitch.jsx';
import Navbar from './layoutist/NavBar.jsx';

const App = () => (
  <div>
    <Router>
      <Navbar />
      <RouterSwitch />
    </Router>
  </div>
);

export default App;