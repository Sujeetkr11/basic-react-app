import React from "react";
import '../../App.css';
import './styles.css';

function NavbarComponent() {
    return (
        <header className="App-header">
            <nav>
                <img src="./logo192.png" width="40px" />
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