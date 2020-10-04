import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Top extends Component {
  render() {
    return (
      <div className='wrapper'>
      <div className="logo"> Website Title/ Logo</div>
      <input type="checkbox" className="navbarToggle hello" id="navbarToggle">
      <label for="navbarToggle" className="navbarLabel">
          <i onclick='changeToCross()' className="navbar fas fa-bars fa-2x controlNavbar" 
          id="navbarToggle">
          </i>
          <i class="fas fa-times fa-2x cross"></i>
      </label>
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
   </div>
    )
  }
}

ReactDOM.render(<Top />, document.getElementById('top'))

class Welcome extends Component {
  render() {
    return (
      <h1 id='changeTitle' className='welcomeMessage'></h1>
    )
  }
}

ReactDOM.render(<Welcome />, document.getElementById('top'))

class Including extends Component {
  render() {
    return (
      <h3> Section Title</h3>
        <div class="wrapper">
            <div className="box"> Content Box 1</div>
            <div className="box"> Content Box 2</div>
            <div className="box"> Content Box 3</div>
            <div className="box"> Content Box 4</div>
        </div>
        <div className="callWrapper">
            <button className="call controlBtn" onclick='expandWrapper()'> Call to Action</button>
        </div>
        <div className="wrapper wrapper2" id='wrapperBorn'>
            <div className="box"> Content Box 1</div>
            <div className="box"> Content Box 2</div>
            <div className="box"> Content Box 3</div>
            <div className="box"> Content Box 4</div>
        </div>
    )
  }
}

ReactDOM.render(<Including />, document.getElementById('including'))