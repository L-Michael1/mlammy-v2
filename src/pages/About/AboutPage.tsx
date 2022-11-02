import React from "react";
import { Navbar } from "../../components/Navbar";
import {
    AboutPageContainer,
    DescriptionContainer,
    DescriptionHeader,
    Description,
    HeaderContainer,
    Header,
    SubHeader,
    Highlight,
    Link,
} from "./AboutPage.styled";
import { Container } from "../../global.styled";
import { Footer } from "../../components/Footer";
import { PageProps } from "../../types/common.types";
import Resume from "../../assets/resume.pdf";

const AboutScreen: React.FC<PageProps> = ({ themeType, toggleTheme }) => {
    return (
        <Container
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <Navbar themeType={themeType} toggleTheme={toggleTheme} />
            <AboutPageContainer>
                <HeaderContainer>
                    <Header>About&nbsp;</Header>
                    <SubHeader>Me</SubHeader>
                </HeaderContainer>
                <DescriptionContainer>
                    <Description>
                        <DescriptionHeader>Software Developer</DescriptionHeader>
                        I'm currently a fourth year Computer Science student at
                        the University of Guelph, and I have a passion for{" "}
                        <Highlight>full-stack development</Highlight>. The
                        creativity needed, the use of various technologies, and
                        the fun logic behind it will continuously drive my
                        passion for full-stack development. Previous
                        intern <Highlight>@ Tulip</Highlight> working as a Backend Developer on the
                        Checkout Team.
                        <br /><br />
                        Want to learn more? Check out my <Link href={Resume} target="_blank">resume!</Link>
                    </Description>
                    <Description>
                        <DescriptionHeader>Hobbyist</DescriptionHeader>
                        When I'm not developing, I enjoy going to the gym,
                        playing sports, going on hikes, reading (recommend me books!),
                        watching korean dramas, and anime. I'm on a hunt for more hobbies.
                    </Description>
                    <Description>
                        <DescriptionHeader>Bookworm</DescriptionHeader>
                        I've been really getting into reading. Some of my favourite
                        genres include philosophy, fiction, and self-help.
                        <br /><br />
                        Befriend me on&nbsp;
                        <Link href="https://www.goodreads.com/user/show/137567565-michael" target="_blank">
                            Goodreads!
                        </Link>
                    </Description>
                </DescriptionContainer>
            </AboutPageContainer>
            <Footer themeType={themeType} />
        </Container>
    );
};

export default AboutScreen;
