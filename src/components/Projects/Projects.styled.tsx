import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 22rem;
`

export const ProjectsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 65%;
    width: 100%;
    gap: 15px;

    @media (max-width: 1550px){
        max-width: 90%
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