import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';

function Button({ children, ...rest }) {
    return (
        <ButtonStyled {...rest}>
            {children}
        </ButtonStyled>
    );
}

function ButtonLink({ children, to, href, ...rest }) {
    if (to !== undefined) {
        return (<ButtonLinkStyled to={to} {...rest}>{children}</ButtonLinkStyled>);
    }
    return (<ButtonAStyled href={href} {...rest}>{children}</ButtonAStyled>);
}

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    active: PropTypes.bool,
    color: PropTypes.string,
    hoverColor: PropTypes.string,
    activeColor: PropTypes.string,
    onClick: PropTypes.func,
    primary: PropTypes.bool,
    transparent: PropTypes.bool,
    fullwidth: PropTypes.bool,
    large: PropTypes.bool,
    margin: PropTypes.string,
    padding: PropTypes.string,
    fontSize: PropTypes.string
};

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
    color: ${p => {
        if (p.active) {
            if (p.activeColor) return p.activeColor;
        }
        if (p.color) return p.color;
        if (p.invert) return p.theme.text.colors.on_fg;
        return p.theme.text.colors.on_bg;
    }};
    font-family: ${p => p.theme.fonts.family};
    font-size: ${p => {
        return p.fontSize
            ? p.fontSize
            : p.large ? '1.2rem' : '.9rem';
    }};
    border-radius: ${p => p.theme.sizes.radius + p.theme.sizes.unit};
    padding: ${p => p.large ? '.75em 3em' : '.25em .75em'};
    margin: ${p => p.margin || '0em'};
    width: ${p => p.fullwidth ? '100%' : ''};
    
    &:hover {
        cursor: pointer;
        color: ${p => p.transparent
            ? '#686868'
            : p.invert ? p.theme.text.colors.on_fg : p.theme.text.colors.on_bg
        };
        background-color: ${p => {
            const { invert, transparent, primary, theme: { button: { colors } } } = p;
            if (primary) return colors.bg_primary;
            if (transparent) return 'rgba(0,0,0,0)';
            return invert ? colors.bg_on_fg_hover : colors.bg_on_bg_hover;
        }};
    }
`;
// TODO: once you add react-router change this to a Link
const ButtonAStyled = ButtonStyled.withComponent('a');
const ButtonLinkStyled = ButtonStyled.withComponent(Link);

export default Button;
export { ButtonLink };
