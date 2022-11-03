import styled from "styled-components";

export const SkillsPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 6rem;
    padding-bottom: 8rem;

    @media (max-width: 64em) {
        padding-top: 3rem;
    }

    @media (max-width: 32rem) {
        padding-top: 2rem;
    }
`;

export const SplitContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
    max-width: 70%;
    width: 90%;
`;

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    width: 100%;
`;

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 140px 140px 140px 140px;
    grid-gap: 20px;

    @media (max-width: 48em) {
        grid-template-columns: 140px 140px 140px;
    }

    @media (max-width: 32em) {
        grid-template-columns: 140px 140px;
    }
`;

export const SubHeading = styled.h2`
    color: ${({theme}) => theme.primary};
    font-size: 2rem;
    margin-top: 3rem;
    margin-bottom: 2rem;

    @media (max-width: 32em) {
        font-size: 1.5rem;
    }
`;
