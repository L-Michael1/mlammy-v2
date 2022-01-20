import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { RiFilePaper2Fill } from 'react-icons/ri'
import { Container, IconWrapper } from './Contact.styled'

type ContactProps = {
    themeType: string
}

const Contact = ({ themeType }: ContactProps) => {

    const color = themeType === 'light' ? '#818CF8' : '#8cf5d7'

    return (
        <Container
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.75, duration: 0.8 }}
        >
            <IconWrapper>
                <a href='https://github.com/L-Michael1' target='_blank'>
                    <GoMarkGithub color={color} size='2rem' />
                </a>
            </IconWrapper>
            <IconWrapper>
                <a href='https://www.linkedin.com/in/mlam977/' target='_blank'>
                    <FaLinkedin color={color} size='2rem' />
                </a>
            </IconWrapper>
            <IconWrapper>
                <a href='mailto:m.lam08@outlook.com'>
                    <MdEmail color={color} size='2rem' />
                </a>
            </IconWrapper>
            {/* WIP NEED TO ADD RESUME */}
            <IconWrapper>
                <a href='resume'>
                    <RiFilePaper2Fill color={color} size='2rem' />
                </a>
            </IconWrapper>
        </Container>
    )
}

export default Contact
