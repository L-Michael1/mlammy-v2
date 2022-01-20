// Components
import { Container, HeaderContainer, SubText, HeaderText } from './Landing.styled'
import Contact from '../Contact/Contact'

type landingProps = {
    themeType: string
}

const Landing = ({ themeType }: landingProps) => {
    return (
        <Container>
            <HeaderContainer>
                <SubText
                    initial={{ y: -35, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.1, duration: 1.2, yoyo: Infinity, opacity: 1 }}
                >
                    👋 Hey there! My name is
                </SubText>
                <HeaderText
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4, duration: 0.8 }}
                >
                    Michael Lam
                </HeaderText>
                <SubText
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.7, duration: 0.8 }}
                >
                    Third Year Computer Science Student at the University of Guelph
                </SubText>
                <Contact themeType={themeType} />
            </HeaderContainer>
        </Container>
    )
};

export default Landing;
