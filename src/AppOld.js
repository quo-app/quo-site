import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { injectGlobal } from 'emotion';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components
import Signin from './components/signin';
import Header from './components/header';
import Footer from './components/footer';
import { Start } from './components/pages';
import withTheme from './components/withTheme';
import Account from './pages/accounts/content';
import PrivateRoute from './components/routes/PrivateRoute';
import AccountHeader from './components/header/AccountHeader';
// Utils
import withAuth from './utils/auth';
// Variables
import { modes } from './config/globals';
const mainTabs = [
  { label: 'Start', route: '/' },
  { label: 'Learn', route: '/learn' },
];
const accountTabs = [
  { label: 'Projects', route: '/account' },
  { label: 'Links', route: '/account/links' },
];

class App extends Component {
  state = {
    signinOpen: false,
    signinMode: modes.signup,
    authenticated: false,
    mainNav: {
      active: mainTabs[0]
    },
    accountsNav: {
      active: accountTabs[0]
    },
    profile: {

    }
  };

  componentDidMount() {
    this.unregisterAuth = this.props.auth.onAuthStateChanged(user => {
      const { email, displayName, photoURL, uid, providerData, h: { a: token } } = user;
      this.setState({
        authenticated: !!user,
        profile: { email, displayName, photoURL, uid, providerData, token }
      });
    });
  }

  componentWillUnmount() {
    this.unregisterAuth();
  }

  toggleModal = (mode = modes.signup) => {
    this.setState(prevState => ({
      mode,
      signinOpen: !prevState.signinOpen,
    }));
  };

  render() {
    const { signinOpen, signinMode, authenticated, mainNav, accountsNav, profile } = this.state;

    return (
      <Router>
        <AppStyled>
          <Switch>
            <Route path='/' exact render={() => (
              <>
                <Header
                  tabs={mainTabs}
                  signinAction={this.toggleModal}
                  authenticated={authenticated}
                  profile={profile}
                />
                <Start />
              </>
            )} />
            <Route path='/learn' render={() => (
              <>
                <Header
                  tabs={mainTabs}
                  signinAction={this.toggleModal}
                  authenticated={authenticated}
                  profile={profile}
                />
                <h1>Learn</h1>
              </>
            )} />
            <PrivateRoute path='/account' render={() => (
              <>
                <AccountHeader
                  authenticated={authenticated}
                  profile={profile}
                />
                <Account authenticated={authenticated} profile={profile} />
              </>
            )} />
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

App.propTypes = {
  auth: PropTypes.object
};

const AppStyled = styled('div')`
  padding-top: ${p => p.theme.sizes.h.header + 5 + p.theme.sizes.unit};
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

export default withTheme(withAuth(App));
