import * as React from 'react';
import SVGWrapper from './svg-wrapper';

export default function ASVG({viewBox, href, title, children}: {
    viewBox: string, 
    href: string, 
    title: string,
    children: React.ReactNode
}) {
    return <a href={href} className="a-svg" target="_blank" title={title}>
        <SVGWrapper viewBox={viewBox}>
            {children}
        </SVGWrapper>
    </a>
}