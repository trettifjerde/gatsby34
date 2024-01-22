import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import SEO from '../components/seo';
import NavLi from '../components/nav-li';

const Index = ({data}: PageProps<Queries.IndexQuery>) => {
  const [project, setProject] = React.useState(data.allMdx.nodes[0]);

  return <div className='body'>
    <main>
      {project.body}
    </main>

    <nav>
      <ul>
        { data.allMdx.nodes.map(node => <NavLi id={node.id} info={node.frontmatter} />)}
      </ul>
    </nav>
  </div>
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
          slug
        },
        id,
        body
      } 
    }
  }
`;