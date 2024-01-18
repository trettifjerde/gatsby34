import * as React from 'react';

export default function Layout({title, children}: {title: string, children: React.ReactNode}) {
    return <div className='body'>
        <main>
            {children}
        </main>

        <nav>
            <ul>
                <li>meow</li>
                <li className='active'>meow</li>
                <li>meow</li>
                <li>meow</li>
                <li>meow</li>
                <li>meow</li>
                <li>meow</li>
                <li>meow</li>
                <li>meow</li>
                <li>meow</li>
                <li>meow</li>
                <li>meow</li>
                <li>meow</li>
                <li>meow</li>
                <li>meow</li>
                <li>meow</li>
                <li>meow</li>
                <li>meow</li>
            </ul>
        </nav>
    </div>
}