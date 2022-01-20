import React, { useState, useEffect } from 'react'

// Components
import { motion } from 'framer-motion';
import { Container, Heading, NavContainer, NavLink } from './Navbar.styled';
import IconButton from '@mui/material/IconButton';

// Icons
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

type NavProps = {
    themeType: string
    toggleTheme: () => void
}

const Navbar = ({ themeType, toggleTheme }: NavProps) => {

    const [scrolled, setScrolled] = useState<boolean>(false);
    const navItems = ['about', 'experience', 'projects', 'skills', 'contact'];

    // Update state on scroll
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(!scrolled);
            }
        };

        // On scroll => handleScroll();
        document.addEventListener('scroll', handleScroll, { passive: true });

        // Clean up the event handler when the component unmounts
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <Container scrolled={scrolled}>
            <NavContainer>
                <div>
                    <Heading
                        initial={{ y: -150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8, type: 'spring', stiffness: 200 }}
                    >
                        Michael Lam
                    </Heading>
                </div>

                {/* TODO: Links scroll into section */}
                <div>
                    {navItems.map((item, idx) => (
                        <NavLink
                            href={`#${item}`}
                            initial={{ y: -150, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1 + (idx / 4), duration: 0.8, type: 'spring', stiffness: 200 }}
                            key={idx}
                        >
                            {item}
                        </NavLink>
                    ))}
                    <IconButton
                        onClick={toggleTheme}
                        component={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.1, duration: 0.8, type: 'tween' }}
                    >
                        {themeType === 'light' ? (
                            <DarkModeIcon sx={{ color: '#818cf8' }} />
                        ) : (
                            <LightModeIcon sx={{ color: '#8cf5d7' }} />
                        )}
                    </IconButton>
                </div>
            </NavContainer>
        </Container>
    )
};

export default Navbar;