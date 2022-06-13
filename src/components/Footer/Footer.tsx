import { Contact } from "../Contact";
import { Container, ContactContainer } from "./Footer.styled";

type FooterProps = {
    themeType: string;
};

const Footer: React.FC<FooterProps> = ({ themeType }) => {
    return (
        <Container>
            <div>
                <span>© 2022 Michael Lam. All Rights Reserved</span>
            </div>
            <ContactContainer>
                <Contact themeType={themeType} />
            </ContactContainer>
        </Container>
    );
};

export default Footer;
