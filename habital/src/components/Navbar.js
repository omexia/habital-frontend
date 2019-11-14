import React, { Component } from 'react';
import './styles/navbar.css';

class Navbar extends Component {
    render(){
        return(
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="app-logo">habital</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;