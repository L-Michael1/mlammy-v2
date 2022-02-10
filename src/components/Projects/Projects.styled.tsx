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

export const ProjectsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 80%;
    width: 45%;

    @media (max-width: 1350px){
        width: 70%;
    }

    @media (max-width: 900px){
        width: 80%;
    }
`

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 25%;
    width: 100%;

    @media (max-width: 1350px){
        display: none;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const Image = styled.img`
    margin-top: 3rem;
`

export const CardContainer = styled.div`
    margin-bottom: 2rem;
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