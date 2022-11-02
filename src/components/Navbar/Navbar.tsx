import React from "react";
import { motion } from "framer-motion";
import {
    Container,
    Heading,
    NavContainer,
    HeaderContainer,
    Link,
} from "./Navbar.styled";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { NavProps } from "./Navbar.types";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { MobileNavbar } from "./MobileNavbar";
import { useScroll } from "../../hooks/useScroll";
import { pages } from "./NavbarConstants";

const Navbar: React.FC<NavProps> = ({ themeType, toggleTheme }) => {
    const { width } = useWindowDimensions();
    const scrolled = useScroll();

    return (
        <Container scrolled={scrolled}>
            {width > 1024 ? (
                <>
                    <HeaderContainer>
                        <Heading>
                            Michael Lam
                        </Heading>
                    </HeaderContainer>
                    <NavContainer>
                        {pages.map((page, idx) => (
                            <Link to={page.link} key={idx}>
                                {page.name}
                            </Link>
                        ))}
                        <IconButton
                            onClick={toggleTheme}
                            component={motion.div}
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
