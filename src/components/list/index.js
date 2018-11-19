import React from 'react';
import styled from 'react-emotion';
// components

const List = styled('ul')`
    padding: 0em;
    margin: 0em;
    list-style: none;
`;

const ListTitle = styled('h1')`
    font-size: .85em;
    font-family: ${p => p.theme.fonts.family};
    font-weight: 700;
    color: ${p => p.theme.colors.background};
    margin: 0em 0em .25em 0em;
`;

const ListItem = styled('li')`
    font-size: .85em;
    font-family: ${p => p.theme.fonts.family};
    color: ${p => p.theme.colors.background};
    padding: .25em 0em;
`;

export { 
    List,
    ListTitle,
    ListItem,
};