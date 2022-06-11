import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 8rem;
    margin-bottom: 12rem;

    @media (max-width: 64em) {
        margin-top: 4rem;
    }

    @media (max-width: 32rem) {
        margin-top: 2rem;
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
    font-size: 2rem;
    margin-top: 3rem;
    margin-bottom: 2rem;

    @media (max-width: 32em) {
        font-size: 1.5rem;
    }
`;
