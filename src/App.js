import React from 'react';
import logo from './qualifica.png';
import { Button } from '@material-ui/core';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button onClick={props.logout}>Hello</Button>

          Learn React
        </a>
      </header>
      

    </div>
  );
}

export default App;