import { useRef } from 'react'
import Fade from 'react-reveal/Fade'
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../../components/Landing/Landing'
import About from '../../components/About/About'
import Experience from '../../components/Experience/Experience'
import Projects from '../../components/Projects/Projects'
import Skills from '../../components/Skills/Skills'
import Footer from '../../components/Footer/Footer'

type HomeProps = {
    themeType: string;
    toggleTheme: () => void;
}

const Home = ({ themeType, toggleTheme }: HomeProps) => {

    const aboutRef = useRef<HTMLDivElement>(null);
    const expRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Navbar themeType={themeType} toggleTheme={toggleTheme} aboutRef={aboutRef} expRef={expRef} projectRef={projectRef} skillsRef={skillsRef} />
            <Landing themeType={themeType} />
            <Fade>
                <About ref={aboutRef} />
            </Fade>

            <Fade>
                <Experience ref={expRef} />
            </Fade>
            <Fade>
                <Projects ref={projectRef} />
            </Fade>
            <Fade>
                <Skills ref={skillsRef} />
            </Fade>
            <Fade>
                <Footer />
            </Fade>
        </>
    )
}

export default Home
