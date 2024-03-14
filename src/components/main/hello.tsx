import * as React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Leaf from '../ui/leaf';
import { STAGGER_PROPERTY_NAME } from '../../utils/config';
import { HELLO as HC } from '../../utils/data';
import { hello, langs, enter, exit, active } from './hello.module.css';
import { lang } from '../layout/appear.module.css';
import { leaves } from '../../styles/leaves.module.css';

export default function Hello({ changeColor }: { 
    changeColor: () => void
}) {
    const [langI, setLangI] = React.useState(HC.length - 1);
    const ref = React.useRef<HTMLDivElement>(null);
    const content = React.useMemo(() => (HC[langI] || HC[HC.length - 1]), [langI]);

    return <article className={hello}>
        <SwitchTransition mode='out-in'>
            <CSSTransition key={langI}
                classNames={{ enter, exit }}
                nodeRef={ref}
                onExited={changeColor}
                addEndListener={(done) => ref.current?.addEventListener('animationend', done, false)}>

                <div ref={ref}>
                    <h1>{content.h1}</h1>

                    <section>{content.section}</section>

                    <div className={`${leaves} ${langs}`}>
                        {HC.map((l, i) => <Leaf key={i}
                            hoverable style={{ [STAGGER_PROPERTY_NAME]: i }}
                            className={`${lang} ${i === langI ? active : ''}`}
                            onClick={() => setLangI(i)}>
                            {l.lang}
                        </Leaf>)}
                    </div>
                </div>
            </CSSTransition>
        </SwitchTransition>
    </article>
}