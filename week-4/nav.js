import React, { Component } from "react";
import ReactDOM from "react-dom";
import './style.css'

class Nav extends Component {
    render() {
        return (
            <nav className="itemWrapper">
            <ul>
                <a href="#item1" className="item">
                    <li> item 1</li>
                </a>
                <a href="#item2" className="item">
                    <li> item 2</li>
                </a>
                <a href="#item3" className="item">
                    <li> item 3</li>
                </a>
                <a href="#item4" className="item">
                    <li> item 4</li>
                </a>
            </ul>
        </nav>
        );
    }
}

export default Nav