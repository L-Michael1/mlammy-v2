import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    padding-right: 12rem;
    padding-left: 12rem;

    @media (max-width: 900px) {
        padding-right: 6rem;
        padding-left: 6rem;
    }

    @media (max-width: 600px) {
        padding-right: 3rem;
        padding-left: 3rem;
    }
`;

export const Button = styled(motion.button)`
    font-size: 1.1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.background};
    background-color: ${({ theme }) => theme.accent};
    border-color: transparent;
    border-radius: 8px;
    cursor: pointer;
`;
