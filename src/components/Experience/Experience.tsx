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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda natus asperiores quos vero incidunt amet expedita rerum voluptatum aliquam repellendus exercitationem dolorum, nihil quisquam ducimus minus error ipsum consectetur.
                </CardContent>
                <CardFooter>
                    Backend PHP MySQL
                </CardFooter>
            </Card>
        </ExperienceContainer>
    )
}

export default Experience
