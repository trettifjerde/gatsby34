import * as React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { hello, langs, active, enter, exit } from './hello.module.css';
import { leaves } from '../../styles/leaves.module.css';

export default function Hello({ changeColor }: { changeColor: () => void }) {
    const [lang, setLang] = React.useState<Lang>('en');
    const ref = React.useRef<HTMLDivElement>(null);

    return <article className={hello}>
        <SwitchTransition mode='out-in'>
            <CSSTransition key={lang}
                classNames={{
                    enter,
                    exit
                }}
                nodeRef={ref}
                onExited={changeColor}
                addEndListener={(done) => ref.current?.addEventListener('animationend', done, false)}>

                <div ref={ref}>
                    <h1>{TEXTS[lang].h1}</h1>

                    <section>{TEXTS[lang].section}</section>

                    <div className={`${leaves} ${langs}`}>
                        {LANGS.map(l => <span key={l} className={l === lang ? active : ''} onClick={() => setLang(l)}>
                            <h3>{l}</h3>
                        </span>)}
                    </div>
                </div>
            </CSSTransition>
        </SwitchTransition>
    </article>
}

const TEXTS = {
    en: {
        h1: "Hi there!",
        section: "My name is Sasha.",
    },
    no: {
        h1: "Hei!",
        section: "Jeg heter Sasja.",
    },
    hr: {
        h1: "Bok!",
        section: "Zovem se Aleksandra.",
    },
    ru: {
        h1: "Привет!",
        section: "Меня зовут Саша.",
    },
};

type Lang = keyof typeof TEXTS;

const LANGS = Object.keys(TEXTS) as Lang[];