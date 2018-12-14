import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link as RRLink } from 'react-router-dom';

const Link = styled('a')`
    text-decoration: none;
    background-color: rgba(0,0,0,0);
    border: none;
    color: ${p => {
        const { invert, inactive, theme: { text: { colors } } } = p;
        if (invert) {
            return inactive ? colors.on_fg_inactive : colors.on_fg;
        }
        return inactive ? colors.on_bg_inactive : colors.on_bg;
    }};
    font-size: ${p => p.size || p.theme.text.size.p};
    font-family: ${p => p.theme.fonts.family};
    font-weight: ${p => p.highlighted ? p.theme.text.weight.p_bold : p.theme.text.weight.p};

    &:hover {
        cursor: pointer;
        color: ${p => {
            const { highlighted, invert, theme: { text: { colors } } } = p;
            if (highlighted) return invert ? colors.on_fg : colors.on_bg;
            return invert ? colors.on_fg_hover : colors.on_bg_hover;
        }};
    }
`;

const RouterLink = Link.withComponent(RRLink);

const ButtonLink = Link.withComponent('button');

Link.propTypes = {
    invert: PropTypes.bool,
    size: PropTypes.string,
    inactive: PropTypes.bool,
};

export { Link, RouterLink, ButtonLink };