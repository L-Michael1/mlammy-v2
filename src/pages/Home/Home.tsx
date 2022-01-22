import { useRef } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../../components/Landing/Landing'
import About from '../../components/About/About'
import Experience from '../../components/Experience/Experience'

type HomeProps = {
    themeType: string;
    toggleTheme: () => void;
}

const Home = ({ themeType, toggleTheme }: HomeProps) => {

    const aboutRef = useRef<HTMLDivElement>(null);
    const expRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Navbar themeType={themeType} toggleTheme={toggleTheme} aboutRef={aboutRef} expRef={expRef} />
            <Landing themeType={themeType} />
            <About ref={aboutRef} />
            <Experience ref={expRef} />
        </>
    )
}

export default Home
