import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

function Button({ children, ...rest }) {
    return (
        <ButtonStyled {...rest}>
            {children}
        </ButtonStyled>
    );
}

function ButtonLink({ children, ...rest }) {
    return (
        <ButtonLinkStyled {...rest}>
            {children}
        </ButtonLinkStyled>
    );
}

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    onClick: PropTypes.func,
    primary: PropTypes.bool,
    transparent: PropTypes.bool,
    fullwidth: PropTypes.bool,
    large: PropTypes.bool,
    margin: PropTypes.string,
    padding: PropTypes.string,
    fontSize: PropTypes.string
}

const ButtonStyled = styled('button')`
    display: block;
    text-decoration: none;
    text-align: center;
    border: none;
    background-color: ${p => {
        const { primary, transparent, invert, theme: { button } } = p;
        if (primary) return button.colors.bg_primary;
        if (transparent) return 'rgba(0,0,0,0)';
        return invert ? button.colors.bg_on_fg : button.colors.bg_on_bg;
    }};
    color: ${p => p.invert ? p.theme.text.colors.on_fg : p.theme.text.colors.on_bg};
    font-family: ${p => p.theme.fonts.family};
    font-size: ${p => p.fontSize || p.large ? '1.2rem' : '.9rem'};
    border-radius: ${p => p.theme.sizes.radius + p.theme.sizes.unit};
    padding: ${p => p.large ? '.75em 3em' : '.25em .75em'};
    margin: ${p => p.margin || '0em'};
    width: ${p => p.fullwidth ? '100%' : ''};
    
    &:hover {
        cursor: pointer;
        background-color: ${p => {
            const { invert, primary, theme: { button: { colors } } } = p;
            if (primary) return colors.bg_primary;
            return invert ? colors.bg_on_fg_hover : colors.bg_on_bg_hover;
        }};
    }
`;
// TODO: once you add react-router change this to a Link
const ButtonLinkStyled = ButtonStyled.withComponent('a');

export default Button;
export { ButtonLink };
