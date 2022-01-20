import React, { forwardRef, useRef } from 'react';
import { Container, AboutContainer, Heading, Text } from './About.styled'

const About = (props: any, ref: any) => {

    return (
        //@ts-ignore
        <Container ref={ref}>
            <AboutContainer>
                <Heading>about</Heading>
                <br />
                <Text>🎒 A 3rd year Computer Science student at the University of Guelph
                    🌷 Previous co-op at Tulip as a Software Developer
                    🤗 Full-stack fanboy with a main focus on React and TypeScript
                    ⌨ Big fan of custom keyboards (I'd love to see yours!), I enjoy all types of sports, hiking, kdramas, anime, and the list goes on...
                    😀 Let's chat: LinkedIn</Text>
            </AboutContainer>
        </Container>
    )
}

export default forwardRef(About)
