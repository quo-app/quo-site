import React from 'react';
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
    };
    
    return ComponentWithTheme;
}

export default withTheme;