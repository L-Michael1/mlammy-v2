import React from "react";
import { Navbar } from "../../components/Navbar";
import greyscale_michael from "../../assets/greyscale_michael.png";
import {
    AboutPageContainer,
    Image,
    ImageWrapper,
    DescriptionContainer,
    Description,
    HeaderContainer,
    Header,
    Highlight,
} from "./AboutPage.styled";
import { Container } from "../../global.styled";
import { Footer } from "../../components/Footer";
import { PageProps } from "../../types/common.types";

const AboutScreen: React.FC<PageProps> = ({ themeType, toggleTheme }) => {
    return (
        <Container>
            <Navbar themeType={themeType} toggleTheme={toggleTheme} />
            <AboutPageContainer>
                <HeaderContainer>
                    <Header>About</Header>
                </HeaderContainer>
                <DescriptionContainer>
                    <Description>
                        <Highlight>Hi!</Highlight> <br /> <br />
                        I'm currently a fourth year Computer Science student at
                        the University of Guelph, and I have a passion for{" "}
                        <Highlight>full-stack development</Highlight>. The
                        creativity needed, the use of various technologies, and
                        the fun logic behind it will continuously drive my
                        passion for full-stack development. I was a previous
                        intern at Tulip working as a Backend Developer on the
                        Checkout Team. I loved the people, the tasks, and the
                        atmosphere. I'm also currently alongside some partners
                        to build a fitness mobile-app! Aside from my passion for
                        programming, I'm an avid gym-goer, and I like to keep
                        fit all around. I also love playing sports, exploring
                        nature, watching korean dramas, and anime.
                    </Description>
                </DescriptionContainer>
                <ImageWrapper>
                    <Image src={greyscale_michael} />
                </ImageWrapper>
            </AboutPageContainer>
            <Footer />
        </Container>
    );
};

export default AboutScreen;
