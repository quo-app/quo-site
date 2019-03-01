import React, { Component } from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// Components
import Button, { ButtonLink } from '../button';
import Tabs, { TabLink } from '../tabs';
import Logo from '../logo';
// Variables
import { modes } from '../../config/globals';
const tabs = [
    { label: 'Start', route: '/' },
    { label: 'Learn', route: '/learn' },
];

class Header extends Component {
    state = { scrolled: false };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const pos = window.scrollY;
        if (!this.state.scrolled && pos > 20) {
            return this.setState(() => ({ scrolled: true }));
        }
        if (this.state.scrolled && pos < 20) {
            return this.setState(() => ({ scrolled: false }));
        }
    };

    onTabChange = (tab, index) => {
        const { history, tabs } = this.props;
        history.push(tabs[index].route);
    };

    render() {
        const { signinAction, authenticated, profile } = this.props;
        return (
            <HeaderStyled scrolled={this.state.scrolled}>
                <div className='container'>
                    <Logo withText invert={this.state.scrolled} />
                    <FlexSection>
                        <Tabs>
                            {
                                tabs.map(tab => (
                                    <TabLink
                                        to={tab.route}
                                        invert={this.state.scrolled}
                                        key={tab.route}
                                    >
                                        {tab.label}
                                    </TabLink>
                                ))
                            }
                        </Tabs>
                    </FlexSection>
                    <FlexSection justify='flex-end'>
                        {
                            authenticated ? (
                                <ButtonLink
                                    invert={this.state.scrolled}
                                    to='/account'
                                >
                                    {profile.displayName}
                                </ButtonLink>
                            ) : (
                                    <Button
                                        invert={this.state.scrolled}
                                        onClick={() => signinAction(modes.signin)}
                                    >
                                        Sign in
                                </Button>
                                )
                        }
                    </FlexSection>
                </div>
            </HeaderStyled>
        );
    }
}

Header.propTypes = {
    tabs: PropTypes.array.isRequired,
    history: PropTypes.object,
    signinAction: PropTypes.func,
    authenticated: PropTypes.bool,
    profile: PropTypes.object
};

const HeaderStyled = styled('nav')`
    width: 100%;
    max-height: ${p => p.theme.sizes.h.header + p.theme.sizes.unit};
    position: fixed;
    top: 0;
    left: 0;
    padding: 1em 0em;
    background-color: ${p => p.scrolled ? p.theme.colors.fg : p.theme.colors.bg};

    transition: background-color .5s ease;

    .container {
        width: ${p => p.theme.sizes.w.page + p.theme.sizes.unit};
        height: 30px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        @media screen and (max-width: 960px) {
            width: 100%;
            padding: 0em 1em;
        }
    }
`;

const FlexSection = styled('section')`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: ${p => p.justify || 'center'};
`;

export default withRouter(Header);