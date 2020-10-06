// change welcome to hava a good time! and swich back to welcome message
// document.getElementById('changeTitle').addEventListener('click', changeWelcomeWords);

//  function changeWelcomeWords(){
//      const welcomeWords = document.getElementById('changeTitle').innerHTML;

//      if( welcomeWords == 'Welcome Message'){
//         document.getElementById('changeTitle').innerHTML= 'Have a Good Time!';
//      }
//      else{
//         document.getElementById('changeTitle').innerHTML= 'Welcome Message';   
//      }
//     }

function expandWrapper(){
    const wrapperBorn = document.getElementById('wrapperBorn');
    if(wrapperBorn.style.display ==='flex'){
        wrapperBorn.style.display = 'none';
    }
    else{
        wrapperBorn.style.display = 'flex';
        wrapperBorn.style.backgroundColor = '#ffffdd';
    }
}

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav'
import Welcome from './welcome'
import Including from './including'
import '/style.css';

class App extends Component {
  render() {
      return (
        <Nav />
        <Welcome />
        <Including />
      );
    };
  };
  
  ReactDOM.render( <App />,
    document.getElementById('roots')
  );
