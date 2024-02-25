import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import SVGWrapper from './svg-wrapper';
import { EMAIL_ADDRESS, POPUP_DURATION } from '../../../config';
import { svga, popup } from '../header.module.css';

export default function Mail() {
    const [alert, setAlert] = React.useState(false);
    const timer = React.useRef<any>(null);

    const copyEmail = () => {
        if (timer.current) 
            clearTimeout(timer.current);

        timer.current = setTimeout(() => {
            setAlert(false);
            timer.current = null;
        }, POPUP_DURATION);

        navigator.clipboard.writeText(EMAIL_ADDRESS);
        setAlert(true);
    };

    return <div className={svga} onClick={copyEmail} title="copy email address">
        <SVGWrapper viewBox="0 0 32 32">
            <path d="M16,16.8l13.8-9.2C29.2,5.5,27.3,4,25,4H7C4.7,4,2.8,5.5,2.2,7.6L16,16.8z" />
            <path d="M16.6,18.8C16.4,18.9,16.2,19,16,19s-0.4-0.1-0.6-0.2L2,9.9V23c0,2.8,2.2,5,5,5h18c2.8,0,5-2.2,5-5V9.9L16.6,18.8z" />
        </SVGWrapper>

        <CSSTransition in={alert} timeout={300} mountOnEnter unmountOnExit>
            <div className={popup}>
                <strong>{EMAIL_ADDRESS}</strong> - copied!
            </div>
        </CSSTransition>

    </div>
}