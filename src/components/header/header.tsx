import * as React from 'react';
import Logo from './logo';
import ContactInfo from './contact-info';
import { header } from './header.module.css';
import { appearheader } from '../layout/appear.module.css';
import { LAST_TO_APPEAR_ID } from '../../config';

export default function Header({hidden, setProject}: {hidden: boolean, setProject: React.SetStateAction<any>}) {
    return <header id={LAST_TO_APPEAR_ID} className={`${header} ${appearheader}`}>
        <Logo hide={hidden} onclick={() => setProject(null)} />
        <ContactInfo />
    </header>
}