import React, { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { NavProps } from "./Navbar.types";
import {
    NavContainer,
    Heading,
    MobileMenu,
    LinkWrapper,
    Link,
    HamburgerContainer,
} from "./Navbar.styled";

const pages: Array<string> = [
    "About",
    "Experience",
    "Projects",
    "Skills",
    "Contact",
    "Archive",
];

const MobileNavbar: React.FC<NavProps> = ({ themeType, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <NavContainer>
                <HamburgerContainer>
                    <Hamburger size={24} toggled={isOpen} toggle={onToggle} />
                </HamburgerContainer>
                <Heading>Michael Lam</Heading>
                <IconButton
                    onClick={toggleTheme}
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.6,
                        duration: 0.7,
                        type: "tween",
                    }}
                >
                    {themeType === "light" ? (
                        <DarkModeIcon sx={{ color: "#000000" }} />
                    ) : (
                        <LightModeIcon sx={{ color: "#FFFFFF" }} />
                    )}
                </IconButton>
            </NavContainer>
            <MobileMenu
                style={{ display: isOpen ? "" : "none" }}
                onClick={() => setIsOpen(false)}
            >
                <ul
                    style={{
                        listStyleType: "none",
                        margin: 0,
                        padding: 0,
                    }}
                >
                    {pages.map((page) => (
                        <LinkWrapper>
                            <Link to={page}>{page}</Link>
                        </LinkWrapper>
                    ))}
                </ul>
            </MobileMenu>
        </>
    );
};

export { MobileNavbar };
