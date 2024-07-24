import React, { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
    children: ReactNode;
    title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
    return (
        <div>
            <header>
                <h1>{title}</h1>
                <nav>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
