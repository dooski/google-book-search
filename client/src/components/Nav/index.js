
import React from "react";
import "./style.css"

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                React Reading List
      </a>
            <li className="nav-item">
                <a className="nav-link" href="/">Search</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/saved">Saved</a>
            </li>
        </nav>
    );
}

export default Nav;