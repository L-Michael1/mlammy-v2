import React, { forwardRef } from 'react';
import { Container, Heading, SubHeading, SplitContainer, SkillsContainer, CardsContainer } from './Skills.styled'
import { Card, CardFooter } from '../Card/Card'

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

const Skills = (props: any, ref: any) => {

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
            name: 'Material-UI'
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
            <Heading>skills</Heading>
            <SplitContainer>
                <SkillsContainer>
                    <SubHeading>Languages</SubHeading>
                    <CardsContainer>
                        {languages.map((language, idx) => (
                            <Card width={90} key={idx}>
                                <img src={language.icon} height="90" alt={language.name} />
                                <CardFooter>{language.name}</CardFooter>
                            </Card>
                        ))}
                    </CardsContainer>
                </SkillsContainer>
                <SkillsContainer>
                    <SubHeading>Technologies</SubHeading>
                    <CardsContainer>
                        {technologies.map((tech, idx) => (
                            <Card width={90} key={idx}>
                                <img src={tech.icon} height="90" alt={tech.name} />
                                <CardFooter>{tech.name}</CardFooter>
                            </Card>
                        ))}
                    </CardsContainer>
                </SkillsContainer>
            </SplitContainer>
        </Container >
    )
}

export default forwardRef(Skills);
