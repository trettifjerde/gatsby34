import * as React from 'react';
import NavLi from './nav-li';
import { ProjectInfo } from '../../utils/types';
import {nav} from './nav.module.css';

type NavProps = {
    projects: Array<ProjectInfo>, 
    activeId?: string,
    setProject: React.Dispatch<React.SetStateAction<ProjectInfo|null>>
};

export default function Nav({projects, activeId, setProject}: NavProps) {
    return <nav className={`gradient-frame ${nav}`}>
      <ul>
        {
            projects.map(project => <NavLi key={project.id} 
              isActive={(!!activeId) && (activeId === project.id)} 
                project={project} setProject={setProject} />)
        }
      </ul>
    </nav>
}