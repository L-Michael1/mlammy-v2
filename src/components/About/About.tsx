import { forwardRef } from 'react';
import { Container, AboutContainer, Heading, Text, Link, SkillsContainer } from './About.styled'

// Icons
import react from '../../assets/icons/react.svg'
import java from '../../assets/icons/java.svg'
import html from '../../assets/icons/html.svg'
import css from '../../assets/icons/css.svg'
import javascript from '../../assets/icons/javascript.svg'
import typescript from '../../assets/icons/typescript.svg'
import c from '../../assets/icons/c.svg'
import mysql from '../../assets/icons/mysql.svg'
import mongodb from '../../assets/icons/mongodb.svg'
import material from '../../assets/icons/material-ui.svg'
import node from '../../assets/icons/node.svg'
import firebase from '../../assets/icons/firebase.svg'
import { Card, CardFooter } from '../Card/Card';

const About = (props: any, ref: any) => {

    const languages = [
        {
            icon: java,
            name: 'Java'
        },
        {
            icon: html,
            name: 'HTML'
        },
        {
            icon: css,
            name: 'CSS'
        },
        {
            icon: javascript,
            name: 'JavaScript'
        },
        {
            icon: typescript,
            name: 'TypeScript'
        },
        {
            icon: c,
            name: 'C'
        }
    ]

    const technologies = [
        {
            icon: react,
            name: 'React'
        },
        {
            icon: mysql,
            name: 'MySQL'
        },
        {
            icon: mongodb,
            name: 'MongoDB'
        },
        {
            icon: material,
            name: 'MUI'
        },
        {
            icon: node,
            name: 'Node'
        },
        {
            icon: firebase,
            name: 'Firebase'
        }
    ]

    return (
        <Container ref={ref}>
            <AboutContainer>
                <Heading>about</Heading>
                <br />
                <Text>
                    Hey! I'm currently a third year Computer Scince student at the University of Guelph, and I have a passion for web
                    development. The creativity needed, the use of variable technologies, and the fun logic behind it will continuously
                    drive my passion for web development. I was a previous Co-op student at Tulip working as a Backend Developer - I loved
                    the people, the work, and the atmosphere. Aside from my passion for programming, I'm an avid gym-goer, and I like to keep
                    fit all around. I also love playing sports, exploring nature, watching korean dramas, and anime.
                    <br /> <br />
                    💭 Let's <Link href='https://www.linkedin.com/in/mlam977'>chat</Link>!
                </Text>
            </AboutContainer>
            <SkillsContainer>
                {languages.map((language, idx) => (
                    <Card width={70} key={idx}>
                        <img src={language.icon} height="70" alt={language.name} />
                        <CardFooter>{language.name}</CardFooter>
                    </Card>
                ))}
                {technologies.map((tech, idx) => (
                    <Card width={70} key={idx}>
                        <img src={tech.icon} height="70" alt={tech.name} />
                        <CardFooter>{tech.name}</CardFooter>
                    </Card>
                ))}
            </SkillsContainer>
        </Container>
    )
}

export default forwardRef(About)
