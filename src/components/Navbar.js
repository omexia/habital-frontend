import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './styles/navbar.css';

class Navbar extends Component {
    render(){
        return(
            <nav>
                <div class="nav-wrapper">
                    <a href="#/homes" class="app-logo">habital</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link className="nav-link" to="/login">Logout</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;