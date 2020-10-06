import React, { Component } from "react";
import ReactDOM from "react-dom";
import './style.css'

class Welcome extends Component {
    render() {
        return (
            <section className="welcome">
            <h1 id='changeTitle' 
            className='welcomeMessage'> Welcome Message</h1>
        </section>
        );
    }
}

export default Welcome