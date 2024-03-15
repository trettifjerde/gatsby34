import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import { LAST_TO_APPEAR_ID } from '../../utils/config';

import "../../styles/animations.css";
import "../../styles/variables.css";
import "../../styles/global.css";

import { layout, blocker } from './layout.module.css';
import { appear, appearDone } from './appear.module.css';

export default function Layout({ children }: {
    children: React.ReactNode
}) {
    const [interactive, setInteractive] = React.useState(false);
    const nodeRef = React.useRef<HTMLDivElement>(null);

    return <>
        <CSSTransition in appear={true}
            addEndListener={(node, done) => node
                .querySelector(`#${LAST_TO_APPEAR_ID}`)
                ?.addEventListener('animationend', done, false)
            }
            onEntered={(node, isAppearing) => {
                if (isAppearing)
                    setInteractive(true)
            }}
            classNames={{ appear, appearDone }}>

            <div className={layout}>
                {children}
            </div>

        </CSSTransition>
        {!interactive && <div className={blocker} />}
    </>
}