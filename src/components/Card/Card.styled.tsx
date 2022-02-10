import styled from 'styled-components'
import { motion } from 'framer-motion'

type CardContainerProps = {
    width: number
}

// CardHeader
export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    line-height: 1.75rem;
`

export const SubContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Link = styled.a`
    font-size: 22px;

    :hover{
        color: ${({ theme }) => theme.accent};
    }
`

export const Title = styled.h3`
    color: ${({ theme }) => theme.primary};
`

export const Date = styled.span`
    color: ${({ theme }) => theme.accent};
    font-size: 14px;
`

// CardContent
export const ContentContainer = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
`

// CardFooter
export const FooterContainer = styled.div`
    border-top: ${({ theme }) => `1px solid ${theme.accent}`};
    padding-top: 1rem;
    color: ${({ theme }) => theme.secondary};
    word-spacing: 1rem;

    :hover{
        color: ${({ theme }) => theme.accent};
    }
`

// Card
export const Container = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardContainer = styled(motion.div) <CardContainerProps>`
    background-color: ${({ theme }) => theme.card};
    max-width: 85%;
    width: ${({ width }) => `${width}%` ?? '100%'};
    padding: 1rem;
    border-radius: 12px;
    box-shadow: ${({ theme }) => `2px 2px 5px 5px ${theme.shadow}`}
`