import * as React from 'react';

export default function SEO({title, children}: {title: string, children?: React.ReactNode}) {
    return <>
        <title>{title} | 34 projects</title>
        {children && children}
    </>
}