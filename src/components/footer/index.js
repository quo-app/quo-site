import React from 'react';
import styled from 'react-emotion'
// components
import Logo from '../logo';
import { RouterLink } from '../typography/link';
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
                            invert
                            display='inline-block'    
                        />
                        {links.map(link => <RouterLink invert key={link.url} to={link.url}>{link.label}</RouterLink>)}
                    </div>
                    <div></div>
                </FooterContent>
                <FooterBottomBar>
                    <p>&#169; 2018 Quo Group</p>
                    <div>
                        <RouterLink invert to='/'>Terms of Use</RouterLink>
                        <RouterLink invert to='/'>Privacy Policy</RouterLink>
                    </div>
                    <p>United States - English</p>
                </FooterBottomBar>
            </div>
        </FooterStyled>
    );
}

const FooterStyled = styled('footer')`
    width: 100%;
    background-color: ${p => p.theme.colors.fg};
    color: ${p => p.theme.text.colors.on_fg};
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

        a {
            margin-left: 1em;
        }
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