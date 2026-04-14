'use client'
import TimelineProvider from '@/context/timeline.context';
import React from 'react';

const Providers = ({children}) => {
    return (
        <TimelineProvider>
            {children}
        </TimelineProvider>
    );
};

export default Providers;