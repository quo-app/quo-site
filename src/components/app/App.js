import React from 'react';
import styled from 'react-emotion';
import { injectGlobal } from 'emotion';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components
import Header from '../header';
import Footer from '../footer';
import withTheme from '../withTheme';
import { Start } from '../pages';
// Variables
const tabs = [
  { label: 'Learn', route: '/learn' },
  { label: 'Start', route: '/' },
  { label: 'Account', route: '/account' },
]

function App() {
    return (
      <Router>
        <AppStyled>
          <Header
            tabs={tabs}
            start={1}
          />
          <Switch>
            <Route path='/' exact component={Start} />
            <Route path='/learn' render={() => <h1>Learn</h1>} />
            <Route path='/account' render={() => <h1>Account</h1>} />
          </Switch>
          <Footer />
        </AppStyled>
      </Router>
    );
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

export default withTheme(App);
