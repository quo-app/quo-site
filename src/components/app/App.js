// Dependencies
import React, { Component } from 'react';
import styled from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';
import { injectGlobal } from 'emotion';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Components
import Header from '../header';
import Footer from '../footer';
// Config
import theme from '../../config/theme';
// Variables
const tabs = [
  { label: 'Learn', route: '/learn' },
  { label: 'Start', route: '/' },
  { label: 'Account', route: '/account' },
]

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <AppStyled>
            <Header
              tabs={tabs}
              start={1}
            />
            
            <Route path='/' exact render={() => <h1>Start</h1>} />
            <Route path='/learn' render={() => <h1>Learn</h1>} />
            <Route path='/account' render={() => <h1>Account</h1>} />
            
            <Footer />
          </AppStyled>
        </ThemeProvider>
      </Router>
    );
  }
}

const AppStyled = styled('div')`
  padding-top: ${p => p.theme.sizes.h.header + 5 + p.theme.sizes.unit};

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
