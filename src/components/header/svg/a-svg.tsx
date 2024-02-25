import * as React from 'react';
import SVGWrapper from './svg-wrapper';
import {svga} from '../header.module.css';

export default function ASVG({viewBox, href, title, children}: {
    viewBox: string, 
    href: string, 
    title: string,
    children: React.ReactNode
}) {
    return <a href={href} className={svga} target="_blank" title={title}>
        <SVGWrapper viewBox={viewBox}>
            {children}
        </SVGWrapper>
    </a>
}