import styled from 'styled-components'

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

export const ExperienceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 80%;
    width: 40%;

    @media (max-width: 900px){
        width: 80%;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    max-width: 25%;
    width: 100%;

    @media (max-width: 1350px){
        max-width: 70%;
    }
`

export const Image = styled.img`
    margin-top: 3rem;
`

export const Heading = styled.h1`
    font-size: 2.5rem;

    &:before {
        content: '< ';
    }
    &:after{
        content: '  />'
    } 
`