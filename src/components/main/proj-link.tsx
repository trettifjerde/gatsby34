import * as React from 'react';
import Leaf from '../ui/leaf';

export default function ProjLink({ text, href }: { text: string, href: string }) {
    return <a href={href} target='_blank'>
        <Leaf hoverable>
            <h3>{text}</h3>
        </Leaf>
    </a>
}