import styled from 'styled-components'
import { motion } from 'framer-motion';

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`

export const ImageContainer = styled.div`
    margin-top: 18rem;
    
    @media(max-width: 900px){
        display: none;
    }
`

export const Image = styled.img`
    border-radius: 1000px;
    width: 100%;
    height: 400px;
    object-fit: contain;
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    max-width: 80%;
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