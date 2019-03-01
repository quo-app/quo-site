import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
// Components
import { H1 } from '../../components/typography/headings';
import Card, { CardList, NewCard } from '../../components/card';

const testCards = [
    { title: 'Test card with a pretty long name that will get cut', href: 'google.com', length: '2 pages' }
];

class Account extends Component {
    state = {};

    render() {
        const { authenticated, profile } = this.props;
        if (!authenticated) {
            return (
                <AccountStyled>
                    <H1 size='1.75rem'>Make sure you are authenticated</H1>
                </AccountStyled>
            );
        }
        return (
            <AccountStyled>
                <H1 size='1.75rem'>Hi, {profile.displayName}</H1>
                <CardList>
                    <NewCard />
                    {testCards.map(card => <Card {...card} key={card.title} id={card.title} />)}
                </CardList>
                <Background />
            </AccountStyled>
        );
    }
}

Account.propTypes = {
    authenticated: PropTypes.bool,
    profile: PropTypes.object
};

// Hacky :P
const Background = styled('span')`
    position: absolute;
    box-sizing: border-box;
    overflow: hidden;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: #2c2c2c;
    z-index: -1;
`;

const AccountStyled = styled('section')`
    width: ${p => p.theme.sizes.w.page + p.theme.sizes.unit};
    margin: 0 auto;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    padding-bottom: 2em;

    p {
        width: 80%;
    }

    .buttons {
        display: flex;
        flex-direction: column;
        margin-top: 2.5em;
    }
`;

export default Account;