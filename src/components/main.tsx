import * as React from 'react';
import { ProjectInfo } from '../types';

const Main = ({project}: {project: ProjectInfo}) => <main>
      <h1>{project.frontmatter?.name}</h1>

      <article dangerouslySetInnerHTML={{__html: project.html || ''}} />

      <aside>
        {project.frontmatter?.tags?.map((tag => <span key={tag}>{tag}</span>))}
      </aside>
</main>

export default Main;