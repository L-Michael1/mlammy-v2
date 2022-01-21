import React from 'react';
import { ContentContainer, Container, CardContainer, HeaderContainer, FooterContainer, SubContainer, Link, Title, Date } from './Card.styled'

type CardHeaderProps = {
    date: string
    title: string
    avatar: any
    avatarLink: string
}

type CardProps = {
    width: number
    img?: string
    children: any
}

export const CardHeader = ({ date, title, avatar, avatarLink }: CardHeaderProps) => {
    return (
        <HeaderContainer>
            <Title>{title}</Title>
            <SubContainer>
                <Date>{date}</Date>
                <Link href={avatarLink} target='_blank' rel='noreferrer'>
                    {avatar}
                </Link>
            </SubContainer>
        </HeaderContainer>
    )
}

export const CardContent = ({ children }: any) => {
    return (
        <ContentContainer>
            <p>
                {children}
            </p>
        </ContentContainer>
    )
}

export const CardFooter = ({ children }: any) => {
    return (
        <FooterContainer>
            {children}
        </FooterContainer>
    )
}


export const Card = ({ width, children }: CardProps) => {
    return (
        <Container>
            <CardContainer width={width}>
                {children}
            </CardContainer>
        </Container>
    )
}