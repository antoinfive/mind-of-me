import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Flexbox from 'flexbox-react';
import Portfolio from './components/portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Flexbox flexDirection="row" minHeight="10vh">
            <Flexbox element="header" height="60px">
              Welcome to the mind of me
            </Flexbox>
          </Flexbox>
        </div>
        
      <div className="App-navLinks">
          <Flexbox flexDirection="row" minWidth="10vh">
            <Flexbox flexGrow={1}>
              <h3 className="navLinksText" onClick={()=> { alert('hi') }}> portfolio </h3>
            </Flexbox>

            <Flexbox flexGrow={1}>
              <h3 className="navLinksText"> blog </h3>
            </Flexbox>

            <Flexbox flexGrow={1}>
               <h3 className="navLinksText"> contact </h3>
            </Flexbox>

            <Flexbox flexGrow={1}>
               <h3 className="navLinksText"> mind </h3>
            </Flexbox>
          </Flexbox>
        </div>


        <div> <Portfolio/> </div>
      </div>
    );
  }
}

export default App;
