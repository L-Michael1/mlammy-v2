import React from 'react'
import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

type typewriterProps = {
    text: string,
    textAlign: string,
    minTypeSpeed: number,
    maxTypeSpeed: number,
    initDelay: number,
}

const Typewriter = ({ text, textAlign, minTypeSpeed, maxTypeSpeed, initDelay }: typewriterProps) => {

    const Containter = styled.div`
        text-align: ${textAlign};
        margin: 1.5rem;
        display: flex;
        flex-direction: row;
    `
    const Text = styled.h1`
        font-size: 5rem;
        margin: 0rem;
        color: ${({ theme }) => theme.accent};
         &:before {
            content: ' ';
        }
        /* &:after{
            content: '  />'
        }  */
        @media (max-width: 480px) {
            font-size: 1.5rem;
        }
        @media (max-width: 320px) {
            font-size: 1.25rem;
        }
        @media (max-width: 240px) {
            font-size: 1rem;
        }
    `

    const blinkAnimation = keyframes`
        50% { background-color: transparent;}
    `

    const Blink = styled.span`
        background-color: ${({ theme }) => theme.accent};
        animation: ${blinkAnimation} 1s steps(1) infinite;
    `

    const [string, setString] = useState<string>();

    const typeEffect = () => {
        let initString = '';
        let typeSpeed = 0;

        text.split('').forEach(char => {
            typeSpeed += Math.random() * (maxTypeSpeed - minTypeSpeed) + minTypeSpeed;
            setTimeout(() => {
                initString += char;
                setString(initString);
            }, initDelay + typeSpeed)
        })
    }

    useEffect(() => {
        typeEffect();
    }, [])

    return (
        <Containter>
            <Text>{string}</Text>
            <Blink>&nbsp;</Blink>
        </Containter>
    )
}

export default Typewriter

Typewriter.defaultProps = {
    text: 'Text',
    textAlign: 'left',
    minTypeSpeed: 100,
    maxTypeSpeed: 120,
    initDelay: 300
}