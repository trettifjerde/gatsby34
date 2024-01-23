import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import SEO from '../components/seo';
import NavLi from '../components/nav-li';
import Main from '../components/main';

const Index = ({data}: PageProps<Queries.IndexQuery>) => {
  const [project, setProject] = React.useState(data.allMdx.nodes[0]);

  return <>
    <header>
      
    </header>

    <Main project={project} />

    <nav>
      <ul>
        { data.allMdx.nodes.map(node => <NavLi key={node.id} active={project.id === node.id} project={node} setProject={setProject} />)} 
      </ul>
    </nav>
  </>
}

export default Index;

export const Head = () => <SEO></SEO>

export const query = graphql`
  query Index {
    allMdx(sort: {frontmatter: {name: ASC }}) {
      nodes {
        frontmatter {
          name
          repo
          url
          tags
        },
        id,
        body
      } 
    }
  }
`;