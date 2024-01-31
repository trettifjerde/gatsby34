import * as React from 'react';

export default function Logo({hidden, onclick}: {hidden: boolean, onclick: () => any}) {
    return <div className='logo' onClick={onclick}>
        <div className={hidden ? 'hidden' : ''}>Hi there!</div>
    </div>
}