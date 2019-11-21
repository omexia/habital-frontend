import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './styles/navbar.css';

class Navbar extends Component {
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <a href="#/homes" className="app-logo">habital</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link className="nav-link" to="/login">Logout</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;