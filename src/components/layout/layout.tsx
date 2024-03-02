import * as React from 'react';
import {CSSTransition} from'react-transition-group';
import {layout} from './layout.module.css';
import {appear, appearActive} from './appear.module.css';
import { LAST_TO_APPEAR_ID } from '../../config';

export default function Layout({children}: {children: React.ReactNode}) {
    return <CSSTransition in appear 
        addEndListener={(node, done) => node.querySelector(`#${LAST_TO_APPEAR_ID}`)?.addEventListener('animationend', done, false)}
        classNames={{appear, appearActive}}>
        <div className={layout}>
            {children}
        </div>
    </CSSTransition>
}