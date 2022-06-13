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
                <Card width={650}>
                    <CardHeader
                        date="June 2022 - Present"
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
                                Assisted in creating multiple queries and
                                mutations of the main API written in GraphQL
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        React-Native Golang PostgreSQL GraphQL Docker{" "}
                    </CardFooter>
                </Card>
            </ProjectContainer>
            <ProjectContainer>
                <Card width={650}>
                    <CardHeader
                        date="Dec 2021 - Jan 2022"
                        title="mlammy"
                        avatar={<AiOutlineLink />}
                        avatarLink="https://mlammy-v2.netlify.app"
                    />
                    <CardContent>
                        <ul>
                            {/* <li>
                                Working as a full-stack developer in a team of 3
                                to develop a social media platform catered
                                towards the fitness community - one where people
                                can track progress, share progress, and join
                                exclusive communities to access private workouts
                            </li> */}
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
                <Card width={650}>
                    <CardHeader
                        date="June 2022 - Present"
                        title="Aptitude"
                        avatar={<AiOutlineLink />}
                        avatarLink="https://google.ca"
                    />
                    <CardContent>
                        <ul>
                            <li>
                                Developed the API for Tulip iDevices for the
                                Adyen Payment API integration feature using PHP,
                                maintained with unit tests written in Python
                            </li>
                            <li>
                                Developed and assisted in designing the database
                                structures for Tulip iDevices using MySQL
                            </li>
                            <li>
                                Optimized various MySQL queries and reduced the
                                time complexity of multiple functions to improve
                                the performance of the Assisted Selling
                                application
                            </li>
                            <li>
                                Cleaned up numerous functions to reduce errors
                                and warnings in GCP logs for a major API
                                container by ~90%
                            </li>
                            <li>
                                Used Postman to test APIs. and used VSTS to
                                manage and organize tickets
                            </li>
                            <li>
                                Assisted in the onboarding process of new
                                members to the Checkout Team
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        PHP MySQL Python Golang Docker APIs Optimization{" "}
                    </CardFooter>
                </Card>
            </ProjectContainer>
            <ProjectContainer>
                <Card width={650}>
                    <CardHeader
                        date="June 2022 - Present"
                        title="Aptitude"
                        avatar={<AiOutlineLink />}
                        avatarLink="https://google.ca"
                    />
                    <CardContent>
                        <ul>
                            <li>
                                Developed the API for Tulip iDevices for the
                                Adyen Payment API integration feature using PHP,
                                maintained with unit tests written in Python
                            </li>
                            <li>
                                Developed and assisted in designing the database
                                structures for Tulip iDevices using MySQL
                            </li>
                            <li>
                                Optimized various MySQL queries and reduced the
                                time complexity of multiple functions to improve
                                the performance of the Assisted Selling
                                application
                            </li>
                            <li>
                                Cleaned up numerous functions to reduce errors
                                and warnings in GCP logs for a major API
                                container by ~90%
                            </li>
                            <li>
                                Used Postman to test APIs. and used VSTS to
                                manage and organize tickets
                            </li>
                            <li>
                                Assisted in the onboarding process of new
                                members to the Checkout Team
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        PHP MySQL Python Golang Docker APIs Optimization{" "}
                    </CardFooter>
                </Card>
            </ProjectContainer>
        </ProjectsPageContainer>
    );
};

export default ProjectsPage;
