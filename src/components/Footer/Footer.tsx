import Contact from "../Contact/Contact";
import { Container, ContactContainer } from "./Footer.styled";

const Footer = () => {
    return (
        <Container>
            <div>
                <span>© 2022 Michael Lam. All Rights Reserved</span>
            </div>
            <ContactContainer>
                <Contact themeType={"light"} />
            </ContactContainer>
        </Container>
    );
};

export default Footer;
