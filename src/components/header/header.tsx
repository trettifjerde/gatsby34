import * as React from 'react';
import Logo from './logo';
import ContactInfo from './contact-info';
import { LAST_TO_APPEAR_ID } from '../../utils/config';
import { header as ah } from '../layout/appear.module.css';
import { header } from './header.module.css';

export default function Header({hidden, setProject}: {hidden: boolean, setProject: React.SetStateAction<any>}) {
    return <header id={LAST_TO_APPEAR_ID} className={`${header} ${ah}`}>
        <Logo hide={hidden} onclick={() => setProject(null)} />
        <ContactInfo />
    </header>
}