import * as React from 'react';
import { PageProps, graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import Main from '../components/main/main';
import Nav from '../components/nav/nav';

import { updateGradient } from '../utils/helpers';
import { ProjectInfo } from '../utils/types';

const Index = ({ data }: PageProps<Queries.IndexQuery>) => {

  const [currentProject, setCurrentProject] = React.useState<ProjectInfo|null>(null);
  const setColorDir = React.useState<[number, number]>([0, 1])[1]; // tuple of [color, direction], where color is a number from 0 to N, and direction is 1 or -1
  const changeColor = React.useCallback(() => setColorDir(updateGradient), [setColorDir]);

  return <Layout>
    <Header hidden={!currentProject} setProject={setCurrentProject} />
    <Nav projects={data.allMarkdownRemark.nodes} activeId={currentProject?.id} setProject={setCurrentProject}/>
    <Main project={currentProject} changeColor={changeColor} />
  </Layout>
}

export default Index;

export const Head = () => <SEO />

export const query = graphql`
  query Index {
    allMarkdownRemark(
      filter: { frontmatter: { lang: { eq: null } } }
      sort: { frontmatter: { order: DESC } }
    ) {
      nodes {
        html
        id
        frontmatter {
          name
          desc
          repo
          site
          tags
          accountable
        }
      }
    }
  }
`;