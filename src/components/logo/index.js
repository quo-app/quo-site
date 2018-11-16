import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion'
// Statics
import logoFore from '../../static/logo/logo-foreground.svg';
import logoForeText from '../../static/logo/logo-text-foreground.svg';
import logoPrimary from '../../static/logo/logo-primary.svg';
import logoPrimaryText from '../../static/logo/logo-text-primary.svg';

function Logo({ withText, primary, ...rest }) {
    function determineLogo() {
        if (primary) {
            if (withText) return logoPrimaryText;
            return logoPrimary
        }
        if (withText) return logoForeText;
        return logoFore;
    }
    return (
        <LogoStyled
            src={determineLogo()}
            {...rest}
        />
    )
}

Logo.propTypes = {
    withText: PropTypes.bool,
    primary: PropTypes.bool
}

const LogoStyled = styled('img')`
    height: ${p => p.height || '40px'};
    width: ${p => p.width || '40px'};
    padding: ${p => p.padding || '0em'};
    margin: ${p => p.margin || '0em'};
`;

export default Logo