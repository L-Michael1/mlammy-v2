// Components
import { motion } from 'framer-motion';
import { Heading, NavContainer, NavLink } from './Navbar.styled';
import IconButton from '@mui/material/IconButton';

// Icons
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

type NavProps = {
    themeType: string
    toggleTheme: () => void
}

const Navbar = ({ themeType, toggleTheme }: NavProps) => {

    const navItems = ['about', 'experience', 'projects', 'skills', 'content'];

    return (
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
                    >
                        {item}
                    </NavLink>
                ))}
                <IconButton
                    onClick={toggleTheme}
                    component={motion.button}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.3, duration: 0.8, type: 'spring', stiffness: 200 }}
                >
                    {themeType === 'light' ? (
                        <DarkModeIcon sx={{ color: '#818cf8' }} />
                    ) : (
                        <LightModeIcon sx={{ color: '#34d399' }} />
                    )}
                </IconButton>
            </div>
        </NavContainer>
    )
};

export default Navbar;