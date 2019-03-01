import React, { Component } from 'react';
// Components
import AccountHeader from '../../components/header/AccountHeader';
import Account from './content';
// Utils
import { withAuth } from '../../utils/auth';

class Accounts extends Component {
  render() {
    const { auth } = this.props;
    return (
      <>
        <AccountHeader
          authenticated={auth.isAuthenticated}
          profile={auth.profile}
        />
        <Account authenticated={auth.isAuthenticated} profile={auth.profile} />
      </>
    );
  }
}

export default withAuth(Accounts);