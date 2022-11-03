import React from "react";
import { Navbar } from "../../components/Navbar";
import { PageProps } from "../../types/common.types";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "../../components/Card/Card";
import { ProjectContainer, ProjectsPageContainer, List} from "./ProjectsPage.styled";
import { AiOutlineLink } from "react-icons/ai";
import { Container } from "../../global.styled";
import { Footer } from "../../components/Footer";

const ProjectsPage: React.FC<PageProps> = ({ themeType, toggleTheme }) => {
    return (
        <Container
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <ProjectsPageContainer>
                <Navbar themeType={themeType} toggleTheme={toggleTheme} />
                <ProjectContainer>
                    <Card width={700}>
                        <CardHeader
                            date="Nov. 2022 - Present"
                            title="Kaizen"
                            avatar={<AiOutlineLink />}
                            avatarLink="https://google.ca"
                        />
                        <CardContent>
                            <List>
                                <li>
                                    In the works of developing a mental health focused productivity web-app 
                                    that allows users to create personal to-dos, habits, and journal entries 
                                </li>
                                <li>
                                    Designed the UI in Figma...tbd
                                </li>
                                <li>
                                    Developed an automated test suite using...tbd
                                </li>
                            </List>
                        </CardContent>
                        <CardFooter>
                            React TypeScript Firebase PostgreSQL CircleCI Styled-components{" "}
                        </CardFooter>
                    </Card>
                </ProjectContainer>
                <ProjectContainer>
                    <Card width={700}>
                        <CardHeader
                            date="Oct. 2022 - Nov. 2022"
                            title="mlammy"
                            avatar={<AiOutlineLink />}
                            avatarLink="https://mlammy.netlify.app"
                        />
                        <CardContent>
                            <List>
                                <li>
                                    Developed a responsive and robust single
                                    page web-based portfolio to showcase
                                    personal work and experience
                                </li>
                                <li>
                                    Created re-usable responsive styled-components 
                                    to create an intricate UX and responsive UI
                                </li>
                                <li>
                                    UI built to be desktop & mobile friendly
                                </li>
                            </List>
                        </CardContent>
                        <CardFooter>
                            React TypeScript Styled-Components Netlify
                        </CardFooter>
                    </Card>
                </ProjectContainer>
                <ProjectContainer>
                    <Card width={700}>
                        <CardHeader
                            date="May 2021 - May 2021"
                            title="Ukiyo"
                            avatar={<AiOutlineLink />}
                            avatarLink="https://github.com/L-Michael1/Ukiyo"
                        />
                        <CardContent>
                            <List>
                                <li>
                                    Developed a web-app in React that allows
                                    users to create, view, and share food
                                    recipes
                                </li>
                                <li>
                                    Implemented a RESTful architectural back end
                                    in Express that supports CRUD functionality
                                    connected to a MongoDB database
                                </li>
                                <li>
                                    Utilized Material UI and Styled Components
                                    to create an intricate UX and responsive UI
                                </li>
                            </List>
                        </CardContent>
                        <CardFooter>
                            React MongoDB Express Material UI Styled-Components{" "}
                        </CardFooter>
                    </Card>
                </ProjectContainer>
                <ProjectContainer>
                    <Card width={700}>
                        <CardHeader
                            date="Mar. 2020 - Jul. 2020"
                            title="mBot"
                            avatar={<AiOutlineLink />}
                            avatarLink="https://github.com/L-Michael1/m-bot"
                        />
                        <CardContent>
                            <List>
                                <li>
                                    Developed a Discord bot using JavaScript,
                                    Node, and the DiscordJS API, hosted using
                                    Heroku
                                </li>
                                <li>
                                    Improved personal user and moderator
                                    experience on multiple servers by
                                    implementing convenient moderation, server
                                    commands, games, and an economy system
                                </li>
                            </List>
                        </CardContent>
                        <CardFooter>
                            JavaScript Node DiscordJS MongoDB Heroku{" "}
                        </CardFooter>
                    </Card>
                </ProjectContainer>
            </ProjectsPageContainer>
            <Footer themeType={themeType} />
        </Container>
    );
};

export default ProjectsPage;
