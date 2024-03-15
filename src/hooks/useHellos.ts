import { graphql, useStaticQuery } from 'gatsby';
import { HelloInfo } from '../utils/types';

const useHellos = () => {
    const data: HelloInfo[]  = useStaticQuery(graphql`
    query Hellos {
        allMarkdownRemark(
            filter: { frontmatter: { lang: { ne: null } } }
            sort: { frontmatter: { order: ASC } }
        ) {
            nodes {
                html
                frontmatter {
                  title
                  lang
                  order
                }
            }
        }
    }`).allMarkdownRemark.nodes;

    return data;
};

export default useHellos;