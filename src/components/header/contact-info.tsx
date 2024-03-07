import * as React from 'react';
import Github from './svg/github';
import Mail from './svg/mail';
import LinkedIn from './svg/linkedin';
import { contact } from './header.module.css';
import CV from './svg/cv';

const ContactInfo = () => <div className={contact}>
    <LinkedIn />
    <Github />
    <Mail />
    <CV />
</div>;

export default ContactInfo;