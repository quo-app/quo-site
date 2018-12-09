import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import PropTypes from 'prop-types';
// Components
import withAuth from '../../../utils/auth';
// Signin config
const uiConfig = {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: { signInSuccessWithAuthResult: () => false }
};

class Account extends Component {
    state = { authenticated: false };
    
    componentDidMount() {
        this.unregisterAuth = this.props.auth.onAuthStateChanged(user => this.setState({ authenticated: !!user }));
    }

    componentWillUnmount() {
        this.unregisterAuth();
    }
    
    render() {
        const { auth } = this.props;
        if (!this.state.authenticated) {
            return (
                <React.Fragment>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/>
                </React.Fragment>
            );
        }
        return (
            <div>Hi {auth.currentUser.displayName}</div>
        );
    }
}

Account.propTypes = {
    auth: PropTypes.object.isRequired
};

export default withAuth(Account);