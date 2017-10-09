import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Flexbox from 'flexbox-react';
import Portfolio from './components/portfolio';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      portfolio: false,
      blog: false,
      mind: false,
      me: true
    }

    this.handleOnClick = this.handleOnClick.bind(this)
  }

    handleOnClick(attr) {

      this.setState({
        [attr]: true
      })

    }
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
              <h3 className="navLinksText" onClick={this.handleOnClick.bind(null, "portfolio")}> portfolio </h3>
            </Flexbox>

            <Flexbox flexGrow={1}>
              <h3 className="navLinksText" onClick={this.handleOnClick.bind(null, "blog")}> blog </h3>
            </Flexbox>

            <Flexbox flexGrow={1}>
               <h3 className="navLinksText" onClick={this.handleOnClick.bind(null, "contact")}> contact </h3>
            </Flexbox>

            <Flexbox flexGrow={1}>
               <h3 className="navLinksText" onClick={this.handleOnClick.bind(null, "mind")}> mind </h3>
            </Flexbox>
          </Flexbox>
        </div>
        
      </div>
    );
  }
}

export default App;
