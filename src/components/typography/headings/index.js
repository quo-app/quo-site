import styled from 'react-emotion';
import PropTypes from 'prop-types';

const HeadingPropTypes = {
    size: PropTypes.string,
    primary: PropTypes.bool,
    invert: PropTypes.bool,
    margin: PropTypes.string,
};

// Heading 1
const H1 = styled('h1')`
    font-size: ${p => p.size || p.theme.text.size.h1};
    font-family: ${p => p.theme.fonts.family};
    font-weight: ${p => p.theme.text.weight.h1};
    color: ${p => {
        const { primary, invert, theme: { text: { colors } } } = p;
        if (primary) return colors.primary;
        return invert ? colors.on_fg : colors.on_bg;
    }};
    margin: ${p => p.margin || p.theme.text.margins.h1};
`;

H1.propTypes = HeadingPropTypes;

// Heading 2
const H2 = styled('h2')`
    font-size: ${p => p.size || p.theme.text.size.h2};
    font-family: ${p => p.theme.fonts.family};
    font-weight: ${p => p.theme.text.weight.h2};
    color: ${p => {
        const { primary, invert, theme: { text: { colors } } } = p;
        if (primary) return colors.primary;
        return invert ? colors.on_fg : colors.on_bg;
    }};
    margin: ${p => p.margin || p.theme.text.margins.h2};
`;

H2.propTypes = HeadingPropTypes;

// Heading 3
const H3 = styled('h3')`
    font-size: ${p => p.size || p.theme.text.size.h3};
    font-family: ${p => p.theme.fonts.family};
    font-weight: ${p => p.theme.text.weight.h3};
    color: ${p => {
        const { primary, invert, theme: { text: { colors } } } = p;
        if (primary) return colors.primary;
        return invert ? colors.on_fg : colors.on_bg;
    }};
    margin: ${p => p.margin || p.theme.text.margins.h3};
`;

H1.propTypes = HeadingPropTypes;

// Heading 4
const H4 = styled('h5')`
    font-size: ${p => p.size || p.theme.text.size.h5};
    font-family: ${p => p.theme.fonts.family};
    font-weight: ${p => p.theme.text.weight.h5};
    color: ${p => {
        const { primary, invert, theme: { text: { colors } } } = p;
        if (primary) return colors.primary;
        return invert ? colors.on_fg : colors.on_bg;
    }};
    margin: ${p => p.margin || p.theme.text.margins.h4};
`;

H4.propTypes = HeadingPropTypes;

// Heading 5
const H5 = styled('h5')`
    font-size: ${p => p.size || p.theme.text.size.h5};
    font-family: ${p => p.theme.fonts.family};
    font-weight: ${p => p.theme.text.weight.h5};
    color: ${p => {
        const { primary, invert, theme: { text: { colors } } } = p;
        if (primary) return colors.primary;
        return invert ? colors.on_fg : colors.on_bg;
    }};
    margin: ${p => p.margin || p.theme.text.margins.h5};
`;

H5.propTypes = HeadingPropTypes;

export { H1, H2, H3, H4, H5 };