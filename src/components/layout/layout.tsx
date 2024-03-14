import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import { layout, blocker } from './layout.module.css';
import { appear, appearDone } from './appear.module.css';
import { LAST_TO_APPEAR_ID } from '../../utils/config';

export default function Layout({ children }: {
    children: React.ReactNode
}) {
    const [interactive, setInteractive] = React.useState(false);
    const nodeRef = React.useRef<HTMLDivElement>(null);

    return <>
        <CSSTransition in appear={true}
            nodeRef={nodeRef}
            addEndListener={(done) => nodeRef.current
                ?.querySelector(`#${LAST_TO_APPEAR_ID}`)
                ?.addEventListener('animationend', done, false)
            }
            onEntered={(isAppearing) => {
                if (isAppearing)
                    setInteractive(true)
            }}
            classNames={{ appear, appearDone }}>

            <div className={layout} ref={nodeRef}>
                {children}
            </div>

        </CSSTransition>
        {!interactive && <div className={blocker} />}
    </>
}