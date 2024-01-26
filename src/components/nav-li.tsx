import * as React from 'react';
import { ProjectInfo } from '../types';

const NavLi = ({ project, active, setProject }: { active: boolean, project: ProjectInfo, setProject: React.Dispatch<ProjectInfo> }) => {
  return <li className={active ? 'active' : ''} onClick={() => setProject(project)}>
    <div>{project.frontmatter?.name}</div>
  </li>
}
export default NavLi;