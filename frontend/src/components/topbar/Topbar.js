import React from 'react';
import "./topbar.css";

function Topbar() {
    return(
        <nav className="navbar is-dark is-spaced" role="navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src={require('../../assets/bread.png')} width="120" height="150"/>
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className="navbar-menu">
                <div className="navbar-end">
                    <a className="navbar-item">Logout</a>
                </div>
            </div>
        </nav>
    );
}

export default Topbar;