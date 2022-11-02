import React from "react";
import { Navbar } from "../../components/Navbar";
import { PageProps } from "../../types/common.types";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "../../components/Card/Card";
import { Footer } from "../../components/Footer";
import {
    ExperiencePageContainer,
    ExperienceContainer,
} from "./ExperiencePage.styled";
import tulip from "../../assets/tulip.png";
import muscle from "../../assets/muscle.png";
import { Container } from "../../global.styled";

const ExperiencePage: React.FC<PageProps> = ({ themeType, toggleTheme }) => {
    return (
        <Container
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <ExperiencePageContainer>
                <Navbar themeType={themeType} toggleTheme={toggleTheme} />
                <ExperienceContainer>
                    <Card width={700}>
                        <CardHeader
                            date="Jun. 2022 - Present"
                            title="Aptitude"
                            avatar={<img src={muscle} height={25} />}
                            avatarLink="https://google.ca"
                        />
                        <CardContent>
                            <ul>
                                <li>
                                    Working as a full-stack developer in a team
                                    of 3 to develop a social media platform
                                    catered towards the fitness community - one
                                    where people can track progress, share
                                    progress, and join exclusive communities to
                                    access private workouts
                                </li>
                                <li>
                                    Implemented the authentication and
                                    authorization microservice using JWTs
                                    written in Golang
                                </li>
                                <li>
                                    Created various re-usable components in
                                    React-Native and numerous screens
                                </li>
                                <li>
                                    Assisted in creating queries and mutations
                                    of the main API written in GraphQL
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            React-Native Golang PostgreSQL GraphQL Docker{" "}
                        </CardFooter>
                    </Card>
                </ExperienceContainer>
                <ExperienceContainer>
                    <Card width={700}>
                        <CardHeader
                            date="Sep 2021 - Dec 2021"
                            title="Tulip - Software Developer Intern"
                            avatar={<img src={tulip} height={25} />}
                            avatarLink="https://tulip.com"
                        />
                        <CardContent>
                            <ul>
                                <li>
                                    Developed the API for Tulip iDevices for the
                                    Adyen Payment API integration feature using
                                    PHP, maintained with unit tests written in
                                    Python
                                </li>
                                <li>
                                    Developed and assisted in designing the
                                    database structures for Tulip iDevices using
                                    MySQL
                                </li>
                                <li>
                                    Optimized various MySQL queries and reduced
                                    the time complexity of multiple functions to
                                    improve the performance of the Assisted
                                    Selling application
                                </li>
                                <li>
                                    Cleaned up numerous functions to reduce
                                    errors and warnings in GCP logs for a major
                                    API container by ~90%
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
                </ExperienceContainer>
                <Footer themeType={themeType} />
            </ExperiencePageContainer>
        </Container>
    );
};

export default ExperiencePage;
