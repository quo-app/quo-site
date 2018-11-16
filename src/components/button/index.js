import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

function Button({ children, ...rest }) {
    return (
        <ButtonStyled {...rest} >
            {children}
        </ButtonStyled>
    )
}

function ButtonLink({ children, ...rest }) {
    return (
        <ButtonLinkStyled {...rest}>
            {children}
        </ButtonLinkStyled>
    )
}

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    onClick: PropTypes.func,
    primary: PropTypes.bool,
    transparent: PropTypes.bool,
}

const ButtonStyled = styled('button')`
    background-color: ${p => {
        if (p.primary) return p.theme.colors.primary;
        if (p.transparent) return 'rgba(0,0,0,0)';
        return p.theme.colors.grey;
    }};
    color: ${p => p.theme.colors.foreground};
    font-family: ${p => p.theme.fonts.family};
    font-size: ${p => p.fontSize || '.9rem'};
    text-decoration: none;
    border: none;
    border-radius: 6px;
    padding: .25em .75em;

    &:hover {
        cursor: pointer;
    }
`;
// TODO: once you add react-router change this to a Link
const ButtonLinkStyled = ButtonStyled.withComponent('a');

export default Button;
export { ButtonLink }
