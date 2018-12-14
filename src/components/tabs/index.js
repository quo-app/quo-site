import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { withRouter } from 'react-router-dom';
// Components
import { RouterLink } from '../typography/link';

function Tabs({ location, children }) {
    return (
        <TabContainer>
            {
                React.Children.map(children, child => {
                    return React.cloneElement(child, {
                        activetab: location.pathname
                    });
                })
            }
        </TabContainer>
    );
}

Tabs.propTypes = {
    location: PropTypes.object,
    children: PropTypes.oneOf([ PropTypes.array, PropTypes.element, PropTypes.func ])
};

const TabContainer = styled('div')`
    a {
        padding-right: 1.25em;
    }
`;

function TabLink({ to, children, activetab, ...rest }) {
    const active = activetab === to;
    return (
        <RouterLink
            to={to}
            inactive={!active}
            size='1rem'
            {...rest}
        >
            {children}
        </RouterLink>
    );
}

TabLink.propTypes = {
    children: PropTypes.string,
    activetab: PropTypes.string
};

export default withRouter(Tabs);
export { TabLink };