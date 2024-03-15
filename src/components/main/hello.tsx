import * as React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { graphql, useStaticQuery } from 'gatsby';
import Leaf from '../ui/leaf';
import { STAGGER_PROPERTY_NAME } from '../../utils/config';
import { lang } from '../layout/appear.module.css';
import { hello, langs, enter, exit, active } from './hello.module.css';
import { leaves } from '../../styles/leaves.module.css';

export default function Hello({ changeColor }: { 
    changeColor: () => void
}) {
    const q = useStaticQuery(hQuery) as Queries.HellosQuery;
    const data = q.allMarkdownRemark.nodes;
    const [langI, setLangI] = React.useState(data.length - 1);
    const content = React.useMemo(() => (data[langI] || data[data.length - 1]), [langI]);

    return <article className={hello}>
        <SwitchTransition mode='out-in'>
            <CSSTransition key={langI}
                classNames={{ enter, exit }}
                onExited={changeColor}
                addEndListener={(node, done) => node.addEventListener('animationend', done, false)}>

                <div>
                    <h1>{content.frontmatter?.title}</h1>

                    <section dangerouslySetInnerHTML={{__html:content.html || ''}}></section>

                    <div className={`${leaves} ${langs}`}>
                        {data.map((info, i) => <Leaf key={i}
                            hoverable style={{ [STAGGER_PROPERTY_NAME]: i }}
                            className={`${lang} ${i === langI ? active : ''}`}
                            onClick={() => setLangI(i)}>
                            {info.frontmatter?.lang}
                        </Leaf>)}
                    </div>
                </div>
            </CSSTransition>
        </SwitchTransition>
    </article>
}

const hQuery = graphql`
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
                }
            }
        }
    }`;