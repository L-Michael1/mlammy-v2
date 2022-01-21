import { ExperienceContainer, Heading } from './Experience.styled'
import { Card, CardHeader, CardContent, CardFooter } from '../Card/Card'
import { GoMarkGithub } from 'react-icons/go'

const Experience = () => {
    return (
        <ExperienceContainer>
            <Heading>experience</Heading>
            <br />
            <Card width={650}>
                <CardHeader
                    date='Sep 2021 - Dec 2021'
                    title='Tulip - Software Developer Intern'
                    avatar={
                        <GoMarkGithub />
                    }
                    avatarLink='https://github.com'
                />
                <CardContent>
                    Tulip is a company that provides software as a service that aims at digitizing retail. At Tulip, I was part of the Checkout team working as a Backend Software Developer. I worked on a range of tasks such as: creating backend endpoints in PHP, SQL query optimizations, reducing time complexity within the codebase, optimizing a metric dashboard for API requests in Grafana, reducing PHP errors/warnings by 80% in GCP logs, bug fixes, and more.
                </CardContent>
                <CardFooter>
                    Backend PHP MySQL
                </CardFooter>
            </Card>
        </ExperienceContainer>
    )
}

export default Experience
