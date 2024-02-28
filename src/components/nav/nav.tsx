import * as React from 'react';
import NavLi from './nav-li';
import { ProjectInfo } from '../../utils/types';
import {nav} from './nav.module.css';
import Leaf from '../ui/leaf';

type NavProps = {
    projects: Array<ProjectInfo>, 
    activeId?: string,
    setProject: React.Dispatch<React.SetStateAction<ProjectInfo|null>>
};

export default function Nav({projects, activeId, setProject}: NavProps) {
    return <nav className={nav}>
      <aside>projects</aside>
      <Leaf glowing>
        <ul>
          {
              projects.map(project => <NavLi key={project.id} 
                isActive={(!!activeId) && (activeId === project.id)} 
                  project={project} setProject={setProject} />)
          }
        </ul>
      </Leaf>
    </nav>
}