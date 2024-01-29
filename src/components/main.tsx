import * as React from 'react';
import { ProjectInfo } from '../types';

const Main = ({ project }: { project: ProjectInfo }) => {
return <main>
    <article>
      <h1>{project.frontmatter?.name}</h1>

      <div className='links'>
        <a href={project.frontmatter?.url || '#'}>
          <h3>site</h3>
        </a>

        { project.frontmatter?.repo && <a href={project.frontmatter.repo}>
            <h3>repo</h3>
          </a>
        }
      </div>

      <section dangerouslySetInnerHTML={{ __html: project.html || '' }} />

      <aside>
        {project.frontmatter?.tags?.map((tag => <span key={tag}>{tag}</span>))}
      </aside>

    </article>
  </main>
}

export default Main;