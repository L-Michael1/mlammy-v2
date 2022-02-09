import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    padding-right: 12rem;
    padding-left: 12rem;
`

export const Button = styled(motion.button)`
    font-size: 1.1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.background};
    background-color: ${({ theme }) => theme.accent};
    border-color: transparent;
    border-radius: 8px;
    cursor: pointer;
`