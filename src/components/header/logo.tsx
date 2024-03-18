import * as React from 'react';

import {logo, hidden} from './header.module.css';

export default function Logo({hide, onclick}: {hide: boolean, onclick: () => any}) {
    return <div className={logo} onClick={onclick}>
        <div className={hide ? hidden : ''}>Hi there!</div>
    </div>
}