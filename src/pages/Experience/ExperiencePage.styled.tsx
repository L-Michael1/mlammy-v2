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

export const ExperienceContainer = styled.div`
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

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    max-width: 25%;
    width: 100%;

    @media (max-width: 1350px) {
        display: none;
    }
`;

export const Image = styled.img`
    margin-top: 3rem;
`;

export const Heading = styled.h1`
    font-size: 2.5rem;

    &:before {
        content: "< ";
    }
    &:after {
        content: "  />";
    }
`;
