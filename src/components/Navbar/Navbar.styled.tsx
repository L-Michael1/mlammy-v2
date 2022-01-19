import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Heading = styled(motion.span)`
    font-weight: 900;
    text-transform: uppercase;
    color: ${({ theme }) => theme.accent};
`

export const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    margin: auto;
    padding: 1rem;
`

export const NavLink = styled(motion.a)`
    margin: 1rem;
    text-decoration: none;
`