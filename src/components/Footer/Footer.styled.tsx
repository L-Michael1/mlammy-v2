import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    height: 2.5rem;
    width: 100%;
    margin-block: 1rem;

    @media (max-width: 64em) {
        flex-direction: column;
    }
`;

export const FooterContent = styled.p`
    color: ${({ theme }) => theme.feint};
    font-weight: 100;
`

export const ContactContainer = styled.div`
    padding-top: 5px;
    padding-left: 1rem;

    @media (max-width: 64em) {
        padding-left: 0;
        padding: 1rem;
    }
`;
