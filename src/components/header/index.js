import React, { Component } from 'react';
import styled from 'react-emotion';
// Components
import Button, { ButtonLink } from '../button';
import Logo from '../logo';

const HEADER_LINKS = [
    { label: 'Features', route: '' },
    { label: 'Learn', route: '' },
    { label: 'Support', route: '' },
    { label: 'About', route: '' },
    { label: 'Gallery', route: '' },
    { label: 'Careers', route: '' },
]

class Header extends Component {
    state = { scrolled: false }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {
        const pos = window.scrollY;
        if (!this.state.scrolled && pos > 20) {
            console.log('fire start')
            return this.setState(() => ({ scrolled: true }));
        }
        if (this.state.scrolled && pos < 20) {
            console.log('fire end');
            return this.setState(() => ({ scrolled: false }));
        }
    }

    render() {
        return (
            <HeaderStyled scrolled={this.state.scrolled}>
                <div className='container'>
                    <section>
                        <Logo withText dark={this.state.scrolled} />
                    </section>
                    <section>
                        {HEADER_LINKS.map(link => (
                            <NavLink
                                key={link.route}
                                to={link.route}
                                invert={this.state.scrolled}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </section>
                    <section>
                        <SpacedButton primary>Try the sandbox</SpacedButton>
                        <SpacedButton>Log in</SpacedButton>
                        <SpacedButton>Sign up</SpacedButton>
                    </section>
                </div>
            </HeaderStyled>
        );
    }
}

const HeaderStyled = styled('nav')`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1em 0em;
    background-color: ${p => p.scrolled ? p.theme.colors.foreground : p.theme.colors.background};

    transition: background-color .5s ease;

    .container {
        width: ${p => p.theme.sizes.w.page + p.theme.sizes.unit};
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
`;

function SpacedButton({ children, ...rest }) {
    return <Button margin='0em 0em 0em .5em' {...rest}>{children}</Button>;
}

function NavLink({ children, ...rest}) {
    return <ButtonLink margin='0em .5em' transparent {...rest}>{children}</ButtonLink>;
}

export default Header;