import React from 'react';
import styled from 'react-emotion';
// Components
import { ButtonLink as Button } from '../../button';

function Start() {
    return (
        <StartStyled>
            <h1>Enter a new world</h1>
            <p>Say hello to the digital design space where the only limits are your imagination.</p>
            <div className='buttons'>
                <Button
                    primary
                    large
                    margin='0em 0em 1em 0em'
                >
                    Try the sandbox
                </Button>
                <Button primary large>Enter the Quo Builder</Button>
            </div>
        </StartStyled>
    )
}

const StartStyled = styled('section')`
    width: ${p => p.theme.sizes.w.page + p.theme.sizes.unit};
    margin: 0 auto;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1,
    p {
        color: ${p => p.theme.colors.foreground};
        font-family: ${p => p.theme.fonts.family};
    }

    h1 {
        font-size: 6rem;
        margin: 1em 0em 0em;
    }

    p {
        font-size: 1.75rem;
        margin: 0;
        width: 50%;
        text-align: center;
    }

    .buttons {
        margin: 3em 0em;
        display: flex;
        flex-direction: column;
    }
`;

export default Start;