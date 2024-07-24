'use client'
import * as React from 'react';
import SearchSection from '@/app/components/master/material.search.section';

import { LayoutContext } from '@/app/context/LayoutContext';

export default function Material() {


    const { setTitle } = React.useContext(LayoutContext);

    React.useEffect(() => {
        console.log("setTitle")
        setTitle('Welcome to My Website');
    }, [setTitle]);

    return (
        <>
            <SearchSection />
        </>
    );
}