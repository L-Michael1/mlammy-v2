import Navbar from '../../components/Navbar/Navbar'

const Home = ({ themeType, toggleTheme }: any) => {
    return (
        <div>
            <div>
                hello
            </div>
            <Navbar themeType={themeType} toggleTheme={toggleTheme} />
        </div>
    )
}

export default Home
