import { forwardRef } from 'react';
import { Container, AboutContainer, Heading, Text, Link } from './About.styled'

const About = (props: any, ref: any) => {

    return (
        <Container ref={ref}>
            <AboutContainer>
                <Heading>about</Heading>
                <br />
                <Text>
                    Heyo! My name is Michael and I'm currently a third year Computer Science student at the University of Guelph!
                    I'm a huge fan of React, and full-stack development in general. I also love solving algorithmic problems - it gives
                    me a feeling of euphoria once I finally get a working solution. I had a previous Co-op term at Tulip as a Backend Software
                    Developer - I loved the people, the work, and the atmosphere. Aside from my passion for programming, I'm an avid gym-goer,
                    I like to lift heavy weight - "ain't nothin' like a peanut" - Ronnie Coleman. I also love all types of sports, hiking, kdramas,
                    anime, and anything nerdy. <br /> <br />
                    💭 Let's <Link href='https://www.linkedin.com/in/mlam977'>chat</Link>!
                </Text>
            </AboutContainer>
        </Container>
    )
}

export default forwardRef(About)
