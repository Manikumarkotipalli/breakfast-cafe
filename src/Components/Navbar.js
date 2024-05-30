import React from 'react'
import './Style/navbar.css';
import AboutUs from './AboutUs';
import Menu from './Menu';
import Home from './Home'
import Help from './Help';




function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <ul className='unodlist'>
                    <li className='home'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='cat'>
                        <a href='/Component/Menu.js' >Menu</a>
                        
                        
                    </li>
             
                    <li className='about'>
                        <a href='/Component/AboutUs.js'>About us</a>
                    </li>
                    <li className='hp'>
                        <a href='/Component/Help.js'>Help</a>
                    </li>
                </ul>
            </nav>
        
        </div>
    )
}

export default Navbar
