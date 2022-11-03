import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Link as NaviLink } from "react-router-dom";

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
        scrolled ? `0 2px 3px ${theme.shadow}` : "0px"};

    @media (max-width: 64em) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`;

export const NavContainer = styled.div`
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 70%;
    width: 100%;
    margin: auto;
    padding: 1rem;

    @media (max-width: 64rem) {
        max-width: 85%;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 1rem;
`;

export const Heading = styled(motion.span)`
    font-size: 2.25rem;
    font-weight: 800;
    text-transform: uppercase;
    color: ${({ theme }) => theme.accent};

    @media (max-width: 64em) {
        font-size: 1.5rem;
    }

    @media (max-width: 32em) {
        font-size: 1.25rem;
    }
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

export const HamburgerContainer = styled.div`
    color: ${({ theme }) => theme.primary};
    z-index: 999;
`;

const fadeIn = keyframes`
    from {
        opacity: 0%;
    }
    to {
        opacity: 85%;
    }
`;

const fadeOut = keyframes`
    from {
      opacity: 85%;
    }
    to {
      opacity: 0%;
    }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  text-align: center;
  top: 0;
  left: 0;
  opacity: 90%;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.5s linear;
  transition: visibility 0.5s linear;
  z-index: 998;
  background-color: ${({theme}) => theme.secondary};
  
`;

export const LinkWrapper = styled.li`
    font-size: 2rem;
    text-transform: uppercase;
`;


export const Link = styled(NaviLink)`
  text-decoration: none;
  text-transform: uppercase;
  margin: 1.5rem;
  font-size: 1rem;
  transition: color 0.3s ease-in-out;
  padding-bottom: 8px;
  font-weight: 400;

  :hover {
    color: ${({ theme }) => theme.accent};
  }
`;
