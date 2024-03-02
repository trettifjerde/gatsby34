import * as React from 'react';
import { leaf, innerleaf, hover } from './leaf.module.css';
import { STAGGER_PROPERTY_NAME } from '../../config';

type Props = { 
    className?: string, 
    style?: React.CSSProperties & {[STAGGER_PROPERTY_NAME]: number},
    children: React.ReactNode, 
    hoverable?: boolean, 
    onClick?: () => void 
};

export default function Leaf({ className, style, children, hoverable, onClick }: Props) {
    return <div className={`${leaf} ${hoverable ? hover : ''} ${className ? className : ''}`} style={style} onClick={onClick}>
        <div className={innerleaf}>{children}</div>
    </div>
}