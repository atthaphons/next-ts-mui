"use client"
import React, { createContext, useState, ReactNode, FC, useEffect } from 'react';

interface LayoutContextProps {
    title: string;
    setTitle: (title: string) => void;
}

export const LayoutContext = createContext<LayoutContextProps>({
    title: 'Default Title',
    setTitle: () => { },
});

interface LayoutProviderProps {
    children: ReactNode;
}

export const LayoutProvider: FC<LayoutProviderProps> = ({ children }) => {
    const [title, setTitle] = useState('Default Title');



    return (
        <LayoutContext.Provider value={{ title, setTitle }}>

            {children}
        </LayoutContext.Provider>
    );
};
