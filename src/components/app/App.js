import React, { Component } from 'react';
import styled from 'react-emotion';
import { injectGlobal } from 'emotion';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components
import Header from '../header';
import Footer from '../footer';
import withTheme from '../withTheme';
import { Start } from '../pages';
import Signin from '../signin';
// Variables
import { modes } from '../../config/globals';
const tabs = [
  { label: 'Start', route: '/' },
  { label: 'Learn', route: '/learn' },
];

class App extends Component {
  state = {
    signinOpen: false,
    signinMode: modes.signup
  };

  toggleModal = (mode = modes.signup) => {
    this.setState(prevState => ({
      mode,
      signinOpen: !prevState.signinOpen,
    }));
  };

  render() {
    const { signinOpen, signinMode } = this.state;

    return (
      <Router>
        <AppStyled>
          <Header
            tabs={tabs}
            signinAction={this.toggleModal}
          />
          <Switch>
            <Route path='/' exact component={Start} />
            <Route path='/learn' render={() => <h1>Learn</h1>} />
          </Switch>
          <Footer />
          <Signin
            open={signinOpen}
            mode={signinMode}
            onClose={this.toggleModal}
          />
        </AppStyled>
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

export default withTheme(App);
