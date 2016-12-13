import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/stylesheets/main.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header mr5 pt5">
          <div className='absolute br-pill flex justify-center items-center eh-input-status-icon green'>
            <i className='fa fa-check-circle' />
          </div>
        </div>
        <p className="App-intro red">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
