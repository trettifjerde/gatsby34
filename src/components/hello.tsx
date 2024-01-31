import * as React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

export default function Hello() {
    const [lang, setLang] = React.useState<Lang>('en');
    const h1Ref = React.useRef<HTMLHeadingElement>(null);
    const info = TEXTS[lang];

    return <>
        <SwitchTransition mode='out-in'>
            <CSSTransition key={lang} nodeRef={h1Ref}
                addEndListener={(done) => h1Ref.current?.addEventListener('animationend', done, false)}>
                <div className='hello'>
                    <h1 ref={h1Ref}>{info.h1}</h1>
                    <section>{info.section}</section>
                </div>
            </CSSTransition>
        </SwitchTransition>

        <div className='links row'>

            {LANGS.map(l => <span key={l} className={`a ${l === lang ? 'active' : ''}`} onClick={() => setLang(l)}>
                <h3>{l}</h3>
            </span>)}
        </div>
    </>
}

const TEXTS = {
    en: {
        h1: "Hi there!",
        section: "My name is Sasha.",
    },
    no: {
        h1: "Hei paa deg!",
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