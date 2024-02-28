import * as React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { ProjectInfo } from '../../utils/types';

import Project from './project';
import Hello from './hello';

import {main, enter, exit} from './main.module.css';
import Leaf from '../ui/leaf';

export default function Main({project, changeColor}: {project: ProjectInfo | null, changeColor: () => void}) {
    const mainRef = React.useRef<HTMLElement>(null);

    return <SwitchTransition mode='out-in'>
        <CSSTransition key={project?.id || 'hello'}
        classNames={{enter, exit}}
        nodeRef={mainRef}
        onExited={changeColor}
        addEndListener={(done) => mainRef.current?.addEventListener("animationend", done, false)}>

        <main className={main} ref={mainRef}>
            <Leaf glowing>
                {project && <Project project={project} />}
                {!project && <Hello changeColor={changeColor} />}
            </Leaf>
        </main>

        </CSSTransition>
    </SwitchTransition>
}