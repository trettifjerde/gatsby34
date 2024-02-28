import * as React from 'react';
import { ProjectInfo } from '../../utils/types';
import { leaves } from '../../styles/leaves.module.css';
import { proj, accountable, links } from './project.module.css';
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
        {project.frontmatter?.site && <a key="site" href={project.frontmatter?.site || '#'}>
          <Leaf hoverable>
            <h3>site</h3>
          </Leaf>
        </a>
        }

        {project.frontmatter?.repo &&
          <a key="repo" href={project.frontmatter.repo}>
            <Leaf hoverable>
              <h3>repo</h3>
            </Leaf>
          </a>
        }
      </div>

    </nav>
  </header>

  <section dangerouslySetInnerHTML={{ __html: project.html || '' }} />

  <aside>
    {project.frontmatter?.tags?.map((tag => <span key={tag}>{tag}</span>))}
  </aside>
</article>

export default Project;