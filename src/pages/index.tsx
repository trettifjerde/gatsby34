import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import SEO from '../components/seo';
import NavLi from '../components/nav-li';
import Main from '../components/main';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Header from '../components/header';
import { BG_POS_PROPERTY_NAME, COLOR1_PROPERTY_NAME, COLOR2_PROPERTY_NAME, LAST_COLOR_N, BG_POS_SHIFT_STEP } from '../config';

const Index = ({data}: PageProps<Queries.IndexQuery>) => {
  const [project, setProject] = React.useState(data.allMarkdownRemark.edges[0].node);
  const [nextGradient, setNextGradient] = React.useState([1, 1]);

  return <>
    <Header />

    <SwitchTransition mode='out-in'>

      <CSSTransition key={project.id} 
        onExited={(node) => {
          const color = nextGradient[0]; 
          const bgStep = BG_POS_SHIFT_STEP * color;

          document.documentElement.style.setProperty(BG_POS_PROPERTY_NAME, `${bgStep}%`);
          document.documentElement.style.setProperty(COLOR1_PROPERTY_NAME, `var(--c${color})`);
          document.documentElement.style.setProperty(COLOR2_PROPERTY_NAME, `var(--c${color + 1})`);

          setNextGradient(prev => {
            const [color, direction] = prev;
            const nextColor = color + direction;

            if ((nextColor === LAST_COLOR_N) || (nextColor === 0))
              return [color - 1, direction * -1];

            return [nextColor, direction];      
          })
        }}
        addEndListener={(node, done) => node.addEventListener("animationend", done, false)}>

        <Main project={project} />

      </CSSTransition>

    </SwitchTransition>


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