// Import components
import { HeaderContainer, ToggleContainer } from './Navbar.styled';
import IconButton from '@mui/material/IconButton';

// Import icons
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

interface NavProps {
    theme: String;
    toggleTheme: () => void
}

const Navbar = ({ theme, toggleTheme }: NavProps) => {
    return (
        <HeaderContainer>
            <ToggleContainer>
                <IconButton onClick={toggleTheme}>
                    {theme === 'light' ? (
                        <DarkModeIcon sx={{ color: '#0ea5e9' }} />
                    ) : (
                        <LightModeIcon sx={{ color: '#0ea5e9' }} />
                    )}
                </IconButton>
            </ToggleContainer>
        </HeaderContainer>
    )
};

export default Navbar;