import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 24rem;

    @media (max-width: 900px){
        margin-top: 18rem;
    }
`

export const SplitContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 3rem;
    max-width: 70%;
    width: 90%;

    @media (max-width: 1850px){
        max-width: 80%;
    }

    @media (max-width: 1600px){
        max-width: 90%;
    }

    @media (max-width: 900px){
        flex-direction: column;
    }
`

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    max-width: 80%;
    width: 100%;

    @media (max-width: 900px){
        max-width: 70%;
    }

    @media (max-width: 500px){
        max-width: 90%;
    }
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

export const SubHeading = styled.h2`
    font-size: 2rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
`