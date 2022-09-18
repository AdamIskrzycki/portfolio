import React from 'react';
import classes from './Footer.module.css';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = (props) => {
    return <section className={classes.Footer}>
        <div className={classes.FeelFree}>FEEL FREE TO CONTACT ME!</div>
        <div className={classes.ContactInfo}>
            <div classNeme={classes.Icon}><MailIcon fontSize='inherit'/></div>
            <div classNeme={classes.Icon}><LinkedInIcon fontSize='inherit'/></div>
            <div classNeme={classes.Icon}><FacebookIcon fontSize='inherit'/></div>
        </div>
        <div className={classes.GitHub}>

        </div>
    </section>
}

export default Footer;