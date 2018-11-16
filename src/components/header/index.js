import React from 'react';
import styled from 'react-emotion';
// Components
import Button, { ButtonLink } from '../button';
import Logo from '../logo';

const HEADER_LINKS = [
    { label: 'Features', route: '' },
    { label: 'Learn', route: '' },
    { label: 'Support', route: '' },
    { label: 'About', route: '' },
    { label: 'Gallery', route: '' },
    { label: 'Careers', route: '' },
]

function Header() {
    return (
        <HeaderStyled>
            <Logo withText />
            <Button>Features</Button>
            <ButtonLink primary>Features</ButtonLink>
        </HeaderStyled>
    );
}

const HeaderStyled = styled('nav')`
    width: 100%;
`;

export default Header;