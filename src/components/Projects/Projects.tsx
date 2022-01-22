import React from 'react';
import { Container, ProjectsContainer } from './Projects.styled'
import { Card, CardHeader, CardContent, CardFooter } from '../Card/Card'
import { AiOutlineLink } from 'react-icons/ai'

const Projects = () => {

    const projects = [
        {
            date: '1212',
            title: 'Ikigai',
            content: 'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
            footer: 'React MySQL Expressjs Nodejs'
        },
        {
            date: '1212',
            title: 'Ikigai',
            content: 'ya dig it me app',
            footer: 'React MySQL Expressjs Nodejs'
        },
        {
            date: '1212',
            title: 'Ikigai',
            content: 'ya dig it me app',
            footer: 'React MySQL Expressjs Nodejs'
        },
        {
            date: '1212',
            title: 'Ikigai',
            content: 'ya dig it me app',
            footer: 'React MySQL Expressjs Nodejs'
        },
    ]

    return (
        <Container>
            <ProjectsContainer>
                {projects.map((project, idx) => (
                    <Card width={400}>
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
