import { Container, Button } from './Footer.styled'

const Footer = () => {

    const handleScroll = () => {
        window.scrollTo({
            top: 0
        })
    }

    return (
        <Container>
            <span>© 2022 Michael Lam. All Rights Reserved</span>
            <Button
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                transition={{ duration: 0.1 }}
                onClick={handleScroll}
            >
                Scroll to top
            </Button>
        </Container>
    )
}

export default Footer;
