import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// Components
import PrivateRoute from './components/routes/PrivateRoute';
import Accounts from './pages/accounts';
import Home from './pages/home';
// Utils
import withTheme from './components/withTheme';
import { AuthProvider } from './utils/auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute path='/account' component={Accounts} />
            <Route path='/' component={Home} />
            <Redirect to='/' />
          </Switch>
        </AuthProvider>
      </Router>
    );
  }
}

export default withTheme(App);