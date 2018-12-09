import React, { Component } from 'react';
import styled from 'react-emotion';
import { withRouter } from 'react-router-dom';
// Components
import Slider from '../slider';
import Button, { ButtonLink } from '../button';
import Logo from '../logo';

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

    onTabChange = (tab, index) => {
        const { history, tabs} = this.props;
        history.push(tabs[index].route);
    }

    render() {
        const { tabs, start } = this.props;
        return (
            <HeaderStyled scrolled={this.state.scrolled}>
                <div className='container'>
                    <Logo withText light={this.state.scrolled} />
                    <FlexSection>
                        <Slider
                            tabs={tabs.map(t => t.label)}
                            start={start}
                            onChange={this.onTabChange}
                            light={this.state.scrolled}
                        />
                    </FlexSection>
                </div>
            </HeaderStyled>
        );
    }
}

const HeaderStyled = styled('nav')`
    width: 100%;
    max-height: ${p => p.theme.sizes.h.header + p.theme.sizes.unit};
    position: fixed;
    top: 0;
    left: 0;
    padding: 1em 0em;
    background-color: ${p => p.scrolled ? p.theme.colors.foreground : p.theme.colors.background};

    transition: background-color .5s ease;

    .container {
        width: ${p => p.theme.sizes.w.page + p.theme.sizes.unit};
        height: 30px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        @media screen and (max-width: 960px) {
            width: 100%;
            padding: 0em 1em;
        }
    }
`;

function SpacedButton({ children, ...rest }) {
    return <Button margin='0em 0em 0em .5em' {...rest}>{children}</Button>;
}

function NavLink({ children, ...rest}) {
    return <ButtonLink margin='0em .5em' transparent {...rest}>{children}</ButtonLink>;
}

const FlexSection = styled('section')`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export default withRouter(Header);