import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';
// Components
import App from './App';
// Styles
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Rajdhani:500,600,700');

  * {
    box-sizing: border-box;
  }

  body {
    background-color: #1a1a1a;
    width: 100vw;
    height: 100vh;
  }
`;
