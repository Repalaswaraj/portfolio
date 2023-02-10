import React from 'react';
import './ContactBar.css';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon  from "@mui/icons-material/LinkedIn";
import InstagramIcon  from "@mui/icons-material/Instagram";
import TwitterIcon  from "@mui/icons-material/Twitter";




const ContactBar = () => {
  return (
    <div className='contact_bar_wrapper'>
    <div className='contact_bar'>
    <a href="https://www.linkedin.com/in/swaraj-repala-56992b1b7" className='contact_bar_icon' target='_blank'><LinkedInIcon /></a>
    <a href="https://github.com/Repalaswaraj" className='contact_bar_icon' target='_blank'><GitHubIcon /></a>
    <a href="https://instagram.com/swaraj_repala?igshid=ZDdkNTZiNTM=" className='contact_bar_icon' target='_blank'><InstagramIcon /></a>
    <a href="https://twitter.com/swaraj_repala?t=iq1S3hB16p1tsTU4Vuif2g&s=09" className='contact_bar_icon' target='_blank'><TwitterIcon /></a>
    <div className='contact_bar_line'></div>
    </div>
    <div className='contact_bar'>
    <a href='mailto:repala.swaraj24@gmail.com' className='contact_bar_email'>repala.swaraj24@gmail.com</a>
    <div className='contact_bar_line'></div>
    </div>
    </div>
  )
}

export default ContactBar
