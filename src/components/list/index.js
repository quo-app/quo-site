import styled from 'react-emotion';

const List = styled('ul')`
    padding: 0em;
    margin: 0em;
    list-style: none;

    ${p => p.block ? `
        li {
            padding: .35em .75em;
            margin: .25em 0em;
            border-radius: ${p.theme.sizes.radius + p.theme.sizes.unit};

            &:hover {
                cursor: pointer;
                background-color: rgba(255, 255, 255, .05);
            }
        }
    ` : ''}

    ${p => p.invert ? `
        h1 { color: ${p.theme.colors.background}; }

        li { color: ${p.theme.colors.background}; }
    ` : `
        h1 { color: ${p.theme.colors.foreground}; }

        li { color: ${p.theme.colors.foreground}; }
    `}
`;

const ListTitle = styled('h1')`
    font-size: .95em;
    font-family: ${p => p.theme.fonts.family};
    font-weight: 700;
    margin: 0em 0em .25em 0em;
`;

const ListItem = styled('li')`
    font-size: .95em;
    font-family: ${p => p.theme.fonts.family};
    padding: .25em 0em;
`;

export { 
    List,
    ListTitle,
    ListItem,
};