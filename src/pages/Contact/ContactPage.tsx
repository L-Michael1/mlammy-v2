import React from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Container } from "../../global.styled";
import { PageProps } from "../../types/common.types";
import { 
    ContactPageContainer,
    DescriptionContainer,
    DescriptionHeader,
    Description,
    HeaderContainer,
    Header,
    SubHeader,
    Link, } from "./ContactPage.styled";

const ContactPage: React.FC<PageProps> = ({themeType, toggleTheme}) => {
    return (
        <Container
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <Navbar themeType={themeType} toggleTheme={toggleTheme} />
            <ContactPageContainer>
                <HeaderContainer>
                    <Header>Let's&nbsp;</Header>
                    <SubHeader>chat!</SubHeader>
                </HeaderContainer>
                <DescriptionContainer>
                    <Description>
                        <DescriptionHeader>LinkedIn</DescriptionHeader>
                        <Link href="https://www.linkedin.com/in/mlam977" target="_blank">www.linkedin.com/in/mlam977</Link>
                    </Description>
                    <Description>
                        <DescriptionHeader>GitHub</DescriptionHeader>
                        <Link href="https://www.github.com/L-Michael1" target="_blank">www.github.com/L-Michael1</Link>
                    </Description>
                    <Description>
                        <DescriptionHeader>Email Address</DescriptionHeader>
                        <Link href="mailto:m.lam08@outlook.com" target="_blank">m.lam08@outlook.com</Link>
                    </Description>
                </DescriptionContainer>
            </ContactPageContainer>
            <Footer themeType={themeType} />
        </Container>
    );
};

export default ContactPage;