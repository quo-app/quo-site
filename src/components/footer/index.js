import React from 'react';
import styled from 'react-emotion'
// components
import Logo from '../logo';
import { ButtonLink as Link } from '../button';
// variables
const links = [{
    label: 'Features',
    url: '/features'
}, {
    label: 'Support',
    url: '/support'
}, {
    label: 'Company',
    url: '/company'
}, {
    label: 'Careers',
    url: '/careers'
}];

function Footer() {
    return (
        <FooterStyled>
            <div className='content'>
                <FooterContent>
                    <div className='content-spacer'>
                        <Logo
                            withText
                            light
                            display='inline-block'    
                        />
                        {links.map(link => <a key={link} href={link.url}>{link.label}</a>)}
                    </div>
                    <div></div>
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

        @media screen and (max-width: 960px) {
            width: 100%;
            max-width: 100%;
            margin: 0em;
            padding: 0em 1em;
        }
    }
`;

const FooterContent = styled('div')`
    padding-bottom: 1em;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 960px) {
        flex-direction: column;
    }

    .content-spacer {
        display: flex;
        align-items: center;
    }

    a {
        display: inline;
        margin-left: 2em;
        font-family: ${p => p.theme.fonts.family};
        color: ${p => p.theme.colors.background};
        text-decoration: none;
    }
`;

const FooterBottomBar = styled('div')`
    width: 100%;
    border-top: 1px solid #ddd;
    padding: .75em 0em 0em;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    @media screen and (max-width: 960px) {
        flex-wrap: wrap;
    }

    p {
        font-size: .85rem;
        font-family: ${p => p.theme.fonts.family};
        margin: 0em;
    }
`;

export default Footer;