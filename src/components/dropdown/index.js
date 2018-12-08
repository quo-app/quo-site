import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
// Components
import { List, ListItem } from '../list';

function Dropdown({ open, items, onClick, coord }) {
    return (
        <>
            {open && (
                <DropdownStyled coord={coord}>
                    <List block>
                        {items.map(item => (
                            <ListItem
                                key={item.id}
                                onClick={() => onClick(item.id)}
                            >
                                {item.label}
                            </ListItem>
                        ))}
                    </List>
                </DropdownStyled>
            )}
        </>
    );
}

Dropdown.propTypes = {
    open: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        id: PropTypes.string
    })).isRequired,
    onClick: PropTypes.func,
    coord: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
    }),
}

Dropdown.defaultProps = {
    onClick: () => {},
    coord: { x: 0, y: 0 },
}

const DropdownStyled = styled('div')`
    position: absolute;
    top: ${p => p.coord.y};
    left: ${p => p.coord.x};
    min-width: ${p => p.theme.sizes.w.dropdown + p.theme.sizes.unit};
    border-radius: ${p => p.theme.sizes.radius + p.theme.sizes.unit};
    background-color: ${p => p.theme.colors.grey};
    padding: 0em .25em;
`;

export default Dropdown;