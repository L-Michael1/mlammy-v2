import styled from "styled-components";

export const ArchivePageContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const Memories = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    flex-wrap: wrap;
    padding-top: 200px;
    @media (max-width: 64em) {
        width: 80%;
        padding-top: 150px;
    }
`;

export const MemoryContainer = styled.div`
    width: 200px;
    padding: 10px;
`;

export const ImageContainer = styled.div``;

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
`;
