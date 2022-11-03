import styled from "styled-components";

export const ExperiencePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 14rem;
    padding-bottom: 4rem;

    @media (max-width: 64em) {
        padding-top: 8rem;
        padding-bottom: 6rem;
    }
`;

export const ExperienceContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 4rem;

    @media (max-width: 64em) {
        width: 40rem;
    }

    @media (max-width: 48em) {
        width: 450px;
    }

    @media (max-width: 32em) {
        width: 350px;
    }

    @media (max-width: 24em) {
        width: 300px;
    }
`;
