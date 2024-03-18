import * as React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { graphql, useStaticQuery } from 'gatsby';

import Leaf from '../../ui/leaf/leaf';

import { LAST_TO_APPEAR_ID, STAGGER_PROPERTY_NAME } from '../../../utils/config';

import { hello, langs, enter, exit, active } from './hello.module.css';


export default function Hello({ changeColor }: { 
    changeColor: () => void
}) {
    const data = useHellos();
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

                    <div className={`leaves ${langs}`}>
                        {data.map((info, i) => <Leaf key={i}
                            hoverable style={{ [STAGGER_PROPERTY_NAME]: i }}
                            className={`lang ${i === langI ? active : ''}`}
                            onClick={() => setLangI(i)}>
                            {info.frontmatter?.lang}
                        </Leaf>)}
                    </div>

                    <section id={LAST_TO_APPEAR_ID} dangerouslySetInnerHTML={{__html: content.html || ''}} />

                </div>
            </CSSTransition>
        </SwitchTransition>
    </article>
}


function useHellos() {
    const data : Queries.HellosQuery = useStaticQuery(graphql`
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
            }`
    );
        
    return data.allMarkdownRemark.nodes;
};