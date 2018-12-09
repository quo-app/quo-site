import React, { Component } from 'react';
import firebase from 'firebase';

const config = {
    apiKey: ' AIzaSyA9uR4dU5OlG2L0rgpbJ_nX_EN1gnIsMuA ',
    authDomain: 'testproject-d3c33.firebaseapp.com',
};
firebase.initializeApp(config);

function withAuth(WrappedComponent) {
    return class WithAuthComponent extends Component {
        render() {
            return <WrappedComponent auth={firebase.auth()} />;
        }
    };
}

export default withAuth;