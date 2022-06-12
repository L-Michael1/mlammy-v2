import React from "react";
import { Navbar } from "../../components/Navbar";
import { PageProps } from "../../types/common.types";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "../../components/Card/Card";
import {
    ExperiencePageContainer,
    ExperiencesContainer,
} from "./ExperiencePage.styled";
import tulip from "../../assets/tulip.png";

const ExperiencePage: React.FC<PageProps> = ({ themeType, toggleTheme }) => {
    return (
        <ExperiencePageContainer>
            <Navbar themeType={themeType} toggleTheme={toggleTheme} />
            <ExperiencesContainer>
                <Card width={80}>
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
            </ExperiencesContainer>
        </ExperiencePageContainer>
    );
};

export default ExperiencePage;
