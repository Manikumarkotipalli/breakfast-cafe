import React from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Help from './Help';

function LandingPage() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/Component/Menu.js" Component={Menu}></Route>
          <Route path='/Component/AboutUs.js' Component={AboutUs}></Route>
          <Route path='/Component/Help.js' Component={Help}></Route>
        </Routes>
      </Router>
      
      
    </div>
  )
}

export default LandingPage

