import styled from "styled-components";

export const ExperiencePageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 16rem;

    @media (max-width: 64em) {
        margin-top: 12rem;
    }
`;

export const ExperiencesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 65%;

    @media (max-width: 64em) {
        width: 75%;
    }

    @media (max-width: 48em) {
        width: 85%;
    }
`;
