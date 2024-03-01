import * as React from 'react';
import NavLi from './nav-li';
import Leaf from '../ui/leaf';
import { ProjectInfo } from '../../utils/types';
import {appearnav, appearel} from '../layout/appear.module.css';
import {nav} from './nav.module.css';

type NavProps = {
    projects: Array<ProjectInfo>, 
    activeId?: string,
    setProject: React.Dispatch<React.SetStateAction<ProjectInfo|null>>
};

export default function Nav({projects, activeId, setProject}: NavProps) {
    return <nav className={nav}>
      <aside className={appearel}>projects</aside>
      <Leaf className={appearnav}>
        <ul className={appearel}>
          {
              projects.map((project, i) => <NavLi 
                key={i} i={i}
                isActive={(!!activeId) && (activeId === project.id)} 
                  project={project} setProject={setProject} />)
          }
        </ul>
      </Leaf>
    </nav>
}