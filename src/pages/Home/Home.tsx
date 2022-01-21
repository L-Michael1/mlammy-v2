import { useRef } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../../components/Landing/Landing'
import About from '../../components/About/About'
import { Card, CardHeader, CardContent, CardFooter } from '../../components/Card/Card'
import { GoMarkGithub } from 'react-icons/go'
type HomeProps = {
    themeType: string;
    toggleTheme: () => void;
}

const Home = ({ themeType, toggleTheme }: HomeProps) => {

    const aboutRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Navbar themeType={themeType} toggleTheme={toggleTheme} aboutRef={aboutRef} />
            <Landing themeType={themeType} />
            <About ref={aboutRef} />
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
        </>
    )
}

export default Home
