import styled from "styled-components";
import { motion } from "framer-motion";

type ContainerProps = {
    scrolled: boolean;
};

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    backdrop-filter: blur(3px);
    top: 0;
    z-index: 1;
    width: 100%;
    box-shadow: ${({ theme, scrolled }) =>
        scrolled ? `0 2px 8px ${theme.shadow}` : "0px"};
`;

export const NavContainer = styled.div`
    font-size: 18px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 80%;
    width: 100%;
    margin: auto;
    padding: 1rem;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
`;

export const Heading = styled(motion.span)`
    font-size: 2.5rem;
    font-weight: 900;
    text-transform: uppercase;
    color: ${({ theme }) => theme.accent};
`;

export const NavLink = styled(motion.a)`
    margin: 1rem;
    text-transform: uppercase;
    text-decoration: none;
    :hover {
        color: ${({ theme }) => theme.secondary};
        cursor: pointer;
    }
`;
