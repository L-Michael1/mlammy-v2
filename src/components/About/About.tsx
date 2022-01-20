import { forwardRef } from 'react';
import { Container, AboutContainer, Heading, Text, Link } from './About.styled'

const About = (props: any, ref: any) => {

    return (
        <Container ref={ref}>
            <AboutContainer>
                <Heading>about</Heading>
                <br />
                <Text>
                    🎒 A 3rd year Computer Science student at the University of Guelph. <br />
                    🌷 Previous co-op at Tulip as a Software Developer. <br />
                    🤗 Full-stack fanboy with a main focus on React and TypeScript. <br />
                    🏸 I enjoy all types of sports, hiking, kdramas, anime, and the list goes on... <br />
                    💭 Let's <Link href='https://www.linkedin.com/in/mlam977'>chat</Link>!<br />
                </Text>
            </AboutContainer>
        </Container>
    )
}

export default forwardRef(About)
