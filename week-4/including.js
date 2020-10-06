import React, { Component } from "react";
import ReactDOM from "react-dom";
import './style.css'

class Including extends Component {
    render() {
        return (
            <section className="including">
            <h3> Section Title</h3>
            <div className="wrapper">
                <div className="box"> Content Box 1</div>
                <div className="box"> Content Box 2</div>
                <div className="box"> Content Box 3</div>
                <div className="box"> Content Box 4</div>
            </div>
            <div className="callWrapper">
                <button className="call controlBtn" onclick={ expandWrapper()}> Call to Action</button>
            </div>
            <div className="wrapper wrapper2" id='wrapperBorn'>
                <div className="box"> Content Box 1</div>
                <div className="box"> Content Box 2</div>
                <div className="box"> Content Box 3</div>
                <div className="box"> Content Box 4</div>
            </div>
        </section>
        );
    }
}

export default Including