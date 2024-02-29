import * as React from 'react';
import { leaf, innerleaf, hover } from './leaf.module.css';

type Props = { 
    className?: string, 
    children: React.ReactNode, 
    hoverable?: boolean, 
    onClick?: () => void 
};

export default function Leaf({ className, children, hoverable, onClick }: Props) {
    return <div className={`${leaf} ${hoverable ? hover : ''} ${className ? className : ''}`} onClick={onClick}>
        <div className={innerleaf}>{children}</div>
    </div>
}