import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

import { LAST_TO_APPEAR_ID } from '../../utils/config';

import "../../styles/animations.css";
import "../../styles/variables.css";
import "../../styles/global.css";
import "../../styles/appear.css";

import { layout, blocker } from './layout.module.css';

export default function Layout({ children }: {
    children: React.ReactNode
}) {
    const [interactive, setInteractive] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    return <>
        <CSSTransition in 
            appear={true}
            nodeRef={ref}
            addEndListener={(done) => document
                .getElementById(LAST_TO_APPEAR_ID)
                ?.addEventListener('animationend', done, false)
            }
            onEntered={(isAppearing) => {
                if (isAppearing)
                    setInteractive(true)
            }}
            classNames={{ appear: 'appear', appearDone: 'appear-done' }}>

            <div ref={ref} id="backToTop" className={layout}>
                {children}
            </div>

        </CSSTransition>
        {!interactive && <div className={blocker} />}
    </>
}