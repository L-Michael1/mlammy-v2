import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin-top: 24rem;

    @media (max-width: 1350px){
        flex-direction: column;
    }

    @media (max-width: 900px){
        margin-top: 18rem;
    }
`

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    max-width: 80%;
    width: 40%;

    @media (max-width: 1350px){
        width: 65%;
    }

    @media (max-width: 900px){
        width: 80%;
    }

`

export const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    max-width: 25%;

    @media (max-width: 1350px){
        justify-content: center;
        margin-top: 3rem;
        max-width: 70%;
    }
`

export const Heading = styled.h1`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.primary};

    &:before {
        content: '< ';
    }
    &:after{
        content: '  />'
    } 
`

export const Text = styled.p`
    line-height: 1.75rem;
    font-size: 1.25rem;
`

export const Link = styled(motion.a)`
    text-decoration: none;
    color: ${({ theme }) => theme.primary}
`