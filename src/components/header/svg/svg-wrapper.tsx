import * as React from 'react';
import { SVG_DIMENS } from '../../../utils/config';

export default function SVGWrapper({viewBox, children}: {viewBox: string, children: React.ReactNode}) {
    return (
        <svg viewBox={viewBox}
            height={SVG_DIMENS}
            xmlns="http://www.w3.org/2000/svg" version="1.1">
                {children}
        </svg>
    )
}