import styled from "styled-components";

export const AboutPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 70%;
    width: 100%;
    margin: auto;
    padding: 17rem 16rem 0rem 16rem;

    @media (max-width: 80em) {
        padding: 15rem 6.5rem 4rem 6.5rem;
    }

    @media (max-width: 64em) {
        flex-direction: column;
        padding: 9rem 4rem 6rem 4rem;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: left;
    width: 100%;
    padding-bottom: 2rem;
    @media (max-width: 64em) {
        padding-bottom: 2rem;
    }
`;

export const Header = styled.h1`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.primary};

    @media (max-width: 64em) {
        font-size: 2rem;
        transform: none;
    }
`;

export const SubHeader = styled.h1`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.accent};

    @media (max-width: 64em) {
        font-size: 2rem;
        transform: none;
    }
`;

export const DescriptionContainer = styled.div`
    display: flex;
    width: 100%;

    @media (max-width: 64em) {
        flex-direction: column;
    }
`;

export const DescriptionHeader = styled.h1`
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.primary};
    text-transform: none;
    padding-bottom: 1rem;
`

export const Description = styled.div`
    color: ${({ theme }) => theme.feint};
    padding-right: 4rem;
    width: 100%;

    @media (max-width: 96em) {
        padding-right: 2rem;
    }

    @media (max-width: 64em) {
        padding-bottom: 2rem;
    }
`;

export const Highlight = styled.span`
    color: ${({ theme }) => theme.accent};
    font-weight: 800;
`;

export const Link = styled.a`
    font-weight: 600;
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
`