"use client"
import React, { useContext, ReactNode } from 'react';
import { LayoutContext } from './context/LayoutContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { title } = useContext(LayoutContext);
  console.log("title ===>", title)

  return (
    <html>
      <body>
        <header>{title}</header>
        <main>{children}</main>
      </body>
    </html>


  );
};

export default Layout;
