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

    handleClick(tab, index) {
        this.setState(prevState => ({
            from: prevState.to,
            to: index * 100,
            current: tab
        }));
    }

    render() {
        const { tabs } = this.props;
        const { from, to, current } = this.state;
        return (
            <SliderStyled length={tabs.length}>
                <Spring
                    from={{ left: from }}
                    to={{ left: to }}
                >
                    {props => <SliderTab style={props}>{current}</SliderTab>}
                </Spring>
                {
                    tabs.map((tab, index) => (
                        <Tab
                            key={tab}
                            onClick={() => this.handleClick(tab, index)}
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
    background-color: ${p => p.theme.colors.grey};
    position: relative;
    border-radius: 4px;
`;

const SliderTab = styled('div')`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 30px;
    width: 100px;
    border-radius: 4px;
    z-index: 2;
    color: ${p => p.theme.colors.background};
    font-family: ${p => p.theme.fonts.family};
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