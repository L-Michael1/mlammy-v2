import styled from 'styled-components'

export const ExperienceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 24rem;

    @media (max-width: 900px){
        margin-top: 18rem;
    }
`

export const Heading = styled.h1`
    font-size: 2rem;

    &:before {
        content: '< ';
    }
    &:after{
        content: '  />'
    } 
`