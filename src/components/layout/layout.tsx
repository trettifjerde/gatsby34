import * as React from 'react';
import {CSSTransition} from'react-transition-group';
import {layout} from './layout.module.css';
import {appear, appearActive} from './appear.module.css';

export default function Layout({children}: {children: React.ReactNode}) {
    return <CSSTransition in appear timeout={15000} classNames={{appear, appearActive}}>
        <div className={layout}>
            {children}
        </div>
    </CSSTransition>
}