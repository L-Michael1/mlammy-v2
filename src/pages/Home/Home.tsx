import Navbar from '../../components/Navbar/Navbar'

const Home = ({ themeType, toggleTheme }: any) => {
    return (
        <>
            <Navbar themeType={themeType} toggleTheme={toggleTheme} />
        </>
    )
}

export default Home
