import React, { Component } from 'react';
import styled from 'react-emotion';
import { Spring, config } from 'react-spring';

class Slider extends Component {
    state = {
        from: 0,
        to: 100,
        current: ''
    }

    componentDidMount() {
        const { tabs, start = 0 } = this.props;
        this.setState({
            from: start * 100,
            to: start * 100,
            current: tabs[start]
        });
    }

    handleClick = (tab, index) => {
        this.setState(prevState => ({
            from: prevState.to,
            to: index * 100,
            current: tab
        }), () => {
            this.props.onChange(tab, index);
        });
    }

    render() {
        const { tabs, light } = this.props;
        const { from, to, current } = this.state;
        return (
            <SliderStyled length={tabs.length} light={light}>
                <Spring
                    from={{ left: from }}
                    to={{ left: to }}
                    config={{ tension: 250, friction: 20, precision: 8, clamp: true }}
                >
                    {props => <SliderTab style={props} light={light}>{current}</SliderTab>}
                </Spring>
                {
                    tabs.map((tab, index) => (
                        <Tab
                            key={tab}
                            onClick={() => this.handleClick(tab, index)}
                            light={light}
                        >
                            {tab}
                        </Tab>
                    ))
                }
            </SliderStyled>
        );
    }
}

const SliderStyled = styled('div')`
    width: ${p => p.length * 100}px;
    display: grid;
    grid-template-columns: repeat(${p => p.length}, 100px);
    background-color: ${p => p.light ? p.theme.colors.greyLight : p.theme.colors.grey};
    position: relative;
    border-radius: ${p => p.theme.sizes.radius + p.theme.sizes.unit};

    transition: background-color .5s ease;
`;

const SliderTab = styled('div')`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${p => p.light ? p.theme.colors.primary : p.theme.colors.foreground};
    height: 30px;
    width: 100px;
    border-radius: ${p => p.theme.sizes.radius + p.theme.sizes.unit};
    z-index: 2;
    color: ${p => p.light ? p.theme.colors.foreground : p.theme.colors.background};
    font-family: ${p => p.theme.fonts.family};

    transition: background-color .5s ease, color .25s ease;
`;

const Tab = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 100%;
    font-family: ${p => p.theme.fonts.family};

    &:hover {
        cursor: pointer;
    }
`;

export default Slider;