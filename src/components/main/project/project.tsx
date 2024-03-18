import * as React from 'react';

import ProjLink from './proj-link';
import Leaf from '../../ui/leaf/leaf';

import { ProjectInfo } from '../../../utils/types';

import { proj, accountable, links, tags } from './project.module.css';

const Project = ({ project }: { project: ProjectInfo }) => <article className={proj}>
  <h1>{project.frontmatter?.name}</h1>

  <header>
    <h5>{project.frontmatter?.desc}</h5>

    <nav>

      <div className={accountable}>
        {project.frontmatter?.accountable?.map((item: string) => <p key={item}>{item}</p>)}
      </div>

      <div className={`leaves ${links}`}>
        {project.frontmatter?.site && <ProjLink text="site" href={project.frontmatter.site} />}
        {project.frontmatter?.repo && <ProjLink text="repo" href={project.frontmatter.repo} />}
      </div>

    </nav>
  </header>

  <section dangerouslySetInnerHTML={{__html: project.html || ''}} />

  <div className={`circles ${tags}`}>
    {project.frontmatter?.tags?.map(((tag: string) => <Leaf key={tag}>{tag}</Leaf>))}
  </div>
  
</article>

export default Project;