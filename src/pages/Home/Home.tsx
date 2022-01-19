import Navbar from '../../components/Navbar/Navbar'
import Typewriter from '../../components/Typewriter/Typewriter'

const Home = ({ themeType, toggleTheme }: any) => {
    return (
        <>
            <Navbar themeType={themeType} toggleTheme={toggleTheme} />
            <Typewriter text="Michael Lam" textAlign="center" initDelay={0} minTypeSpeed={120} maxTypeSpeed={140} />
        </>
    )
}

export default Home
