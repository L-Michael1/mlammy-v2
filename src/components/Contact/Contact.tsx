import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { RiFilePaper2Fill } from 'react-icons/ri'
import { Container, IconWrapper } from './Contact.styled'
import { motion } from 'framer-motion'
import Resume from '../../assets/resume.pdf'

type ContactProps = {
    themeType: string
}

const Contact = ({ themeType }: ContactProps) => {

    const color = themeType === 'light' ? '#818CF8' : '#8cf5d7'
    const contacts = [
        {
            link: 'https://github.com/L-Michael1',
            icon: <GoMarkGithub color={color} size='2rem' />,
        },
        {
            link: 'https://www.linkedin.com/in/mlam977/',
            icon: <FaLinkedin color={color} size='2rem' />,
        },
        {
            link: 'mailto:m.lam08@outlook.com',
            icon: <MdEmail color={color} size='2rem' />,
        },
        {
            link: Resume,
            icon: <RiFilePaper2Fill color={color} size='2rem' />,
        }
    ]

    return (
        <Container>
            {contacts.map((contact, idx) => (
                <motion.div
                    whileHover={{ scale: 1.1 }}
                >
                    <IconWrapper
                        key={idx}
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 3.75 + (idx / 4), duration: 0.8, type: 'spring', stiffness: 50 }}
                    >
                        <a href={contact.link} target='_blank' rel="noreferrer">
                            {contact.icon}
                        </a>
                    </IconWrapper>
                </motion.div>
            ))}
        </Container>
    )
}

export default Contact
