import styled from "styled-components";

export const ArchivePageContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const Memories = styled.div`
    display: grid;
    grid-template-columns: 250px 250px 250px;
    grid-gap: 20px;
    padding-top: 200px;
    padding-bottom: 100px;

    @media (max-width: 64em) {
        padding-top: 150px;
    }

    @media (max-width: 56em) {
        grid-template-columns: 250px 250px;
    }

    @media (max-width: 40em) {
        grid-template-columns: 250px;
    }
`;

export const MemoryContainer = styled.div``;

export const ImageContainer = styled.div``;

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
`;
