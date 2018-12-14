import styled from 'react-emotion';
import PropTypes from 'prop-types';

const P = styled('p')`
    font-size: ${p => p.size || p.theme.text.size.p};
    font-family: ${p => p.theme.fonts.family};
    font-weight: ${p => p.theme.text.weight.p};
    color: ${p => {
        const { primary, invert, theme: { text: { colors } } } = p;
        if (primary) return colors.primary;
        return invert ? colors.on_fg : colors.on_bg;
    }};
    margin: ${p => p.margin || p.theme.text.margins.p};
`;

P.propTypes = {
    size: PropTypes.string,
    primary: PropTypes.bool,
    invert: PropTypes.bool,
    margin: PropTypes.string,
};

export { P };