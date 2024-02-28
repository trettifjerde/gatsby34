import * as React from 'react';
import { leaf, innerleaf, hover, glow } from './leaf.module.css';

type Props = { 
    className?: string, 
    children: React.ReactNode, 
    hoverable?: boolean, 
    glowing?: boolean, 
    onClick?: () => void 
};

export default function Leaf({ className, children, glowing, hoverable, onClick }: Props) {
    return <div className={`${leaf} ${hoverable ? hover : ''} ${glowing ? glow : ''} ${className ? className : ''}`} onClick={onClick}>
        <div className={innerleaf}>{children}</div>
    </div>
}