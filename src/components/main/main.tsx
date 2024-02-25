import * as React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { ProjectInfo } from '../../utils/types';

import Project from './project';
import Hello from './hello';

import {main} from './main.module.css';

export default function Main({project, changeColor}: {project: ProjectInfo | null, changeColor: () => void}) {
    const mainRef = React.useRef<HTMLElement>(null);

    return <SwitchTransition mode='out-in'>
        <CSSTransition key={project?.id || 'hello'}
        nodeRef={mainRef}
        onExited={changeColor}
        addEndListener={(done) => mainRef.current?.addEventListener("animationend", done, false)}>

        <main className={`gradient-frame ${main}`} ref={mainRef}>
            {project && <Project project={project} />}
            {!project && <Hello changeColor={changeColor} />}
        </main>

        </CSSTransition>
    </SwitchTransition>
}