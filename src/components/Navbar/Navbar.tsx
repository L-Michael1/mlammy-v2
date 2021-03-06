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
    aboutRef: React.RefObject<HTMLDivElement>
    expRef: React.RefObject<HTMLDivElement>
    projectRef: React.RefObject<HTMLDivElement>
    skillsRef: React.RefObject<HTMLDivElement>
    // contactRef: React.RefObject<HTMLDivElement>
}

const Navbar = ({ themeType, toggleTheme, aboutRef, expRef, projectRef, skillsRef }: NavProps) => {

    const [scrolled, setScrolled] = useState<boolean>(false);
    const navItems = [
        {
            itemName: 'about',
            ref: aboutRef
        },
        {
            itemName: 'experience',
            ref: expRef
        },
        {
            itemName: 'projects',
            ref: projectRef
        },
        {
            itemName: 'skills',
            ref: skillsRef
        },
        {
            itemName: 'contact',
            ref: aboutRef
        }
    ];

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

    // Scroll into section
    const executeScroll = (currentRef: React.RefObject<HTMLDivElement>): any => {
        if (currentRef.current !== null) {
            currentRef.current.scrollIntoView({ block: "center", inline: "nearest" });
        }
    }

    return (
        <Container scrolled={scrolled}>
            <NavContainer>
                <div>
                    <Heading
                        initial={{ y: -150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.7, type: 'spring', stiffness: 200 }}
                    >
                        Michael Lam
                    </Heading>
                </div>

                <div>
                    {navItems.map((item, idx) => (
                        <NavLink
                            onClick={() => executeScroll(item.ref)}
                            initial={{ y: -150, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 + (idx / 4), duration: 0.7, type: 'spring', stiffness: 200 }}
                            key={idx}
                        >
                            {item.itemName}
                        </NavLink>
                    ))}
                    <IconButton
                        onClick={toggleTheme}
                        component={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8, duration: 0.8, type: 'tween' }}
                    >
                        {themeType === 'light' ? (
                            <DarkModeIcon sx={{ color: '#8aa9ff' }} />
                        ) : (
                            <LightModeIcon sx={{ color: '#a4f8e0' }} />
                        )}
                    </IconButton>
                </div>
            </NavContainer>
        </Container>
    )
};

export default Navbar;