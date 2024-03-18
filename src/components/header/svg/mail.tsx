import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

import SVGWrapper from './svg-wrapper';
import Leaf from '../../ui/leaf/leaf';

import { EMAIL_ADDRESS, POPUP_DURATION } from '../../../utils/config';

import { svga, mailBtn, popup, enter, exit } from '../header.module.css';

export default function Mail() {
    const [alert, setAlert] = React.useState(false);
    const [alertMsg, setAlertMsg] = React.useState(<></>);
    const timer = React.useRef<any>(null);

    const copyEmail = async() => {
        if (timer.current) 
            clearTimeout(timer.current);

        const {msg, dur} = await new Promise<void>(async (resolve, reject) => {
            try {
                await navigator.clipboard.writeText(EMAIL_ADDRESS);
                resolve();
            }
            catch(err) {
                console.log(err);
                reject();
            }
        })
        .then(() => ({
            msg: <span> - copied!</span>,
            dur: POPUP_DURATION
        }))
        .catch(err => ({
            msg: <div>Failed to copy to clipboard, please, copy manually!</div>,
            dur: POPUP_DURATION * 1.5
        }))

        setAlertMsg(msg);
        setAlert(true);

        timer.current = setTimeout(() => {
            setAlert(false);
            timer.current = null;
        }, dur);
    };

    return <button className={`${mailBtn} ${svga}`} onClick={copyEmail} title="copy email address">
        <SVGWrapper viewBox="0 0 32 32">
            <path d="M16,16.8l13.8-9.2C29.2,5.5,27.3,4,25,4H7C4.7,4,2.8,5.5,2.2,7.6L16,16.8z" />
            <path d="M16.6,18.8C16.4,18.9,16.2,19,16,19s-0.4-0.1-0.6-0.2L2,9.9V23c0,2.8,2.2,5,5,5h18c2.8,0,5-2.2,5-5V9.9L16.6,18.8z" />
        </SVGWrapper>

        <CSSTransition in={!!alert} timeout={300} classNames={{enter, exit}} mountOnEnter unmountOnExit>
            <div className={popup}>
                <Leaf shadow>
                    <strong>{EMAIL_ADDRESS}</strong>
                    {alertMsg}
                </Leaf>
            </div>
        </CSSTransition>
    </button>
}