import React from 'react';
import "./sidebar.css";

function Sidebar() {
    return(
        <aside className="menu has-background-grey py-3 px-3" role="navigation">
            <p className="menu-label has-text-white">
                Overiew
            </p>
            <ul className="menu-list">
                <li><a>Home</a></li>
                <li><a>Dashboard</a></li>
            </ul>

            <p className="menu-label has-text-white">
                Manage
            </p>
            <ul className="menu-list">
                <li><a>Customers</a></li>
                <li><a>Orders</a></li>
                <li><a>Products</a></li>
                <li><a>Ingredients</a></li>
            </ul>

            <p className="menu-label has-text-white">
                Calendar
            </p>
            <ul className="menu-list">
                <li><a>Calendar</a></li>
            </ul>

            <p className="menu-label has-text-white">
                Settings
            </p>
            <ul className="menu-list">
                <li><a>Account</a></li>
            </ul>
        </aside>
    );
}

export default Sidebar;