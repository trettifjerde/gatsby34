import * as React from 'react';
import Github from './svg/github';
import Mail from './svg/mail';
import LinkedIn from './svg/linkedin';
import { contact } from './header.module.css';

const ContactInfo = () => <div className={contact}>
    <LinkedIn />
    <Mail />
    <Github />
</div>;

export default ContactInfo;