import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
// Config
import theme from '../../config/theme';

function withTheme(WrappedComponent) {
    const ComponentWithTheme = (props) => {
        return (
            <ThemeProvider theme={theme}>
                <WrappedComponent {...props}/>
            </ThemeProvider>
        );
    }
    ComponentWithTheme.propTypes = { WrappedComponent: PropTypes.element.isRequired };
    
    return ComponentWithTheme;
}

export default withTheme;