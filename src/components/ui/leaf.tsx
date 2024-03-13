import * as React from 'react';
import { leaf, hover, shade } from './leaf.module.css';
import { STAGGER_PROPERTY_NAME } from '../../config';

type Props = { 
    shadow?: boolean,
    className?: string, 
    style?: React.CSSProperties & {[STAGGER_PROPERTY_NAME]: number},
    children: React.ReactNode, 
    hoverable?: boolean, 
    onClick?: () => void 
};

export default function Leaf({ shadow, className, style, children, hoverable, onClick }: Props) {
    return <div className={`${leaf} ${hoverable ? hover : ''} ${shadow ? shade : ''} ${className ? className : ''}`} style={style} onClick={onClick}>
        {children}
    </div>
}