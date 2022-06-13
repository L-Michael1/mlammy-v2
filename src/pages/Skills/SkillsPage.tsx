import React from "react";
import { Navbar } from "../../components/Navbar";
import { PageProps } from "../../types/common.types";
import { languages, technologies, tools } from "./SkillsConstants";
import {
    SkillsPageContainer,
    SubHeading,
    SplitContainer,
    SkillsContainer,
    CardsContainer,
} from "./SkillsPage.styled";
import { Card, CardFooter } from "../../components/Card/Card";
import { Container } from "../../global.styled";
import { Footer } from "../../components/Footer";

const SkillsPage: React.FC<PageProps> = ({ themeType, toggleTheme }) => {
    return (
        <Container>
            <Navbar themeType={themeType} toggleTheme={toggleTheme} />
            <SkillsPageContainer>
                <SplitContainer>
                    <SkillsContainer>
                        <SubHeading>Languages</SubHeading>
                        <CardsContainer>
                            {languages.map((language, idx) => (
                                <Card width={91} key={idx}>
                                    <img
                                        src={language.icon}
                                        height="90"
                                        alt={language.name}
                                    />
                                    <CardFooter>{language.name}</CardFooter>
                                </Card>
                            ))}
                        </CardsContainer>
                    </SkillsContainer>
                    <SkillsContainer>
                        <SubHeading>Technologies</SubHeading>
                        <CardsContainer>
                            {technologies.map((tech, idx) => (
                                <Card width={91} key={idx}>
                                    <img
                                        src={tech.icon}
                                        height="90"
                                        alt={tech.name}
                                    />
                                    <CardFooter>{tech.name}</CardFooter>
                                </Card>
                            ))}
                        </CardsContainer>
                    </SkillsContainer>
                    <SkillsContainer>
                        <SubHeading>Tools</SubHeading>
                        <CardsContainer>
                            {tools.map((tool, idx) => (
                                <Card width={91} key={idx}>
                                    <img
                                        src={tool.icon}
                                        height="90"
                                        alt={tool.name}
                                    />
                                    <CardFooter>{tool.name}</CardFooter>
                                </Card>
                            ))}
                        </CardsContainer>
                    </SkillsContainer>
                </SplitContainer>
            </SkillsPageContainer>
            <Footer />
        </Container>
    );
};

export default SkillsPage;
