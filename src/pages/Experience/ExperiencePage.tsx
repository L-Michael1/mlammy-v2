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
  List,
} from "./ExperiencePage.styled";
import tulip from "../../assets/tulip.png";
import scissors from "../../assets/scissors.png";
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
              date="Sep. 2022 - Present"
              title="Cutsbyjz - Full Stack Developer"
              avatar={
                <img
                  alt="scissors"
                  src={scissors}
                  height={25}
                  color={"#945656"}
                />
              }
              avatarLink="https://cutsbyjz.netlify.app/"
            />
            <CardContent>
              <List>
                <li>
                  Working as a freelance full-stack developer in a team of two
                  to develop a personal barber website
                </li>
                <li>
                  Designed and implemented various re-usable components for
                  numerous pages
                </li>
                <li>
                  Implementing the appointment booking system in Express and
                  PostgreSQL with Prisma
                </li>
                <li>Setup the CircleCI pipeline for continuous integration</li>
                <li>
                  Setup continuous deployment for the development and production
                  environments on Netlify
                </li>
              </List>
            </CardContent>
            <CardFooter>
              React Node Express Prisma PostgreSQL CircleCI Styled-components{" "}
            </CardFooter>
          </Card>
        </ExperienceContainer>
        <ExperienceContainer>
          <Card width={700}>
            <CardHeader
              date="Sep 2021 - Dec 2021"
              title="Tulip - Software Developer Intern"
              avatar={<img alt="tulip" src={tulip} height={25} />}
              avatarLink="https://tulip.com"
            />
            <CardContent>
              <List>
                <li>
                  Developed the API for Tulip iDevices for the Adyen Payment API
                  integration feature using PHP, maintained with unit tests
                  written in Python
                </li>
                <li>
                  Developed and assisted in designing the database structures
                  for Tulip iDevices using MySQL
                </li>
                <li>
                  Optimized various MySQL queries and internal functions to
                  improve the performance of the Assisted Selling application
                </li>
                <li>
                  Cleaned up numerous PHP functions to reduce errors and
                  warnings in GCP logs for the primary API container by 90%
                </li>
                <li>
                  Used Grafana to create a monitoring panel that alerts on
                  extended API downtime
                </li>
                <li>
                  Used Postman to test APIs, and used VSTS to manage and
                  organize tickets
                </li>
                <li>
                  Assisted in the onboarding of 3 new members to the Checkout
                  Team
                </li>
              </List>
            </CardContent>
            <CardFooter>
              PHP MySQL Phinx Python Golang Docker APIs Optimization{" "}
            </CardFooter>
          </Card>
        </ExperienceContainer>
        <Footer themeType={themeType} />
      </ExperiencePageContainer>
    </Container>
  );
};

export default ExperiencePage;
