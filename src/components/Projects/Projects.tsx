import React from 'react';
import { Container, ProjectsContainer, Heading } from './Projects.styled'
import { Card, CardHeader, CardContent, CardFooter } from '../Card/Card'
import { AiOutlineLink } from 'react-icons/ai'

const Projects = () => {

    const projects = [
        {
            date: 'Dec 2021 - Present',
            title: 'Ikigai',
            content: 'Developing a full-stack gamified productivity web-app for users to create daily to-dos, build habits, and help users reach their short-term and long-term goals - all connected with a reward system.',
            footer: 'React MySQL Express.js Node.js Framer-Motion Styled-Components JWT',
            link: 'https://github.com/L-Michael1/ikigai'
        },
        {
            date: 'Dec 2021 - Jan 2021',
            title: 'mlammy',
            content: 'A responsive and robust single page web-based portfolio to showcase personal projects, work experience, skills, and technologies (You are looking at it!)',
            footer: 'React TypeScript Framer-Motion Styled-Components',
            link: 'https://github.com/L-Michael1/mlammy-v2'
        },
        {
            date: 'Dec 2021',
            title: 'Dogedex',
            content: "A fun little web application built for Tulip's yearly hackathon. Pass in an image of a dog and a machine learning model determines the type of breed the dog is along with a percentage of confidence!",
            footer: 'Hackathon React ml5',
            link: 'https://github.com/L-Michael1/dogedex'
        },
        {
            date: 'Mar 2020 - Jul 2020',
            title: 'm-bot',
            content: 'A Discord bot with various server moderating commands (ex. purge, kick, ban). A few fun games (ex. dice, coinflip) to gamble away your server coins that you can gain by chatting. ',
            footer: 'JavaScript Discord.js Node.js MongoDB Heroku',
            link: 'https://github.com/L-Michael1/m-Bot'
        },
    ]

    return (
        <Container>
            <Heading>
                projects
            </Heading>
            <br />
            <ProjectsContainer>
                {projects.map((project, idx) => (
                    <Card width={450} key={idx}>
                        <CardHeader date={project.date} avatar={<AiOutlineLink />} avatarLink='https://github.com' title={project.title} />
                        <CardContent>
                            {project.content}
                        </CardContent>
                        <CardFooter>
                            {project.footer}
                        </CardFooter>
                    </Card>
                ))}
            </ProjectsContainer>
        </Container>
    );
}

export default Projects
