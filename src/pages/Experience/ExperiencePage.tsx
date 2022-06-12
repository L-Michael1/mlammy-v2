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
import { AiOutlineLink } from "react-icons/ai";
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
                        {/* Tulip is a company that provides software as a service
                        that aims at digitizing retail. At Tulip, I was apart of
                        the Checkout team working as a Backend Software
                        Developer. I worked on a range of different tasks. I
                        developed the API and integrations for Tulip iDevices
                        using PHP. I also developed the database structures for
                        Tulip iDevices using MySQL. There were also various
                        smaller tasks that I had the pleasure of working on;
                        such as: MySQL query optimizations, and a metric
                        dashboard optimization for an API container using
                        Grafana. My favourite accomplishment at Tulip was that I
                        was able to reduce the number of errors and warnings by
                        80% in our GCP logs for a major API container. */}
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
            {/* <ImageContainer> */}
            {/* It prevents passing the referrer information to the target website by removing the referral info from the HTTP header. */}
            {/* This means that in Google analytics traffic coming from links that have the rel=”noreferrer” attribute will show as Direct Traffic instead of Referral. */}
            {/* <a href="https://tulip.io" target="_blank" rel="noreferrer">
                    <Image src={tulip} alt="Tulip.io" height={150} />
                </a> */}
            {/* </ImageContainer> */}
        </ExperiencePageContainer>
    );
};

export default ExperiencePage;
