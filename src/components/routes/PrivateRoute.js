import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// Utils
import { withAuth } from '../../utils/auth';

function PrivateRoute({ component: Component, auth, ...rest }) {
  return (
    <Route {...rest} render={(props) => (
      auth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  );
}

export default withAuth(PrivateRoute);