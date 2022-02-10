import React, { forwardRef } from 'react'
import { Container, ExperienceContainer, Heading, ImageContainer, Image } from './Experience.styled'
import { Card, CardHeader, CardContent, CardFooter } from '../Card/Card'
import { AiOutlineLink } from 'react-icons/ai'
import tulip from '../../assets/tulip.png'

const Experience = (props: any, ref: any) => {
    return (
        <Container ref={ref}>
            <ExperienceContainer>
                <Heading>experience</Heading>
                <br />
                <Card width={90}>
                    <CardHeader
                        date='Sep 2021 - Dec 2021'
                        title='Tulip - Software Developer Intern'
                        avatar={<AiOutlineLink />}
                        avatarLink='https://tulip.com'
                    />
                    <CardContent>
                        Tulip is a company that provides software as a service that aims at digitizing retail.
                        At Tulip, I was apart of the Checkout team working as a Backend Software Developer. I
                        worked on a range of different tasks. I developed the API and integrations for Tulip iDevices
                        using PHP. I also developed and helped design the database structures for Tulip iDevices using
                        MySQL. There were also various smaller tasks that I had the pleasure of working on; such as: MySQL
                        query optimizations, time complexity reduction of functions, and a metric dashboard optimization for an
                        API container using Grafana. My favourite accomplishment at Tulip was that I was able to reduce the
                        number of errors and warnings by 90% in our GCP logs for a major API container!
                    </CardContent>
                    <CardFooter>
                        Backend PHP MySQL APIs Optimization
                    </CardFooter>
                </Card>
            </ExperienceContainer>
            <ImageContainer>
                {/* It prevents passing the referrer information to the target website by removing the referral info from the HTTP header. */}
                {/* This means that in Google analytics traffic coming from links that have the rel=”noreferrer” attribute will show as Direct Traffic instead of Referral. */}
                <a href="https://tulip.io" target="_blank" rel="noreferrer">
                    <Image src={tulip} alt="Tulip.io" height={250} />
                </a>
            </ImageContainer>
        </Container>
    )
}

export default forwardRef(Experience)
