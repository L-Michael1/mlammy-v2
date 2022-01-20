import { useRef } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../../components/Landing/Landing'
import About from '../../components/About/About'

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
        </>
    )
}

export default Home
