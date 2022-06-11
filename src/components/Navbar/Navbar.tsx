import React from "react";
import { motion } from "framer-motion";
import {
    Container,
    Heading,
    NavContainer,
    NavLink,
    HeaderContainer,
} from "./Navbar.styled";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { NavProps } from "./Navbar.types";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { MobileNavbar } from "./MobileNavbar";
import { useScroll } from "../../hooks/useScroll";

const Navbar: React.FC<NavProps> = ({ themeType, toggleTheme }) => {
    const { width } = useWindowDimensions();
    const scrolled = useScroll();
    const navItems = [
        {
            name: "about",
            link: "/",
        },
        {
            name: "experience",
            link: "experience",
        },
        {
            name: "projects",
            link: "projects",
        },
        {
            name: "skills",
            link: "skills",
        },
        {
            name: "contact",
            link: "contact",
        },
        {
            name: "archive",
            link: "archive",
        },
    ];

    return (
        <Container scrolled={scrolled}>
            {width > 1024 ? (
                <>
                    <HeaderContainer>
                        <Heading
                            initial={{ y: -150, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: 0,
                                duration: 0.7,
                                type: "spring",
                                stiffness: 200,
                            }}
                        >
                            Michael Lam
                        </Heading>
                    </HeaderContainer>
                    <NavContainer>
                        {navItems.map((item, idx) => (
                            // TODO: Change to react router nav link
                            <NavLink
                                href={item.link}
                                initial={{ y: -150, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.6,
                                    duration: 0.7,
                                    type: "spring",
                                    stiffness: 200,
                                }}
                                key={idx}
                            >
                                {item.name}
                            </NavLink>
                        ))}
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
                </>
            ) : (
                <MobileNavbar themeType={themeType} toggleTheme={toggleTheme} />
            )}
        </Container>
    );
};

export default Navbar;
