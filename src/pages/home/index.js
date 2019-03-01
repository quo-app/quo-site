import React, { Component } from 'react';
import { Transition } from 'react-spring';
import styled from 'react-emotion';
import { Switch, Route } from 'react-router-dom';
// Components
import Signin from '../../components/signin';
import Header from '../../components/header';
import Start from './content';
import Footer from '../../components/footer';
// Utils
import { withAuth, authProps } from '../../utils/auth';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        modal: false,
        mode: ''
      }
    };
  }

  toggleModal = () => {
    this.setState(prev => ({
      login: {
        ...prev.login,
        modal: !prev.login.modal
      }
    }));
  };

  render() {
    const {
      login: {
        modal
      }
    } = this.state;
    const {
      auth: {
        isAuthenticated,
        profile
      }
    } = this.props;

    return (
      <HomeStyled>
        <Header
          signinAction={this.toggleModal}
          authenticated={isAuthenticated}
          profile={profile}
        />
        <Switch>
          <Route exact path='/' component={Start} />
          <Route path='/learn' render={() => <h1>Learn</h1>} />
        </Switch>
        <Footer />
        <Transition
          items={modal}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opactiy: 0 }}
        >
          {show => show && (props =>
            <Signin
              style={props}
              onClose={this.toggleModal}
            />
          )}
        </Transition>
      </HomeStyled>
    );
  }
}

Home.propTypes = {
  ...authProps
};

const HomeStyled = styled('div')`
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
`;

export default withAuth(Home);