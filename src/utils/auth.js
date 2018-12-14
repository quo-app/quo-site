import React, { Component } from 'react';
import firebase from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'testproject-d3c33.firebaseapp.com',
};
firebase.initializeApp(config);

function withAuth(WrappedComponent) {
    return class WithAuthComponent extends Component {
        render() {
            return <WrappedComponent auth={firebase.auth()} {...this.props} />;
        }
    };
}

export default withAuth;