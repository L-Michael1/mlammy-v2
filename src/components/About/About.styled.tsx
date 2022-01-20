import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    max-width: 80%;
    width: 50%;
    margin-top: 24rem;

    @media (max-width: 900px){
        margin-top: 18rem;
        width: 80%;
    }

    @media (max-width: 600px){ 
        margin-top: 16rem;
    }

`

export const Heading = styled.h1`
    font-size: 2rem;

    &:before {
        content: '< ';
    }
    &:after{
        content: '  />'
    } 
`

export const Text = styled.p`
    line-height: 1.75rem;
`