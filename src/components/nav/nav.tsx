import * as React from 'react';

import NavLi from './nav-li';
import Leaf from '../ui/leaf/leaf';

import { ProjectInfo } from '../../utils/types';

import {nav} from './nav.module.css';

type NavProps = {
    projects: readonly ProjectInfo[], 
    activeId?: string,
    setProject: (p: ProjectInfo) => void
};

export default function Nav({projects, activeId, setProject}: NavProps) {
    return <nav className={nav}>
      <aside className="projtitle">projects</aside>
      <Leaf shadow className="nav">
        <ul>
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