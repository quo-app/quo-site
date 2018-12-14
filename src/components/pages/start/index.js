import React from 'react';
import styled from 'react-emotion';
// Components
import { ButtonLink as Button } from '../../button';
import { H1 } from '../../typography/headings';
import { P } from '../../typography';

function Start() {
    return (
        <StartStyled>
            <H1 margin='1em 0em 0em'>Enter a new world</H1>
            <P size='2rem'>Say hello to the digital design space where the only limits are your imagination.</P>
            <div className='buttons'>
                <Button
                    primary
                    large
                    margin='0em 0em 1em 0em'
                >
                    Try the Quo sandbox
                </Button>
                <Button large>Sign up</Button>
            </div>
        </StartStyled>
    )
}

const StartStyled = styled('section')`
    width: 800px;
    margin: 0 auto;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    p {
        width: 80%;
    }

    .buttons {
        display: flex;
        flex-direction: column;
        margin-top: 2.5em;
    }
`;

export default Start;