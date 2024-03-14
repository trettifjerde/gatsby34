import * as React from 'react';
import { ProjectInfo } from '../../utils/types';
import { active } from './nav.module.css';
import { proj } from '../layout/appear.module.css';
import { STAGGER_PROPERTY_NAME } from '../../utils/config';

const NavLi = ({ project, i, isActive, setProject }: {
  isActive: boolean, i: number, project: ProjectInfo, setProject: React.Dispatch<ProjectInfo>
}) => {
  return <li className={`${proj} ${isActive ? active : ''}`} style={{ [STAGGER_PROPERTY_NAME as string]: i }}
    onClick={() => setProject(project)}>

    <div>{project.frontmatter?.name}</div>

  </li>
}
export default NavLi;