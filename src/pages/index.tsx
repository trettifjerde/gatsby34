import * as React from 'react';
import { PageProps, graphql } from 'gatsby';

import SEO from '../components/seo';

import { updateGradient } from '../utils/helpers';
import { ProjectInfo } from '../utils/types';

import Header from '../components/header/header';
import Main from '../components/main/main';
import Nav from '../components/nav/nav';

const Index = ({ data }: PageProps<Queries.IndexQuery>) => {

  const allProjects = React.useMemo(() => data.allMarkdownRemark.edges.map(edge => edge.node), [data]);
  const [currentProject, setCurrentProject] = React.useState<ProjectInfo | null>(null);
  const setColorDir = React.useState<[number, number]>([0, 1])[1]; // tuple of [color, direction], where color is a number from 0 to N, and direction is 1 or -1
  const changeColor = React.useCallback(() => setColorDir(updateGradient), [setColorDir]);

  return <>
    <Header hidden={!currentProject} setProject={setCurrentProject} />
    <Nav projects={allProjects} activeId={currentProject?.id} setProject={setCurrentProject}/>
    <Main project={currentProject} changeColor={changeColor} />
  </>
}

export default Index;

export const Head = () => <SEO></SEO>

export const query = graphql`
  query Index {
    allMarkdownRemark(sort: { frontmatter: { order: DESC }}) {
      edges {
        node {
          html
          id
          frontmatter {
            name
            desc
            repo
            site
            tags
            accountable
            order
          }
        } 
      }
    }
  }
`;