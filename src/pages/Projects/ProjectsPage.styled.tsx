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
    align-items: center;
    flex-direction: column;
    padding-bottom: 30px;
`;
