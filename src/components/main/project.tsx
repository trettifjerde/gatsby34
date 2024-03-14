import * as React from 'react';
import ProjLink from './proj-link';

import { ProjectInfo } from '../../utils/types';
import { leaves } from '../../styles/leaves.module.css';
import { proj, accountable, links, tags } from './project.module.css';
import Leaf from '../ui/leaf';

const Project = ({ project }: { project: ProjectInfo }) => <article className={proj}>
  <h1>{project.frontmatter?.name}</h1>

  <header>
    <h5>{project.frontmatter?.desc}</h5>

    <nav>

      <div className={accountable}>
        {project.frontmatter?.accountable?.map(item => <p key={item}>{item}</p>)}
      </div>

      <div className={`${leaves} ${links}`}>
        {project.frontmatter?.site && <ProjLink text="site" href={project.frontmatter.site} />}
        {project.frontmatter?.repo && <ProjLink text="repo" href={project.frontmatter.repo} />}
      </div>

    </nav>
  </header>

  <section dangerouslySetInnerHTML={{ __html: project.html || '' }} />

  <aside className={tags}>
    {project.frontmatter?.tags?.map((tag => <Leaf key={tag}>{tag}</Leaf>))}
  </aside>
</article>

export default Project;