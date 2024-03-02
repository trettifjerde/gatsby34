import * as React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { ProjectInfo } from '../../utils/types';

import Project from './project';
import Hello from './hello';
import Leaf from '../ui/leaf';

import {main, enter, exit} from './main.module.css';
import {main as am} from '../layout/appear.module.css';

export default function Main({ project, changeColor}: {
    project: ProjectInfo | null, 
    changeColor: () => void,
}) {
    const mainRef = React.useRef<HTMLElement>(null);

    return <SwitchTransition mode='out-in'>
        <CSSTransition key={project?.id || 'hello'}
        classNames={{enter, exit}}
        nodeRef={mainRef}
        onExited={changeColor}
        addEndListener={(done) => mainRef.current?.addEventListener("animationend", done, false)}>

        <main className={main} ref={mainRef}>
            <Leaf className={am}>
                {project && <Project project={project} />}
                {!project && <Hello changeColor={changeColor} />}
            </Leaf>
        </main>

        </CSSTransition>
    </SwitchTransition>
}