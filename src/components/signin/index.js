import React, { Component } from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
// Components
import Flex from '../flex';
import Logo from '../logo';
import Button from '../button';
import { P } from '../typography';
import { H3 } from '../typography/headings';
import { ButtonLink as Link } from '../typography/link';
// Utils
import { withAuth } from '../../utils/auth';
// Variables
import { modes } from '../../config/globals';
const signin = {
    title: 'Get back to creating',
    subtitle: 'Sign in to access your projects and workspace just the way you left them',
    call: 'New to Quo?',
    link: 'Sign up',
    altMode: modes.signup
};
const signup = {
    title: 'Get started with Quo',
    subtitle: 'Create an account to save your projects, personalize your workspace, and more.',
    call: 'Returning to Quo?',
    link: 'Sign in',
    altMode: modes.signin
};

class Signin extends Component {
    state = {
        authenticated: false,
        mode: modes.signup,
        text: signup,
        user: undefined
    };

    componentDidMount() {
        this.setMode(this.props.mode);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.mode !== this.props.mode) {
            this.setMode(this.props.mode);
        }
    }

    setMode = (mode) => {
        if (mode === modes.signin) {
            return this.setState({ mode: modes.signin, text: signin });
        }
        return this.setState({ mode: modes.signup, text: signup });
    };

    render() {
        const { auth, onClose, ...rest } = this.props;
        const { text } = this.state;
        
        return (
            <SigninModal {...rest}>
                <SigninHeader>
                    <Logo withText />
                    <Button onClick={onClose}>Close</Button>
                </SigninHeader>
                <SigninContent>
                    <H3 size='3rem'>{text.title}</H3>
                    <P size='1.2rem'>{text.subtitle}</P>
                    <button onClick={auth.signin}>{text.link}</button>
                    {/* <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={auth} /> */}
                    <Flex justify='center' align='center'>
                        <P>{text.call}</P>
                        <Link
                            highlighted
                            onClick={() => this.setMode(text.altMode)}
                        >
                            {text.link}
                        </Link>
                    </Flex>
                </SigninContent>
            </SigninModal>
        );
    }
}

Signin.propTypes = {
    auth: PropTypes.object,
    mode: PropTypes.oneOf([modes.signup, modes.signin]),
    onClose: PropTypes.func
};

const SigninModal = styled('div')`
    background-color: ${p => p.theme.colors.bg};
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
`;

const SigninContent = styled('div')`
    width: ${p => p.theme.sizes.w.page + p.theme.sizes.unit};
    height: calc(100% - ${p => p.theme.sizes.h.header + p.theme.sizes.unit});
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SigninHeader = styled('header')`
    width: ${p => p.theme.sizes.w.page + p.theme.sizes.unit};
    height: ${p => p.theme.sizes.h.header + p.theme.sizes.unit};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default withAuth(Signin);