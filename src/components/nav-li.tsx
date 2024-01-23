import * as React from 'react';
import { ProjectInfo } from '../types';

const NavLi = ({project, active, setProject}: {active: boolean, project: ProjectInfo, setProject: React.Dispatch<ProjectInfo>}) => {
    return <li className={active ? 'active' : ''} onClick={() => setProject(project)}>
    {project.frontmatter?.name}
  </li>
}

export default NavLi;