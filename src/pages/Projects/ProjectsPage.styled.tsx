import styled from "styled-components";

export const ProjectsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 16rem;

    @media (max-width: 64em) {
        margin-top: 8rem;
    }
`;

export const ProjectContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 30px;

    @media (max-width: 64em) {
        width: 650px;
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
