"use client"
import React from 'react';
import { PulseLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (    
        <div className='flex justify-center items-center my-50'>
            <PulseLoader color="#244D3F" />
        </div>
    );
};

export default LoadingSpinner;