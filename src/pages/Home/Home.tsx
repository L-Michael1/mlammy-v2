import Navbar from '../../components/Navbar/Navbar'

const Home = ({ theme, toggleTheme }: any) => {
    return (
        <div>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
        </div>
    )
}

export default Home
