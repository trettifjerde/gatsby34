import * as React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import Project from './project/project';
import Hello from './hello/hello';
import Leaf from '../ui/leaf/leaf';

import { ProjectInfo } from '../../utils/types';

import {main, enter, exit} from './main.module.css';

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
        addEndListener={(done) => mainRef.current?.querySelector('h1')?.addEventListener("animationend", done, false)}>

        <main className={main} ref={mainRef}>
            <Leaf shadow className="main">
                {project && <Project project={project} />}
                {!project && <Hello changeColor={changeColor} />}
            </Leaf>
        </main>

        </CSSTransition>
    </SwitchTransition>
}