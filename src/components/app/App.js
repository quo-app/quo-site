// Dependencies
import React, { Component } from 'react';
import styled from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';
import { injectGlobal } from 'emotion'
// Components
import Header from '../header';
// Config
import theme from '../../config/theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppStyled>
          <Header />
          <h1>WOW</h1>
          <h1>WOW</h1>
          <h1>WOW</h1>
          <h1>WOW</h1>
          <h1>WOW</h1>
          <h1>WOW</h1>
          <h1>WOW</h1>
          <h1>WOW</h1>
          <h1>WOW</h1>
          <h1>WOW</h1>
          <h1>WOW</h1>
          <h1>WOW</h1>
          <h1>WOW</h1>
        </AppStyled>
      </ThemeProvider>
    );
  }
}

const AppStyled = styled('div')`
  img {
    width: 50px;
  }
`;

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Rajdhani:500,700');

  * {
    box-sizing: border-box;
  }

  body {
    background-color: #1a1a1a;
    width: 100vw;
    height: 100vh;
  }
`;

export default App;
