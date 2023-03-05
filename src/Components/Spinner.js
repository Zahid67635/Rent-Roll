import React from 'react';

const Spinner = () => {
    return (
        <div className="flex items-center justify-center space-x-2">
            <div className='text-3xl font-bold pb-3'>Loading</div>
            <div className="w-5 h-5 rounded-full animate-pulse bg-lime-500"></div>
            <div className="w-5 h-5 rounded-full animate-pulse bg-lime-500"></div>
            <div className="w-5 h-5 rounded-full animate-pulse bg-lime-500"></div>
        </div>
    );
};

export default Spinner;