import * as React from 'react';
import { ProjectInfo } from '../../utils/types';
import { active } from './nav.module.css';

const NavLi = ({ project, isActive, setProject }: { isActive: boolean, project: ProjectInfo, setProject: React.Dispatch<ProjectInfo> }) => {
  return <li className={isActive ? active : ''} onClick={() => setProject(project)}>
    <div>{project.frontmatter?.name}</div>
  </li>
}
export default NavLi;