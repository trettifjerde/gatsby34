import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import SEO from '../components/seo';
import NavLi from '../components/nav-li';
import Main from '../components/main';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const LAST_COLOR = 11;
const STEP = 100 / (LAST_COLOR - 1);
const BG_POSITION = '--bg-position';
const COLOR1_PROPERTY = '--grad1';
const COLOR2_PROPERTY = '--grad2';

const Index = ({data}: PageProps<Queries.IndexQuery>) => {
  const [project, setProject] = React.useState(data.allMarkdownRemark.edges[0].node);
  const [nextGradient, setNextGradient] = React.useState([1, 1]);

  return <>
    <header>
      
    </header>

    <SwitchTransition mode='out-in'>

      <CSSTransition key={project.id} 
        onExited={(node) => {
          const color = nextGradient[0]; 
          const bgStep = STEP * color;

          document.documentElement.style.setProperty(BG_POSITION, `${bgStep}%`);
          document.documentElement.style.setProperty(COLOR1_PROPERTY, `var(--c${color})`);
          document.documentElement.style.setProperty(COLOR2_PROPERTY, `var(--c${color + 1})`);

          setNextGradient(prev => {
            const [color, direction] = prev;
            const nextColor = color + direction;

            if ((nextColor === LAST_COLOR) || (nextColor === 0))
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
            accountable
          }
        } 
      }
    }
  }
`;