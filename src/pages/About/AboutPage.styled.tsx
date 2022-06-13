import styled from "styled-components";

export const AboutPageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16rem 6.5rem 0rem 6.5rem;

    @media (max-width: 80em) {
        padding: 12rem 6.5rem 4rem 6.5rem;
    }

    @media (max-width: 64em) {
        flex-direction: column;
        padding: 8rem 4rem 6rem 4rem;
    }
`;

export const HeaderContainer = styled.div`
    @media (max-width: 64em) {
        padding-bottom: 2rem;
    }
`;

export const Header = styled.h1`
    transform: rotate(270deg);
    font-size: 2.5rem;

    @media (max-width: 64em) {
        font-size: 2rem;
        transform: none;
    }
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5%;
    padding-left: 8%;
    padding-right: 8%;
`;

export const Description = styled.span`
    display: inline;
`;

export const Highlight = styled.span`
    color: ${({ theme }) => theme.primary};
    font-weight: 800;
`;

export const ImageWrapper = styled.div`
    padding-right: 3%;
    @media (max-width: 64em) {
        display: none;
    }
`;

export const Image = styled.img`
    width: 100%;
    min-width: 175px;
    max-width: 300px;
    height: auto;
`;
