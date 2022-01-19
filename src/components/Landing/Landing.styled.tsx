import styled from 'styled-components'
import { motion } from 'framer-motion';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    max-width: 80%;
    width: 100%;
    margin-top: 18rem;
`

export const SubText = styled(motion.span)`
    font-size: 1.1rem;
    margin-top: 1rem;
    
    @media(max-width: 500px){
        font-size: 0.9rem;
    }
`

export const HeaderText = styled(motion.h1)`
    font-size: 6rem;

    @media (max-width: 600px){
        font-size: 5rem;
    }

    @media (max-width: 500px){
        font-size: 4rem;
    }
`