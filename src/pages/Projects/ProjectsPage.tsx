import React from "react";
import { Navbar } from "../../components/Navbar";
import { PageProps } from "../../types/common.types";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "../../components/Card/Card";
import { ProjectContainer, ProjectsPageContainer } from "./ProjectsPage.styled";
import { AiOutlineLink } from "react-icons/ai";

const ProjectsPage: React.FC<PageProps> = ({ themeType, toggleTheme }) => {
    return (
        <ProjectsPageContainer>
            <Navbar themeType={themeType} toggleTheme={toggleTheme} />
            <ProjectContainer>
                <Card width={700}>
                    <CardHeader
                        date="Jun. 2022 - Present"
                        title="Aptitude"
                        avatar={<AiOutlineLink />}
                        avatarLink="https://google.ca"
                    />
                    <CardContent>
                        <ul>
                            <li>
                                Working as a full-stack developer in a team of 3
                                to develop a social media platform catered
                                towards the fitness community - one where people
                                can track progress, share progress, and join
                                exclusive communities to access private workouts
                            </li>
                            <li>
                                Implemented the authentication and authorization
                                microservice using JWTs written in Golang
                            </li>
                            <li>
                                Created various re-usable components in
                                React-Native and numerous screens
                            </li>
                            <li>
                                Assisted in creating queries and mutations of
                                the main API written in GraphQL
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        React-Native Golang PostgreSQL GraphQL Docker{" "}
                    </CardFooter>
                </Card>
            </ProjectContainer>
            <ProjectContainer>
                <Card width={700}>
                    <CardHeader
                        date="Dec. 2021 - Jan. 2022"
                        title="mlammy"
                        avatar={<AiOutlineLink />}
                        avatarLink="https://mlammy.netlify.app"
                    />
                    <CardContent>
                        <ul>
                            <li>
                                Developed a responsive and robust single page
                                web-based portfolio to showcase personal work
                                and experience
                            </li>
                            <li>
                                Implemented Framer Motion joined with Styled
                                Components to create an intricate UX and
                                responsive UI
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter>React TypeScript Styled-Components</CardFooter>
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
                        <ul>
                            <li>
                                Developed a web-app in React that allows users
                                to create, view, and share food recipes
                            </li>
                            <li>
                                Implemented a RESTful architectural back end in
                                Express that supports CRUD functionality
                                connected to a MongoDB database
                            </li>
                            <li>
                                Utilized Material UI and Styled Components to
                                create an intricate UX and responsive UI
                            </li>
                        </ul>
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
                        <ul>
                            <li>
                                Developed a Discord bot using JavaScript, Node,
                                and the DiscordJS API, hosted using Heroku
                            </li>
                            <li>
                                Improved personal user and moderator experience
                                on multiple servers by implementing convenient
                                moderation, server commands, games, and an
                                economy system
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        JavaScript Node DiscordJS MongoDB Heroku{" "}
                    </CardFooter>
                </Card>
            </ProjectContainer>
        </ProjectsPageContainer>
    );
};

export default ProjectsPage;
