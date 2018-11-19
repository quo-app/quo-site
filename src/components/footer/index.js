import React from 'react';
import styled from 'react-emotion'
// components
import Logo from '../logo';
import { ButtonLink as Link } from '../button';
import { List, ListTitle, ListItem } from '../list';
// variables
const lists = [
    { title: 'Learn', items: [
        { label: 'Videos' },
        { label: 'Shortcuts' },
    ]},
    { title: 'Support', items: [
        { label: 'Forum' },
        { label: 'Help' },
    ]},
    { title: 'Features', items: [
        { label: 'Edit' },
        { label: 'Links' },
        { label: 'Docks' },
        { label: 'Preview' },
        { label: 'Sharing' },
    ]},
    { title: 'About', items: [
        { label: 'Company' },
        { label: 'Careers' },
        { label: 'Blog' },
        { label: 'Help' },
    ]},
]

function Footer() {
    return (
        <FooterStyled>
            <div className='content'>
                <FooterContent>
                    <Logo withText dark />
                    <div className='link-lists'>
                        {
                            lists.map(list => (
                                <List key={list.title}>
                                    <ListTitle>{list.title}</ListTitle>
                                    { list.items.map(item => <ListItem key={item.label}>{item.label}</ListItem>)}
                                </List>
                            ))
                        }
                    </div>
                    <div>

                    </div>
                </FooterContent>
                <FooterBottomBar>
                    <p>&#169; 2018 Quo Group</p>
                    <div>
                        <Link transparent invert>Terms of Use</Link>
                        <Link transparent invert>Privacy Policy</Link>
                    </div>
                    <p>United States - English</p>
                </FooterBottomBar>
            </div>
        </FooterStyled>
    );
}

const FooterStyled = styled('footer')`
    width: 100%;
    background-color: ${p => p.theme.colors.foreground};
    color: ${p => p.theme.colors.background};
    padding: 1em 0em;

    .content {
        width: ${p => p.theme.sizes.w.page + p.theme.sizes.unit};
        margin: 0 auto;
    }
`;

const FooterContent = styled('div')`
    padding-bottom: 1em;
    display: flex;
    justify-content: space-between;

    .link-lists {
        display: flex;

        ul {
            margin: 0em 2em;
        }
    }
`;

const FooterBottomBar = styled('div')`
    width: 100%;
    border-top: 1px solid #ddd;
    padding: .75em 0em 0em;
    display: flex;
    justify-content: space-between;

    p {
        font-size: .85rem;
        font-family: ${p => p.theme.fonts.family};
        margin: 0em;
    }
`;

export default Footer;