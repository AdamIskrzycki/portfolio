import React from 'react';
import classes from './Footer.module.css';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer: React.FC = () => {
    return <section className={classes.Footer}>
        <div className={classes.FeelFree}>FEEL FREE TO CONTACT ME!</div>
        <div className={classes.ContactInfo}>
            <div className={classes.Icon}><a href="mailto:aiskrzycki01@gmail.com" target="_blank"><MailIcon fontSize='inherit' style={{ color: 'ff9b2a' }}/></a></div>
            <div className={classes.Icon}><a href="https://www.linkedin.com/in/adam-iskrzycki-3884881b2/" target="_blank"><LinkedInIcon fontSize='inherit' style={{ color: 'ff9b2a' }}/></a></div>
            <div className={classes.Icon}><a href="https://www.facebook.com/adam.iskrzycki.3/" target="_blank"><FacebookIcon fontSize='inherit' style={{ color: 'ff9b2a' }}/></a></div>
        </div>
    </section>
}

export default Footer;