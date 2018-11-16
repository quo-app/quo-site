import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion'

function Footer() {
    return (
        <FooterStyled>

        </FooterStyled>
    );
}

const FooterStyled = styled('footer')`
    background-color: ${p => p.theme.colors.foreground};
    color: ${p => p.theme.colors.background};
`;

export default Footer;