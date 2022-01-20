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
    // expRef: React.RefObject<HTMLDivElement>
    // projectRef: React.RefObject<HTMLDivElement>
    // skillsRef: React.RefObject<HTMLDivElement>
    // contactRef: React.RefObject<HTMLDivElement>
}

const Navbar = ({ themeType, toggleTheme, aboutRef }: NavProps) => {

    const [scrolled, setScrolled] = useState<boolean>(false);
    const navItems = [
        {
            itemName: 'about',
            ref: aboutRef
        },
        {
            itemName: 'experience',
            ref: aboutRef
        },
        {
            itemName: 'projects',
            ref: aboutRef
        },
        {
            itemName: 'skills',
            ref: aboutRef
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
            currentRef.current.scrollIntoView()
        }
    }

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

                <div>
                    {navItems.map((item, idx) => (
                        <NavLink
                            onClick={() => executeScroll(item.ref)}
                            initial={{ y: -150, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1 + (idx / 4), duration: 0.8, type: 'spring', stiffness: 200 }}
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