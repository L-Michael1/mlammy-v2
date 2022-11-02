import { Contact } from "../Contact";
import { Container, ContactContainer, FooterContent } from "./Footer.styled";

type FooterProps = {
    themeType: string;
};

const Footer: React.FC<FooterProps> = ({ themeType }) => {
    return (
        <Container>
            <FooterContent>© 2022 Michael Lam. All Rights Reserved</FooterContent>
            <ContactContainer>
                <Contact themeType={themeType} />
            </ContactContainer>
        </Container>
    );
};

export default Footer;
