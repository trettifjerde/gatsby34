import * as React from 'react';

import Logo from './logo';
import ContactInfo from './contact-info';

import { header } from './header.module.css';

export default function Header({hidden, setProject}: {hidden: boolean, setProject: React.SetStateAction<any>}) {
    return <header className={`header ${header}`}>
        <Logo hide={hidden} onclick={() => setProject(null)} />
        <ContactInfo />
    </header>
}