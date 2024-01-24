import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import SEO from '../components/seo';
import NavLi from '../components/nav-li';
import Main from '../components/main';

const Index = ({data}: PageProps<Queries.IndexQuery>) => {
  const [project, setProject] = React.useState(data.allMarkdownRemark.edges[0].node);

  return <>
    <header>
      
    </header>

    <Main project={project} />

    <nav>
      <ul>
        { data.allMarkdownRemark.edges
          .map(edge => edge.node)
          .map(node => <NavLi key={node.id} active={project.id === node.id} project={node} setProject={setProject} />)} 
      </ul>
    </nav>
  </>
}

export default Index;

export const Head = () => <SEO></SEO>

export const query = graphql`
  query Index {
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            name
            repo
            url
            tags
          }
        } 
      }
    }
  }
`;