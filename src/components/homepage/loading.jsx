import React from 'react';
import { PulseLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex justify-center items-center my-50'>
            <PulseLoader color="#244D3F" />
        </div>
    );
};

export default loading;