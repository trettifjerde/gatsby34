import * as React from 'react';
import { ProjectInfo } from '../types';

const Main = ({ project }: { project: ProjectInfo }) => <main>
    <article>

      <h1>{project.frontmatter?.name}</h1>

      <div className='info'>
        <div className='accountable'>
          {project.frontmatter?.accountable?.map(item => <p key={item}>{item}</p>)}
        </div>

        <h5>{project.frontmatter?.desc}</h5>

        <div className='links'>

          {project.frontmatter?.site && <a href={project.frontmatter?.site || '#'}>
            <h3>site</h3>
          </a>}

          { project.frontmatter?.repo && <a href={project.frontmatter.repo}>
              <h3>repo</h3>
            </a>
          }
        </div>

      </div>

      <section dangerouslySetInnerHTML={{ __html: project.html || '' }} />

      <aside>
        {project.frontmatter?.tags?.map((tag => <span key={tag}>{tag}</span>))}
      </aside>

    </article>
  </main>

export default Main;