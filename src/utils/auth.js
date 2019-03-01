import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'testproject-d3c33.firebaseapp.com',
};
firebase.initializeApp(config);
const provider = new firebase.auth.GoogleAuthProvider();
const AuthContext = React.createContext({});

class AuthProviderComp extends Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth();
    this.state = {
      profile: {},
      isAuthenticated: false
    };
  }

  componentDidMount() {
    this.auth.onAuthStateChanged(result => {
      if (result) {
        this.setState({
          isAuthenticated: true,
          profile: {
            uid: result.uid,
            email: result.email,
            photoURL: result.photoURL,
            displayName: result.displayName
          }
        });
      }
    });
  }

  signin = () => {
    this.auth.signInWithPopup(provider);
  };

  signout = () => {
    this.auth.signOut();
  };

  render() {
    const { children } = this.props;
    const {
      profile,
      isAuthenticated
    } = this.state;

    return (
      <AuthContext.Provider value={{
        profile,
        isAuthenticated,
        auth: this.auth,
        signin: this.signin,
        signout: this.signout,
      }}>
        {children}
      </AuthContext.Provider>
    );
  }
}

AuthProviderComp.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.element,
    PropTypes.array,
    PropTypes.func
  ])
};

export function withAuth(WrappedComponent) {
  return class WithAuthComponent extends Component {
    render() {
      return (
        <AuthContext.Consumer>
          {value => (
            <WrappedComponent auth={value} {...this.props} />
          )}
        </AuthContext.Consumer>
      );
    }
  };
}

export const AuthProvider = withRouter(AuthProviderComp);
export const authProps = {
  profile: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  auth: PropTypes.object,
  signin: PropTypes.func,
  signout: PropTypes.func
};