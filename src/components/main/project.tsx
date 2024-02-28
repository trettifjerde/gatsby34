import * as React from 'react';
import { ProjectInfo } from '../../utils/types';
import { leaves, hover } from '../../styles/leaves.module.css';
import { info, accountable, links } from './project.module.css';

const Project = ({ project }: { project: ProjectInfo }) => <article>
  <h1>{project.frontmatter?.name}</h1>

  <div className={info}>
    <h5>{project.frontmatter?.desc}</h5>

    <div>

      <div className={accountable}>
        {project.frontmatter?.accountable?.map(item => <p key={item}>{item}</p>)}
      </div>

      <div className={`${leaves} ${links}`}>
        {project.frontmatter?.site && <a className={`leaf ${hover}`} href={project.frontmatter?.site || '#'}>
          <h3>site</h3>
        </a>}

        {project.frontmatter?.repo && <a className={`leaf ${hover}`} href={project.frontmatter.repo}>
          <h3>repo</h3>
        </a>
        }
      </div>

    </div>
  </div>

  <section dangerouslySetInnerHTML={{ __html: project.html || '' }} />

  <aside>
    {project.frontmatter?.tags?.map((tag => <span key={tag}>{tag}</span>))}
  </aside>
</article>

export default Project;