import React from "react";
import '../../App.css';
import './styles.css';

function NavbarComponent() {
    return (
        <header className="App-header">
            <nav className="nav">
                <img src="./logo192.png" />
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav> 
        </header>
    );
}

export default NavbarComponent;